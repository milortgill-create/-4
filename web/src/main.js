import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { WEAPON_CATALOG, WEAPON_BY_ID, createAmmoState, consumeAmmo, reloadAmmo, damageMannequin, traceHitscan } from './arsenal.js';
import { scoopSnow, depositSnow, movementSpeedWithSnow, updateHeat } from './survival.js';

const isMeleeWeapon = (weapon) => weapon?.type === 'melee' || weapon?.type === 'tool';

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
scene.background = new THREE.Color(0x87979b);
scene.fog = new THREE.FogExp2(0x87979b, 0.018);
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
const COLLISION_GROUP_WORLD = 1;
const COLLISION_GROUP_PLAYER = 2;
const COLLISION_GROUP_PROPS = 4;
const COLLISION_GROUP_RAGDOLL = 8;
const COLLISION_MASK_ALL = COLLISION_GROUP_WORLD | COLLISION_GROUP_PLAYER | COLLISION_GROUP_PROPS | COLLISION_GROUP_RAGDOLL;
world.addContactMaterial(new CANNON.ContactMaterial(floorPhysicsMaterial, objectPhysicsMaterial, { friction: 0.75, restitution: 0.06, contactEquationStiffness: 1e7, contactEquationRelaxation: 3 }));
world.addContactMaterial(new CANNON.ContactMaterial(objectPhysicsMaterial, objectPhysicsMaterial, { friction: 0.55, restitution: 0.09 }));
world.addContactMaterial(new CANNON.ContactMaterial(playerPhysicsMaterial, floorPhysicsMaterial, { friction: 0.0, restitution: 0.0 }));
world.addContactMaterial(new CANNON.ContactMaterial(playerPhysicsMaterial, objectPhysicsMaterial, { friction: 0.18, restitution: 0.0 }));
world.addContactMaterial(new CANNON.ContactMaterial(playerPhysicsMaterial, dummyPhysicsMaterial, { friction: 0.35, restitution: 0.02 }));

const physicsRecords = [];
const raycastTargets = [];
const bulletSurfaceTargets = [];
const bulletMarks = [];
const mannequins = [];
const snowDrifts = [];
let floorSurfaceMesh = null;
const color = (hex) => new THREE.Color(hex);

function seededRandom(seed) {
  let value = seed >>> 0;
  return () => {
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 4294967296;
  };
}

function makeConcreteTexture(base, seed, repeatX, repeatY) {
  const size = 512;
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
  texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 8);
  return texture;
}

function makeSnowTexture(base, seed, repeatX, repeatY) {
  const size = 512;
  const snowCanvas = document.createElement('canvas');
  snowCanvas.width = snowCanvas.height = size;
  const ctx = snowCanvas.getContext('2d', { willReadFrequently: true });
  const rgb = [parseInt(base.slice(1, 3), 16), parseInt(base.slice(3, 5), 16), parseInt(base.slice(5, 7), 16)];
  const random = seededRandom(seed);
  const image = ctx.createImageData(size, size);
  for (let i = 0; i < image.data.length; i += 4) {
    const grain = (random() - 0.5) * 20;
    image.data[i] = Math.max(0, Math.min(255, rgb[0] + grain - 2));
    image.data[i + 1] = Math.max(0, Math.min(255, rgb[1] + grain));
    image.data[i + 2] = Math.max(0, Math.min(255, rgb[2] + grain + 4));
    image.data[i + 3] = 255;
  }
  ctx.putImageData(image, 0, 0);
  for (let i = 0; i < 95; i++) {
    const x = random() * size, y = random() * size;
    const radius = 8 + random() * 48;
    ctx.fillStyle = random() > 0.55 ? 'rgba(126,157,166,.075)' : 'rgba(255,255,255,.11)';
    ctx.beginPath();
    ctx.ellipse(x, y, radius * (0.8 + random() * 0.8), radius * (0.25 + random() * 0.48), random() * Math.PI, 0, Math.PI * 2);
    ctx.fill();
  }
  for (let i = 0; i < 520; i++) {
    const x = random() * size, y = random() * size;
    ctx.fillStyle = random() > 0.58 ? 'rgba(102,136,148,.22)' : 'rgba(255,255,255,.68)';
    ctx.fillRect(x, y, 1 + random() * 2.2, 1 + random() * 1.4);
  }
  const texture = new THREE.CanvasTexture(snowCanvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(repeatX, repeatY);
  texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 8);
  return texture;
}

function makeWoodTexture(base, seed) {
  const width = 512, height = 256;
  const woodCanvas = document.createElement('canvas');
  woodCanvas.width = width;
  woodCanvas.height = height;
  const ctx = woodCanvas.getContext('2d', { willReadFrequently: true });
  const rgb = [parseInt(base.slice(1, 3), 16), parseInt(base.slice(3, 5), 16), parseInt(base.slice(5, 7), 16)];
  const random = seededRandom(seed);
  const pixels = ctx.createImageData(width, height);
  for (let y = 0; y < height; y++) {
    const grainWave = Math.sin(y * 0.14) * 4 + Math.sin(y * 0.037) * 7;
    for (let x = 0; x < width; x++) {
      const grain = grainWave + (random() - 0.5) * 18;
      const i = (y * width + x) * 4;
      pixels.data[i] = Math.max(0, Math.min(255, rgb[0] + grain));
      pixels.data[i + 1] = Math.max(0, Math.min(255, rgb[1] + grain * 0.82));
      pixels.data[i + 2] = Math.max(0, Math.min(255, rgb[2] + grain * 0.62));
      pixels.data[i + 3] = 255;
    }
  }
  ctx.putImageData(pixels, 0, 0);
  for (let i = 0; i < 175; i++) {
    const y = random() * height;
    ctx.strokeStyle = random() > 0.5 ? 'rgba(39,25,13,.19)' : 'rgba(255,226,171,.12)';
    ctx.lineWidth = random() * 1.4 + 0.25;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.bezierCurveTo(width * 0.33, y + (random() - 0.5) * 12, width * 0.67, y + (random() - 0.5) * 9, width, y + (random() - 0.5) * 6);
    ctx.stroke();
  }
  const texture = new THREE.CanvasTexture(woodCanvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1.5, 1);
  texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 8);
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

const wallTexture = makeWoodTexture('#775a3d', 319);
wallTexture.repeat.set(5.4, 1.8);
const floorTexture = makeSnowTexture('#e2e9e9', 81, 4.6, 3.5);
const ceilingTexture = makeWoodTexture('#51402d', 441);
ceilingTexture.repeat.set(4.2, 1.8);
const wallBumpTexture = wallTexture.clone(); wallBumpTexture.colorSpace = THREE.NoColorSpace;
const floorBumpTexture = floorTexture.clone(); floorBumpTexture.colorSpace = THREE.NoColorSpace;
const ceilingBumpTexture = ceilingTexture.clone(); ceilingBumpTexture.colorSpace = THREE.NoColorSpace;
const concreteWall = new THREE.MeshStandardMaterial({ map: wallTexture, bumpMap: wallBumpTexture, bumpScale: 0.045, color: 0xffffff, roughness: 0.94, metalness: 0.01 });
const concreteFloor = new THREE.MeshStandardMaterial({ map: floorTexture, bumpMap: floorBumpTexture, bumpScale: 0.025, color: 0xf1f5f4, roughness: 0.98, metalness: 0 });
const concreteCeiling = new THREE.MeshStandardMaterial({ map: ceilingTexture, bumpMap: ceilingBumpTexture, bumpScale: 0.035, color: 0xc5b192, roughness: 0.96 });
const darkConcrete = new THREE.MeshStandardMaterial({ color: 0x303a3c, roughness: 0.9 });
const trimMaterial = new THREE.MeshStandardMaterial({ color: 0x342d25, roughness: 0.72, metalness: 0.18 });
const warningMaterial = new THREE.MeshStandardMaterial({ color: 0xd5aa55, roughness: 0.8, metalness: 0.06 });
const whiteMarkMaterial = new THREE.MeshStandardMaterial({ color: 0xc1ccc5, roughness: 0.9, emissive: 0x18201c, emissiveIntensity: 0.15 });
const barnBeamMaterial = new THREE.MeshStandardMaterial({ color: 0x4b3828, roughness: 0.9 });
const snowMaterial = new THREE.MeshStandardMaterial({ color: 0xf4f7f7, roughness: 0.96, metalness: 0, bumpMap: floorBumpTexture, bumpScale: 0.018 });

scene.add(new THREE.HemisphereLight(0xbdd1d0, 0x282523, 1.1));
scene.add(new THREE.AmbientLight(0x7d9291, 0.48));
const keyLight = new THREE.DirectionalLight(0xffe7c7, 2.15);
keyLight.position.set(-3.8, 8.5, 4.5);
keyLight.castShadow = true;
keyLight.shadow.mapSize.set(1536, 1536);
keyLight.shadow.camera.left = -11; keyLight.shadow.camera.right = 11;
keyLight.shadow.camera.top = 9; keyLight.shadow.camera.bottom = -9;
keyLight.shadow.camera.near = 0.5; keyLight.shadow.camera.far = 25;
keyLight.shadow.bias = -0.00018;
keyLight.shadow.normalBias = 0.025;
keyLight.shadow.radius = 4;
scene.add(keyLight);

function addPointLamp(x, z, tint = 0xc2ebe0, castSoftShadow = false) {
  const casing = new THREE.Mesh(new THREE.BoxGeometry(1.05, 0.1, 0.25), trimMaterial);
  casing.position.set(x, 5.66, z);
  casing.castShadow = false; casing.receiveShadow = true; scene.add(casing);
  const lens = new THREE.Mesh(new THREE.BoxGeometry(0.78, 0.035, 0.13), new THREE.MeshStandardMaterial({ color: tint, emissive: tint, emissiveIntensity: 1.35, roughness: 0.3 }));
  lens.position.set(x, 5.585, z); scene.add(lens);
  if (castSoftShadow) {
    const lamp = new THREE.SpotLight(tint, 42, 12, Math.PI / 3, 0.58, 1.6);
    lamp.position.set(x, 5.35, z);
    lamp.target.position.set(x, 0.15, z);
    lamp.castShadow = true;
    lamp.shadow.mapSize.set(512, 512);
    lamp.shadow.camera.near = 0.2;
    lamp.shadow.camera.far = 13;
    lamp.shadow.bias = -0.00035;
    lamp.shadow.normalBias = 0.035;
    lamp.shadow.radius = 4;
    scene.add(lamp, lamp.target);
  } else {
    const lamp = new THREE.PointLight(tint, 8.5, 8.4, 2);
    lamp.position.set(x, 5.35, z);
    scene.add(lamp);
  }
}
addPointLamp(-4.3, -2.8, 0xb3dcd6, true);
addPointLamp(0.4, -2.7, 0xd3e2cf, false);
addPointLamp(4.4, -2.5, 0xa8d0d5, true);
addPointLamp(0.0, 4.25, 0x9abdc0, false);

function addStaticBoxMesh(geometry, material, position, options = {}) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(position[0], position[1], position[2]);
  mesh.castShadow = options.castShadow ?? true;
  mesh.receiveShadow = options.receiveShadow ?? true;
  if (options.rotation) mesh.rotation.set(options.rotation[0], options.rotation[1], options.rotation[2]);
  if (options.bulletSurface) {
    mesh.userData.bulletSurface = true;
    bulletSurfaceTargets.push(mesh);
  }
  scene.add(mesh);
  return mesh;
}

function addStaticCollider(position, halfExtents, material = floorPhysicsMaterial) {
  const body = new CANNON.Body({
    mass: 0,
    material,
    collisionFilterGroup: COLLISION_GROUP_WORLD,
    collisionFilterMask: COLLISION_MASK_ALL
  });
  body.addShape(new CANNON.Box(new CANNON.Vec3(halfExtents[0], halfExtents[1], halfExtents[2])));
  body.position.set(position[0], position[1], position[2]);
  world.addBody(body);
  return body;
}

function addRoom() {
  const floor = addStaticBoxMesh(new THREE.BoxGeometry(18, 0.5, 14), concreteFloor, [0, -0.25, 0], { bulletSurface: true });
  floorSurfaceMesh = floor;
  floor.userData.groundSurface = true;
  floor.receiveShadow = true;
  addStaticCollider([0, -0.25, 0], [9, 0.25, 7]);

  addStaticBoxMesh(new THREE.BoxGeometry(18.4, 0.42, 14.4), concreteCeiling, [0, 6.08, 0], { bulletSurface: true });
  addStaticCollider([0, 6.08, 0], [9.2, 0.21, 7.2]);
  for (const side of [-1, 1]) {
    addStaticBoxMesh(new THREE.BoxGeometry(0.4, 6, 14), concreteWall, [side * 9, 3, 0], { bulletSurface: true });
    addStaticCollider([side * 9, 3, 0], [0.2, 3, 7]);
    addStaticBoxMesh(new THREE.BoxGeometry(18, 6, 0.4), concreteWall, [0, 3, side * 7], { castShadow: false, bulletSurface: true });
    addStaticCollider([0, 3, side * 7], [9, 3, 0.2]);
  }

  // Dark timber posts and rails frame the shed walls without covering their plank texture.
  for (const side of [-1, 1]) {
    for (const z of [-6.65, -3.3, 0, 3.3, 6.65]) {
      addStaticBoxMesh(new THREE.BoxGeometry(0.24, 6.05, 0.25), barnBeamMaterial, [side * 8.76, 3, z]);
    }
    for (const y of [0.18, 1.86, 3.54, 5.82]) {
      addStaticBoxMesh(new THREE.BoxGeometry(0.2, 0.17, 13.7), barnBeamMaterial, [side * 8.76, y, 0]);
    }
  }
  for (const side of [-1, 1]) {
    for (const x of [-8.65, 0, 8.65]) {
      addStaticBoxMesh(new THREE.BoxGeometry(0.25, 6.05, 0.24), barnBeamMaterial, [x, 3, side * 6.76]);
    }
    for (const y of [0.18, 1.86, 3.54, 5.82]) {
      addStaticBoxMesh(new THREE.BoxGeometry(17.35, 0.17, 0.2), barnBeamMaterial, [0, y, side * 6.76]);
    }
  }

  const wallSign = new THREE.Mesh(new THREE.PlaneGeometry(3.1, 1.16), new THREE.MeshStandardMaterial({ map: makeCanvasLabel('СНЕЖНЫЙ ДВОР', 'ПОЛИГОН ВЫЖИВАНИЯ', '#c8dfd8'), roughness: 0.84, metalness: 0.04, emissive: 0x18201d, emissiveIntensity: 0.18 }));
  wallSign.position.set(0, 4.4, -6.785);
  scene.add(wallSign);
  const dataPlate = new THREE.Mesh(new THREE.PlaneGeometry(1.55, 0.52), new THREE.MeshStandardMaterial({ map: makeCanvasLabel('ЗИМНИЙ САРАЙ', 'OFFLINE / 01', '#d9b46d'), roughness: 0.84, emissive: 0x17140e, emissiveIntensity: 0.2 }));
  dataPlate.position.set(8.785, 3.9, -1.4);
  dataPlate.rotation.y = -Math.PI / 2;
  scene.add(dataPlate);
}
addRoom();

const woodMaps = [
  makeWoodTexture('#846744', 213),
  makeWoodTexture('#725a40', 932),
  makeWoodTexture('#9a7950', 612)
];
const woodBumpMaps = woodMaps.map((texture) => {
  const bump = texture.clone();
  bump.colorSpace = THREE.NoColorSpace;
  return bump;
});
const woodMaterials = [
  new THREE.MeshStandardMaterial({ map: woodMaps[0], bumpMap: woodBumpMaps[0], bumpScale: 0.035, color: 0x866746, roughness: 0.88 }),
  new THREE.MeshStandardMaterial({ map: woodMaps[1], bumpMap: woodBumpMaps[1], bumpScale: 0.035, color: 0x6f573d, roughness: 0.91 }),
  new THREE.MeshStandardMaterial({ map: woodMaps[2], bumpMap: woodBumpMaps[2], bumpScale: 0.035, color: 0x9a784f, roughness: 0.83 })
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
  root.userData.gameMeta = meta;
  raycastTargets.push(root);
}

function updateSnowDriftVisual(drift) {
  const amount = Math.max(0, drift.amount);
  const scale = Math.cbrt(amount);
  drift.meta.isEmpty = amount <= 0.012;
  drift.group.visible = !drift.meta.isEmpty;
  drift.group.scale.setScalar(scale);
  drift.group.position.y = 0.02 + 0.07 * scale;
}

function createSnowDrift(x, z, amount = 1) {
  const group = new THREE.Group();
  const mound = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 1), snowMaterial);
  mound.scale.set(0.88, 0.38, 0.76);
  mound.position.set(0, 0.31, 0);
  group.add(mound);
  for (const [px, py, pz, sx, sy, sz] of [
    [-0.37, 0.18, 0.08, 0.45, 0.25, 0.48],
    [0.34, 0.17, -0.1, 0.48, 0.23, 0.44],
    [0.04, 0.24, 0.35, 0.43, 0.27, 0.38]
  ]) {
    const lobe = new THREE.Mesh(new THREE.IcosahedronGeometry(0.68, 1), snowMaterial);
    lobe.position.set(px, py, pz);
    lobe.scale.set(sx, sy, sz);
    group.add(lobe);
  }
  group.position.set(x, 0, z);
  const meta = { kind: 'snowdrift', name: 'СУГРОБ', range: 4.5, isEmpty: false };
  const drift = { group, amount: Math.max(0, amount), meta };
  meta.drift = drift;
  tagVisual(group, meta);
  snowDrifts.push(drift);
  updateSnowDriftVisual(drift);
  return drift;
}

function addPhysicsProp(meta, shape, mass, position, visual, yaw = 0, extra = {}) {
  const body = new CANNON.Body({
    mass,
    material: objectPhysicsMaterial,
    position: new CANNON.Vec3(position[0], position[1], position[2]),
    collisionFilterGroup: COLLISION_GROUP_PROPS,
    collisionFilterMask: COLLISION_MASK_ALL,
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
  body.gameMeta = {
    ...meta,
    body,
    initialMass: mass,
    isHeld: false,
    isStored: false,
    originalCollisionFilterMask: body.collisionFilterMask,
    originalLinearDamping: body.linearDamping,
    originalAngularDamping: body.angularDamping,
    lastVelocity: { x: 0, y: 0, z: 0 }
  };
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
  const woodIndex = Math.abs(Math.floor(baseColor)) % woodMaps.length;
  const bodyMaterial = new THREE.MeshStandardMaterial({ map: woodMaps[woodIndex], bumpMap: woodBumpMaps[woodIndex], bumpScale: 0.04, color: baseColor, roughness: 0.9, metalness: 0.03 });
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

function createShovelVisual() {
  const group = new THREE.Group();
  const handleMat = new THREE.MeshStandardMaterial({ map: woodMaps[2], bumpMap: woodBumpMaps[2], bumpScale: 0.025, color: 0x8c714d, roughness: 0.86 });
  const steelMat = new THREE.MeshStandardMaterial({ color: 0x788581, roughness: 0.42, metalness: 0.68 });
  const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.029, 0.96, 10), handleMat);
  handle.rotation.z = Math.PI / 2;
  handle.position.set(-0.09, 0.005, 0);
  group.add(handle);
  const grip = new THREE.Mesh(new THREE.TorusGeometry(0.052, 0.012, 6, 14), handleMat);
  grip.position.set(-0.55, 0.01, 0);
  grip.rotation.x = Math.PI / 2;
  group.add(grip);
  const socket = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.065, 0.075), steelMat);
  socket.position.set(0.35, -0.005, 0);
  group.add(socket);
  const blade = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.045, 0.36), steelMat);
  blade.position.set(0.49, -0.008, 0);
  group.add(blade);
  const bladeRidge = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.012, 0.035), new THREE.MeshStandardMaterial({ color: 0x9daaa3, roughness: 0.38, metalness: 0.75 }));
  bladeRidge.position.set(0.48, 0.018, 0);
  group.add(bladeRidge);
  return group;
}

