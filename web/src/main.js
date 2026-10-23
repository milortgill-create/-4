import * as THREE from 'three';
import * as CANNON from 'cannon-es';

const $ = (id) => document.getElementById(id);
const canvas = $('game');
const mobile = matchMedia('(pointer: coarse)').matches;

let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
} catch (error) {
  document.body.innerHTML = '<div style="padding:24px;color:#e4eee9;font:16px Arial">Для запуска полигона необходим аппаратный WebGL. Перезапустите приложение и проверьте, что WebView использует аппаратное ускорение.</div>';
  throw error;
}

renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile ? 1.35 : 1.7));
renderer.setSize(window.innerWidth, window.innerHeight, false);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.16;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x10181b);
scene.fog = new THREE.FogExp2(0x10181b, 0.018);
const camera = new THREE.PerspectiveCamera(74, window.innerWidth / window.innerHeight, 0.06, 70);
camera.rotation.order = 'YXZ';
scene.add(camera);

const world = new CANNON.World({ gravity: new CANNON.Vec3(0, -9.82, 0), allowSleep: true });
world.broadphase = new CANNON.SAPBroadphase(world);
world.solver = new CANNON.GSSolver();
world.solver.iterations = 12;
world.solver.tolerance = 0.001;
world.defaultContactMaterial.friction = 0.62;
world.defaultContactMaterial.restitution = 0.08;
world.defaultContactMaterial.contactEquationStiffness = 1e7;
world.defaultContactMaterial.contactEquationRelaxation = 3;

const floorPhysicsMaterial = new CANNON.Material('concrete');
const objectPhysicsMaterial = new CANNON.Material('test-props');
const playerPhysicsMaterial = new CANNON.Material('operator');
const dummyPhysicsMaterial = new CANNON.Material('mannequin');
world.addContactMaterial(new CANNON.ContactMaterial(floorPhysicsMaterial, objectPhysicsMaterial, { friction: 0.75, restitution: 0.06, contactEquationStiffness: 1e7, contactEquationRelaxation: 3 }));
world.addContactMaterial(new CANNON.ContactMaterial(objectPhysicsMaterial, objectPhysicsMaterial, { friction: 0.55, restitution: 0.09 }));
world.addContactMaterial(new CANNON.ContactMaterial(playerPhysicsMaterial, floorPhysicsMaterial, { friction: 0.0, restitution: 0.0 }));
world.addContactMaterial(new CANNON.ContactMaterial(playerPhysicsMaterial, objectPhysicsMaterial, { friction: 0.18, restitution: 0.0 }));
world.addContactMaterial(new CANNON.ContactMaterial(playerPhysicsMaterial, dummyPhysicsMaterial, { friction: 0.35, restitution: 0.02 }));

const physicsRecords = [];
const raycastTargets = [];
const mannequins = [];
const color = (hex) => new THREE.Color(hex);

function seededRandom(seed) {
  let value = seed >>> 0;
  return () => {
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 4294967296;
  };
}

function makeConcreteTexture(base, seed, repeatX, repeatY) {
  const size = 256;
  const ctxCanvas = document.createElement('canvas');
  ctxCanvas.width = size;
  ctxCanvas.height = size;
  const ctx = ctxCanvas.getContext('2d', { willReadFrequently: true });
  const rgb = [parseInt(base.slice(1, 3), 16), parseInt(base.slice(3, 5), 16), parseInt(base.slice(5, 7), 16)];
  const random = seededRandom(seed);
  const image = ctx.createImageData(size, size);
  for (let i = 0; i < image.data.length; i += 4) {
    const n = (random() - 0.5) * 24;
    image.data[i] = Math.max(0, Math.min(255, rgb[0] + n));
    image.data[i + 1] = Math.max(0, Math.min(255, rgb[1] + n));
    image.data[i + 2] = Math.max(0, Math.min(255, rgb[2] + n));
    image.data[i + 3] = 255;
  }
  ctx.putImageData(image, 0, 0);
  for (let i = 0; i < 64; i++) {
    const shade = random() > 0.5 ? 'rgba(8,14,15,.12)' : 'rgba(235,241,231,.10)';
    ctx.strokeStyle = shade;
    ctx.lineWidth = random() * 1.6 + 0.25;
    const x = random() * size, y = random() * size;
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + (random() - 0.5) * 42, y + random() * 18); ctx.stroke();
  }
  const texture = new THREE.CanvasTexture(ctxCanvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(repeatX, repeatY);
  texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 4);
  return texture;
}

function makeCanvasLabel(topLine, bottomLine, accent = '#9bdac1') {
  const labelCanvas = document.createElement('canvas');
  labelCanvas.width = 512;
  labelCanvas.height = 192;
  const ctx = labelCanvas.getContext('2d');
  ctx.fillStyle = '#182427'; ctx.fillRect(0, 0, 512, 192);
  ctx.fillStyle = '#26393b'; ctx.fillRect(10, 10, 492, 172);
  ctx.strokeStyle = accent; ctx.lineWidth = 3; ctx.strokeRect(12, 12, 488, 168);
  ctx.fillStyle = accent; ctx.fillRect(28, 28, 6, 136);
  ctx.fillStyle = '#e3eee5'; ctx.font = '700 35px Arial'; ctx.fillText(topLine, 55, 83);
  ctx.fillStyle = '#8ba49c'; ctx.font = '20px Arial'; ctx.fillText(bottomLine, 57, 128);
  ctx.fillStyle = accent; ctx.fillRect(440, 40, 38, 38); ctx.fillStyle = '#13201e'; ctx.font = '700 20px Arial'; ctx.fillText('01', 448, 66);
  const texture = new THREE.CanvasTexture(labelCanvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

const wallTexture = makeConcreteTexture('#50595a', 19, 2, 1.6);
const floorTexture = makeConcreteTexture('#434b4b', 81, 3.2, 2.5);
const ceilingTexture = makeConcreteTexture('#30393b', 41, 2.5, 2.2);
const concreteWall = new THREE.MeshStandardMaterial({ map: wallTexture, color: 0xc8ceca, roughness: 0.96, metalness: 0.02 });
const concreteFloor = new THREE.MeshStandardMaterial({ map: floorTexture, color: 0xc4ccca, roughness: 0.98, metalness: 0.02 });
const concreteCeiling = new THREE.MeshStandardMaterial({ map: ceilingTexture, color: 0xaab3b1, roughness: 0.96 });
const darkConcrete = new THREE.MeshStandardMaterial({ color: 0x303a3c, roughness: 0.9 });
const trimMaterial = new THREE.MeshStandardMaterial({ color: 0x1b2528, roughness: 0.72, metalness: 0.28 });
const warningMaterial = new THREE.MeshStandardMaterial({ color: 0xd5aa55, roughness: 0.8, metalness: 0.06 });
const whiteMarkMaterial = new THREE.MeshStandardMaterial({ color: 0xc1ccc5, roughness: 0.9, emissive: 0x18201c, emissiveIntensity: 0.15 });

scene.add(new THREE.HemisphereLight(0xbdd1d0, 0x282523, 1.1));
scene.add(new THREE.AmbientLight(0x7d9291, 0.48));
const keyLight = new THREE.DirectionalLight(0xffe7c7, 2.15);
keyLight.position.set(-3.8, 8.5, 4.5);
keyLight.castShadow = true;
keyLight.shadow.mapSize.set(1024, 1024);
keyLight.shadow.camera.left = -11; keyLight.shadow.camera.right = 11;
keyLight.shadow.camera.top = 9; keyLight.shadow.camera.bottom = -9;
keyLight.shadow.camera.near = 0.5; keyLight.shadow.camera.far = 25;
keyLight.shadow.bias = -0.00018;
keyLight.shadow.normalBias = 0.025;
scene.add(keyLight);

function addPointLamp(x, z, tint = 0xc2ebe0) {
  const casing = new THREE.Mesh(new THREE.BoxGeometry(1.05, 0.1, 0.25), trimMaterial);
  casing.position.set(x, 5.66, z);
  casing.castShadow = false; casing.receiveShadow = true; scene.add(casing);
  const lens = new THREE.Mesh(new THREE.BoxGeometry(0.78, 0.035, 0.13), new THREE.MeshStandardMaterial({ color: tint, emissive: tint, emissiveIntensity: 1.65, roughness: 0.3 }));
  lens.position.set(x, 5.585, z); scene.add(lens);
  const lamp = new THREE.PointLight(tint, 17, 8.4, 2);
  lamp.position.set(x, 5.35, z);
  scene.add(lamp);
}
addPointLamp(-4.3, -2.8, 0xb3dcd6);
addPointLamp(0.4, -2.7, 0xd3e2cf);
addPointLamp(4.4, -2.5, 0xa8d0d5);
addPointLamp(0.0, 4.25, 0x9abdc0);

function addStaticBoxMesh(geometry, material, position, options = {}) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(position[0], position[1], position[2]);
  mesh.castShadow = options.castShadow ?? true;
  mesh.receiveShadow = options.receiveShadow ?? true;
  if (options.rotation) mesh.rotation.set(options.rotation[0], options.rotation[1], options.rotation[2]);
  scene.add(mesh);
  return mesh;
}

function addStaticCollider(position, halfExtents, material = floorPhysicsMaterial) {
  const body = new CANNON.Body({ mass: 0, material });
  body.addShape(new CANNON.Box(new CANNON.Vec3(halfExtents[0], halfExtents[1], halfExtents[2])));
  body.position.set(position[0], position[1], position[2]);
  world.addBody(body);
  return body;
}

function addRoom() {
  const floor = addStaticBoxMesh(new THREE.BoxGeometry(18, 0.5, 14), concreteFloor, [0, -0.25, 0]);
  floor.receiveShadow = true;
  addStaticCollider([0, -0.25, 0], [9, 0.25, 7]);

  addStaticBoxMesh(new THREE.BoxGeometry(18.4, 0.42, 14.4), concreteCeiling, [0, 6.08, 0]);
  addStaticCollider([0, 6.08, 0], [9.2, 0.21, 7.2]);
  for (const side of [-1, 1]) {
    addStaticBoxMesh(new THREE.BoxGeometry(0.4, 6, 14), concreteWall, [side * 9, 3, 0]);
    addStaticCollider([side * 9, 3, 0], [0.2, 3, 7]);
    addStaticBoxMesh(new THREE.BoxGeometry(18, 6, 0.4), concreteWall, [0, 3, side * 7], { castShadow: false });
    addStaticCollider([0, 3, side * 7], [9, 3, 0.2]);
  }

  // Wall pilasters, service trunks and lower impact guards add scale to the empty concrete chamber.
  for (const x of [-8.25, 8.25]) {
    for (const z of [-5.85, 0, 5.85]) {
      addStaticBoxMesh(new THREE.BoxGeometry(0.42, 5.8, 0.42), darkConcrete, [x, 2.9, z]);
      addStaticBoxMesh(new THREE.BoxGeometry(0.5, 0.11, 0.5), trimMaterial, [x, 0.12, z]);
    }
  }
  for (const z of [-6.72, 6.72]) addStaticBoxMesh(new THREE.BoxGeometry(17.6, 0.2, 0.12), warningMaterial, [0, 0.13, z], { castShadow: false });
  for (const x of [-8.72, 8.72]) addStaticBoxMesh(new THREE.BoxGeometry(0.12, 0.2, 13.7), warningMaterial, [x, 0.13, 0], { castShadow: false });

  // Floor test lanes and serial markings.
  for (const x of [-5.6, -2.8, 0, 2.8, 5.6]) {
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.022, 0.012, 10.8), whiteMarkMaterial);
    stripe.position.set(x, 0.008, -0.1); scene.add(stripe);
  }
  for (const z of [-5.3, -2.65, 0, 2.65, 5.3]) {
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(16.8, 0.012, 0.022), whiteMarkMaterial);
    stripe.position.set(0, 0.009, z); scene.add(stripe);
  }
  const bayLabel = new THREE.Mesh(new THREE.PlaneGeometry(2.8, 0.75), new THREE.MeshBasicMaterial({ map: makeCanvasLabel('TEST BAY 01', 'IMPACT / MASS / JOINTS'), transparent: false, toneMapped: false }));
  bayLabel.rotation.x = -Math.PI / 2;
  bayLabel.position.set(0, 0.012, -6.15);
  bayLabel.receiveShadow = false;
  scene.add(bayLabel);

  const wallSign = new THREE.Mesh(new THREE.PlaneGeometry(3.1, 1.16), new THREE.MeshStandardMaterial({ map: makeCanvasLabel('PHYSICS LAB', 'CONCRETE TEST CHAMBER'), roughness: 0.8, metalness: 0.1, emissive: 0x12201d, emissiveIntensity: 0.3 }));
  wallSign.position.set(0, 4.4, -6.785);
  scene.add(wallSign);
  const dataPlate = new THREE.Mesh(new THREE.PlaneGeometry(1.35, 0.48), new THREE.MeshStandardMaterial({ map: makeCanvasLabel('SECTOR 01', 'OFFLINE SIMULATION', '#d9b46d'), roughness: 0.8, emissive: 0x17140e, emissiveIntensity: 0.25 }));
  dataPlate.position.set(8.785, 3.9, -1.4);
  dataPlate.rotation.y = -Math.PI / 2;
  scene.add(dataPlate);
}
addRoom();

const woodMaterials = [
  new THREE.MeshStandardMaterial({ color: 0x866746, roughness: 0.88 }),
  new THREE.MeshStandardMaterial({ color: 0x6f573d, roughness: 0.91 }),
  new THREE.MeshStandardMaterial({ color: 0x9a784f, roughness: 0.83 })
];
const crateTrim = new THREE.MeshStandardMaterial({ color: 0x302b24, roughness: 0.75, metalness: 0.15 });
const bottleMaterials = [
  new THREE.MeshStandardMaterial({ color: 0x70aaa1, roughness: 0.23, metalness: 0.05 }),
  new THREE.MeshStandardMaterial({ color: 0x97ae62, roughness: 0.27, metalness: 0.04 }),
  new THREE.MeshStandardMaterial({ color: 0x8896b0, roughness: 0.25, metalness: 0.08 })
];
const barrelMaterials = [
  new THREE.MeshStandardMaterial({ color: 0x455d5c, roughness: 0.65, metalness: 0.38 }),
  new THREE.MeshStandardMaterial({ color: 0x6f5541, roughness: 0.7, metalness: 0.35 })
];
const metalHoop = new THREE.MeshStandardMaterial({ color: 0xa2a9a0, roughness: 0.44, metalness: 0.64 });
const plankMaterial = new THREE.MeshStandardMaterial({ color: 0x8b7456, roughness: 0.91 });