function addCrate(name, position, size, mass, hue, yaw = 0) {
  const [w, h, d] = size;
  const visual = createCrateVisual(w, h, d, hue, name);
  const body = addPhysicsProp({
    kind: 'prop', type: 'ЯЩИК', name, mass,
    detail: `${mass.toFixed(1)} КГ · ДЕРЕВО`, description: 'Усиленный деревянный испытательный ящик с металлическими накладками.', range: 4.5,
    inventoryWidth: w > 0.88 ? 3 : 2, inventoryHeight: h > 0.88 ? 3 : 2, inventoryIcon: '▣'
  }, new CANNON.Box(new CANNON.Vec3(w / 2, h / 2, d / 2)), mass, position, visual, yaw);
  return body;
}
function addBarrel(name, position, radius, height, mass, matIndex, yaw = 0) {
  const visual = createBarrelVisual(radius, height, matIndex, name);
  const shape = new CANNON.Cylinder(radius * 0.9, radius, height, 12);
  return addPhysicsProp({
    kind: 'prop', type: 'БОЧКА', name, mass,
    detail: `${mass.toFixed(0)} КГ · ТЯЖЁЛАЯ СТАЛЬ`, description: 'Тяжёлая металлическая тара; занимает крупный объём и резко нагружает переносимый вес.', range: 4.4,
    inventoryWidth: 2, inventoryHeight: 3, inventoryIcon: '◉'
  }, shape, mass, position, visual, yaw, { angularDamping: 0.23 });
}
function addBottle(name, position, matIndex, yaw = 0) {
  const visual = createBottleVisual(matIndex, name);
  const shape = [
    { shape: new CANNON.Cylinder(0.103, 0.103, 0.33, 10), offset: new CANNON.Vec3(0, -0.055, 0) },
    { shape: new CANNON.Cylinder(0.043, 0.043, 0.19, 9), offset: new CANNON.Vec3(0, 0.165, 0) }
  ];
  return addPhysicsProp({
    kind: 'prop', type: 'БУТЫЛКА', name, mass: 0.38,
    detail: '0.38 КГ · ЛЁГКОЕ СТЕКЛО', description: 'Небольшой стеклянный лабораторный флакон. Почти не влияет на общий вес.', range: 3.8,
    inventoryWidth: 1, inventoryHeight: 1, inventoryIcon: '◉'
  }, shape, 0.38, position, visual, yaw, { linearDamping: 0.035, angularDamping: 0.12 });
}
function addPlank(name, position, length, width, thickness, mass, yaw = 0) {
  const visual = createPlankVisual(length, width, thickness, (Math.abs(yaw) > 0.1) ? 1 : 0);
  return addPhysicsProp({
    kind: 'prop', type: 'ДОСКА', name, mass,
    detail: `${mass.toFixed(1)} КГ · СОСНА`, description: 'Длинная деревянная доска; в рюкзаке укладывается вертикально.', range: 4.3,
    inventoryWidth: 1, inventoryHeight: 4, inventoryIcon: '▬'
  }, new CANNON.Box(new CANNON.Vec3(length / 2, thickness / 2, width / 2)), mass, position, visual, yaw, { angularDamping: 0.21 });
}
function addShovel(name, position, yaw = 0) {
  const visual = createShovelVisual();
  return addPhysicsProp({
    kind: 'prop', type: 'ЛОПАТА', name, mass: 3.6,
    detail: '3.6 КГ · СТАЛЬ / ДЕРЕВО', description: 'Полевой инструмент со стальным штыком и деревянной рукоятью. Размер 2 × 3 ячейки.', range: 4.5,
    inventoryWidth: 2, inventoryHeight: 3, inventoryIcon: '⚒'
  }, new CANNON.Box(new CANNON.Vec3(0.64, 0.07, 0.2)), 3.6, position, visual, yaw, { angularDamping: 0.3 });
}
function createFirewoodVisual() {
  const group = new THREE.Group();
  const bark = new THREE.MeshStandardMaterial({ map: woodMaps[1], bumpMap: woodBumpMaps[1], bumpScale: 0.025, color: 0x72573a, roughness: 0.96 });
  const cut = new THREE.MeshStandardMaterial({ color: 0xc0a17a, roughness: 0.96 });
  const log = new THREE.Mesh(new THREE.CylinderGeometry(0.083, 0.09, 0.66, 10), bark);
  log.rotation.z = Math.PI / 2;
  group.add(log);
  for (const side of [-1, 1]) {
    const end = new THREE.Mesh(new THREE.CircleGeometry(0.082, 10), cut);
    end.position.x = side * 0.331;
    end.rotation.y = side * Math.PI / 2;
    group.add(end);
  }
  return group;
}
function addFirewood(name, position, yaw = 0) {
  const mass = 1.35;
  const visual = createFirewoodVisual();
  return addPhysicsProp({
    kind: 'firewood', type: 'ДРОВА', name, mass,
    detail: `${mass.toFixed(1)} КГ · СУХОЕ ПОЛЕНО`, description: 'Полено для растопки кирпичной печи. Возьмите его и используйте действие рядом с печью.', range: 4.5,
    inventoryWidth: 1, inventoryHeight: 2, inventoryIcon: '▤'
  }, new CANNON.Box(new CANNON.Vec3(0.34, 0.09, 0.09)), mass, position, visual, yaw, { angularDamping: 0.28 });
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
addShovel('ЛОПАТА S-01', [-5.55, 0.07, 2.7], -0.25);
addFirewood('ДРОВА F-01', [6.15, 0.1, -4.1], 0.18);
addFirewood('ДРОВА F-02', [6.78, 0.1, -4.22], -0.36);
addFirewood('ДРОВА F-03', [5.82, 0.1, -4.52], 0.46);
addFirewood('ДРОВА F-04', [6.22, 0.1, -3.72], -0.2);

createSnowDrift(-5.05, 1.55, 1);
createSnowDrift(0.15, 2.7, 0.92);
createSnowDrift(-6.35, -3.85, 1);
createSnowDrift(5.6, 3.75, 0.88);

const stovePosition = new THREE.Vector3(7.15, 0, -5.35);
const fireParticles = [];
let fireRoot = null;
let stoveGroup = null;
let stoveDoorGlow = null;
let stoveLight = null;
let stoveLit = false;
let stoveFuel = 0;
let stoveCrackleTimer = 0;
let carriedSnow = 0;
let shovelActionTimer = 0;
const SHOVEL_ACTION_DURATION = 0.82;
let shovelAction = null;
let snowPayload = null;

function buildStove() {
  const brickMaterials = [
    new THREE.MeshStandardMaterial({ color: 0x7a3828, roughness: 0.95 }),
    new THREE.MeshStandardMaterial({ color: 0x8b4430, roughness: 0.94 }),
    new THREE.MeshStandardMaterial({ color: 0x633126, roughness: 0.96 })
  ];
  const stoveIron = new THREE.MeshStandardMaterial({ color: 0x262b29, roughness: 0.62, metalness: 0.62 });
  const stoveGroupRoot = new THREE.Group();
  stoveGroupRoot.position.copy(stovePosition);
  const body = new THREE.Mesh(new THREE.BoxGeometry(1.28, 1.0, 1.06), brickMaterials[0]);
  body.position.y = 0.5;
  stoveGroupRoot.add(body);
  for (let row = 0; row < 5; row++) {
    for (let column = 0; column < 4; column++) {
      const offset = row % 2 ? 0.14 : 0;
      const brick = new THREE.Mesh(new THREE.BoxGeometry(0.27, 0.16, 0.045), brickMaterials[(row * 3 + column) % brickMaterials.length]);
      brick.position.set(-0.47 + column * 0.29 + offset, 0.13 + row * 0.18, 0.54);
      stoveGroupRoot.add(brick);
    }
  }
  const opening = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.39, 0.035), stoveIron);
  opening.position.set(0, 0.48, 0.591);
  stoveGroupRoot.add(opening);
  const inner = new THREE.Mesh(new THREE.BoxGeometry(0.43, 0.25, 0.014), new THREE.MeshStandardMaterial({ color: 0x110e0b, roughness: 1, emissive: 0x0c0703 }));
  inner.position.set(0, 0.48, 0.616);
  stoveGroupRoot.add(inner);
  stoveDoorGlow = new THREE.Mesh(new THREE.BoxGeometry(0.39, 0.22, 0.008), new THREE.MeshBasicMaterial({ color: 0xff7b2c, transparent: true, opacity: 0.86 }));
  stoveDoorGlow.position.set(0, 0.48, 0.628);
  stoveDoorGlow.visible = false;
  stoveGroupRoot.add(stoveDoorGlow);
  for (const x of [-0.34, 0.34]) {
    const edge = new THREE.Mesh(new THREE.BoxGeometry(0.065, 0.5, 0.075), stoveIron);
    edge.position.set(x, 0.48, 0.64);
    stoveGroupRoot.add(edge);
  }
  for (const y of [0.24, 0.72]) {
    const edge = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.06, 0.075), stoveIron);
    edge.position.set(0, y, 0.64);
    stoveGroupRoot.add(edge);
  }
  const handle = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.16, 0.045), stoveIron);
  handle.position.set(0.25, 0.48, 0.69);
  stoveGroupRoot.add(handle);
  const chimney = new THREE.Mesh(new THREE.BoxGeometry(0.42, 1.62, 0.44), brickMaterials[2]);
  chimney.position.set(0.32, 1.78, -0.24);
  stoveGroupRoot.add(chimney);
  const chimneyCap = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.1, 0.57), stoveIron);
  chimneyCap.position.set(0.32, 2.64, -0.24);
  stoveGroupRoot.add(chimneyCap);
  scene.add(stoveGroupRoot);
  const stoveMeta = { kind: 'stove', name: 'КИРПИЧНАЯ ПЕЧЬ', range: 4.7 };
  tagVisual(stoveGroupRoot, stoveMeta);
  stoveGroup = stoveGroupRoot;
  addStaticCollider([stovePosition.x, 0.5, stovePosition.z], [0.66, 0.5, 0.55]);
  addStaticCollider([stovePosition.x + 0.32, 1.78, stovePosition.z - 0.24], [0.21, 0.81, 0.22]);

  fireRoot = new THREE.Group();
  fireRoot.position.set(stovePosition.x, 0, stovePosition.z + 0.66);
  fireRoot.visible = false;
  scene.add(fireRoot);
  const flameColors = [0xff5722, 0xff8b27, 0xffc34e, 0xffe08a];
  for (let i = 0; i < 13; i++) {
    const material = new THREE.MeshBasicMaterial({ color: flameColors[i % flameColors.length], transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending });
    const particle = new THREE.Mesh(new THREE.TetrahedronGeometry(0.1 + (i % 3) * 0.025, 0), material);
    particle.visible = false;
    fireRoot.add(particle);
    fireParticles.push({ mesh: particle, phase: Math.random() * Math.PI * 2, rate: 1.35 + Math.random() * 1.45, spread: 0.03 + Math.random() * 0.11 });
  }
  stoveLight = new THREE.PointLight(0xff8738, 0, 5.3, 2);
  stoveLight.position.set(stovePosition.x, 0.92, stovePosition.z + 0.92);
  scene.add(stoveLight);
}
buildStove();

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
    collisionFilterGroup: COLLISION_GROUP_RAGDOLL,
    collisionFilterMask: COLLISION_MASK_ALL,
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
  const human = {
    id, origin, colorIndex, skin: dummySkinMaterials[colorIndex], parts: [], partMap: {}, constraints: [],
    active: false, dead: false, health: 100, hitFlash: 0, behavior: id === 'D-01' ? 'peaceful' : 'aggressive', state: 'idle',
    rootX: origin[0], rootZ: origin[2], yaw: 0, stateTime: 0, quietTime: 0, attackCooldown: 0,
    punchSide: 1, walkPhase: 0, wanderTarget: null, navDirection: null
  };
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
    // Elbows/knees act like hinges: their lateral axis stays aligned, with flexion only around that axis.
    addLimitedJoint(human, `upperArm${suffix}`, `lowerArm${suffix}`, [side * 0.015, -0.195, 0], [-side * 0.015, 0.17, -0.015], 0.16, 2.15, [1, 0, 0]);
    addLimitedJoint(human, `lowerArm${suffix}`, `hand${suffix}`, [side * 0.005, -0.17, 0], [-side * 0.005, 0.06, -0.01], 0.42, 0.46, [1, 0, 0]);
    addLimitedJoint(human, 'pelvis', `thigh${suffix}`, [side * 0.125, -0.02, 0], [0, 0.22, 0], 1.08, 0.55, [1, 0, 0]);
    addLimitedJoint(human, `thigh${suffix}`, `shin${suffix}`, [0, -0.22, 0], [0, 0.205, -0.005], 0.14, 2.05, [1, 0, 0]);
    addLimitedJoint(human, `shin${suffix}`, `foot${suffix}`, [0, -0.205, 0], [0, 0.035, -0.075], 0.34, 0.42, [1, 0, 0]);
  }
  for (const part of human.parts) {
    part.restLocal = {
      x: part.body.position.x - ox,
      y: part.body.position.y,
      z: part.body.position.z - oz
    };
    part.restQuaternion = part.body.quaternion.clone();
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

const MANNEQUIN_KNEELING_POSE = {
  pelvis: [0, 0.84, 0, 0.08, 0, 0],
  torso: [0, 1.28, 0.025, 0.08, 0, 0],
  head: [0, 1.69, 0.025, 0, 0, 0],
  upperArmL: [-0.31, 1.18, 0.045, -0.12, 0, -0.04],
  lowerArmL: [-0.34, 0.94, 0.16, -0.72, 0, 0],
  handL: [-0.35, 0.77, 0.29, -0.55, 0, 0],
  upperArmR: [0.31, 1.18, 0.045, -0.12, 0, 0.04],
  lowerArmR: [0.34, 0.94, 0.16, -0.72, 0, 0],
  handR: [0.35, 0.77, 0.29, -0.55, 0, 0],
  thighL: [-0.125, 0.49, 0.055, 0, 0, 0],
  shinL: [-0.13, 0.14, -0.115, -Math.PI / 2, 0, 0],
  footL: [-0.13, 0.065, -0.30, 0, 0, 0],
  thighR: [0.125, 0.49, 0.055, 0, 0, 0],
  shinR: [0.13, 0.14, -0.115, -Math.PI / 2, 0, 0],
  footR: [0.13, 0.065, -0.30, 0, 0, 0]
};

function mannequinLocalEntries(human, style = 'idle') {
  const entries = {};
  const phase = human.walkPhase;
  const isMoving = style === 'walk' || style === 'attack';
  const punchProgress = style === 'attack' ? Math.sin(THREE.MathUtils.clamp(human.stateTime / 0.74, 0, 1) * Math.PI) : 0;
  for (const part of human.parts) {
    const point = part.restLocal;
    const entry = [point.x, point.y, point.z, 0, 0, 0];
    if (part.key === 'pelvis' && isMoving) entry[1] += Math.sin(phase * 2) * 0.014;
    if (part.key === 'torso' && isMoving) entry[1] += Math.sin(phase * 2 + 0.4) * 0.018;
    if (part.key === 'head' && isMoving) entry[1] += Math.sin(phase * 2 + 0.7) * 0.012;
    if (isMoving && /^(thigh|shin|foot)[LR]$/.test(part.key)) {
      const side = part.key.endsWith('L') ? -1 : 1;
      const swing = Math.sin(phase + (side > 0 ? Math.PI : 0));
      if (part.key.startsWith('thigh')) {
        entry[2] += swing * 0.105;
        entry[3] = -swing * 0.3;
      } else if (part.key.startsWith('shin')) {
        entry[2] -= swing * 0.045;
        entry[3] = Math.max(0, swing) * 0.3;
      } else {
        entry[2] += swing * 0.05;
        entry[3] = -swing * 0.12;
      }
    }
    if (isMoving && /^(upperArm|lowerArm|hand)[LR]$/.test(part.key)) {
      const side = part.key.endsWith('L') ? -1 : 1;
      const swing = Math.sin(phase + (side > 0 ? Math.PI : 0));
      entry[2] -= swing * (part.key.startsWith('upperArm') ? 0.085 : 0.045);
      entry[3] = -swing * (part.key.startsWith('upperArm') ? 0.4 : 0.18);
    }
    if (style === 'attack' && /^(upperArm|lowerArm|hand)[LR]$/.test(part.key)) {
      const side = part.key.endsWith('L') ? -1 : 1;
      const punching = side === human.punchSide;
      if (punching) {
        if (part.key.startsWith('upperArm')) {
          entry[0] = side * 0.31; entry[1] = 1.43; entry[2] = 0.12 + punchProgress * 0.11; entry[3] = -0.92 * punchProgress;
        } else if (part.key.startsWith('lowerArm')) {
          entry[0] = side * 0.33; entry[1] = 1.22; entry[2] = 0.27 + punchProgress * 0.2; entry[3] = -1.12 * punchProgress;
        } else {
          entry[0] = side * 0.35; entry[1] = 1.08; entry[2] = 0.44 + punchProgress * 0.26; entry[3] = -0.75 * punchProgress;
        }
      } else if (part.key.startsWith('upperArm')) {
        entry[1] = 1.37; entry[2] = 0.06; entry[3] = -0.26;
      } else if (part.key.startsWith('lowerArm')) {
        entry[1] = 1.18; entry[2] = 0.14; entry[3] = -0.48;
      } else {
        entry[1] = 1.02; entry[2] = 0.2; entry[3] = -0.38;
      }
    }
    entries[part.key] = entry;
  }
  return entries;
}

function makeMannequinWorldPose(human, entries) {
  const pose = {};
  const cosine = Math.cos(human.yaw);
  const sine = Math.sin(human.yaw);
  const yawQuaternion = new CANNON.Quaternion();
  yawQuaternion.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), human.yaw);
  for (const part of human.parts) {
    const entry = entries[part.key] || [part.restLocal.x, part.restLocal.y, part.restLocal.z, 0, 0, 0];
    const localQuaternion = new CANNON.Quaternion();
    localQuaternion.setFromEuler(entry[3] || 0, entry[4] || 0, entry[5] || 0, 'XYZ');
    const worldQuaternion = new CANNON.Quaternion();
    yawQuaternion.mult(localQuaternion, worldQuaternion);
    pose[part.key] = {
      position: new CANNON.Vec3(
        human.rootX + entry[0] * cosine + entry[2] * sine,
        entry[1],
        human.rootZ - entry[0] * sine + entry[2] * cosine
      ),
      quaternion: worldQuaternion
    };
  }
  return pose;
}

function makeStandingMannequinPose(human, style = 'idle') {
  return makeMannequinWorldPose(human, mannequinLocalEntries(human, style));
}

function makeKneelingMannequinPose(human) {
  return makeMannequinWorldPose(human, MANNEQUIN_KNEELING_POSE);
}

function captureMannequinPose(human) {
  const pose = {};
  for (const part of human.parts) {
    pose[part.key] = { position: part.body.position.clone(), quaternion: part.body.quaternion.clone() };
  }
  return pose;
}

function setMannequinBodyType(human, type) {
  for (const part of human.parts) {
    const body = part.body;
    body.type = type;
    body.mass = part.mass;
    body.updateMassProperties();
    body.force.set(0, 0, 0);
    body.torque.set(0, 0, 0);
    body.velocity.set(0, 0, 0);
    body.angularVelocity.set(0, 0, 0);
    body.wakeUp();
  }
  world.broadphase.dirty = true;
}

function setMannequinPose(human, pose, dt) {
  const step = Math.max(0.001, dt);
  for (const part of human.parts) {
    const body = part.body;
    const target = pose[part.key];
    body.velocity.set(
      THREE.MathUtils.clamp((target.position.x - body.position.x) / step, -9, 9),
      THREE.MathUtils.clamp((target.position.y - body.position.y) / step, -9, 9),
      THREE.MathUtils.clamp((target.position.z - body.position.z) / step, -9, 9)
    );
    body.quaternion.copy(target.quaternion);
    body.angularVelocity.set(0, 0, 0);
    body.force.set(0, 0, 0);
    body.torque.set(0, 0, 0);
    body.aabbNeedsUpdate = true;
    body.wakeUp();
  }
  world.broadphase.dirty = true;
}