function tagVisual(root, meta) {
  root.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      child.userData.gameMeta = meta;
    }
  });
  raycastTargets.push(root);
}

function addPhysicsProp(meta, shape, mass, position, visual, yaw = 0, extra = {}) {
  const body = new CANNON.Body({
    mass,
    material: objectPhysicsMaterial,
    position: new CANNON.Vec3(position[0], position[1], position[2]),
    linearDamping: extra.linearDamping ?? 0.08,
    angularDamping: extra.angularDamping ?? 0.18,
    allowSleep: true,
    sleepSpeedLimit: 0.07,
    sleepTimeLimit: 0.55
  });
  if (Array.isArray(shape)) {
    for (const item of shape) body.addShape(item.shape, item.offset || new CANNON.Vec3());
  } else {
    body.addShape(shape);
  }
  body.quaternion.setFromEuler(0, yaw, 0, 'YZX');
  body.gameMeta = { ...meta, body, initialMass: mass, isHeld: false, lastVelocity: { x: 0, y: 0, z: 0 } };
  world.addBody(body);
  visual.position.copy(body.position);
  visual.quaternion.copy(body.quaternion);
  visual.userData.gameMeta = body.gameMeta;
  scene.add(visual);
  tagVisual(visual, body.gameMeta);
  physicsRecords.push({ body, visual });
  return body;
}

function createCrateVisual(w, h, d, baseColor, label) {
  const group = new THREE.Group();
  const bodyMaterial = new THREE.MeshStandardMaterial({ color: baseColor, roughness: 0.9, metalness: 0.03 });
  const main = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), bodyMaterial);
  group.add(main);
  const beamW = Math.max(0.045, w * 0.075);
  const beamH = Math.max(0.045, h * 0.075);
  // Reinforced dark corner straps and timber battens.
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const corner = new THREE.Mesh(new THREE.BoxGeometry(beamW, h + 0.015, beamW), crateTrim);
    corner.position.set(sx * (w / 2 - beamW / 2), 0, sz * (d / 2 - beamW / 2));
    group.add(corner);
  }
  for (const sy of [-1, 1]) {
    const rail = new THREE.Mesh(new THREE.BoxGeometry(w * 0.88, beamH, d + 0.012), woodMaterials[2]);
    rail.position.y = sy * (h / 2 - beamH / 2);
    group.add(rail);
  }
  const plate = new THREE.Mesh(new THREE.PlaneGeometry(w * 0.42, h * 0.22), new THREE.MeshStandardMaterial({ map: makeCanvasLabel(label, 'LOAD TEST / SEALED'), roughness: 0.76, metalness: 0.1 }));
  plate.position.set(0, 0, d / 2 + 0.008);
  group.add(plate);
  return group;
}

function createBarrelVisual(radius, height, materialIndex, label) {
  const group = new THREE.Group();
  const shell = new THREE.Mesh(new THREE.CylinderGeometry(radius * 0.9, radius, height, 20, 1), barrelMaterials[materialIndex]);
  group.add(shell);
  const rimTop = new THREE.Mesh(new THREE.TorusGeometry(radius * 0.92, 0.025, 6, 24), metalHoop);
  rimTop.rotation.x = Math.PI / 2; rimTop.position.y = height * 0.31; group.add(rimTop);
  const rimBottom = rimTop.clone(); rimBottom.position.y = -height * 0.31; group.add(rimBottom);
  const midHoop = new THREE.Mesh(new THREE.TorusGeometry(radius * 0.96, 0.018, 5, 24), metalHoop);
  midHoop.rotation.x = Math.PI / 2; midHoop.position.y = -height * 0.09; group.add(midHoop);
  const top = new THREE.Mesh(new THREE.CylinderGeometry(radius * 0.85, radius * 0.85, 0.035, 20), trimMaterial);
  top.position.y = height / 2 - 0.015; group.add(top);
  const labelPlate = new THREE.Mesh(new THREE.PlaneGeometry(radius * 1.15, height * 0.23), new THREE.MeshStandardMaterial({ map: makeCanvasLabel(label, 'TARE / STEEL DRUM'), roughness: 0.78 }));
  labelPlate.position.set(0, 0.04, radius * 0.89 + 0.008); group.add(labelPlate);
  return group;
}

function createBottleVisual(materialIndex, label) {
  const group = new THREE.Group();
  const pts = [
    new THREE.Vector2(0, -0.22), new THREE.Vector2(0.073, -0.22), new THREE.Vector2(0.103, -0.19),
    new THREE.Vector2(0.108, -0.12), new THREE.Vector2(0.103, -0.015), new THREE.Vector2(0.096, 0.055),
    new THREE.Vector2(0.071, 0.105), new THREE.Vector2(0.048, 0.125), new THREE.Vector2(0.041, 0.15),
    new THREE.Vector2(0.041, 0.218), new THREE.Vector2(0.05, 0.228), new THREE.Vector2(0.05, 0.246),
    new THREE.Vector2(0, 0.246)
  ];
  const bottle = new THREE.Mesh(new THREE.LatheGeometry(pts, 16), bottleMaterials[materialIndex]);
  group.add(bottle);
  const neckRing = new THREE.Mesh(new THREE.CylinderGeometry(0.049, 0.047, 0.027, 16), metalHoop);
  neckRing.position.y = 0.215; group.add(neckRing);
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.044, 0.044, 0.038, 12), new THREE.MeshStandardMaterial({ color: 0x263634, roughness: 0.45 }));
  cap.position.y = 0.257; group.add(cap);
  const band = new THREE.Mesh(new THREE.CylinderGeometry(0.105, 0.105, 0.055, 16), new THREE.MeshStandardMaterial({ color: 0xd7d7bc, roughness: 0.6 }));
  band.position.y = -0.045; group.add(band);
  const labelMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.12, 0.038), new THREE.MeshBasicMaterial({ map: makeCanvasLabel(label, 'LAB SAMPLE'), toneMapped: false }));
  labelMesh.position.set(0, -0.045, 0.104); group.add(labelMesh);
  return group;
}

function createPlankVisual(length, width, thickness, variant) {
  const group = new THREE.Group();
  const plank = new THREE.Mesh(new THREE.BoxGeometry(length, thickness, width), plankMaterial);
  group.add(plank);
  const lineMat = new THREE.MeshStandardMaterial({ color: variant ? 0x564b39 : 0x514735, roughness: 0.9 });
  for (const z of [-width * 0.28, width * 0.28]) {
    const grain = new THREE.Mesh(new THREE.BoxGeometry(length * 0.84, 0.003, 0.009), lineMat);
    grain.position.set(0, thickness / 2 + 0.002, z); group.add(grain);
  }
  for (const x of [-length * 0.39, length * 0.39]) {
    for (const z of [-width * 0.29, width * 0.29]) {
      const nail = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.006, 8), metalHoop);
      nail.rotation.x = Math.PI / 2;
      nail.position.set(x, 0, z); group.add(nail);
    }
  }
  return group;
}

function addCrate(name, position, size, mass, hue, yaw = 0) {
  const [w, h, d] = size;
  const visual = createCrateVisual(w, h, d, hue, name);
  const body = addPhysicsProp({ kind: 'prop', type: 'ЯЩИК', name, mass, detail: `${mass.toFixed(1)} КГ · ДЕРЕВО`, range: 4.5 }, new CANNON.Box(new CANNON.Vec3(w / 2, h / 2, d / 2)), mass, position, visual, yaw);
  return body;
}
function addBarrel(name, position, radius, height, mass, matIndex, yaw = 0) {
  const visual = createBarrelVisual(radius, height, matIndex, name);
  const shape = new CANNON.Cylinder(radius * 0.9, radius, height, 12);
  return addPhysicsProp({ kind: 'prop', type: 'БОЧКА', name, mass, detail: `${mass.toFixed(0)} КГ · ТЯЖЁЛАЯ СТАЛЬ`, range: 4.4 }, shape, mass, position, visual, yaw, { angularDamping: 0.23 });
}
function addBottle(name, position, matIndex, yaw = 0) {
  const visual = createBottleVisual(matIndex, name);
  const shape = [
    { shape: new CANNON.Cylinder(0.103, 0.103, 0.33, 10), offset: new CANNON.Vec3(0, -0.055, 0) },
    { shape: new CANNON.Cylinder(0.043, 0.043, 0.19, 9), offset: new CANNON.Vec3(0, 0.165, 0) }
  ];
  return addPhysicsProp({ kind: 'prop', type: 'БУТЫЛКА', name, mass: 0.38, detail: '0.38 КГ · ЛЁГКОЕ СТЕКЛО', range: 3.8 }, shape, 0.38, position, visual, yaw, { linearDamping: 0.035, angularDamping: 0.12 });
}
function addPlank(name, position, length, width, thickness, mass, yaw = 0) {
  const visual = createPlankVisual(length, width, thickness, (Math.abs(yaw) > 0.1) ? 1 : 0);
  return addPhysicsProp({ kind: 'prop', type: 'ДОСКА', name, mass, detail: `${mass.toFixed(1)} КГ · СОСНА`, range: 4.3 }, new CANNON.Box(new CANNON.Vec3(length / 2, thickness / 2, width / 2)), mass, position, visual, yaw, { angularDamping: 0.21 });
}

// Fixed masses, starting positions and footprints keep every prop clear of the floor and one another.
addCrate('ЯЩИК A-01', [-3.55, 0.42, -1.0], [0.86, 0.84, 0.78], 7.5, 0x756044, -0.08);
addCrate('ЯЩИК A-02', [-2.73, 0.38, -1.27], [0.72, 0.76, 0.68], 5.2, 0x8b6d48, 0.14);
addCrate('ЯЩИК A-03', [-3.1, 1.23, -1.12], [0.68, 0.76, 0.64], 5.8, 0x69563f, 0.06);
addCrate('ЯЩИК B-01', [4.95, 0.48, 0.1], [0.95, 0.96, 0.86], 11.0, 0x715a41, 0.24);
addCrate('ЯЩИК B-02', [5.8, 0.38, -0.25], [0.72, 0.76, 0.72], 5.4, 0x8b6d48, -0.17);
addBarrel('БОЧКА M-01', [2.75, 0.54, -1.9], 0.38, 1.08, 18, 0);
addBarrel('БОЧКА M-02', [3.75, 0.5, -2.75], 0.35, 1.0, 15, 1, 0.18);
addBarrel('БОЧКА M-03', [1.93, 0.47, -3.25], 0.33, 0.94, 14, 0, -0.12);
addBottle('ФЛАКОН G-01', [-0.62, 0.22, -2.35], 0);
addBottle('ФЛАКОН G-02', [0.05, 0.22, -2.55], 1, 0.5);
addBottle('ФЛАКОН G-03', [0.62, 0.22, -2.38], 2, -0.3);
addBottle('ФЛАКОН G-04', [-4.72, 0.22, 1.0], 1, 0.4);
addBottle('ФЛАКОН G-05', [4.2, 0.22, 1.6], 0, -0.6);
addPlank('ДОСКА P-01', [-1.45, 0.085, -4.1], 2.35, 0.36, 0.15, 3.4, 0.06);
addPlank('ДОСКА P-02', [-0.2, 0.09, -4.35], 2.0, 0.32, 0.16, 3.1, -0.33);
addPlank('ДОСКА P-03', [0.85, 0.075, 1.05], 2.7, 0.4, 0.13, 4.2, 0.52);
addPlank('ДОСКА P-04', [6.15, 0.08, 2.2], 2.15, 0.3, 0.14, 3.0, -0.13);

const dummySkinMaterials = [
  new THREE.MeshStandardMaterial({ color: 0xa6b8b6, roughness: 0.73, metalness: 0.14 }),
  new THREE.MeshStandardMaterial({ color: 0xc29a68, roughness: 0.76, metalness: 0.1 })
];
const dummyJointMaterial = new THREE.MeshStandardMaterial({ color: 0x526567, roughness: 0.63, metalness: 0.22 });
const dummyAccentMaterials = [
  new THREE.MeshStandardMaterial({ color: 0x78cabc, roughness: 0.45, metalness: 0.12, emissive: 0x123a35, emissiveIntensity: 0.25 }),
  new THREE.MeshStandardMaterial({ color: 0xe58e51, roughness: 0.5, metalness: 0.12, emissive: 0x392013, emissiveIntensity: 0.2 })
];

function makePartGeometry(partName, size) {
  if (partName === 'head') return new THREE.SphereGeometry(size[0] / 2, 14, 10);
  if (partName.includes('hand')) return new THREE.BoxGeometry(size[0], size[1], size[2]);
  if (partName.includes('foot')) return new THREE.BoxGeometry(size[0], size[1], size[2]);
  if (partName === 'torso') return new THREE.BoxGeometry(size[0], size[1], size[2]);
  if (partName === 'pelvis') return new THREE.BoxGeometry(size[0], size[1], size[2]);
  const r = Math.min(size[0], size[2]) * 0.48;
  const height = Math.max(0.03, size[1] - 2 * r);
  return new THREE.CapsuleGeometry(r, height, 3, 9);
}