function blendMannequinPose(human, from, to, progress, dt) {
  const blend = THREE.MathUtils.smoothstep(progress, 0, 1);
  const step = Math.max(0.001, dt);
  for (const part of human.parts) {
    const body = part.body;
    const start = from[part.key];
    const end = to[part.key];
    const x = THREE.MathUtils.lerp(start.position.x, end.position.x, blend);
    const y = THREE.MathUtils.lerp(start.position.y, end.position.y, blend);
    const z = THREE.MathUtils.lerp(start.position.z, end.position.z, blend);
    body.velocity.set(
      THREE.MathUtils.clamp((x - body.position.x) / step, -9, 9),
      THREE.MathUtils.clamp((y - body.position.y) / step, -9, 9),
      THREE.MathUtils.clamp((z - body.position.z) / step, -9, 9)
    );
    start.quaternion.slerp(end.quaternion, blend, body.quaternion);
    body.angularVelocity.set(0, 0, 0);
    body.force.set(0, 0, 0);
    body.torque.set(0, 0, 0);
    body.aabbNeedsUpdate = true;
    body.wakeUp();
  }
  world.broadphase.dirty = true;
}

function beginMannequinRecovery(human) {
  const pelvis = human.partMap.pelvis.body.position;
  human.rootX = THREE.MathUtils.clamp(pelvis.x, -8.0, 8.0);
  human.rootZ = THREE.MathUtils.clamp(pelvis.z, -6.0, 6.0);
  const targetX = human.behavior === 'peaceful'
    ? THREE.MathUtils.clamp(human.rootX + (human.rootX < 0 ? -2.6 : 2.6), -7.4, 7.4)
    : playerBody.position.x;
  const targetZ = human.behavior === 'peaceful' ? human.rootZ + 0.05 : playerBody.position.z;
  human.yaw = Math.atan2(targetX - human.rootX, targetZ - human.rootZ);
  human.recoveryFrom = captureMannequinPose(human);
  human.kneelingPose = makeKneelingMannequinPose(human);
  human.standingPose = makeStandingMannequinPose(human, 'idle');
  human.state = 'recovering-to-knees';
  human.stateTime = 0;
  setMannequinBodyType(human, CANNON.Body.KINEMATIC);
}

function finishMannequinRecovery(human) {
  human.stateTime = 0;
  human.walkPhase = 0;
  human.navDirection = null;
  if (human.behavior === 'peaceful') {
    const side = human.rootX < 0 ? -1 : 1;
    human.wanderTarget = {
      x: THREE.MathUtils.clamp(human.rootX + side * 2.6, -7.4, 7.4),
      z: THREE.MathUtils.clamp(human.rootZ + 0.12, -5.9, 5.9)
    };
    human.state = 'walking-away';
  } else {
    human.state = 'chasing';
  }
}

function getMannequinSteering(human, desiredX, desiredZ) {
  const desiredLength = Math.hypot(desiredX, desiredZ);
  if (desiredLength < 1e-4) return { x: 0, z: 0 };
  desiredX /= desiredLength;
  desiredZ /= desiredLength;
  const angles = [0, 0.38, -0.38, 0.76, -0.76, 1.18, -1.18, 1.62, -1.62];
  let best = { x: desiredX, z: desiredZ, score: -Infinity };
  for (const angle of angles) {
    const cosine = Math.cos(angle);
    const sine = Math.sin(angle);
    const x = desiredX * cosine - desiredZ * sine;
    const z = desiredX * sine + desiredZ * cosine;
    let score = (x * desiredX + z * desiredZ) * 2.1;
    if (human.navDirection) score += (x * human.navDirection.x + z * human.navDirection.z) * 0.24;
    for (const record of physicsRecords) {
      const body = record.body;
      const meta = body.gameMeta;
      if (meta?.kind !== 'prop' || meta.isStored || meta.isHeld) continue;
      const ox = body.position.x - human.rootX;
      const oz = body.position.z - human.rootZ;
      const along = ox * x + oz * z;
      if (along < -0.15 || along > 2.1) continue;
      const across = Math.abs(ox * z - oz * x);
      const radius = Math.min(1.35, Math.max(0.36, body.boundingRadius || 0.55)) + 0.38;
      if (across < radius) {
        const urgency = THREE.MathUtils.clamp((2.1 - Math.max(0, along)) / 1.75, 0.35, 1.45);
        score -= (radius - across) * 2.2 * urgency;
      }
    }
    if (score > best.score) best = { x, z, score };
  }
  human.navDirection = { x: best.x, z: best.z };
  return best;
}

function faceMannequinToward(human, dx, dz, dt) {
  if (Math.hypot(dx, dz) < 1e-4) return;
  const targetYaw = Math.atan2(dx, dz);
  let delta = targetYaw - human.yaw;
  while (delta > Math.PI) delta -= Math.PI * 2;
  while (delta < -Math.PI) delta += Math.PI * 2;
  human.yaw += THREE.MathUtils.clamp(delta, -dt * 5.5, dt * 5.5);
}

function moveMannequinToward(human, targetX, targetZ, speed, dt) {
  const dx = targetX - human.rootX;
  const dz = targetZ - human.rootZ;
  const distance = Math.hypot(dx, dz);
  if (distance < 0.025) return distance;
  const direction = getMannequinSteering(human, dx, dz);
  faceMannequinToward(human, direction.x, direction.z, dt);
  const travel = Math.min(distance, speed * dt);
  human.rootX = THREE.MathUtils.clamp(human.rootX + direction.x * travel, -8.0, 8.0);
  human.rootZ = THREE.MathUtils.clamp(human.rootZ + direction.z * travel, -6.0, 6.0);
  human.walkPhase += dt * (speed + 1.8);
  return distance;
}

function mannequinFallIsSettled(human) {
  let maxSpeed = 0;
  let maxSpin = 0;
  for (const part of human.parts) {
    maxSpeed = Math.max(maxSpeed, part.body.velocity.length());
    maxSpin = Math.max(maxSpin, part.body.angularVelocity.length());
  }
  return maxSpeed < 0.58 && maxSpin < 1.15;
}

function updateMannequinAI(dt) {
  for (const human of mannequins) {
    human.hitFlash = Math.max(0, human.hitFlash - dt);
    if (human.dead || !human.active) continue;
    human.attackCooldown = Math.max(0, human.attackCooldown - dt);
    if (human.state === 'falling') {
      human.stateTime += dt;
      human.quietTime = mannequinFallIsSettled(human) ? human.quietTime + dt : 0;
      if (human.stateTime >= 1.15 && (human.quietTime >= 0.58 || human.stateTime >= 3.85)) beginMannequinRecovery(human);
      continue;
    }
    if (human.state === 'recovering-to-knees') {
      human.stateTime += dt;
      blendMannequinPose(human, human.recoveryFrom, human.kneelingPose, human.stateTime / 1.2, dt);
      if (human.stateTime >= 1.2) {
        human.state = 'kneeling-hold';
        human.stateTime = 0;
      }
      continue;
    }
    if (human.state === 'kneeling-hold') {
      human.stateTime += dt;
      setMannequinPose(human, human.kneelingPose, dt);
      if (human.stateTime >= 0.48) {
        human.state = 'recovering-to-feet';
        human.stateTime = 0;
      }
      continue;
    }
    if (human.state === 'recovering-to-feet') {
      human.stateTime += dt;
      blendMannequinPose(human, human.kneelingPose, human.standingPose, human.stateTime / 1.08, dt);
      if (human.stateTime >= 1.08) finishMannequinRecovery(human);
      continue;
    }
    if (human.state === 'walking-away') {
      const remaining = moveMannequinToward(human, human.wanderTarget.x, human.wanderTarget.z, 1.35, dt);
      if (remaining < 0.24) {
        human.state = 'idle-after';
        human.stateTime = 0;
      }
      setMannequinPose(human, makeStandingMannequinPose(human, remaining > 0.24 ? 'walk' : 'idle'), dt);
      continue;
    }
    if (human.state === 'idle-after') {
      human.stateTime += dt;
      setMannequinPose(human, makeStandingMannequinPose(human, 'idle'), dt);
      continue;
    }
    if (human.behavior !== 'aggressive') continue;
    const dx = playerBody.position.x - human.rootX;
    const dz = playerBody.position.z - human.rootZ;
    const distance = Math.hypot(dx, dz);
    if (human.state === 'attacking') {
      human.stateTime += dt;
      faceMannequinToward(human, dx, dz, dt);
      if (distance > 1.95 && human.stateTime < 0.28) {
        human.state = 'chasing';
        human.stateTime = 0;
        setMannequinPose(human, makeStandingMannequinPose(human, 'walk'), dt);
        continue;
      }
      setMannequinPose(human, makeStandingMannequinPose(human, 'attack'), dt);
      if (!human.attackHitDone && human.stateTime >= 0.27) {
        human.attackHitDone = true;
        if (distance <= 1.55) receiveDamage(8, 'torso');
      }
      if (human.stateTime >= 0.74) {
        human.state = 'chasing';
        human.stateTime = 0;
      }
      continue;
    }
    if (distance <= 1.35 && human.attackCooldown <= 0) {
      human.state = 'attacking';
      human.stateTime = 0;
      human.attackHitDone = false;
      human.attackCooldown = 1.35;
      human.punchSide *= -1;
      faceMannequinToward(human, dx, dz, dt);
      setMannequinPose(human, makeStandingMannequinPose(human, 'attack'), dt);
      continue;
    }
    if (distance > 1.05) {
      moveMannequinToward(human, playerBody.position.x, playerBody.position.z, 2.9, dt);
      setMannequinPose(human, makeStandingMannequinPose(human, 'walk'), dt);
    } else {
      faceMannequinToward(human, dx, dz, dt);
      setMannequinPose(human, makeStandingMannequinPose(human, 'idle'), dt);
    }
  }
}

const playerStart = new CANNON.Vec3(0, 0.87, 5.25);
const playerBody = new CANNON.Body({
  mass: 72,
  material: playerPhysicsMaterial,
  position: playerStart.clone(),
  collisionFilterGroup: COLLISION_GROUP_PLAYER,
  collisionFilterMask: COLLISION_MASK_ALL & ~COLLISION_GROUP_PLAYER,
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
let playerFallArmed = false;
let playerFallPeakY = playerStart.y;
let playerMaxFallSpeed = 0;
let playerPreviousVerticalVelocity = 0;

const handGroup = new THREE.Group();
camera.add(handGroup);
const sleeveMat = new THREE.MeshStandardMaterial({ color: 0x59645a, roughness: 0.86, metalness: 0.02 });
const cuffMat = new THREE.MeshStandardMaterial({ color: 0x252e29, roughness: 0.78, metalness: 0.08 });
const gloveMat = new THREE.MeshStandardMaterial({ color: 0x39443a, roughness: 0.91, metalness: 0.01 });
const gloveEdge = new THREE.MeshStandardMaterial({ color: 0x202921, roughness: 0.84, metalness: 0.03 });
const glovePad = new THREE.MeshStandardMaterial({ color: 0x56624e, roughness: 0.88, metalness: 0.02 });
const weaponSteel = new THREE.MeshStandardMaterial({ color: 0x293238, roughness: 0.46, metalness: 0.68 });
const weaponBlack = new THREE.MeshStandardMaterial({ color: 0x171d20, roughness: 0.62, metalness: 0.42 });
const weaponPolymer = new THREE.MeshStandardMaterial({ color: 0x333a37, roughness: 0.82, metalness: 0.08 });
const weaponWood = new THREE.MeshStandardMaterial({ color: 0x725035, roughness: 0.84, metalness: 0.02 });
const weaponWoodEdge = new THREE.MeshStandardMaterial({ color: 0x4c3726, roughness: 0.9, metalness: 0.01 });
const weaponGlass = new THREE.MeshStandardMaterial({ color: 0x5186b2, roughness: 0.23, metalness: 0.26, emissive: 0x10233a, emissiveIntensity: 0.2 });
const weaponView = new THREE.Group();
handGroup.add(weaponView);
const weaponModel = new THREE.Group();
weaponView.add(weaponModel);
const weaponBasePosition = new THREE.Vector3(0.28, -0.33, -0.78);
const weaponBaseRotation = new THREE.Euler(0.25, 0.25, 0.015, 'XYZ');
weaponView.position.copy(weaponBasePosition);
weaponView.rotation.copy(weaponBaseRotation);
const weaponHands = {};
let magazineGroup = null;
let magazineBasePosition = new THREE.Vector3(0, -0.145, 0.035);
let pumpGroup = null;
let pumpBasePosition = new THREE.Vector3(0, -0.045, -0.44);
const muzzleFlash = new THREE.Group();
weaponView.add(muzzleFlash);
let muzzleFlashTimer = 0;
let weaponRecoil = 0;
let reloadTimer = 0;
let reloadProgress = 0;
let fireCooldown = 0;
let fireHeld = false;
let meleeTimer = 0;
let meleeHitApplied = false;
let shotgunPumpTimer = 0;
let currentWeaponId = null;
const weaponAmmo = new Map(WEAPON_CATALOG.map((weapon) => [weapon.id, createAmmoState(weapon)]));
let gunAudioContext = null;
let gunNoiseBuffer = null;
const fingerRigs = [];
let handPose = 0;
let handTargetPose = 0;
function setHandPose(value) { handTargetPose = heldBody ? value : 0.78; }
function block(geometry, material, position, rotationZ = 0) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(position[0], position[1], position[2]);
  mesh.rotation.z = rotationZ;
  mesh.castShadow = false;
  mesh.receiveShadow = false;
  return mesh;
}
function weaponBox(parent, size, position, material, rotation = [0, 0, 0]) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(size[0], size[1], size[2]), material);
  mesh.position.set(position[0], position[1], position[2]);
  mesh.rotation.set(rotation[0], rotation[1], rotation[2]);
  mesh.castShadow = false;
  mesh.receiveShadow = false;
  parent.add(mesh);
  return mesh;
}
function weaponCylinder(parent, radius, length, position, material, segments = 12) {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, length, segments, 1), material);
  mesh.position.set(position[0], position[1], position[2]);
  mesh.rotation.x = Math.PI / 2;
  mesh.castShadow = false;
  mesh.receiveShadow = false;
  parent.add(mesh);
  return mesh;
}

const weaponTan = new THREE.MeshStandardMaterial({ color: 0x796b52, roughness: 0.79, metalness: 0.08 });
const weaponSteelLight = new THREE.MeshStandardMaterial({ color: 0x566065, roughness: 0.4, metalness: 0.74 });
const weaponBlade = new THREE.MeshStandardMaterial({ color: 0x89949a, roughness: 0.31, metalness: 0.82 });
const weaponGrip = new THREE.MeshStandardMaterial({ color: 0x252a29, roughness: 0.92, metalness: 0.02 });
const weaponNail = new THREE.MeshStandardMaterial({ color: 0x8a8f8d, roughness: 0.38, metalness: 0.83 });

function buildMuzzleFlash() {
  const flashCone = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.19, 6), new THREE.MeshBasicMaterial({ color: 0xffbd68, transparent: true, opacity: 0.92 }));
  flashCone.rotation.x = -Math.PI / 2;
  flashCone.position.z = -0.075;
  muzzleFlash.add(flashCone);
  muzzleFlash.add(new THREE.Mesh(new THREE.OctahedronGeometry(0.055, 0), new THREE.MeshBasicMaterial({ color: 0xfff0b0 })));
  const flashLight = new THREE.PointLight(0xffa743, 0, 2.2, 2);
  muzzleFlash.add(flashLight);
  muzzleFlash.userData.light = flashLight;
  muzzleFlash.visible = false;
}
buildMuzzleFlash();

function clearWeaponModel() {
  weaponModel.traverse((child) => { if (child.geometry) child.geometry.dispose(); });
  weaponModel.clear();
  magazineGroup = null;
  pumpGroup = null;
  snowPayload = null;
}

function buildAK47Model() {
  weaponBox(weaponModel, [0.205, 0.145, 0.46], [0, 0.005, 0.035], weaponSteel);
  weaponBox(weaponModel, [0.184, 0.036, 0.43], [0, 0.095, 0.025], weaponBlack);
  weaponBox(weaponModel, [0.045, 0.025, 0.47], [0, 0.132, -0.02], weaponSteel);
  weaponBox(weaponModel, [0.11, 0.02, 0.11], [0, 0.158, -0.15], weaponBlack);
  weaponBox(weaponModel, [0.018, 0.026, 0.16], [0.112, 0.025, 0.035], weaponBlack);
  weaponBox(weaponModel, [0.055, 0.036, 0.13], [0.112, 0.026, -0.03], weaponSteel);
  weaponBox(weaponModel, [0.065, 0.025, 0.10], [-0.113, 0.025, 0.105], weaponBlack);
  weaponBox(weaponModel, [0.06, 0.025, 0.10], [-0.12, -0.005, 0.16], weaponSteel);
  weaponCylinder(weaponModel, 0.033, 0.76, [0, 0.025, -0.575], weaponSteel, 10);
  weaponCylinder(weaponModel, 0.046, 0.13, [0, 0.025, -1.015], weaponBlack, 10);
  weaponBox(weaponModel, [0.085, 0.065, 0.08], [0, 0.115, -0.88], weaponSteel);
  weaponBox(weaponModel, [0.018, 0.075, 0.025], [0, 0.18, -0.91], weaponBlack);
  weaponBox(weaponModel, [0.13, 0.025, 0.045], [0, 0.153, -0.90], weaponSteel);
  for (const side of [-1, 1]) weaponBox(weaponModel, [0.012, 0.028, 0.045], [side * 0.043, 0.026, -1.015], weaponSteel);
  weaponBox(weaponModel, [0.17, 0.095, 0.36], [0, -0.045, -0.39], weaponWood);
  weaponBox(weaponModel, [0.178, 0.016, 0.31], [0, 0.014, -0.39], weaponWoodEdge);
  for (const side of [-1, 1]) {
    weaponBox(weaponModel, [0.014, 0.022, 0.31], [side * 0.09, -0.045, -0.39], weaponSteel);
    for (let rib = 0; rib < 7; rib++) weaponBox(weaponModel, [0.009, 0.013, 0.018], [side * 0.101, -0.045, -0.52 + rib * 0.043], weaponBlack);
  }
  weaponBox(weaponModel, [0.055, 0.035, 0.44], [0, 0.118, -0.39], weaponBlack);
  weaponBox(weaponModel, [0.11, 0.06, 0.08], [0, 0.16, -0.105], weaponSteel);
  weaponBox(weaponModel, [0.045, 0.047, 0.028], [0, 0.195, -0.115], weaponBlack);
  const optic = new THREE.Group();
  optic.position.set(0, 0.226, -0.17);
  weaponModel.add(optic);
  weaponCylinder(optic, 0.063, 0.28, [0, 0, -0.015], weaponBlack, 8);
  weaponCylinder(optic, 0.073, 0.055, [0, 0, 0.105], weaponSteel, 8);
  weaponCylinder(optic, 0.073, 0.04, [0, 0, -0.155], weaponSteel, 8);
  const opticGlass = new THREE.Mesh(new THREE.CircleGeometry(0.053, 8), weaponGlass);
  opticGlass.position.z = 0.135;
  optic.add(opticGlass);
  const opticShade = new THREE.Mesh(new THREE.CircleGeometry(0.047, 8), weaponGlass);
  opticShade.position.z = -0.177;
  opticShade.rotation.y = Math.PI;
  optic.add(opticShade);
  weaponBox(weaponModel, [0.11, 0.025, 0.22], [0, 0.178, -0.17], weaponSteel);
  weaponBox(weaponModel, [0.088, 0.22, 0.115], [0.012, -0.17, 0.165], weaponPolymer, [-0.18, 0, -0.04]);
  const triggerGuard = new THREE.Mesh(new THREE.TorusGeometry(0.061, 0.009, 5, 12), weaponSteel);
  triggerGuard.position.set(0, -0.105, 0.075);
  weaponModel.add(triggerGuard);
  weaponBox(weaponModel, [0.018, 0.09, 0.022], [0.015, -0.10, 0.045], weaponBlack, [0.22, 0, 0]);
  magazineGroup = new THREE.Group();
  magazineBasePosition.set(0, -0.145, 0.035);
  weaponModel.add(magazineGroup);
  weaponBox(magazineGroup, [0.11, 0.26, 0.17], [0, -0.13, 0], weaponPolymer, [-0.12, 0, 0]);
  weaponBox(magazineGroup, [0.116, 0.035, 0.175], [0, -0.252, -0.01], weaponBlack, [-0.12, 0, 0]);
  for (let rib = 0; rib < 4; rib++) weaponBox(magazineGroup, [0.115, 0.012, 0.18], [0, -0.06 - rib * 0.045, 0], weaponSteel, [-0.12, 0, 0]);
  weaponBox(weaponModel, [0.105, 0.105, 0.44], [0, 0.015, 0.445], weaponPolymer);
  weaponBox(weaponModel, [0.13, 0.12, 0.045], [0, 0.005, 0.67], weaponBlack);
  weaponBox(weaponModel, [0.09, 0.045, 0.24], [0, 0.078, 0.42], weaponSteel);
  weaponBox(weaponModel, [0.18, 0.012, 0.12], [0, -0.048, 0.57], weaponBlack);
}