function addRagdollPart(human, key, size, mass, position, material = human.skin, geometry = null) {
  const body = new CANNON.Body({
    mass,
    type: CANNON.Body.KINEMATIC,
    material: dummyPhysicsMaterial,
    position: new CANNON.Vec3(position[0], position[1], position[2]),
    angularDamping: 0.2,
    linearDamping: 0.08,
    allowSleep: true,
    sleepSpeedLimit: 0.08,
    sleepTimeLimit: 0.65
  });
  body.addShape(new CANNON.Box(new CANNON.Vec3(size[0] / 2, size[1] / 2, size[2] / 2)));
  body.gameMeta = { kind: 'mannequin', human, key, body };
  world.addBody(body);

  const group = new THREE.Group();
  const mesh = new THREE.Mesh(geometry || makePartGeometry(key, size), material);
  group.add(mesh);
  if (key === 'torso') {
    const chest = new THREE.Mesh(new THREE.BoxGeometry(size[0] * 0.42, size[1] * 0.24, 0.018), dummyAccentMaterials[human.colorIndex]);
    chest.position.set(0, 0.04, size[2] / 2 + 0.009);
    group.add(chest);
    const bar = new THREE.Mesh(new THREE.BoxGeometry(size[0] * 0.26, 0.022, 0.02), dummyJointMaterial);
    bar.position.set(0, -0.06, size[2] / 2 + 0.012);
    group.add(bar);
  }
  if (key === 'head') {
    const facePlate = new THREE.Mesh(new THREE.BoxGeometry(size[0] * 0.44, 0.026, 0.012), dummyJointMaterial);
    facePlate.position.set(0, 0.005, size[2] / 2 - 0.008);
    group.add(facePlate);
  }
  if (key.startsWith('hand')) {
    const thumb = new THREE.Mesh(new THREE.BoxGeometry(0.038, 0.09, 0.045), material);
    thumb.position.set(key.endsWith('L') ? 0.062 : -0.062, 0.003, 0.002);
    group.add(thumb);
  }
  if (key.startsWith('foot')) {
    const toe = new THREE.Mesh(new THREE.BoxGeometry(size[0] * 0.78, size[1] * 0.45, 0.022), dummyJointMaterial);
    toe.position.set(0, -0.01, size[2] / 2 - 0.012);
    group.add(toe);
  }
  group.position.copy(body.position);
  group.quaternion.copy(body.quaternion);
  scene.add(group);
  tagVisual(group, body.gameMeta);
  const part = { key, body, visual: group, mass, size };
  human.parts.push(part);
  human.partMap[key] = part;
  physicsRecords.push({ body, visual: group });
  return part;
}

function addLimitedJoint(human, aName, bName, pivotA, pivotB, angle, twist = 0.35, axis = [0, 1, 0]) {
  const a = human.partMap[aName].body;
  const b = human.partMap[bName].body;
  const constraint = new CANNON.ConeTwistConstraint(a, b, {
    pivotA: new CANNON.Vec3(...pivotA),
    pivotB: new CANNON.Vec3(...pivotB),
    axisA: new CANNON.Vec3(...axis),
    axisB: new CANNON.Vec3(...axis),
    angle,
    twistAngle: twist,
    maxForce: 2e5,
    collideConnected: false
  });
  world.addConstraint(constraint);
  human.constraints.push(constraint);
  return constraint;
}

function buildMannequin(id, origin, colorIndex) {
  const human = { id, origin, colorIndex, skin: dummySkinMaterials[colorIndex], parts: [], partMap: {}, constraints: [], active: false, hitFlash: 0 };
  const ox = origin[0], oz = origin[2];
  const position = (x, y, z) => [ox + x, y, oz + z];
  addRagdollPart(human, 'pelvis', [0.39, 0.28, 0.25], 5.2, position(0, 0.97, 0), dummyJointMaterial);
  addRagdollPart(human, 'torso', [0.44, 0.58, 0.28], 9.4, position(0, 1.39, 0));
  addRagdollPart(human, 'head', [0.32, 0.32, 0.32], 3.1, position(0, 1.84, 0));
  for (const side of [-1, 1]) {
    const suffix = side < 0 ? 'L' : 'R';
    addRagdollPart(human, `upperArm${suffix}`, [0.16, 0.39, 0.16], 2.15, position(side * 0.32, 1.365, 0), human.skin);
    addRagdollPart(human, `lowerArm${suffix}`, [0.135, 0.34, 0.135], 1.45, position(side * 0.35, 1.0, 0.015), human.skin);
    addRagdollPart(human, `hand${suffix}`, [0.135, 0.13, 0.095], 0.55, position(side * 0.36, 0.765, 0.025), human.skin);
    addRagdollPart(human, `thigh${suffix}`, [0.21, 0.45, 0.21], 4.15, position(side * 0.125, 0.735, 0));
    addRagdollPart(human, `shin${suffix}`, [0.16, 0.41, 0.17], 2.55, position(side * 0.13, 0.305, 0.005));
    addRagdollPart(human, `foot${suffix}`, [0.17, 0.12, 0.31], 0.9, position(side * 0.13, 0.06, 0.075));
  }
  // Spine and neck. Cone/twist angles approximate human limits rather than locking the rig rigid.
  addLimitedJoint(human, 'pelvis', 'torso', [0, 0.14, 0], [0, -0.29, 0], 0.34, 0.28);
  addLimitedJoint(human, 'torso', 'head', [0, 0.285, 0], [0, -0.15, 0], 0.5, 0.38);
  for (const side of [-1, 1]) {
    const suffix = side < 0 ? 'L' : 'R';
    // Shoulder: broad swing; elbow: flexion plane constrained with a narrow twist range.
    addLimitedJoint(human, 'torso', `upperArm${suffix}`, [side * 0.215, 0.17, 0], [-side * 0.105, 0.19, 0], 1.36, 0.88, [1, 0, 0]);
    addLimitedJoint(human, `upperArm${suffix}`, `lowerArm${suffix}`, [side * 0.015, -0.195, 0], [-side * 0.015, 0.17, -0.015], 2.17, 0.22, [0, 0, 1]);
    addLimitedJoint(human, `lowerArm${suffix}`, `hand${suffix}`, [side * 0.005, -0.17, 0], [-side * 0.005, 0.06, -0.01], 0.62, 0.38, [0, 0, 1]);
    addLimitedJoint(human, 'pelvis', `thigh${suffix}`, [side * 0.125, -0.02, 0], [0, 0.22, 0], 1.18, 0.52, [1, 0, 0]);
    addLimitedJoint(human, `thigh${suffix}`, `shin${suffix}`, [0, -0.22, 0], [0, 0.205, -0.005], 2.25, 0.16, [1, 0, 0]);
    addLimitedJoint(human, `shin${suffix}`, `foot${suffix}`, [0, -0.205, 0], [0, 0.035, -0.075], 0.48, 0.24, [1, 0, 0]);
  }
  for (const part of human.parts) {
    part.body.addEventListener('collide', (event) => {
      if (human.active) return;
      const other = event.body;
      const previous = other?.gameMeta?.lastVelocity;
      const previousSpeed = previous ? Math.hypot(previous.x, previous.y, previous.z) : 0;
      const contactImpact = event.contact ? Math.abs(event.contact.getImpactVelocityAlongNormal()) : 0;
      const impact = Math.max(contactImpact, previousSpeed);
      if (impact > 1.15 && other && other.type === CANNON.Body.DYNAMIC && other.gameMeta?.kind !== 'mannequin') {
        const incoming = previous
          ? new CANNON.Vec3(previous.x, previous.y, previous.z)
          : other.velocity;
        activateMannequin(human, part, impact, incoming);
      }
    });
  }
  mannequins.push(human);
  return human;
}

buildMannequin('D-01', [-3.6, 0, -4.55], 0);
buildMannequin('D-02', [3.7, 0, -4.5], 1);