function buildM4A1Model() {
  weaponBox(weaponModel, [0.2, 0.15, 0.43], [0, 0.005, 0.035], weaponSteel);
  weaponBox(weaponModel, [0.19, 0.045, 0.39], [0, 0.097, 0.025], weaponBlack);
  weaponBox(weaponModel, [0.05, 0.025, 0.55], [0, 0.134, -0.09], weaponSteel);
  weaponBox(weaponModel, [0.17, 0.105, 0.4], [0, -0.025, -0.39], weaponPolymer);
  weaponBox(weaponModel, [0.19, 0.02, 0.42], [0, 0.045, -0.38], weaponBlack);
  for (const side of [-1, 1]) {
    weaponBox(weaponModel, [0.015, 0.025, 0.35], [side * 0.095, -0.025, -0.4], weaponSteel);
    for (let rib = 0; rib < 6; rib++) weaponBox(weaponModel, [0.012, 0.012, 0.025], [side * 0.105, -0.025, -0.55 + rib * 0.06], weaponBlack);
  }
  weaponCylinder(weaponModel, 0.029, 0.88, [0, 0.02, -0.75], weaponSteel, 10);
  weaponCylinder(weaponModel, 0.043, 0.11, [0, 0.02, -1.245], weaponBlack, 10);
  weaponBox(weaponModel, [0.045, 0.12, 0.04], [0, 0.17, -1.11], weaponSteel);
  weaponBox(weaponModel, [0.09, 0.04, 0.08], [0, 0.125, -1.08], weaponBlack);
  weaponBox(weaponModel, [0.17, 0.024, 0.48], [0, 0.16, -0.17], weaponBlack);
  weaponBox(weaponModel, [0.12, 0.075, 0.11], [0, 0.205, -0.12], weaponSteel);
  const optic = new THREE.Group();
  optic.position.set(0, 0.25, -0.19);
  weaponModel.add(optic);
  weaponCylinder(optic, 0.055, 0.25, [0, 0, 0], weaponBlack, 8);
  weaponCylinder(optic, 0.064, 0.035, [0, 0, 0.12], weaponSteel, 8);
  const glass = new THREE.Mesh(new THREE.CircleGeometry(0.044, 8), weaponGlass);
  glass.position.z = 0.14;
  optic.add(glass);
  weaponBox(weaponModel, [0.09, 0.035, 0.09], [0, 0.19, 0.03], weaponBlack);
  weaponBox(weaponModel, [0.09, 0.19, 0.12], [0.012, -0.15, 0.16], weaponPolymer, [-0.17, 0, 0]);
  weaponBox(weaponModel, [0.11, 0.04, 0.4], [0, -0.008, 0.44], weaponBlack);
  weaponBox(weaponModel, [0.08, 0.11, 0.08], [0, 0.005, 0.64], weaponPolymer);
  weaponBox(weaponModel, [0.07, 0.095, 0.06], [0, 0.015, 0.72], weaponBlack);
  magazineGroup = new THREE.Group();
  magazineBasePosition.set(0, -0.145, 0.035);
  weaponModel.add(magazineGroup);
  weaponBox(magazineGroup, [0.11, 0.26, 0.16], [0, -0.13, 0], weaponBlack, [-0.06, 0, 0]);
  weaponBox(magazineGroup, [0.12, 0.028, 0.17], [0, -0.255, -0.01], weaponSteel);
  for (let rib = 0; rib < 4; rib++) weaponBox(magazineGroup, [0.115, 0.012, 0.17], [0, -0.07 - rib * 0.045, 0], weaponTan);
  weaponBox(weaponModel, [0.18, 0.012, 0.13], [0, -0.045, 0.56], weaponBlack);
}

function buildPistolModel(weapon) {
  const isTT = weapon.id === 'tt';
  const isGlock = weapon.id === 'glock-17';
  const slideLength = isTT ? 0.39 : isGlock ? 0.34 : 0.32;
  const slideZ = -0.055;
  const slideMaterial = isGlock ? weaponPolymer : weaponSteel;
  weaponBox(weaponModel, [0.14, 0.095, 0.31], [0, -0.035, 0.055], weaponBlack);
  weaponBox(weaponModel, [0.13, 0.105, slideLength], [0, 0.035, slideZ], slideMaterial);
  weaponBox(weaponModel, [0.12, 0.018, slideLength * 0.78], [0, 0.092, slideZ - 0.015], weaponSteelLight);
  weaponCylinder(weaponModel, isTT ? 0.025 : 0.022, isTT ? 0.35 : 0.28, [0, 0.025, -0.27], weaponBlack, 9);
  weaponBox(weaponModel, [0.09, 0.19, 0.12], [0.008, -0.15, 0.155], isGlock ? weaponPolymer : weaponGrip, [-0.19, 0, 0]);
  weaponBox(weaponModel, [0.095, 0.035, 0.13], [0.008, -0.235, 0.16], weaponBlack, [-0.19, 0, 0]);
  weaponBox(weaponModel, [0.013, 0.075, 0.015], [0.02, -0.1, 0.08], weaponSteel, [0.22, 0, 0]);
  weaponBox(weaponModel, [0.035, 0.038, 0.035], [0, 0.105, 0.075], weaponBlack);
  weaponBox(weaponModel, [0.035, 0.04, 0.03], [0, 0.105, slideZ - slideLength * 0.46], weaponBlack);
  if (isGlock) {
    weaponBox(weaponModel, [0.17, 0.035, 0.18], [0, -0.068, -0.11], weaponBlack);
    weaponBox(weaponModel, [0.105, 0.018, 0.08], [0, 0.1, -0.17], weaponTan);
  } else {
    weaponBox(weaponModel, [0.018, 0.075, 0.19], [0.076, 0.035, 0.035], weaponBlack);
    weaponBox(weaponModel, [0.02, 0.07, 0.16], [-0.078, 0.035, 0.035], weaponSteelLight);
    if (isTT) weaponBox(weaponModel, [0.012, 0.085, 0.17], [0.075, 0.035, -0.12], weaponSteelLight);
    weaponBox(weaponModel, [0.09, 0.14, 0.018], [0, -0.16, 0.22], weaponWoodEdge, [-0.19, 0, 0]);
  }
  magazineGroup = new THREE.Group();
  magazineBasePosition.set(0, -0.17, 0.15);
  weaponModel.add(magazineGroup);
  weaponBox(magazineGroup, [0.09, 0.18, 0.105], [0, -0.08, 0], weaponBlack, [-0.17, 0, 0]);
  weaponBox(magazineGroup, [0.095, 0.018, 0.11], [0, -0.17, -0.005], weaponSteelLight, [-0.17, 0, 0]);
}

function buildShotgunModel() {
  weaponBox(weaponModel, [0.2, 0.17, 0.39], [0, 0.005, 0.02], weaponSteel);
  weaponBox(weaponModel, [0.14, 0.055, 0.31], [0, 0.11, 0.01], weaponBlack);
  weaponCylinder(weaponModel, 0.038, 0.98, [0, 0.052, -0.77], weaponSteelLight, 10);
  weaponCylinder(weaponModel, 0.046, 0.12, [0, 0.052, -1.32], weaponBlack, 10);
  weaponCylinder(weaponModel, 0.027, 0.84, [0, -0.055, -0.63], weaponBlack, 10);
  weaponBox(weaponModel, [0.045, 0.1, 0.08], [0, 0.135, -1.17], weaponSteel);
  weaponBox(weaponModel, [0.11, 0.035, 0.17], [0, 0.13, -0.12], weaponBlack);
  weaponBox(weaponModel, [0.11, 0.21, 0.13], [0, -0.16, 0.16], weaponPolymer, [-0.14, 0, 0]);
  weaponBox(weaponModel, [0.14, 0.12, 0.43], [0, 0.0, 0.48], weaponWood);
  weaponBox(weaponModel, [0.16, 0.13, 0.05], [0, -0.005, 0.69], weaponBlack);
  weaponBox(weaponModel, [0.19, 0.012, 0.1], [0, -0.06, 0.57], weaponBlack);
  pumpGroup = new THREE.Group();
  pumpBasePosition.set(0, -0.035, -0.48);
  pumpGroup.position.copy(pumpBasePosition);
  weaponModel.add(pumpGroup);
  weaponBox(pumpGroup, [0.16, 0.11, 0.26], [0, 0, 0], weaponWood);
  weaponBox(pumpGroup, [0.17, 0.018, 0.23], [0, 0.052, 0], weaponWoodEdge);
  for (let rib = 0; rib < 5; rib++) weaponBox(pumpGroup, [0.17, 0.014, 0.018], [0, -0.045 + rib * 0.021, -0.105], weaponBlack);
  const guard = new THREE.Mesh(new THREE.TorusGeometry(0.065, 0.009, 5, 12), weaponSteel);
  guard.position.set(0, -0.095, 0.11);
  weaponModel.add(guard);
  weaponBox(weaponModel, [0.018, 0.08, 0.02], [0.01, -0.095, 0.08], weaponBlack);
  magazineGroup = null;
}

function buildMeleeModel(weapon) {
  if (weapon.model === 'cleaver') {
    weaponBox(weaponModel, [0.075, 0.24, 0.085], [0, -0.1, 0.2], weaponGrip, [-0.12, 0, 0]);
    weaponBox(weaponModel, [0.09, 0.055, 0.095], [0, -0.205, 0.2], weaponSteel);
    weaponBox(weaponModel, [0.31, 0.24, 0.065], [-0.02, 0.075, -0.17], weaponBlade, [0, 0, -0.08]);
    weaponBox(weaponModel, [0.26, 0.025, 0.072], [-0.035, -0.048, -0.18], weaponSteelLight, [0, 0, -0.08]);
    weaponBox(weaponModel, [0.075, 0.22, 0.06], [0.1, 0.08, -0.19], weaponSteel, [0, 0, -0.1]);
    weaponBox(weaponModel, [0.025, 0.025, 0.02], [0, -0.07, 0.2], weaponTan);
  } else if (weapon.model === 'sledgehammer') {
    weaponCylinder(weaponModel, 0.033, 0.98, [0, -0.02, -0.08], weaponWoodEdge, 8);
    weaponCylinder(weaponModel, 0.043, 0.34, [0, -0.02, 0.24], weaponGrip, 8);
    for (let ring = 0; ring < 4; ring++) weaponBox(weaponModel, [0.09, 0.012, 0.018], [0, -0.02, 0.12 + ring * 0.055], weaponSteel);
    weaponBox(weaponModel, [0.42, 0.2, 0.22], [0, 0.02, -0.64], weaponSteel);
    weaponBox(weaponModel, [0.11, 0.23, 0.24], [-0.18, 0.02, -0.64], weaponBlack);
    weaponBox(weaponModel, [0.11, 0.23, 0.24], [0.18, 0.02, -0.64], weaponBlack);
    weaponBox(weaponModel, [0.26, 0.035, 0.235], [0, 0.135, -0.64], weaponSteelLight);
  } else if (weapon.model === 'shovel') {
    weaponCylinder(weaponModel, 0.029, 0.98, [0, -0.005, -0.12], weaponWood, 10);
    weaponCylinder(weaponModel, 0.04, 0.25, [0, 0.0, 0.28], weaponGrip, 9);
    weaponBox(weaponModel, [0.11, 0.07, 0.075], [0, -0.005, -0.36], weaponSteel);
    weaponBox(weaponModel, [0.31, 0.045, 0.32], [0, -0.035, -0.59], weaponSteelLight, [0.08, 0, 0]);
    weaponBox(weaponModel, [0.29, 0.018, 0.075], [0, -0.006, -0.69], weaponBlade, [0.08, 0, 0]);
    weaponBox(weaponModel, [0.035, 0.024, 0.035], [0, 0.015, -0.43], weaponBlack);
    snowPayload = new THREE.Mesh(new THREE.IcosahedronGeometry(0.12, 1), snowMaterial);
    snowPayload.scale.set(1.15, 0.62, 1.45);
    snowPayload.position.set(0, 0.006, -0.57);
    snowPayload.rotation.set(0.18, 0.2, -0.12);
    snowPayload.visible = carriedSnow > 0;
    weaponModel.add(snowPayload);
  } else {
    weaponCylinder(weaponModel, 0.058, 0.88, [0, -0.005, -0.17], weaponWood, 9);
    weaponCylinder(weaponModel, 0.045, 0.28, [0, -0.01, 0.33], weaponGrip, 8);
    weaponBox(weaponModel, [0.12, 0.1, 0.04], [0, -0.005, 0.17], weaponBlack);
    for (let nail = 0; nail < 7; nail++) {
      const z = -0.52 + nail * 0.105;
      const side = nail % 2 === 0 ? 1 : -1;
      const spike = new THREE.Mesh(new THREE.ConeGeometry(0.021, 0.13, 4), weaponNail);
      spike.position.set(side * 0.062, 0.018, z);
      spike.rotation.z = side * Math.PI / 2;
      weaponModel.add(spike);
      weaponBox(weaponModel, [0.025, 0.025, 0.025], [side * 0.035, 0.018, z + 0.035], weaponBlack);
    }
  }
}

function setHandTarget(which, palmTarget) {
  const hand = weaponHands[which];
  if (!hand) return;
  const mirrored = which === 'left' ? -1 : 1;
  const position = new THREE.Vector3(
    palmTarget[0] - mirrored * 0.15,
    palmTarget[1] - 0.285,
    palmTarget[2] + 0.025
  );
  hand.userData.gripPosition = position;
  hand.userData.gripRotation = new THREE.Euler(which === 'left' ? 0.08 : -0.06, 0, which === 'left' ? 0.05 : -0.05);
  hand.position.copy(position);
  hand.rotation.copy(hand.userData.gripRotation);
}

function buildWeaponModel(weapon) {
  clearWeaponModel();
  if (isMeleeWeapon(weapon)) buildMeleeModel(weapon);
  else if (weapon.model === 'ak') buildAK47Model();
  else if (weapon.model === 'm4') buildM4A1Model();
  else if (weapon.type === 'pistol') buildPistolModel(weapon);
  else if (weapon.type === 'shotgun') buildShotgunModel();
  const cameraPose = isMeleeWeapon(weapon)
    ? { position: [0.29, -0.34, -0.82], rotation: [0.2, 0.22, 0.04], left: [-0.08, -0.10, -0.055], right: [0.07, -0.105, 0.18] }
    : weapon.type === 'pistol'
      ? { position: [0.3, -0.39, -0.69], rotation: [0.18, 0.22, 0.02], left: [-0.045, -0.14, 0.17], right: [0.035, -0.105, 0.15] }
      : weapon.type === 'shotgun'
        ? { position: [0.28, -0.34, -0.82], rotation: [0.23, 0.24, 0.015], left: [-0.09, -0.015, -0.46], right: [0.07, -0.105, 0.17] }
        : { position: [0.28, -0.33, -0.78], rotation: [0.25, 0.25, 0.015], left: [-0.09, -0.015, -0.39], right: [0.07, -0.105, 0.17] };
  weaponBasePosition.set(...cameraPose.position);
  weaponBaseRotation.set(...cameraPose.rotation, 'XYZ');
  weaponView.position.copy(weaponBasePosition);
  weaponView.rotation.copy(weaponBaseRotation);
  setHandTarget('left', cameraPose.left);
  setHandTarget('right', cameraPose.right);
  const muzzleZ = weapon.type === 'pistol' ? -0.43 : weapon.type === 'shotgun' ? -1.38 : isMeleeWeapon(weapon) ? 0 : -1.09;
  muzzleFlash.position.set(0, weapon.type === 'shotgun' ? 0.052 : 0.025, muzzleZ);
  muzzleFlash.visible = false;
  if (snowPayload) snowPayload.visible = carriedSnow > 0;
  weaponModel.visible = true;
}

function currentWeapon() { return WEAPON_BY_ID.get(currentWeaponId) || null; }
function currentWeaponAmmo() { return currentWeaponId ? weaponAmmo.get(currentWeaponId) || null : null; }
function equipWeapon(id, announce = true) {
  const weapon = WEAPON_BY_ID.get(id);
  if (!weapon) return false;
  currentWeaponId = id;
  fireHeld = false;
  fireCooldown = 0;
  reloadTimer = 0;
  reloadProgress = 0;
  meleeTimer = 0;
  meleeHitApplied = false;
  shovelActionTimer = 0;
  shovelAction = null;
  shotgunPumpTimer = 0;
  weaponRecoil = 0;
  muzzleFlashTimer = 0;
  buildWeaponModel(weapon);
  updateAmmoHUD();
  if (announce) toast(`${weapon.name.toUpperCase()} · ГОТОВО`, 0.9);
  return true;
}

function buildHand(side) {
  const group = new THREE.Group();
  const mirrored = side < 0 ? -1 : 1;
  const forearm = block(new THREE.BoxGeometry(0.145, 0.33, 0.17), sleeveMat, [-mirrored * 0.045, -0.065, 0], mirrored * 0.37);
  group.add(forearm);
  const forearmSeam = block(new THREE.BoxGeometry(0.152, 0.018, 0.176), gloveEdge, [-mirrored * 0.018, 0.058, -0.002], mirrored * 0.37);
  group.add(forearmSeam);
  const cuff = block(new THREE.BoxGeometry(0.18, 0.075, 0.19), cuffMat, [mirrored * 0.082, 0.19, -0.006], mirrored * 0.37);
  group.add(cuff);
  group.add(block(new THREE.BoxGeometry(0.145, 0.018, 0.194), glovePad, [mirrored * 0.082, 0.166, -0.006], mirrored * 0.37));

  const palm = new THREE.Group();
  palm.position.set(mirrored * 0.15, 0.285, -0.025);
  palm.rotation.z = -mirrored * 0.06;
  group.add(palm);
  palm.add(block(new THREE.BoxGeometry(0.225, 0.165, 0.112), gloveMat, [0, 0, 0]));
  palm.add(block(new THREE.BoxGeometry(0.135, 0.074, 0.012), glovePad, [0, 0.005, -0.062]));
  palm.add(block(new THREE.BoxGeometry(0.084, 0.018, 0.018), gloveEdge, [0, -0.071, -0.052]));
  palm.add(block(new THREE.BoxGeometry(0.196, 0.025, 0.018), gloveEdge, [0, 0.067, -0.057]));

  const fingerLengths = [0.081, 0.094, 0.087, 0.071];
  for (let i = 0; i < 4; i++) {
    const finger = new THREE.Group();
    const proximalLength = fingerLengths[i] * 0.59;
    const distalLength = fingerLengths[i] * 0.41;
    finger.position.set((i - 1.5) * 0.052, 0.078, -0.018);
    palm.add(finger);
    finger.add(block(new THREE.BoxGeometry(0.041, proximalLength, 0.076), gloveMat, [0, proximalLength * 0.5, 0]));
    finger.add(block(new THREE.BoxGeometry(0.044, 0.022, 0.078), glovePad, [0, proximalLength - 0.008, -0.004]));
    const distal = new THREE.Group();
    distal.position.y = proximalLength - 0.004;
    finger.add(distal);
    distal.add(block(new THREE.BoxGeometry(0.037, distalLength, 0.071), gloveMat, [0, distalLength * 0.48, 0]));
    distal.add(block(new THREE.BoxGeometry(0.038, 0.015, 0.073), glovePad, [0, distalLength - 0.007, -0.002]));
    fingerRigs.push({ base: finger, distal, fan: (i - 1.5) * 0.055, side: mirrored });
  }

  const thumb = new THREE.Group();
  thumb.position.set(mirrored * 0.104, -0.008, -0.025);
  thumb.rotation.z = mirrored * 0.54;
  palm.add(thumb);
  thumb.add(block(new THREE.BoxGeometry(0.057, 0.085, 0.078), gloveMat, [0, 0.041, 0]));
  const thumbTip = new THREE.Group();
  thumbTip.position.y = 0.075;
  thumb.add(thumbTip);
  thumbTip.add(block(new THREE.BoxGeometry(0.052, 0.067, 0.072), glovePad, [0, 0.031, -0.002]));
  fingerRigs.push({ base: thumb, distal: thumbTip, fan: 0.54, side: mirrored, thumb: true });

  const palmTarget = side < 0 ? [-0.09, -0.015, -0.39] : [0.07, -0.105, 0.17];
  weaponView.add(group);
  const which = side < 0 ? 'left' : 'right';
  weaponHands[which] = group;
  setHandTarget(which, palmTarget);
}
buildHand(-1);
buildHand(1);
handPose = handTargetPose = 0.78;
handGroup.visible = false;
weaponView.visible = false;
weaponModel.visible = false;
function updateHandPose(dt) {
  handPose = THREE.MathUtils.damp(handPose, handTargetPose, 13, dt);
  for (const rig of fingerRigs) {
    if (rig.thumb) {
      rig.base.rotation.x = -handPose * 0.6;
      rig.base.rotation.z = rig.side * (0.54 + handPose * 0.62);
      rig.distal.rotation.x = -handPose * 0.9;
    } else {
      rig.base.rotation.x = -handPose * 0.58;
      rig.base.rotation.z = rig.fan * (0.25 + handPose * 0.25);
      rig.distal.rotation.x = -handPose * 1.28;
    }
  }
}

function updateAmmoHUD() {
  const weapon = currentWeapon();
  const ammo = currentWeaponAmmo();
  const controls = document.querySelector('.weapon-controls');
  if (controls) controls.style.display = weapon ? 'block' : 'none';
  const label = $('ammo-count');
  const fireLabel = $('fire-label');
  const fireButton = $('fire-button');
  const reloadButton = $('reload-button');
  if (!weapon) {
    if (label) label.textContent = '';
    if (fireLabel) fireLabel.textContent = '';
    if (fireButton) {
      fireButton.disabled = true;
      fireButton.setAttribute('aria-label', 'Нет экипированного предмета');
      fireButton.classList.remove('melee-mode');
    }
    if (reloadButton) reloadButton.style.display = 'none';
    return;
  }
  if (label) label.textContent = weapon.magazineSize === null ? '' : `${ammo.magazine} / ${ammo.reserve}`;
  if (fireLabel) fireLabel.textContent = isMeleeWeapon(weapon) ? 'УДАР' : 'ОГОНЬ';
  if (fireButton) {
    fireButton.disabled = weapon.magazineSize !== null && ammo.magazine <= 0 && ammo.reserve <= 0;
    fireButton.setAttribute('aria-label', `${weapon.name}: ${isMeleeWeapon(weapon) ? 'удар' : 'огонь'}`);
    fireButton.classList.toggle('melee-mode', isMeleeWeapon(weapon));
  }
  if (reloadButton) reloadButton.style.display = weapon.magazineSize === null ? 'none' : 'grid';
}

function ensureGunAudio() {
  if (gunAudioContext) return gunAudioContext;
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return null;
  gunAudioContext = new AudioContextClass();
  const frames = Math.floor(gunAudioContext.sampleRate * 0.65);
  gunNoiseBuffer = gunAudioContext.createBuffer(1, frames, gunAudioContext.sampleRate);
  const data = gunNoiseBuffer.getChannelData(0);
  for (let i = 0; i < frames; i++) data[i] = Math.random() * 2 - 1;
  return gunAudioContext;
}

function playFireCrackle() {
  try {
    const context = ensureGunAudio();
    if (!context || !gunNoiseBuffer) return;
    if (context.state === 'suspended') context.resume();
    const now = context.currentTime;
    const duration = 0.035 + Math.random() * 0.055;
    const source = context.createBufferSource();
    source.buffer = gunNoiseBuffer;
    const filter = context.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(850 + Math.random() * 1800, now);
    filter.Q.value = 1.6 + Math.random() * 1.4;
    const gain = context.createGain();
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.035 + Math.random() * 0.025, now + 0.006);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    source.connect(filter);
    filter.connect(gain);
    gain.connect(context.destination);
    source.start(now, Math.random() * 0.45, duration);
    source.stop(now + duration + 0.01);
  } catch (_) {
    // The stove and warmth work without audio on WebViews that block Web Audio.
  }
}

function updateFireEffects(dt) {
  if (stoveLit) {
    stoveFuel = Math.max(0, stoveFuel - dt);
    if (stoveFuel <= 0) {
      stoveLit = false;
      toast('ДРОВА ПРОГОРЕЛИ', 1.0);
    }
  }
  if (fireRoot) fireRoot.visible = stoveLit;
  if (stoveDoorGlow) stoveDoorGlow.visible = stoveLit;
  if (stoveLight) stoveLight.intensity = stoveLit ? 2.3 + Math.sin(elapsed * 17) * 0.28 + Math.random() * 0.18 : 0;
  for (const particle of fireParticles) {
    if (!stoveLit) {
      particle.mesh.visible = false;
      continue;
    }
    particle.phase = (particle.phase + dt * particle.rate) % (Math.PI * 2);
    const t = particle.phase / (Math.PI * 2);
    particle.mesh.position.set(
      Math.sin(particle.phase * 2.15) * particle.spread,
      0.11 + t * 0.54,
      Math.cos(particle.phase * 1.55) * particle.spread * 0.42
    );
    particle.mesh.rotation.set(particle.phase * 0.7, particle.phase * 0.45, particle.phase * 1.1);
    particle.mesh.scale.set(0.65 + t * 0.48, 0.72 + t * 0.66, 0.62 + t * 0.5);
    particle.mesh.material.opacity = Math.sin(Math.PI * t) * 0.92;
    particle.mesh.visible = t < 0.96;
  }
  if (stoveLit) {
    stoveCrackleTimer -= dt;
    if (stoveCrackleTimer <= 0) {
      playFireCrackle();
      stoveCrackleTimer = 0.55 + Math.random() * 1.15;
    }
  }
}

function playWeaponSound(weapon, action = 'fire') {
  try {
    const context = ensureGunAudio();
    if (!context) return;
    if (context.state === 'suspended') context.resume();
    const now = context.currentTime;
    const preset = weapon.sound;
    const duration = action === 'fire' ? preset.duration : action === 'swing' ? 0.17 : action === 'impact' ? 0.095 : 0.075;
    const centerFrequency = action === 'swing' ? preset.swing : action === 'impact' ? preset.impact : preset.frequency;
    const noiseLevel = action === 'fire' ? preset.noise : action === 'impact' ? preset.noise * 0.48 : action === 'swing' ? 0.18 : 0.08;
    const filter = context.createBiquadFilter();
    filter.type = action === 'swing' ? 'highpass' : 'lowpass';
    filter.frequency.setValueAtTime(action === 'fire' ? preset.filter : Math.max(240, preset.filter * 0.72), now);
    filter.Q.value = action === 'swing' ? 0.7 : 0.5;
    const noiseGain = context.createGain();
    noiseGain.gain.setValueAtTime(Math.min(0.34, noiseLevel * 0.24), now);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    const noiseSource = context.createBufferSource();
    noiseSource.buffer = gunNoiseBuffer;
    noiseSource.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(context.destination);
    noiseSource.start(now);
    noiseSource.stop(now + duration);

    const oscillator = context.createOscillator();
    oscillator.type = action === 'fire' ? (preset.waveform || 'triangle') : 'sine';
    oscillator.frequency.setValueAtTime(centerFrequency, now);
    oscillator.frequency.exponentialRampToValueAtTime(Math.max(32, centerFrequency * (action === 'swing' ? 0.52 : 0.36)), now + duration);
    const toneGain = context.createGain();
    const initialGain = action === 'fire' ? preset.bass : action === 'impact' ? preset.bass * 1.2 : action === 'swing' ? 0.015 : 0.022;
    toneGain.gain.setValueAtTime(Math.max(0.0001, initialGain), now);
    toneGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    oscillator.connect(toneGain);
    toneGain.connect(context.destination);
    oscillator.start(now);
    oscillator.stop(now + duration);
  } catch (_) {
    // Audio is an enhancement; unsupported WebViews still retain all firing mechanics.
  }
}

function startReload() {
  const weapon = currentWeapon();
  const ammo = currentWeaponAmmo();
  if (dead || menuOpen || inventoryOpen || heldBody || !weapon || !ammo || reloadTimer > 0 || weapon.magazineSize === null) return;
  if (ammo.magazine >= weapon.magazineSize) { toast('МАГАЗИН ПОЛОН', 0.85); return; }
  if (ammo.reserve <= 0) { toast('НЕТ ПАТРОНОВ', 0.9); return; }
  fireHeld = false;
  reloadTimer = weapon.reloadDuration;
  reloadProgress = 0;
  weaponRecoil = 0;
  playWeaponSound(weapon, 'reload');
  toast('ПЕРЕЗАРЯДКА', 0.8);
}

function completeReload() {
  const weapon = currentWeapon();
  const ammo = currentWeaponAmmo();
  if (!weapon || !ammo || weapon.magazineSize === null) return;
  const loaded = reloadAmmo(weapon, ammo);
  reloadProgress = 1;
  updateAmmoHUD();
  if (loaded > 0) toast('ГОТОВО', 0.65);
}

function createBulletMark(hit) {
  const mark = new THREE.Group();
  const normal = hit.face?.normal?.clone() || new THREE.Vector3(0, 0, 1);
  hit.object.updateWorldMatrix(true, false);
  normal.transformDirection(hit.object.matrixWorld).normalize();
  const holeMaterial = new THREE.MeshBasicMaterial({ color: 0x111515, transparent: true, opacity: 0.96, depthWrite: false, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -2 });
  const edgeMaterial = new THREE.MeshBasicMaterial({ color: 0x6d6250, transparent: true, opacity: 0.76, depthWrite: false, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -2 });
  const edge = new THREE.Mesh(new THREE.RingGeometry(0.023, 0.035, 8), edgeMaterial);
  const hole = new THREE.Mesh(new THREE.CircleGeometry(0.024, 8), holeMaterial);
  mark.add(edge, hole);
  mark.position.copy(hit.point).addScaledVector(normal, 0.004);
  mark.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal);
  scene.add(mark);
  bulletMarks.push({ object: mark, life: 22, maxLife: 22 });
  if (bulletMarks.length > 72) {
    const oldest = bulletMarks.shift();
    removeBulletMark(oldest);
  }
}

function removeBulletMark(record) {
  if (!record?.object) return;
  scene.remove(record.object);
  record.object.traverse((child) => {
    child.geometry?.dispose();
    if (child.material && child.material !== weaponBlack) child.material.dispose?.();
  });
}

function updateBulletMarks(dt) {
  for (let i = bulletMarks.length - 1; i >= 0; i--) {
    const record = bulletMarks[i];
    record.life -= dt;
    const opacity = THREE.MathUtils.clamp(record.life / record.maxLife, 0, 1);
    record.object.traverse((child) => { if (child.material?.transparent) child.material.opacity = opacity * (child.geometry?.type === 'RingGeometry' ? 0.76 : 0.96); });
    if (record.life <= 0) {
      bulletMarks.splice(i, 1);
      removeBulletMark(record);
    }
  }
}

function applyWeaponHit(meta, direction, weapon, damageMultiplier = 1) {
  if (!meta || meta.isStored || meta.isHeld) return;
  if (meta.kind === 'mannequin' && meta.human) {
    const human = meta.human;
    const part = human.partMap[meta.key] || human.partMap.torso;
    const result = damageMannequin(human, weapon, meta.key, damageMultiplier);
    human.hitFlash = 0.32;
    const impactDirection = new CANNON.Vec3(direction.x, direction.y, direction.z);
    if (!human.active) {
      activateMannequin(human, part, Math.max(6, result.damage * 0.18), impactDirection, false);
    } else if (human.state !== 'falling' && !human.dead) {
      human.state = 'falling';
      human.stateTime = 0;
      human.quietTime = 0;
      for (const ragdollPart of human.parts) {
        ragdollPart.body.type = CANNON.Body.DYNAMIC;
        ragdollPart.body.mass = ragdollPart.mass;
        ragdollPart.body.updateMassProperties();
        ragdollPart.body.wakeUp();
      }
      world.broadphase.dirty = true;
    }
    if (part.body.type === CANNON.Body.DYNAMIC) {
      const force = isMeleeWeapon(weapon) ? 5 + result.damage * 0.25 : 1.8 + result.damage * 0.12;
      part.body.applyImpulse(new CANNON.Vec3(direction.x * force, direction.y * force, direction.z * force), new CANNON.Vec3());
    }
    if (result.lethal) {
      human.dead = true;
      human.active = true;
      human.state = 'dead';
    }
    if (!weapon.pellets) playWeaponSound(weapon, 'impact');
    toast(`${human.id} · ${weapon.name.toUpperCase()} −${result.damage} ОЗ · ${result.health} ОЗ`, 1.05);
    return;
  }
  if (meta.kind === 'prop' && meta.body?.type === CANNON.Body.DYNAMIC) {
    const scale = isMeleeWeapon(weapon) ? 7 : weapon.type === 'shotgun' ? 3.5 : 2.4;
    meta.body.applyImpulse(new CANNON.Vec3(direction.x * scale, direction.y * scale, direction.z * scale), new CANNON.Vec3());
    meta.body.wakeUp();
  }
}

const weaponRaycaster = new THREE.Raycaster();

function traceShotRay(weapon, offsetX = 0, offsetY = 0, damageMultiplier = 1) {
  camera.updateMatrixWorld(true);
  weaponRaycaster.far = weapon.range;
  weaponRaycaster.setFromCamera(new THREE.Vector2(offsetX, offsetY), camera);
  const targets = [...raycastTargets, ...bulletSurfaceTargets];
  const hit = traceHitscan(weaponRaycaster, targets)[0];
  if (!hit) return null;
  const meta = hit.object.userData.gameMeta || hit.object.parent?.userData?.gameMeta;
  if (meta) applyWeaponHit(meta, weaponRaycaster.ray.direction, weapon, damageMultiplier);
  else if (hit.object.userData.bulletSurface) createBulletMark(hit);
  return hit;
}

function traceMeleeHit(weapon) {
  makeCameraDirection();
  traceShotRay(weapon);
}

function fireWeapon() {
  const weapon = currentWeapon();
  const ammo = currentWeaponAmmo();
  if (dead || menuOpen || inventoryOpen || heldBody || !weapon || reloadTimer > 0 || fireCooldown > 0 || shovelActionTimer > 0) return;
  if (isMeleeWeapon(weapon)) {
    if (meleeTimer > 0) return;
    meleeTimer = weapon.swingDuration;
    meleeHitApplied = false;
    fireCooldown = weapon.cooldown;
    fireHeld = false;
    playWeaponSound(weapon, 'swing');
    return;
  }
  if (!consumeAmmo(weapon, ammo)) {
    startReload();
    return;
  }
  updateAmmoHUD();
  fireCooldown = weapon.cooldown;
  weaponRecoil = weapon.type === 'shotgun' ? 1.25 : weapon.type === 'rifle' ? 0.9 : 0.7;
  shakeAmount = Math.min(0.5, shakeAmount + (weapon.type === 'shotgun' ? 0.22 : 0.1));
  pitch = THREE.MathUtils.clamp(pitch + (weapon.type === 'shotgun' ? 0.026 : 0.009), -1.18, 1.18);
  playWeaponSound(weapon, 'fire');
  muzzleFlashTimer = weapon.type === 'shotgun' ? 0.11 : 0.075;
  muzzleFlash.visible = true;
  muzzleFlash.userData.light.intensity = weapon.type === 'shotgun' ? 4.1 : 2.8;
  makeCameraDirection();
  if (weapon.pellets) {
    for (let pellet = 0; pellet < weapon.pellets; pellet++) {
      const angle = pellet * 2.399963229728653;
      const radius = pellet === 0 ? 0 : weapon.spread * Math.sqrt(pellet / (weapon.pellets - 1));
      traceShotRay(weapon, Math.cos(angle) * radius, Math.sin(angle) * radius, 1);
    }
    shotgunPumpTimer = 0.34;
  } else {
    traceShotRay(weapon);
  }
  if (!weapon.automatic) fireHeld = false;
}

function updateWeapon(dt) {
  const weapon = currentWeapon();
  fireCooldown = Math.max(0, fireCooldown - dt);
  weaponRecoil = THREE.MathUtils.damp(weaponRecoil, 0, 18, dt);
  if (!weapon) {
    fireHeld = false;
    muzzleFlash.visible = false;
    weaponModel.visible = false;
    weaponView.visible = !dead && Boolean(heldBody);
    return;
  }
  if (fireHeld && fireCooldown <= 0 && reloadTimer <= 0) fireWeapon();
  if (reloadTimer > 0) {
    reloadTimer = Math.max(0, reloadTimer - dt);
    reloadProgress = 1 - reloadTimer / weapon.reloadDuration;
    if (reloadTimer === 0) completeReload();
  }
  if (muzzleFlashTimer > 0) {
    muzzleFlashTimer = Math.max(0, muzzleFlashTimer - dt);
    if (muzzleFlashTimer === 0) {
      muzzleFlash.visible = false;
      muzzleFlash.userData.light.intensity = 0;
    }
  }
  const reloadMotion = reloadTimer > 0 ? Math.sin(reloadProgress * Math.PI) : 0;
  if (shotgunPumpTimer > 0) {
    shotgunPumpTimer = Math.max(0, shotgunPumpTimer - dt);
    const pumpProgress = 1 - shotgunPumpTimer / 0.34;
    if (pumpGroup) pumpGroup.position.set(pumpBasePosition.x, pumpBasePosition.y, pumpBasePosition.z + Math.sin(pumpProgress * Math.PI) * 0.13);
  } else if (pumpGroup) {
    pumpGroup.position.copy(pumpBasePosition);
  }
  if (shovelActionTimer > 0) {
    const actionProgress = 1 - shovelActionTimer / SHOVEL_ACTION_DURATION;
    const digging = Math.sin(actionProgress * Math.PI);
    shovelActionTimer = Math.max(0, shovelActionTimer - dt);
    weaponView.position.set(weaponBasePosition.x, weaponBasePosition.y - digging * 0.17, weaponBasePosition.z + digging * 0.16);
    weaponView.rotation.set(weaponBaseRotation.x + digging * 0.52, weaponBaseRotation.y + digging * 0.04, weaponBaseRotation.z - digging * 0.12);
    if (shovelActionTimer === 0) finishSnowAction();
  } else if (meleeTimer > 0) {
    meleeTimer = Math.max(0, meleeTimer - dt);
    const swingProgress = 1 - meleeTimer / weapon.swingDuration;
    const swing = Math.sin(swingProgress * Math.PI);
    weaponView.position.set(weaponBasePosition.x, weaponBasePosition.y - swing * 0.12, weaponBasePosition.z + swing * 0.08);
    weaponView.rotation.set(weaponBaseRotation.x + swing * 0.36, weaponBaseRotation.y - swing * 0.12, weaponBaseRotation.z - swing * 0.92);
    if (!meleeHitApplied && swingProgress >= 0.43) {
      meleeHitApplied = true;
      traceMeleeHit(weapon);
    }
  } else {
    weaponView.position.set(weaponBasePosition.x, weaponBasePosition.y - weaponRecoil * 0.035 - reloadMotion * 0.07, weaponBasePosition.z + weaponRecoil * 0.065);
    weaponView.rotation.set(weaponBaseRotation.x + weaponRecoil * 0.11 - reloadMotion * 0.08, weaponBaseRotation.y, weaponBaseRotation.z + reloadMotion * 0.07);
  }
  if (magazineGroup) {
    magazineGroup.position.set(magazineBasePosition.x, magazineBasePosition.y - reloadMotion * 0.18, magazineBasePosition.z + reloadMotion * 0.035);
    magazineGroup.rotation.x = -reloadMotion * 0.24;
  }
  if (weaponHands.left) {
    const grip = weaponHands.left.userData.gripPosition;
    const rotation = weaponHands.left.userData.gripRotation;
    if (grip && rotation) {
      weaponHands.left.position.set(grip.x, grip.y - reloadMotion * 0.11, grip.z + reloadMotion * 0.12);
      weaponHands.left.rotation.set(rotation.x - reloadMotion * 0.22, rotation.y, rotation.z);
    }
  }
  if (pumpGroup && reloadTimer > 0) pumpGroup.position.z = pumpBasePosition.z + reloadMotion * 0.08;
  if (snowPayload) snowPayload.visible = carriedSnow > 0 && !heldBody;
  weaponModel.visible = !heldBody;
  weaponView.visible = !dead && Boolean(weapon || heldBody);
}