const playerStart = new CANNON.Vec3(0, 0.87, 5.25);
const playerBody = new CANNON.Body({
  mass: 72,
  material: playerPhysicsMaterial,
  position: playerStart.clone(),
  fixedRotation: true,
  linearDamping: 0.02,
  angularDamping: 1,
  allowSleep: false
});
playerBody.addShape(new CANNON.Cylinder(0.31, 0.31, 1.08, 12));
playerBody.addShape(new CANNON.Sphere(0.31), new CANNON.Vec3(0, 0.53, 0));
playerBody.addShape(new CANNON.Sphere(0.31), new CANNON.Vec3(0, -0.53, 0));
playerBody.gameMeta = { kind: 'player' };
world.addBody(playerBody);
playerBody.addEventListener('collide', (event) => {
  const body = event.body;
  if (!body?.gameMeta || !['prop', 'mannequin'].includes(body.gameMeta.kind)) return;
  const impact = event.contact ? Math.abs(event.contact.getImpactVelocityAlongNormal()) : body.velocity.length();
  if (impact > 3.5) receiveDamage(Math.min(15, Math.round(impact * 1.45)));
});

const handGroup = new THREE.Group();
camera.add(handGroup);
const sleeveMat = new THREE.MeshStandardMaterial({ color: 0x536764, roughness: 0.82, metalness: 0.05 });
const cuffMat = new THREE.MeshStandardMaterial({ color: 0x283a3a, roughness: 0.74, metalness: 0.1 });
const gloveMat = new THREE.MeshStandardMaterial({ color: 0xa2aaa0, roughness: 0.7, metalness: 0.05 });
const gloveDark = new THREE.MeshStandardMaterial({ color: 0x66736f, roughness: 0.72 });
function buildHand(side) {
  const group = new THREE.Group();
  const mirrored = side < 0 ? -1 : 1;
  const forearm = new THREE.Mesh(new THREE.CapsuleGeometry(0.085, 0.4, 3, 9), sleeveMat);
  forearm.rotation.z = mirrored * 0.42;
  forearm.position.set(-mirrored * 0.045, -0.05, 0);
  group.add(forearm);
  const cuff = new THREE.Mesh(new THREE.CylinderGeometry(0.088, 0.085, 0.09, 10), cuffMat);
  cuff.position.set(mirrored * 0.055, 0.19, 0);
  cuff.rotation.z = mirrored * 0.42;
  group.add(cuff);
  const palm = new THREE.Mesh(new THREE.BoxGeometry(0.115, 0.14, 0.075), gloveMat);
  palm.position.set(mirrored * 0.14, 0.28, -0.015);
  palm.rotation.z = -mirrored * 0.08;
  group.add(palm);
  for (let i = 0; i < 4; i++) {
    const finger = new THREE.Mesh(new THREE.CapsuleGeometry(0.018, 0.075, 2, 6), gloveMat);
    finger.position.set(mirrored * (0.095 + i * 0.03), 0.39 + (i === 0 || i === 3 ? -0.014 : 0), -0.026);
    finger.rotation.z = -mirrored * 0.06;
    group.add(finger);
  }
  const thumb = new THREE.Mesh(new THREE.CapsuleGeometry(0.021, 0.07, 2, 6), gloveDark);
  thumb.position.set(mirrored * 0.205, 0.285, -0.005);
  thumb.rotation.z = -mirrored * 0.68;
  group.add(thumb);
  group.position.set(side * 0.39, -0.64, -0.77);
  group.rotation.z = -side * 0.05;
  group.traverse((object) => { if (object.isMesh) { object.castShadow = false; object.receiveShadow = false; } });
  handGroup.add(group);
}
buildHand(-1);
buildHand(1);

let yaw = 0;
let pitch = 0;
let started = false;
let heldBody = null;
let currentTarget = null;
let joystick = { x: 0, y: 0, pointerId: null };
let lookState = null;
let walkPhase = 0;
let shakeAmount = 0;
let damageCooldown = 0;
let health = 100;
let toastTimer = 0;
let targetRefresh = 0;
let elapsed = 0;
let frameCount = 0;
let fpsTime = 0;
let fpsValue = 60;
let qualityReduced = false;
let jumpQueued = false;
const keys = new Set();
const raycaster = new THREE.Raycaster();
raycaster.far = 5;
const lookVector = new THREE.Vector3();
const heldWorldTarget = new THREE.Vector3();
const heldWorldOffset = new THREE.Vector3();
const moveVector = new CANNON.Vec3();

function toast(text, duration = 1.45) {
  const element = $('toast');
  element.textContent = text;
  element.classList.add('visible');
  toastTimer = duration;
}

function receiveDamage(amount) {
  if (damageCooldown > 0 || !started) return;
  damageCooldown = 0.72;
  health = Math.max(0, health - amount);
  shakeAmount = Math.min(1.4, shakeAmount + 0.85);
  $('health-value').textContent = String(health);
  $('health-bar').style.width = `${health}%`;
  const low = health < 35;
  $('health-bar').style.background = low ? '#e37763' : '#82c7a6';
  $('health-label').textContent = low ? 'ПОВРЕЖДЕНИЕ' : health < 70 ? 'ВНИМАНИЕ' : 'НОРМА';
  $('health-label').style.color = low ? '#ed9583' : health < 70 ? '#e7bd79' : '#a8d3bf';
  document.body.classList.add('damage-flash');
  setTimeout(() => document.body.classList.remove('damage-flash'), 170);
  toast(`УДАР · −${amount}%`, 0.9);
  if (health === 0) {
    toast('ОПЕРАТОР ВЫВЕДЕН · НАЖМИТЕ ↻', 2.5);
  }
}

function activateMannequin(human, hitPart = human.partMap.torso, impact = 0, incomingVelocity = null, manual = false) {
  if (human.active) {
    if (manual && hitPart?.body) {
      const impulse = new CANNON.Vec3(lookVector.x * 8.5, Math.max(1.0, lookVector.y * 8.5), lookVector.z * 8.5);
      hitPart.body.applyImpulse(impulse, hitPart.body.position);
      toast('ИМПУЛЬС ПЕРЕДАН', 0.85);
    }
    return;
  }
  human.active = true;
  human.hitFlash = 0.24;
  for (const part of human.parts) {
    part.body.type = CANNON.Body.DYNAMIC;
    part.body.mass = part.mass;
    part.body.updateMassProperties();
    part.body.wakeUp();
  }
  world.broadphase.dirty = true;
  if (hitPart?.body) {
    let direction;
    if (manual) {
      direction = new CANNON.Vec3(lookVector.x, Math.max(0.08, lookVector.y), lookVector.z);
      direction.normalize();
      const impulse = direction.scale(13.5);
      hitPart.body.applyImpulse(impulse, hitPart.body.position);
    } else {
      direction = incomingVelocity && incomingVelocity.lengthSquared() > 0.08 ? incomingVelocity.clone() : new CANNON.Vec3(0, 0, 1);
      const speed = direction.length();
      direction.normalize();
      const magnitude = Math.min(48, Math.max(6, impact * hitPart.mass * 0.78));
      hitPart.body.applyImpulse(direction.scale(magnitude), hitPart.body.position);
    }
  }
  updateRagdollCount();
  toast(manual ? `${human.id} · РАГДОЛЛ АКТИВИРОВАН` : `${human.id} · УДАР / РАГДОЛЛ`, 1.3);
}

function updateRagdollCount() {
  $('ragdoll-count').textContent = `${mannequins.filter((human) => human.active).length} / ${mannequins.length}`;
}

function startGame() {
  if (started) return;
  started = true;
  $('intro').classList.add('hidden');
  if (!mobile && canvas.requestPointerLock) {
    try { canvas.requestPointerLock(); } catch (_) { /* Pointer lock is optional. */ }
  }
  toast('КАМЕРА ГОТОВА · НАЧНИТЕ ТЕСТ', 1.8);
}