// Separate low-poly operator preview for the inventory screen. The model is original and uses block-based geometry.
const inventoryScene = new THREE.Scene();
inventoryScene.background = null;
const inventoryCamera = new THREE.PerspectiveCamera(31, 1, 0.1, 20);
inventoryCamera.position.set(2.35, 2.05, 3.9);
inventoryCamera.lookAt(0, 0.98, 0);
const inventoryActor = new THREE.Group();
inventoryScene.add(inventoryActor);
const previewJacket = new THREE.MeshStandardMaterial({ color: 0x596652, roughness: 0.88 });
const previewPants = new THREE.MeshStandardMaterial({ color: 0x343c35, roughness: 0.92 });
const previewBoots = new THREE.MeshStandardMaterial({ color: 0x252a25, roughness: 0.85 });
const previewArmor = new THREE.MeshStandardMaterial({ color: 0x39453d, roughness: 0.76, metalness: 0.08 });
const previewWebbing = new THREE.MeshStandardMaterial({ color: 0xa38c61, roughness: 0.92 });
const previewHelmet = new THREE.MeshStandardMaterial({ color: 0x667253, roughness: 0.78 });
const previewMask = new THREE.MeshStandardMaterial({ color: 0x202b2a, roughness: 0.56, metalness: 0.18 });
const previewSkin = new THREE.MeshStandardMaterial({ color: 0x9b8b72, roughness: 0.88 });
const previewAccent = new THREE.MeshStandardMaterial({ color: 0xb5824d, roughness: 0.68, metalness: 0.12 });
function previewBox(parent, size, position, material, rotation = [0, 0, 0]) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(size[0], size[1], size[2]), material);
  mesh.position.set(position[0], position[1], position[2]);
  mesh.rotation.set(rotation[0], rotation[1], rotation[2]);
  parent.add(mesh);
  return mesh;
}
const previewGround = new THREE.Mesh(new THREE.CylinderGeometry(0.67, 0.72, 0.055, 28), new THREE.MeshStandardMaterial({ color: 0x27312c, roughness: 0.96, metalness: 0.04 }));
previewGround.position.y = 0.015;
inventoryScene.add(previewGround);
previewBox(inventoryActor, [0.44, 0.24, 0.27], [0, 0.58, 0], previewArmor);
previewBox(inventoryActor, [0.5, 0.69, 0.3], [0, 1.02, 0], previewJacket);
previewBox(inventoryActor, [0.37, 0.56, 0.2], [0, 1.0, -0.22], previewArmor);
previewBox(inventoryActor, [0.07, 0.52, 0.035], [-0.13, 1.03, 0.17], previewWebbing, [0, 0, -0.1]);
previewBox(inventoryActor, [0.07, 0.52, 0.035], [0.13, 1.03, 0.17], previewWebbing, [0, 0, 0.1]);
previewBox(inventoryActor, [0.46, 0.07, 0.32], [0, 0.69, 0], previewWebbing);
previewBox(inventoryActor, [0.13, 0.16, 0.06], [0, 0.94, 0.185], previewAccent);
previewBox(inventoryActor, [0.12, 0.13, 0.035], [0, 1.05, 0.19], previewWebbing);
previewBox(inventoryActor, [0.15, 0.14, 0.15], [0, 1.45, 0], previewSkin);
previewBox(inventoryActor, [0.32, 0.33, 0.28], [0, 1.67, 0], previewSkin);
previewBox(inventoryActor, [0.38, 0.2, 0.35], [0, 1.83, -0.005], previewHelmet);
previewBox(inventoryActor, [0.4, 0.045, 0.38], [0, 1.77, 0.005], previewArmor);
previewBox(inventoryActor, [0.22, 0.105, 0.08], [0, 1.59, 0.17], previewMask);
previewBox(inventoryActor, [0.075, 0.105, 0.085], [-0.145, 1.59, 0.16], previewMask);
previewBox(inventoryActor, [0.075, 0.105, 0.085], [0.145, 1.59, 0.16], previewMask);
for (const side of [-1, 1]) {
  previewBox(inventoryActor, [0.18, 0.46, 0.2], [side * 0.35, 1.05, 0], previewJacket, [0, 0, side * -0.06]);
  previewBox(inventoryActor, [0.15, 0.37, 0.17], [side * 0.39, 0.67, 0.025], previewArmor, [0, 0, side * 0.025]);
  previewBox(inventoryActor, [0.15, 0.11, 0.15], [side * 0.39, 0.42, 0.035], gloveMat);
  previewBox(inventoryActor, [0.19, 0.43, 0.22], [side * 0.125, 0.36, 0], previewPants);
  previewBox(inventoryActor, [0.16, 0.34, 0.18], [side * 0.13, 0.17, 0.015], previewPants);
  previewBox(inventoryActor, [0.2, 0.13, 0.3], [side * 0.13, 0.065, 0.07], previewBoots);
  previewBox(inventoryActor, [0.23, 0.035, 0.31], [side * 0.13, 0.015, 0.075], previewArmor);
}
inventoryScene.add(new THREE.HemisphereLight(0xd3dfcf, 0x3b4037, 1.6));
const previewKey = new THREE.DirectionalLight(0xffe2b7, 2.2);
previewKey.position.set(-2.5, 4.5, 3.5);
inventoryScene.add(previewKey);
let inventoryRenderer = null;
let inventoryRendererFailed = false;
let inventoryPreviewTime = 0;
let inventoryPreviewAccumulator = 0;

let yaw = 0;
let pitch = 0;
let started = true;
let heldBody = null;
let currentTarget = null;
let joystick = { x: 0, y: 0, pointerId: null };
let lookState = null;
let walkPhase = 0;
let shakeAmount = 0;
let damageCooldown = 0;
let health = 100;
let hunger = 100;
let thirst = 100;
let heat = 58;
let needsHudTimer = 0;
let dead = false;
let deathTimer = 0;
let pendingDeathRelease = false;
let selectedBodyPart = null;
let inventoryOpen = false;
let inventoryMode = 'bag';
let selectedCatalogWeaponId = 'shovel';
let menuOpen = false;
let inventoryItems = [];
let selectedInventoryId = null;
let inventorySequence = 0;
const INVENTORY_COLUMNS = 8;
const INVENTORY_ROWS = 5;
const INVENTORY_WEIGHT_LIMIT = 30;
let injuryLevels = { head: 0, neck: 0, torso: 0, 'arm-left': 0, 'arm-right': 0, 'leg-left': 0, 'leg-right': 0 };
const bleedingParts = new Set();
let toastTimer = 0;
let targetRefresh = 0;
let elapsed = 0;
let frameCount = 0;
let fpsTime = 0;
let fpsValue = 60;
let qualityReduced = false;
const keys = new Set();
const raycaster = new THREE.Raycaster();
raycaster.far = 5;
const lookVector = new THREE.Vector3();
const heldWorldTarget = new THREE.Vector3();
const heldWorldOffset = new THREE.Vector3();

function toast(text, duration = 1.45) {
  const element = $('toast');
  if (!element) return;
  element.textContent = text;
  element.classList.add('visible');
  toastTimer = duration;
}

const injuryElementIds = {
  head: 'injury-head', neck: 'injury-neck', torso: 'injury-torso',
  'arm-left': 'injury-arm-left', 'arm-right': 'injury-arm-right',
  'leg-left': 'injury-leg-left', 'leg-right': 'injury-leg-right'
};

function updateHealthHUD() {
  $('health-value').textContent = String(health);
  $('health-bar').style.width = `${health}%`;
  $('health-bar').style.background = health < 35 ? '#d95c50' : health < 70 ? '#c3a66d' : '#9ab779';
}

function updateNeedsHUD() {
  $('hunger-value').textContent = String(Math.round(hunger));
  $('hunger-bar').style.width = `${hunger}%`;
  $('hunger-bar').style.background = hunger < 25 ? '#dc7950' : '#c4a66e';
  $('thirst-value').textContent = String(Math.round(thirst));
  $('thirst-bar').style.width = `${thirst}%`;
  $('thirst-bar').style.background = thirst < 25 ? '#5fa6c5' : '#78aeb6';
  $('heat-value').textContent = String(Math.round(heat));
  $('heat-bar').style.width = `${heat}%`;
  $('heat-bar').style.background = heat < 25 ? '#69a9c2' : heat > 78 ? '#edaf68' : '#cf8756';
}

function labelBodyPart(part) {
  const labels = {
    head: 'ГОЛОВА', neck: 'ШЕЯ', torso: 'КОРПУС',
    'arm-left': 'ЛЕВАЯ РУКА', 'arm-right': 'ПРАВАЯ РУКА',
    'leg-left': 'ЛЕВАЯ НОГА', 'leg-right': 'ПРАВАЯ НОГА'
  };
  return labels[part] || 'КОРПУС';
}

function updateInjuryStatus(part) {
  const severity = injuryLevels[part] || 0;
  const isBleeding = bleedingParts.has(part);
  $('injury-status').textContent = isBleeding
    ? `КРОВОТЕЧЕНИЕ · ${labelBodyPart(part)}`
    : severity > 0 ? `ТРАВМА · ${labelBodyPart(part)}` : `БЕЗ ТРАВМ · ${labelBodyPart(part)}`;
  $('injury-status').classList.toggle('alert', severity > 0 || isBleeding);
}

function applyBodyInjury(part, amount) {
  const id = injuryElementIds[part] ? part : 'torso';
  const element = $(injuryElementIds[id]);
  injuryLevels[id] = Math.min(1, (injuryLevels[id] || 0) + Math.max(0.28, amount / 24));
  element.classList.add('injured');
  element.style.opacity = String(0.55 + injuryLevels[id] * 0.45);
  if (injuryLevels[id] >= 0.55) {
    bleedingParts.add(id);
    $(`bleed-${id}`).classList.add('active');
  }
  selectedBodyPart = id;
  for (const [key, injuryId] of Object.entries(injuryElementIds)) $(injuryId).classList.toggle('selected', key === id);
  updateInjuryStatus(id);
}

function selectBodyPart(part) {
  if (!injuryElementIds[part]) return;
  selectedBodyPart = part;
  for (const [key, id] of Object.entries(injuryElementIds)) $(id).classList.toggle('selected', key === part);
  updateInjuryStatus(part);
  const injury = injuryLevels[part] || 0;
  const state = bleedingParts.has(part) ? ' · КРОВОТЕЧЕНИЕ' : injury > 0 ? ` · ТРАВМА ${Math.round(injury * 100)}%` : ' · ПОВРЕЖДЕНИЙ НЕТ';
  toast(`${labelBodyPart(part)}${state}`, 1.2);
}

function triggerDeath(reason = 'КРИТИЧЕСКОЕ ПОВРЕЖДЕНИЕ') {
  if (dead) return;
  if (inventoryOpen) setInventoryOpen(false);
  if (menuOpen) setMenuOpen(false);
  fireHeld = false;
  pendingDeathRelease = Boolean(heldBody);
  dead = true;
  deathTimer = 0;
  health = 0;
  updateHealthHUD();
  $('death-detail').textContent = reason;
  $('death-overlay').classList.add('visible');
  $('death-overlay').setAttribute('aria-hidden', 'false');
  document.body.classList.add('dead');
  keys.clear();
  resetJoystick();
  lookState = null;
  playerBody.velocity.set(0, 0, 0);
  setHandPose(0);
  if (document.pointerLockElement && document.exitPointerLock) document.exitPointerLock();
}

function receiveDamage(amount, part = 'torso') {
  if (!started || dead) return;
  const severity = Math.max(1, Math.round(amount));
  const fatalNeckHit = part === 'neck' && severity >= 14;
  if (damageCooldown > 0 && !fatalNeckHit) return;
  damageCooldown = 0.72;
  health = Math.max(0, health - severity);
  shakeAmount = Math.min(1.4, shakeAmount + 0.85);
  updateHealthHUD();
  applyBodyInjury(part, severity);
  document.body.classList.add('damage-flash');
  setTimeout(() => document.body.classList.remove('damage-flash'), 170);
  if (part === 'neck' && severity >= 14) {
    triggerDeath('ШЕЙНАЯ ТРАВМА · КРИТИЧЕСКАЯ КРОВОПОТЕРЯ');
    return;
  }
  if (health === 0) {
    triggerDeath(`СМЕРТЕЛЬНОЕ РАНЕНИЕ · ${labelBodyPart(part)}`);
    return;
  }
  toast(`УДАР · −${severity}%`, 0.9);
}

function updateNeeds(dt) {
  if (!started || inventoryOpen || menuOpen || dead) return;
  hunger = Math.max(0, hunger - dt * 0.045);
  thirst = Math.max(0, thirst - dt * 0.065);
  const stoveDistance = Math.hypot(playerBody.position.x - stovePosition.x, playerBody.position.z - stovePosition.z);
  heat = updateHeat(heat, dt, stoveLit && stoveDistance <= 3.8);
  needsHudTimer += dt;
  if (needsHudTimer >= 0.35) {
    needsHudTimer = 0;
    updateNeedsHUD();
  }
  // Hunger, thirst and wound indicators remain informational; only explicit
  // falls, NPC strikes and weapon hits reduce health.
}

function activateMannequin(human, hitPart = human.partMap.torso, impact = 0, incomingVelocity = null, manual = false) {
  if (human.active) {
    if (manual && hitPart?.body) {
      const impulse = new CANNON.Vec3(lookVector.x * 8.5, Math.max(1.0, lookVector.y * 8.5), lookVector.z * 8.5);
      hitPart.body.applyImpulse(impulse, new CANNON.Vec3());
      toast('ИМПУЛЬС ПЕРЕДАН', 0.85);
    }
    return;
  }
  human.active = true;
  human.state = 'falling';
  human.stateTime = 0;
  human.quietTime = 0;
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
      hitPart.body.applyImpulse(impulse, new CANNON.Vec3());
    } else {
      direction = incomingVelocity && incomingVelocity.lengthSquared() > 0.08 ? incomingVelocity.clone() : new CANNON.Vec3(0, 0, 1);
      const speed = direction.length();
      direction.normalize();
      const magnitude = Math.min(48, Math.max(6, impact * hitPart.mass * 0.78));
      hitPart.body.applyImpulse(direction.scale(magnitude), hitPart.body.position);
    }
  }
  toast(manual ? `${human.id} · РАГДОЛЛ АКТИВИРОВАН` : `${human.id} · УДАР / РАГДОЛЛ`, 1.3);
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
    if (!meta || meta.isStored || meta.isEmpty || hit.distance > (meta.range || 4.5)) continue;
    return { meta, distance: hit.distance, point: hit.point };
  }
  return null;
}

function getGroundTarget() {
  if (!floorSurfaceMesh) return null;
  camera.updateMatrixWorld(true);
  raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
  const hit = raycaster.intersectObject(floorSurfaceMesh, false)[0];
  return hit && hit.distance <= 4.8 ? hit : null;
}

function isNearStove() {
  return Math.hypot(playerBody.position.x - stovePosition.x, playerBody.position.z - stovePosition.z) <= 2.85;
}

function beginSnowAction(kind, payload) {
  if (currentWeaponId !== 'shovel') {
    toast('НУЖНА ЛОПАТА', 1.0);
    return false;
  }
  if (shovelActionTimer > 0) return false;
  shovelAction = kind === 'scoop'
    ? { kind, drift: payload }
    : { kind, point: { x: payload.x, z: payload.z } };
  shovelActionTimer = SHOVEL_ACTION_DURATION;
  fireHeld = false;
  playWeaponSound(WEAPON_BY_ID.get('shovel'), 'swing');
  return true;
}

function finishSnowAction() {
  const action = shovelAction;
  shovelAction = null;
  if (!action) return;
  if (action.kind === 'scoop') {
    const result = scoopSnow(action.drift, carriedSnow);
    if (!result.ok) {
      toast(result.reason === 'already-carrying' ? 'СНЕГ УЖЕ НА ЛОПАТЕ' : 'СУГРОБ ЗАКОНЧИЛСЯ', 1.0);
      return;
    }
    carriedSnow = result.amount;
    updateSnowDriftVisual(action.drift);
    if (snowPayload) snowPayload.visible = true;
    toast('СНЕГ НА ЛОПАТЕ · ПЕРЕНОС ЗАМЕДЛЯЕТ', 1.35);
    return;
  }
  const result = depositSnow(carriedSnow, action.point);
  if (!result.ok) {
    toast('НА ЛОПАТЕ НЕТ СНЕГА', 0.9);
    return;
  }
  createSnowDrift(result.pile.x, result.pile.z, result.pile.amount);
  carriedSnow = result.remaining;
  if (snowPayload) snowPayload.visible = false;
  toast('СНЕГ СБРОШЕН · НОВЫЙ СУГРОБ', 1.2);
}

function updateTargetUI() {
  const action = $('action-button');
  if (!action) return;
  const label = $('action-label');
  label.textContent = 'ДЕЙСТВИЕ';
  if (dead) {
    currentTarget = null;
    action.classList.remove('is-holding', 'has-target');
    return;
  }
  currentTarget = getTargetMeta();
  if (heldBody) {
    const heldMeta = heldBody.gameMeta;
    const canFeedStove = heldMeta?.kind === 'firewood' && isNearStove();
    label.textContent = canFeedStove ? (stoveLit ? 'ПОДБРОСИТЬ ДРОВА' : 'РАЗЖЕЧЬ ПЕЧЬ') : 'ПОЛОЖИТЬ ПРЕДМЕТ';
    action.classList.add('is-holding');
    action.classList.toggle('has-target', canFeedStove);
    return;
  }
  action.classList.remove('is-holding');
  if (currentWeaponId === 'shovel' && carriedSnow > 0) {
    label.textContent = 'СБРОСИТЬ СНЕГ';
    action.classList.toggle('has-target', Boolean(currentTarget || getGroundTarget()));
    return;
  }
  if (currentTarget?.meta.kind === 'snowdrift') {
    label.textContent = currentWeaponId === 'shovel' ? 'ЧЕРПАТЬ СНЕГ' : 'НУЖНА ЛОПАТА';
  } else if (currentTarget?.meta.kind === 'stove') {
    label.textContent = 'НУЖНЫ ДРОВА';
  } else if (currentTarget?.meta.kind === 'firewood' || currentTarget?.meta.kind === 'prop') {
    label.textContent = 'ВЗЯТЬ';
  }
  action.classList.toggle('has-target', Boolean(currentTarget));
}

function suspendPlayerCollision(meta) {
  const body = meta.body;
  body.collisionFilterMask = meta.originalCollisionFilterMask & ~COLLISION_GROUP_PLAYER;
  meta.playerCollisionSuspended = true;
  meta.playerCollisionReEnableAfter = elapsed + 0.35;
}

function pickUp(meta) {
  const body = meta.body;
  if (!body || body.gameMeta?.isHeld || meta.isStored) return;
  heldBody = body;
  body.gameMeta.isHeld = true;
  // Keep the item dynamic so the floor/walls still stop it, but remove the player bit from
  // the mutual collision mask. This is the important GMod-style hand/player separation.
  body.type = CANNON.Body.DYNAMIC;
  body.mass = body.gameMeta.initialMass;
  body.gameMeta.playerCollisionSuspended = false;
  body.collisionFilterMask = body.gameMeta.originalCollisionFilterMask & ~COLLISION_GROUP_PLAYER;
  body.linearDamping = 0.82;
  body.angularDamping = 0.92;
  body.updateMassProperties();
  body.velocity.set(0, 0, 0);
  body.angularVelocity.set(0, 0, 0);
  body.force.set(0, 0, 0);
  body.wakeUp();
  world.broadphase.dirty = true;
  setHandPose(1);
  toast(`${meta.name} · ${meta.mass.toFixed(1)} КГ`, 1.15);
}

function throwHeld() {
  if (!heldBody) return;
  const body = heldBody;
  const meta = body.gameMeta;
  makeCameraDirection();
  body.type = CANNON.Body.DYNAMIC;
  body.mass = meta.initialMass;
  suspendPlayerCollision(meta);
  body.linearDamping = meta.originalLinearDamping;
  body.angularDamping = meta.originalAngularDamping;
  body.updateMassProperties();
  body.gameMeta.isHeld = false;
  body.force.set(0, 0, 0);
  body.updateAABB();
  const halfHeight = Math.max(0.08, (body.aabb.upperBound.y - body.aabb.lowerBound.y) * 0.5);
  body.position.y = Math.max(body.position.y, halfHeight + 0.025);
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
  setHandPose(0);
  toast(`БРОСОК · ${meta.name}`, 0.95);
}

function dropHeld() {
  if (!heldBody) return;
  const body = heldBody;
  const meta = body.gameMeta;
  body.type = CANNON.Body.DYNAMIC;
  body.mass = meta.initialMass;
  suspendPlayerCollision(meta);
  body.linearDamping = meta.originalLinearDamping;
  body.angularDamping = meta.originalAngularDamping;
  body.force.set(0, 0, 0);
  body.gameMeta.isHeld = false;
  body.updateMassProperties();
  body.updateAABB();
  const halfHeight = Math.max(0.08, (body.aabb.upperBound.y - body.aabb.lowerBound.y) * 0.5);
  body.position.y = Math.max(body.position.y, halfHeight + 0.025);
  body.velocity.set(playerBody.velocity.x * 0.45, -0.18, playerBody.velocity.z * 0.45);
  body.angularVelocity.set(0, 0, 0);
  body.wakeUp();
  world.broadphase.dirty = true;
  heldBody = null;
  setHandPose(0);
  toast(`ПОЛОЖЕНО · ${meta.name}`, 0.95);
}

function releaseHeldAfterDeath() {
  if (!heldBody) return;
  const body = heldBody;
  const meta = body.gameMeta;
  meta.isHeld = false;
  suspendPlayerCollision(meta);
  body.linearDamping = meta.originalLinearDamping;
  body.angularDamping = meta.originalAngularDamping;
  body.force.set(0, 0, 0);
  body.velocity.set(0, 0, 0);
  body.angularVelocity.set(0, 0, 0);
  body.wakeUp();
  heldBody = null;
  world.broadphase.dirty = true;
  setHandPose(0);
}

function inventoryWeight() {
  return inventoryItems.reduce((total, item) => total + item.meta.mass, 0);
}

function findInventorySlot(width, height) {
  for (let y = 0; y <= INVENTORY_ROWS - height; y++) {
    for (let x = 0; x <= INVENTORY_COLUMNS - width; x++) {
      const overlaps = inventoryItems.some((item) =>
        x < item.x + item.width && x + width > item.x &&
        y < item.y + item.height && y + height > item.y
      );
      if (!overlaps) return { x, y };
    }
  }
  return null;
}

function selectInventoryItem(id) {
  const item = inventoryItems.find((entry) => entry.id === id);
  if (!item) return;
  setInventoryTab('bag');
  selectedInventoryId = id;
  $('inventory-selected-name').textContent = item.meta.name;
  $('inventory-selected-weight').textContent = `${item.meta.mass.toFixed(1)} кг`;
  $('inventory-selected-description').textContent = item.meta.description || item.meta.detail || 'Предмет без дополнительных сведений.';
  const takeButton = $('inventory-take');
  takeButton.disabled = Boolean(heldBody);
  takeButton.textContent = heldBody ? 'СНАЧАЛА ПОЛОЖИТЕ ПРЕДМЕТ' : 'ДОСТАТЬ ПРЕДМЕТ';
  $('inventory-message').textContent = `${item.meta.type} · ${item.width} × ${item.height} ЯЧЕЙКИ`;
  for (const button of $('inventory-grid').querySelectorAll('.inventory-item')) {
    button.classList.toggle('selected', button.dataset.itemId === id);
    button.setAttribute('aria-pressed', String(button.dataset.itemId === id));
  }
}

function selectCatalogWeapon(id) {
  const weapon = WEAPON_BY_ID.get(id);
  if (!weapon) return;
  inventoryMode = 'all';
  selectedCatalogWeaponId = id;
  $('inventory-tab-bag').classList.remove('active');
  $('inventory-tab-bag').setAttribute('aria-selected', 'false');
  $('inventory-tab-all').classList.add('active');
  $('inventory-tab-all').setAttribute('aria-selected', 'true');
  $('inventory-bag-view').hidden = true;
  $('inventory-all-view').hidden = false;
  $('inventory-selected-name').textContent = weapon.name;
  $('inventory-selected-weight').textContent = `${weapon.weight.toFixed(1)} кг`;
  const ammoDescription = weapon.magazineSize === null
    ? (weapon.type === 'tool' ? 'Без боеприпасов · инструмент' : 'Без боеприпасов · ближний бой')
    : `Магазин ${weapon.magazineSize} · запас ${weapon.reserve} патронов`;
  const damageDescription = weapon.pellets ? `${weapon.pellets} дробин × ${weapon.damage} урона` : `${weapon.damage} урона за попадание`;
  $('inventory-selected-description').textContent = `${weapon.description} ${damageDescription}. ${ammoDescription}.`;
  const alreadyEquipped = currentWeaponId === id;
  $('inventory-take').disabled = alreadyEquipped;
  $('inventory-take').textContent = alreadyEquipped ? 'УЖЕ В РУКАХ' : 'ЭКИПИРОВАТЬ';
  const ammo = weaponAmmo.get(id);
  $('inventory-message').textContent = `${weapon.category.toUpperCase()} · ${weapon.type === 'tool' ? 'ИНСТРУМЕНТ' : weapon.magazineSize === null ? 'БЛИЖНИЙ БОЙ' : `${ammo.magazine} / ${ammo.reserve} ПАТРОНОВ`}`;
  for (const button of $('inventory-all-grid').querySelectorAll('.armory-item')) {
    button.classList.toggle('selected', button.dataset.weaponId === id);
    button.setAttribute('aria-pressed', String(button.dataset.weaponId === id));
  }
}

function setInventoryTab(mode) {
  inventoryMode = mode === 'all' ? 'all' : 'bag';
  const inArmory = inventoryMode === 'all';
  $('inventory-tab-bag').classList.toggle('active', !inArmory);
  $('inventory-tab-bag').setAttribute('aria-selected', String(!inArmory));
  $('inventory-tab-all').classList.toggle('active', inArmory);
  $('inventory-tab-all').setAttribute('aria-selected', String(inArmory));
  $('inventory-bag-view').hidden = inArmory;
  $('inventory-all-view').hidden = !inArmory;
  updateInventorySelection();
}

function updateInventorySelection() {
  const takeButton = $('inventory-take');
  if (inventoryMode === 'all') {
    if (!WEAPON_BY_ID.has(selectedCatalogWeaponId)) selectedCatalogWeaponId = 'shovel';
    const weapon = WEAPON_BY_ID.get(selectedCatalogWeaponId);
    const ammo = weaponAmmo.get(weapon.id);
    $('inventory-selected-name').textContent = weapon.name;
    $('inventory-selected-weight').textContent = `${weapon.weight.toFixed(1)} кг`;
    const ammoDescription = weapon.magazineSize === null
      ? (weapon.type === 'tool' ? 'Без боеприпасов · инструмент' : 'Без боеприпасов · ближний бой')
      : `Магазин ${weapon.magazineSize} · запас ${weapon.reserve} патронов`;
    const damageDescription = weapon.pellets ? `${weapon.pellets} дробин × ${weapon.damage} урона` : `${weapon.damage} урона за попадание`;
    $('inventory-selected-description').textContent = `${weapon.description} ${damageDescription}. ${ammoDescription}.`;
    const alreadyEquipped = currentWeaponId === weapon.id;
    takeButton.disabled = alreadyEquipped;
    takeButton.textContent = alreadyEquipped ? 'УЖЕ В РУКАХ' : 'ЭКИПИРОВАТЬ';
    $('inventory-message').textContent = `${weapon.category.toUpperCase()} · ${weapon.type === 'tool' ? 'ИНСТРУМЕНТ' : weapon.magazineSize === null ? 'БЛИЖНИЙ БОЙ' : `${ammo.magazine} / ${ammo.reserve} ПАТРОНОВ`}`;
    return;
  }
  const item = inventoryItems.find((entry) => entry.id === selectedInventoryId);
  if (!item) {
    selectedInventoryId = null;
    $('inventory-selected-name').textContent = 'ПРЕДМЕТ НЕ ВЫБРАН';
    $('inventory-selected-weight').textContent = '—';
    $('inventory-selected-description').textContent = 'Нажмите на предмет в сетке, чтобы посмотреть его параметры.';
    takeButton.disabled = true;
    takeButton.textContent = 'ВЫБЕРИТЕ ПРЕДМЕТ';
    $('inventory-message').textContent = inventoryItems.length ? 'Выберите предмет, чтобы увидеть его размеры и свойства.' : 'Предметы можно убрать сюда из рук.';
    return;
  }
  $('inventory-selected-name').textContent = item.meta.name;
  $('inventory-selected-weight').textContent = `${item.meta.mass.toFixed(1)} кг`;
  $('inventory-selected-description').textContent = item.meta.description || item.meta.detail || 'Предмет без дополнительных сведений.';
  takeButton.disabled = Boolean(heldBody);
  takeButton.textContent = heldBody ? 'СНАЧАЛА ПОЛОЖИТЕ ПРЕДМЕТ' : 'ДОСТАТЬ ПРЕДМЕТ';
}

function updateArmoryUI() {
  const grid = $('inventory-all-grid');
  grid.replaceChildren();
  for (const weapon of WEAPON_CATALOG) {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = `armory-item${weapon.id === selectedCatalogWeaponId ? ' selected' : ''}`;
    card.dataset.weaponId = weapon.id;
    card.setAttribute('aria-pressed', String(weapon.id === selectedCatalogWeaponId));
    card.title = `${weapon.name} · ${weapon.description}`;
    const icon = document.createElement('span');
    icon.className = `armory-item-icon ${weapon.type}`;
    icon.textContent = weapon.type === 'tool' ? '⚒' : weapon.type === 'melee' ? '⚔' : weapon.type === 'pistol' ? '▣' : weapon.type === 'shotgun' ? '◆' : '⌁';
    const name = document.createElement('b');
    name.className = 'armory-item-name';
    name.textContent = weapon.name;
    const category = document.createElement('small');
    category.className = 'armory-item-category';
    category.textContent = weapon.category.toUpperCase();
    const stats = document.createElement('small');
    stats.className = 'armory-item-stats';
    stats.textContent = weapon.magazineSize === null ? `${weapon.damage} УРОН · ${weapon.range.toFixed(1)} М` : `${weapon.magazineSize} · ${weapon.damage}${weapon.pellets ? ` × ${weapon.pellets}` : ''}`;
    card.append(icon, name, category, stats);
    card.addEventListener('click', () => selectCatalogWeapon(weapon.id));
    grid.appendChild(card);
  }
}

function updateInventoryUI() {
  const grid = $('inventory-grid');
  if (!inventoryItems.some((item) => item.id === selectedInventoryId)) selectedInventoryId = inventoryItems[0]?.id || null;
  grid.replaceChildren();
  for (let i = 0; i < INVENTORY_COLUMNS * INVENTORY_ROWS; i++) {
    const cell = document.createElement('div');
    cell.className = 'inventory-cell';
    cell.setAttribute('aria-hidden', 'true');
    grid.appendChild(cell);
  }
  for (const item of inventoryItems) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `inventory-item${item.id === selectedInventoryId ? ' selected' : ''}`;
    button.dataset.itemId = item.id;
    button.setAttribute('aria-pressed', String(item.id === selectedInventoryId));
    button.style.gridColumn = `${item.x + 1} / span ${item.width}`;
    button.style.gridRow = `${item.y + 1} / span ${item.height}`;
    button.title = `${item.meta.name} · ${item.meta.mass.toFixed(1)} кг · нажмите для описания`;
    const top = document.createElement('span');
    top.className = 'inventory-item-top';
    const icon = document.createElement('b');
    icon.className = 'inventory-item-icon';
    icon.textContent = item.meta.inventoryIcon || '▣';
    const weight = document.createElement('small');
    weight.className = 'inventory-item-weight';
    weight.textContent = `${item.meta.mass.toFixed(1)} кг`;
    top.append(icon, weight);
    const name = document.createElement('span');
    name.className = 'inventory-item-name';
    name.textContent = item.meta.name;
    button.append(top, name);
    button.addEventListener('click', () => selectInventoryItem(item.id));
    grid.appendChild(button);
  }
  const total = inventoryWeight();
  $('inventory-weight').textContent = total.toFixed(1);
  $('inventory-limit').textContent = INVENTORY_WEIGHT_LIMIT.toFixed(1);
  $('inventory-weight-bar').style.width = `${Math.min(100, total / INVENTORY_WEIGHT_LIMIT * 100)}%`;
  $('inventory-weight-bar').style.background = total / INVENTORY_WEIGHT_LIMIT > 0.82 ? '#d08353' : '#a4c17e';
  $('inventory-empty').style.display = inventoryMode === 'bag' && inventoryItems.length === 0 ? 'flex' : 'none';
  $('inventory-drop').disabled = !heldBody;
  $('inventory-stash').disabled = !heldBody;
  updateArmoryUI();
  updateInventorySelection();
}

function resizeInventoryPreview() {
  if (inventoryRendererFailed) return;
  const frame = $('inventory-preview-frame');
  const rect = frame.getBoundingClientRect();
  if (rect.width < 8 || rect.height < 8) return;
  if (!inventoryRenderer) {
    try {
      inventoryRenderer = new THREE.WebGLRenderer({ canvas: $('inventory-preview-canvas'), alpha: true, antialias: true, powerPreference: 'low-power' });
      inventoryRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25));
      inventoryRenderer.outputColorSpace = THREE.SRGBColorSpace;
      inventoryRenderer.toneMapping = THREE.ACESFilmicToneMapping;
      inventoryRenderer.toneMappingExposure = 1.05;
      inventoryRenderer.setClearColor(0x000000, 0);
      $('inventory-preview-fallback').style.display = 'none';
    } catch (_) {
      inventoryRendererFailed = true;
      $('inventory-preview-fallback').classList.add('visible');
      return;
    }
  }
  inventoryRenderer.setSize(rect.width, rect.height, false);
  inventoryCamera.aspect = rect.width / rect.height;
  inventoryCamera.updateProjectionMatrix();
}

function renderInventoryPreview(dt) {
  if (!inventoryOpen || inventoryRendererFailed) return;
  if (!inventoryRenderer) resizeInventoryPreview();
  if (!inventoryRenderer) return;
  inventoryPreviewTime += dt;
  inventoryPreviewAccumulator += dt;
  inventoryActor.rotation.y = Math.sin(inventoryPreviewTime * 0.42) * 0.46;
  if (inventoryPreviewAccumulator < 1 / 30) return;
  inventoryPreviewAccumulator = 0;
  inventoryRenderer.render(inventoryScene, inventoryCamera);
}

function setInventoryOpen(open) {
  if (open && (!started || dead || menuOpen)) return;
  inventoryOpen = open;
  const overlay = $('inventory-overlay');
  overlay.classList.toggle('open', open);
  overlay.setAttribute('aria-hidden', String(!open));
  if (open) {
    fireHeld = false;
    firePointerId = null;
    resetJoystick();
    if (document.pointerLockElement && document.exitPointerLock) document.exitPointerLock();
    updateInventoryUI();
    resizeInventoryPreview();
  } else {
    keys.clear();
  }
}

function setMenuOpen(open) {
  if (open && (!started || dead)) return;
  if (open && inventoryOpen) setInventoryOpen(false);
  menuOpen = open;
  const overlay = $('menu-overlay');
  overlay.classList.toggle('open', open);
  overlay.setAttribute('aria-hidden', String(!open));
  if (open) {
    fireHeld = false;
    firePointerId = null;
    resetJoystick();
    keys.clear();
    toastTimer = 0;
    $('toast').classList.remove('visible');
    if (document.pointerLockElement && document.exitPointerLock) document.exitPointerLock();
  } else {
    keys.clear();
  }
}

function storeHeldInInventory() {
  if (!heldBody) return;
  const body = heldBody;
  const meta = body.gameMeta;
  const width = meta.inventoryWidth || 2;
  const height = meta.inventoryHeight || 2;
  const nextWeight = inventoryWeight() + meta.mass;
  if (nextWeight > INVENTORY_WEIGHT_LIMIT + 1e-6) {
    toast(`ПРЕВЫШЕН ЛИМИТ · ${INVENTORY_WEIGHT_LIMIT} КГ`, 1.15);
    $('inventory-message').textContent = 'Слишком тяжело: освободите место или выберите предмет легче.';
    return;
  }
  const slot = findInventorySlot(width, height);
  if (!slot) {
    toast('НЕТ СВОБОДНЫХ ЯЧЕЕК', 1.0);
    return;
  }
  const record = physicsRecords.find((candidate) => candidate.body === body);
  if (!record) return;
  body.gameMeta.isHeld = false;
  body.gameMeta.isStored = true;
  body.gameMeta.playerCollisionSuspended = false;
  body.collisionFilterMask = meta.originalCollisionFilterMask;
  body.linearDamping = meta.originalLinearDamping;
  body.angularDamping = meta.originalAngularDamping;
  body.force.set(0, 0, 0);
  body.velocity.set(0, 0, 0);
  body.angularVelocity.set(0, 0, 0);
  world.removeBody(body);
  scene.remove(record.visual);
  heldBody = null;
  setHandPose(0);
  const item = {
    id: `bag-${++inventorySequence}`,
    meta, body, visual: record.visual,
    x: slot.x, y: slot.y, width, height
  };
  inventoryItems.push(item);
  selectedInventoryId = item.id;
  updateInventoryUI();
  updateTargetUI();
  toast(`В РЮКЗАКЕ · ${meta.name}`, 1.0);
  setInventoryTab('bag');
  setInventoryOpen(true);
}

function takeInventoryItem(id) {
  if (dead) return;
  if (heldBody) {
    toast('СНАЧАЛА ПОЛОЖИТЕ УДЕРЖИВАЕМЫЙ ПРЕДМЕТ', 1.0);
    return;
  }
  const index = inventoryItems.findIndex((item) => item.id === id);
  if (index < 0) return;
  const [item] = inventoryItems.splice(index, 1);
  const { body, visual, meta } = item;
  meta.isStored = false;
  body.type = CANNON.Body.DYNAMIC;
  body.mass = meta.initialMass;
  body.collisionFilterMask = meta.originalCollisionFilterMask;
  body.linearDamping = meta.originalLinearDamping;
  body.angularDamping = meta.originalAngularDamping;
  body.force.set(0, 0, 0);
  body.velocity.set(0, 0, 0);
  body.angularVelocity.set(0, 0, 0);
  body.updateMassProperties();
  scene.add(visual);
  world.addBody(body);
  world.broadphase.dirty = true;
  setInventoryOpen(false);
  pickUp(meta);
  updateInventoryUI();
}