function makeCameraDirection() {
  camera.getWorldDirection(lookVector);
  return lookVector;
}

function getTargetMeta() {
  raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
  const hits = raycaster.intersectObjects(raycastTargets, true);
  for (const hit of hits) {
    const meta = hit.object.userData.gameMeta || hit.object.parent?.userData?.gameMeta;
    if (!meta || hit.distance > (meta.range || 4.5)) continue;
    return { meta, distance: hit.distance, point: hit.point };
  }
  return null;
}

function updateTargetUI() {
  currentTarget = getTargetMeta();
  const reticle = $('reticle');
  const readout = $('target-readout');
  const action = $('action-button');
  const heldTag = $('held-tag');
  if (heldBody) {
    const meta = heldBody.gameMeta;
    $('held-name').textContent = meta.name;
    heldTag.classList.add('visible');
    action.classList.add('is-holding');
    action.classList.remove('has-target');
    $('action-label').textContent = 'БРОСИТЬ';
    $('action-subtitle').textContent = `${meta.name} · ${meta.mass.toFixed(1)} КГ`;
    reticle.classList.remove('locked');
    readout.classList.remove('visible');
    return;
  }
  heldTag.classList.remove('visible');
  action.classList.remove('is-holding');
  if (currentTarget?.meta.kind === 'prop') {
    const meta = currentTarget.meta;
    reticle.classList.add('locked');
    readout.classList.add('visible');
    $('target-name').textContent = `${meta.type} · ${meta.name}`;
    $('target-detail').textContent = `${meta.detail} · ${currentTarget.distance.toFixed(1)} М`;
    $('action-label').textContent = 'ВЗЯТЬ';
    $('action-subtitle').textContent = 'ПОДНЯТЬ / БРОСИТЬ';
    action.classList.add('has-target');
  } else if (currentTarget?.meta.kind === 'mannequin') {
    const meta = currentTarget.meta;
    reticle.classList.add('locked');
    readout.classList.add('visible');
    $('target-name').textContent = `МАНЕКЕН · ${meta.human.id}`;
    $('target-detail').textContent = meta.human.active ? 'АКТИВЕН · ФИЗИКА RAGDOLL' : 'БОЛВАНКА · КОНТАКТНАЯ ЦЕЛЬ';
    $('action-label').textContent = meta.human.active ? 'ИМПУЛЬС' : 'УДАРИТЬ';
    $('action-subtitle').textContent = 'АКТИВИРОВАТЬ РАГДОЛЛ';
    action.classList.add('has-target');
  } else {
    reticle.classList.remove('locked');
    readout.classList.remove('visible');
    $('action-label').textContent = 'ДЕЙСТВИЕ';
    $('action-subtitle').textContent = 'ВЫБЕРИТЕ ЦЕЛЬ';
    action.classList.remove('has-target');
  }
}

function pickUp(meta) {
  const body = meta.body;
  if (!body || body.gameMeta?.isHeld) return;
  heldBody = body;
  body.gameMeta.isHeld = true;
  body.type = CANNON.Body.KINEMATIC;
  body.mass = 0;
  body.updateMassProperties();
  body.velocity.set(0, 0, 0);
  body.angularVelocity.set(0, 0, 0);
  body.wakeUp();
  world.broadphase.dirty = true;
  $('held-name').textContent = meta.name;
  toast(`${meta.name} · ${meta.mass.toFixed(1)} КГ`, 1.15);
}

function throwHeld() {
  if (!heldBody) return;
  const body = heldBody;
  const meta = body.gameMeta;
  makeCameraDirection();
  body.type = CANNON.Body.DYNAMIC;
  body.mass = meta.initialMass;
  body.updateMassProperties();
  body.gameMeta.isHeld = false;
  body.position.set(heldWorldTarget.x, heldWorldTarget.y, heldWorldTarget.z);
  const weightScale = Math.max(0.34, Math.min(1.15, Math.sqrt(2.8 / meta.initialMass)));
  const forwardSpeed = 9.6 * weightScale;
  body.velocity.set(
    lookVector.x * forwardSpeed + playerBody.velocity.x,
    lookVector.y * forwardSpeed + 1.05 + playerBody.velocity.y,
    lookVector.z * forwardSpeed + playerBody.velocity.z
  );
  body.angularVelocity.set((Math.random() - 0.5) * 3.4, (Math.random() - 0.5) * 3.4, (Math.random() - 0.5) * 3.4);
  body.wakeUp();
  world.broadphase.dirty = true;
  heldBody = null;
  toast(`БРОСОК · ${meta.name}`, 0.95);
}

function doAction() {
  if (!started) { startGame(); return; }
  if (heldBody) { throwHeld(); return; }
  const target = currentTarget || getTargetMeta();
  if (!target) {
    toast('НЕТ ЦЕЛИ В ЗОНЕ ДОСЯГАЕМОСТИ', 0.9);
    return;
  }
  if (target.meta.kind === 'prop') {
    pickUp(target.meta);
    return;
  }
  if (target.meta.kind === 'mannequin') {
    makeCameraDirection();
    activateMannequin(target.meta.human, target.meta.human.partMap[target.meta.key] || target.meta.human.partMap.torso, 0, null, true);
  }
}

function updateHeld(dt) {
  if (!heldBody) return;
  makeCameraDirection();
  const cameraPosition = camera.getWorldPosition(heldWorldTarget);
  heldWorldOffset.copy(lookVector).multiplyScalar(1.62);
  heldWorldTarget.add(heldWorldOffset);
  heldWorldTarget.y -= 0.11;
  const body = heldBody;
  const maxVelocity = 16;
  body.velocity.set(
    THREE.MathUtils.clamp((heldWorldTarget.x - body.position.x) * 18, -maxVelocity, maxVelocity),
    THREE.MathUtils.clamp((heldWorldTarget.y - body.position.y) * 18, -maxVelocity, maxVelocity),
    THREE.MathUtils.clamp((heldWorldTarget.z - body.position.z) * 18, -maxVelocity, maxVelocity)
  );
  body.aabbNeedsUpdate = true;
}

function isMovementKeyDown() {
  return keys.has('KeyW') || keys.has('KeyA') || keys.has('KeyS') || keys.has('KeyD') || Math.abs(joystick.x) + Math.abs(joystick.y) > 0.12;
}

function updatePlayer(dt) {
  let strafe = joystick.x;
  let forward = -joystick.y;
  if (keys.has('KeyA')) strafe -= 1;
  if (keys.has('KeyD')) strafe += 1;
  if (keys.has('KeyW')) forward += 1;
  if (keys.has('KeyS')) forward -= 1;
  const length = Math.hypot(strafe, forward);
  if (length > 1) { strafe /= length; forward /= length; }
  const speed = (keys.has('ShiftLeft') || keys.has('ShiftRight')) ? 5.25 : 3.8;
  const dx = -Math.sin(yaw) * forward + Math.cos(yaw) * strafe;
  const dz = -Math.cos(yaw) * forward - Math.sin(yaw) * strafe;
  const smoothing = Math.min(1, dt * (length > 0.02 ? 13 : 17));
  playerBody.velocity.x += (dx * speed - playerBody.velocity.x) * smoothing;
  playerBody.velocity.z += (dz * speed - playerBody.velocity.z) * smoothing;
  if (jumpQueued && playerBody.position.y < 0.92) {
    playerBody.velocity.y = 4.25;
    jumpQueued = false;
  }
  if (length > 0.02) walkPhase += dt * (speed + 1.6);
}