function feedStoveWithHeldWood() {
  if (!heldBody || heldBody.gameMeta?.kind !== 'firewood' || !isNearStove()) return false;
  const body = heldBody;
  const meta = body.gameMeta;
  const recordIndex = physicsRecords.findIndex((record) => record.body === body);
  if (recordIndex < 0) return false;
  const [record] = physicsRecords.splice(recordIndex, 1);
  meta.isHeld = false;
  heldBody = null;
  world.removeBody(body);
  scene.remove(record.visual);
  for (let i = raycastTargets.length - 1; i >= 0; i--) {
    if (raycastTargets[i].userData.gameMeta === meta) raycastTargets.splice(i, 1);
  }
  world.broadphase.dirty = true;
  setHandPose(0);
  stoveFuel += 52;
  stoveLit = true;
  if (stoveDoorGlow) stoveDoorGlow.visible = true;
  stoveCrackleTimer = 0.75 + Math.random() * 0.55;
  playFireCrackle();
  toast(stoveFuel > 52 ? 'ДРОВА ДОБАВЛЕНЫ · ПЕЧЬ ГОРИТ' : 'ПЕЧЬ РАСТОПЛЕНА', 1.2);
  return true;
}

function doAction() {
  if (dead || !started || inventoryOpen || menuOpen) return;
  if (heldBody) {
    if (!feedStoveWithHeldWood()) throwHeld();
    return;
  }
  if (currentWeaponId === 'shovel' && carriedSnow > 0) {
    const groundHit = getGroundTarget();
    if (groundHit) beginSnowAction('dump', groundHit.point);
    else toast('НАПРАВЬТЕ ЛОПАТУ НА ПОЛ', 1.0);
    return;
  }
  const target = currentTarget || getTargetMeta();
  if (!target) {
    toast('НЕТ ЦЕЛИ В ЗОНЕ ДОСЯГАЕМОСТИ', 0.9);
    return;
  }
  if (target.meta.kind === 'snowdrift') {
    if (currentWeaponId !== 'shovel') {
      toast('НУЖНА ЛОПАТА', 1.0);
      return;
    }
    beginSnowAction('scoop', target.meta.drift);
    return;
  }
  if (target.meta.kind === 'stove') {
    toast('ВОЗЬМИТЕ ДРОВА И ИСПОЛЬЗУЙТЕ ДЕЙСТВИЕ', 1.15);
    return;
  }
  if (target.meta.kind === 'firewood' || target.meta.kind === 'prop') {
    pickUp(target.meta);
    return;
  }
  if (target.meta.kind === 'mannequin') {
    makeCameraDirection();
    activateMannequin(target.meta.human, target.meta.human.partMap[target.meta.key] || target.meta.human.partMap.torso, 0, null, true);
  }
}

function updateHeld(dt) {
  if (!heldBody || dead) return;
  makeCameraDirection();
  const cameraPosition = camera.getWorldPosition(heldWorldTarget);
  heldWorldOffset.copy(lookVector).multiplyScalar(1.62);
  heldWorldTarget.add(heldWorldOffset);
  heldWorldTarget.y -= 0.11;
  const body = heldBody;
  body.updateAABB();
  const halfHeight = Math.max(0.08, (body.aabb.upperBound.y - body.aabb.lowerBound.y) * 0.5);
  heldWorldTarget.y = THREE.MathUtils.clamp(heldWorldTarget.y, halfHeight + 0.025, 5.4 - halfHeight);
  const weightScale = Math.sqrt(2.8 / body.gameMeta.initialMass);
  const maxVelocity = THREE.MathUtils.clamp(7.5 * weightScale, 3.0, 9.0);
  const followGain = THREE.MathUtils.clamp(13 * weightScale, 5.0, 18.0);
  body.velocity.set(
    THREE.MathUtils.clamp((heldWorldTarget.x - body.position.x) * followGain, -maxVelocity, maxVelocity),
    THREE.MathUtils.clamp((heldWorldTarget.y - body.position.y) * followGain, -maxVelocity, maxVelocity),
    THREE.MathUtils.clamp((heldWorldTarget.z - body.position.z) * followGain, -maxVelocity, maxVelocity)
  );
  body.angularVelocity.set(0, 0, 0);
  // Cancel gravity while hand-held; discrete floor/wall contacts remain enabled.
  body.force.set(0, body.mass * 9.82, 0);
  body.wakeUp();
  body.aabbNeedsUpdate = true;
}

function isMovementKeyDown() {
  return !inventoryOpen && !menuOpen && !dead && (keys.has('KeyW') || keys.has('KeyA') || keys.has('KeyS') || keys.has('KeyD') || Math.abs(joystick.x) + Math.abs(joystick.y) > 0.12);
}

function updatePlayer(dt) {
  if (dead) {
    playerBody.velocity.x = 0;
    playerBody.velocity.z = 0;
    return;
  }
  let strafe = inventoryOpen ? 0 : joystick.x;
  let forward = inventoryOpen ? 0 : -joystick.y;
  if (!inventoryOpen) {
    if (keys.has('KeyA')) strafe -= 1;
    if (keys.has('KeyD')) strafe += 1;
    if (keys.has('KeyW')) forward += 1;
    if (keys.has('KeyS')) forward -= 1;
  }
  const length = Math.hypot(strafe, forward);
  if (length > 1) { strafe /= length; forward /= length; }
  const sprinting = !inventoryOpen && (keys.has('ShiftLeft') || keys.has('ShiftRight') || Math.hypot(joystick.x, joystick.y) > 0.84);
  const speed = movementSpeedWithSnow(sprinting ? 5.25 : 3.8, carriedSnow);
  const dx = -Math.sin(yaw) * forward + Math.cos(yaw) * strafe;
  const dz = -Math.cos(yaw) * forward - Math.sin(yaw) * strafe;
  const smoothing = Math.min(1, dt * (length > 0.02 ? 13 : 17));
  playerBody.velocity.x += (dx * speed - playerBody.velocity.x) * smoothing;
  playerBody.velocity.z += (dz * speed - playerBody.velocity.z) * smoothing;
  if (length > 0.02) walkPhase += dt * (speed + 1.6);
}

function updateCamera(dt) {
  damageCooldown = Math.max(0, damageCooldown - dt);
  shakeAmount = Math.max(0, shakeAmount - dt * 2.6);
  if (dead) {
    const fall = THREE.MathUtils.smoothstep(deathTimer, 0.05, 1.25);
    camera.position.set(playerBody.position.x, playerBody.position.y + 0.77 - fall * 0.68, playerBody.position.z);
    camera.rotation.set(pitch + fall * 0.08, yaw, -fall * 0.62, 'YXZ');
    handGroup.visible = false;
    return;
  }
  handGroup.visible = Boolean(currentWeaponId || heldBody);
  const moving = isMovementKeyDown();
  const bob = moving ? Math.sin(walkPhase * 2.0) * 0.026 : 0;
  const sway = moving ? Math.sin(walkPhase) * 0.012 : 0;
  const shakeX = shakeAmount > 0 ? (Math.random() - 0.5) * 0.045 * shakeAmount : 0;
  const shakeY = shakeAmount > 0 ? (Math.random() - 0.5) * 0.036 * shakeAmount : 0;
  camera.position.set(playerBody.position.x + sway + shakeX, playerBody.position.y + 0.77 + bob + shakeY, playerBody.position.z);
  camera.rotation.set(pitch, yaw, 0, 'YXZ');
  handGroup.position.y = moving ? Math.sin(walkPhase * 2.0 + 0.75) * 0.012 : 0;
  handGroup.position.x = moving ? Math.sin(walkPhase) * 0.008 : 0;
}

function resetPlayerFallTracking() {
  playerFallArmed = false;
  playerFallPeakY = playerStart.y;
  playerMaxFallSpeed = 0;
}

function resolvePlayerFallDamage() {
  if (!playerFallArmed) return;
  const drop = playerFallPeakY - playerStart.y;
  const impactSpeed = playerMaxFallSpeed;
  resetPlayerFallTracking();
  if (drop < 2.4 || impactSpeed < 5.2) return;
  const amount = Math.min(65, Math.round(10 + (drop - 2.4) * 14 + (impactSpeed - 5.2) * 3));
  receiveDamage(amount, 'leg-left');
}

function updatePlayerFallDamage() {
  if (dead || menuOpen || inventoryOpen) return;
  const y = playerBody.position.y;
  const verticalSpeed = playerBody.velocity.y;
  if (verticalSpeed < -1.2 && y > playerStart.y + 0.4) {
    playerFallArmed = true;
    playerFallPeakY = Math.max(playerFallPeakY, y);
    playerMaxFallSpeed = Math.max(playerMaxFallSpeed, -verticalSpeed);
  }
  if (playerFallArmed && playerPreviousVerticalVelocity < -1.2 && verticalSpeed > -0.45) resolvePlayerFallDamage();
  playerPreviousVerticalVelocity = verticalSpeed;
}

function keepPlayerInBounds() {
  if (dead) return;
  const safeX = 8.45;
  const safeZ = 6.45;
  if (![playerBody.position.x, playerBody.position.y, playerBody.position.z].every(Number.isFinite) || playerBody.position.y < 0.48) {
    resolvePlayerFallDamage();
    playerBody.position.copy(playerStart);
    playerBody.previousPosition.copy(playerStart);
    playerBody.interpolatedPosition.copy(playerStart);
    playerBody.velocity.set(0, 0, 0);
    playerBody.force.set(0, 0, 0);
    playerBody.aabbNeedsUpdate = true;
    world.broadphase.dirty = true;
    playerBody.wakeUp();
    resetPlayerFallTracking();
    toast('ВОЗВРАТ В СЕКТОР · ПАДЕНИЕ', 1.4);
    return;
  }
  if (playerBody.position.x < -safeX || playerBody.position.x > safeX) {
    playerBody.position.x = THREE.MathUtils.clamp(playerBody.position.x, -safeX, safeX);
    if (Math.sign(playerBody.velocity.x) === Math.sign(playerBody.position.x)) playerBody.velocity.x = 0;
  }
  if (playerBody.position.z < -safeZ || playerBody.position.z > safeZ) {
    playerBody.position.z = THREE.MathUtils.clamp(playerBody.position.z, -safeZ, safeZ);
    if (Math.sign(playerBody.velocity.z) === Math.sign(playerBody.position.z)) playerBody.velocity.z = 0;
  }
  if (playerBody.position.y > 5.02) {
    playerBody.position.y = 5.02;
    if (playerBody.velocity.y > 0) playerBody.velocity.y = 0;
  }
  playerBody.aabbNeedsUpdate = true;
}

function updatePlayerCollisionMasks() {
  let changed = false;
  for (const record of physicsRecords) {
    const meta = record.body.gameMeta;
    if (!meta?.playerCollisionSuspended || meta.isHeld || meta.isStored || elapsed < (meta.playerCollisionReEnableAfter || 0)) continue;
    const radius = Math.max(0.34, record.body.boundingRadius || 0.5);
    const dx = record.body.position.x - playerBody.position.x;
    const dz = record.body.position.z - playerBody.position.z;
    const dy = Math.abs(record.body.position.y - playerBody.position.y);
    if (Math.hypot(dx, dz) > radius + 0.36 || dy > radius + 0.9) {
      record.body.collisionFilterMask = meta.originalCollisionFilterMask;
      meta.playerCollisionSuspended = false;
      changed = true;
    }
  }
  if (changed) world.broadphase.dirty = true;
}

function syncVisuals() {
  for (const record of physicsRecords) {
    record.visual.position.copy(record.body.position);
    record.visual.quaternion.copy(record.body.quaternion);
  }
}

function animate(time) {
  requestAnimationFrame(animate);
  const dt = Math.min(0.05, Math.max(0.001, (time - (animate.lastTime || time)) / 1000));
  animate.lastTime = time;
  elapsed += dt;
  if (dead) deathTimer += dt;
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
  if (menuOpen) {
    renderer.render(scene, camera);
    return;
  }
  updatePlayer(dt);
  updateCamera(dt);
  updateHandPose(dt);
  updateWeapon(dt);
  updateBulletMarks(dt);
  updateHeld(dt);
  for (const record of physicsRecords) {
    const last = record.body.gameMeta?.lastVelocity;
    if (last) {
      last.x = record.body.velocity.x;
      last.y = record.body.velocity.y;
      last.z = record.body.velocity.z;
    }
  }
  updateMannequinAI(dt);
  world.step(1 / 60, dt, 4);
  updatePlayerFallDamage();
  if (pendingDeathRelease) {
    releaseHeldAfterDeath();
    pendingDeathRelease = false;
  }
  keepPlayerInBounds();
  updatePlayerCollisionMasks();
  updateFireEffects(dt);
  updateNeeds(dt);
  syncVisuals();
  targetRefresh += dt;
  if (targetRefresh > 0.09) {
    updateTargetUI();
    targetRefresh = 0;
  }
  renderer.render(scene, camera);
  renderInventoryPreview(dt);
}
requestAnimationFrame(animate);

function resize() {
  const width = window.innerWidth, height = window.innerHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height, false);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, qualityReduced ? 1 : (mobile ? 1.35 : 1.7)));
  if (inventoryOpen) resizeInventoryPreview();
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
  if (!started || dead || menuOpen || inventoryOpen) return;
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
  if (!started || dead || inventoryOpen || menuOpen || event.pointerType === 'touch' && event.clientX < window.innerWidth * 0.4) return;
  if (event.target.closest('button, #joystick, .vitals-panel')) return;
  if (event.pointerType === 'mouse' && document.pointerLockElement !== canvas && canvas.requestPointerLock) {
    try { canvas.requestPointerLock(); } catch (_) { /* Non-essential for browser testing. */ }
  }
  lookState = { pointerId: event.pointerId, x: event.clientX, y: event.clientY, pointerType: event.pointerType };
}
window.addEventListener('pointerdown', beginLook, { passive: false });
window.addEventListener('pointermove', (event) => {
  if (document.pointerLockElement === canvas) {
    if (!started || dead) return;
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

const actionButton = $('action-button');
let actionPointerId = null;
let actionLongPressTimer = 0;
let actionLongPressTriggered = false;
function clearActionLongPress() {
  if (actionLongPressTimer) clearTimeout(actionLongPressTimer);
  actionLongPressTimer = 0;
  actionPointerId = null;
}
actionButton.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  event.stopPropagation();
  if (dead || inventoryOpen || menuOpen) return;
  actionPointerId = event.pointerId;
  actionLongPressTriggered = false;
  try { actionButton.setPointerCapture(event.pointerId); } catch (_) { /* Pointer capture is optional. */ }
  actionLongPressTimer = setTimeout(() => {
    if (actionPointerId !== event.pointerId || dead) return;
    actionLongPressTriggered = true;
    setInventoryOpen(true);
  }, 560);
});
actionButton.addEventListener('pointerup', (event) => {
  event.preventDefault();
  event.stopPropagation();
  if (event.pointerId !== actionPointerId) return;
  if (actionLongPressTimer) clearTimeout(actionLongPressTimer);
  actionLongPressTimer = 0;
  const openedInventory = actionLongPressTriggered;
  actionPointerId = null;
  if (!openedInventory) doAction();
});
actionButton.addEventListener('pointercancel', clearActionLongPress);
actionButton.addEventListener('contextmenu', (event) => event.preventDefault());

const fireButton = $('fire-button');
let firePointerId = null;
function stopFirePointer(event) {
  if (firePointerId !== null && event.pointerId !== undefined && event.pointerId !== firePointerId) return;
  firePointerId = null;
  fireHeld = false;
}
fireButton.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  event.stopPropagation();
  if (dead || menuOpen || inventoryOpen) return;
  firePointerId = event.pointerId;
  fireHeld = true;
  try { fireButton.setPointerCapture(event.pointerId); } catch (_) { /* Optional on older WebViews. */ }
  fireWeapon();
});
fireButton.addEventListener('pointerup', stopFirePointer);
fireButton.addEventListener('pointercancel', stopFirePointer);
fireButton.addEventListener('lostpointercapture', stopFirePointer);
fireButton.addEventListener('contextmenu', (event) => event.preventDefault());
$('reload-button').addEventListener('click', (event) => { event.preventDefault(); event.stopPropagation(); startReload(); });
$('menu-button').addEventListener('click', () => setMenuOpen(!menuOpen));
$('inventory-button').addEventListener('click', () => setInventoryOpen(!inventoryOpen));
$('menu-resume').addEventListener('click', () => setMenuOpen(false));
$('menu-restart').addEventListener('click', () => window.location.reload());
$('menu-overlay').addEventListener('click', (event) => { if (event.target === $('menu-overlay')) setMenuOpen(false); });
$('inventory-close').addEventListener('click', () => setInventoryOpen(false));
$('inventory-take').addEventListener('click', () => {
  if (inventoryMode === 'all') {
    if (selectedCatalogWeaponId && selectedCatalogWeaponId !== currentWeaponId) {
      equipWeapon(selectedCatalogWeaponId);
      setInventoryOpen(false);
    }
    return;
  }
  if (selectedInventoryId) takeInventoryItem(selectedInventoryId);
});
$('inventory-tab-bag').addEventListener('click', () => setInventoryTab('bag'));
$('inventory-tab-all').addEventListener('click', () => setInventoryTab('all'));
$('inventory-drop').addEventListener('click', () => { if (heldBody) { dropHeld(); updateInventoryUI(); } });
$('inventory-stash').addEventListener('click', () => storeHeldInInventory());
$('inventory-overlay').addEventListener('click', (event) => { if (event.target === $('inventory-overlay')) setInventoryOpen(false); });
$('death-restart').addEventListener('click', () => window.location.reload());
$('injury-doll').addEventListener('pointerdown', (event) => {
  const target = event.target.closest?.('.doll-part');
  if (!target) return;
  event.preventDefault();
  event.stopPropagation();
  selectBodyPart(target.id.replace('injury-', ''));
});
$('injury-doll').addEventListener('keydown', (event) => {
  if (!['Enter', ' '].includes(event.key)) return;
  const target = event.target.closest?.('.doll-part');
  if (!target) return;
  event.preventDefault();
  selectBodyPart(target.id.replace('injury-', ''));
});
document.addEventListener('keydown', (event) => {
  if (menuOpen) {
    if (event.code === 'Escape' || event.code === 'Enter') { event.preventDefault(); setMenuOpen(false); }
    return;
  }
  if (dead) {
    if (event.code === 'KeyR') { event.preventDefault(); window.location.reload(); return; }
    if (!event.target.closest?.('button')) event.preventDefault();
    return;
  }
  if (event.code === 'Tab') {
    event.preventDefault();
    if (started) setInventoryOpen(!inventoryOpen);
    return;
  }
  if (event.code === 'Escape') {
    event.preventDefault();
    if (inventoryOpen) setInventoryOpen(false);
    else if (started) setMenuOpen(true);
    return;
  }
  if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ShiftLeft', 'ShiftRight', 'KeyE', 'KeyR', 'Space'].includes(event.code)) event.preventDefault();
  keys.add(event.code);
  if (event.code === 'KeyE' && !event.repeat && !inventoryOpen) doAction();
  if (event.code === 'KeyR' && !event.repeat) startReload();
  if (event.code === 'Space' && !inventoryOpen) {
    fireHeld = true;
    if (!event.repeat) fireWeapon();
  }
});
document.addEventListener('keyup', (event) => {
  keys.delete(event.code);
  if (event.code === 'Space') fireHeld = false;
});
document.addEventListener('visibilitychange', () => { if (document.hidden) { keys.clear(); resetJoystick(); lookState = null; fireHeld = false; firePointerId = null; } });
window.addEventListener('blur', () => { keys.clear(); fireHeld = false; firePointerId = null; resetJoystick(); }, { passive: true });

updateAmmoHUD();
updateHealthHUD();
updateNeedsHUD();
updateInventoryUI();
updateTargetUI();