function updateCamera(dt) {
  const moving = isMovementKeyDown();
  const bob = moving ? Math.sin(walkPhase * 2.0) * 0.026 : 0;
  const sway = moving ? Math.sin(walkPhase) * 0.012 : 0;
  damageCooldown = Math.max(0, damageCooldown - dt);
  shakeAmount = Math.max(0, shakeAmount - dt * 2.6);
  const shakeX = shakeAmount > 0 ? (Math.random() - 0.5) * 0.045 * shakeAmount : 0;
  const shakeY = shakeAmount > 0 ? (Math.random() - 0.5) * 0.036 * shakeAmount : 0;
  camera.position.set(playerBody.position.x + sway + shakeX, playerBody.position.y + 0.77 + bob + shakeY, playerBody.position.z);
  camera.rotation.set(pitch, yaw, 0, 'YXZ');
  handGroup.position.y = moving ? Math.sin(walkPhase * 2.0 + 0.75) * 0.012 : 0;
  handGroup.position.x = moving ? Math.sin(walkPhase) * 0.008 : 0;
}

function syncVisuals() {
  for (const record of physicsRecords) {
    record.visual.position.copy(record.body.position);
    record.visual.quaternion.copy(record.body.quaternion);
  }
}

function updateMannequinCountAndFlash(dt) {
  for (const human of mannequins) human.hitFlash = Math.max(0, human.hitFlash - dt);
}

function animate(time) {
  requestAnimationFrame(animate);
  const dt = Math.min(0.05, Math.max(0.001, (time - (animate.lastTime || time)) / 1000));
  animate.lastTime = time;
  elapsed += dt;
  frameCount++;
  fpsTime += dt;
  if (fpsTime >= 1) {
    fpsValue = Math.round(frameCount / fpsTime);
    frameCount = 0; fpsTime = 0;
    if (fpsValue < 32 && !qualityReduced) {
      qualityReduced = true;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.0));
    }
  }
  if (toastTimer > 0) {
    toastTimer -= dt;
    if (toastTimer <= 0) $('toast').classList.remove('visible');
  }
  updatePlayer(dt);
  updateCamera(dt);
  updateHeld(dt);
  for (const record of physicsRecords) {
    const last = record.body.gameMeta?.lastVelocity;
    if (last) {
      last.x = record.body.velocity.x;
      last.y = record.body.velocity.y;
      last.z = record.body.velocity.z;
    }
  }
  world.step(1 / 60, dt, 4);
  syncVisuals();
  updateMannequinCountAndFlash(dt);
  targetRefresh += dt;
  if (targetRefresh > 0.09) {
    updateTargetUI();
    targetRefresh = 0;
  }
  renderer.render(scene, camera);
}
requestAnimationFrame(animate);

function resize() {
  const width = window.innerWidth, height = window.innerHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height, false);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, qualityReduced ? 1 : (mobile ? 1.35 : 1.7)));
}
window.addEventListener('resize', resize, { passive: true });
window.addEventListener('orientationchange', () => setTimeout(resize, 120), { passive: true });

const joystickRoot = $('joystick');
const joystickKnob = $('joystick-knob');
function setJoystick(clientX, clientY) {
  const ringRect = joystickRoot.getBoundingClientRect();
  const cx = ringRect.left + ringRect.width / 2;
  const cy = ringRect.top + ringRect.height / 2;
  let x = clientX - cx, y = clientY - cy;
  const radius = 36;
  const distance = Math.hypot(x, y);
  if (distance > radius) { x = x / distance * radius; y = y / distance * radius; }
  joystick.x = x / radius;
  joystick.y = y / radius;
  joystickKnob.style.transform = `translate(${x}px, ${y}px)`;
}
function resetJoystick() {
  joystick.x = 0; joystick.y = 0; joystick.pointerId = null;
  joystickKnob.style.transform = 'translate(0px, 0px)';
}
joystickRoot.addEventListener('pointerdown', (event) => {
  if (!started) return;
  event.preventDefault();
  joystick.pointerId = event.pointerId;
  joystickRoot.setPointerCapture(event.pointerId);
  setJoystick(event.clientX, event.clientY);
});
joystickRoot.addEventListener('pointermove', (event) => {
  if (event.pointerId === joystick.pointerId) { event.preventDefault(); setJoystick(event.clientX, event.clientY); }
});
joystickRoot.addEventListener('pointerup', (event) => { if (event.pointerId === joystick.pointerId) resetJoystick(); });
joystickRoot.addEventListener('pointercancel', resetJoystick);

function beginLook(event) {
  if (!started || event.pointerType === 'touch' && event.clientX < window.innerWidth * 0.4) return;
  if (event.target.closest('button, #joystick, #intro, .target-readout')) return;
  if (event.pointerType === 'mouse' && document.pointerLockElement !== canvas && canvas.requestPointerLock) {
    try { canvas.requestPointerLock(); } catch (_) { /* Non-essential for browser testing. */ }
  }
  lookState = { pointerId: event.pointerId, x: event.clientX, y: event.clientY, pointerType: event.pointerType };
}
window.addEventListener('pointerdown', beginLook, { passive: false });
window.addEventListener('pointermove', (event) => {
  if (document.pointerLockElement === canvas) {
    if (!started) return;
    yaw -= (event.movementX || 0) * 0.0027;
    pitch = THREE.MathUtils.clamp(pitch - (event.movementY || 0) * 0.0027, -1.18, 1.18);
    return;
  }
  if (!lookState || event.pointerId !== lookState.pointerId) return;
  const dx = event.clientX - lookState.x;
  const dy = event.clientY - lookState.y;
  lookState.x = event.clientX; lookState.y = event.clientY;
  const sensitivity = event.pointerType === 'touch' ? 0.0043 : 0.0034;
  yaw -= dx * sensitivity;
  pitch = THREE.MathUtils.clamp(pitch - dy * sensitivity, -1.18, 1.18);
}, { passive: true });
window.addEventListener('pointerup', (event) => { if (lookState?.pointerId === event.pointerId) lookState = null; }, { passive: true });
window.addEventListener('pointercancel', () => { lookState = null; }, { passive: true });

$('action-button').addEventListener('pointerdown', (event) => { event.preventDefault(); event.stopPropagation(); doAction(); });
$('start-button').addEventListener('click', startGame);
$('reset-button').addEventListener('click', () => window.location.reload());
document.addEventListener('keydown', (event) => {
  if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ShiftLeft', 'ShiftRight', 'Space', 'KeyE', 'KeyR'].includes(event.code)) event.preventDefault();
  keys.add(event.code);
  if (event.code === 'KeyE' && !event.repeat) doAction();
  if (event.code === 'KeyR' && !event.repeat) window.location.reload();
  if (event.code === 'Space' && !event.repeat) jumpQueued = true;
});
document.addEventListener('keyup', (event) => keys.delete(event.code));
document.addEventListener('visibilitychange', () => { if (document.hidden) { keys.clear(); resetJoystick(); lookState = null; } });

updateRagdollCount();
updateTargetUI();
