import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import * as C from 'cannon-es';
import { VILLAGE_BOUNDS, VILLAGE_LAYOUT, terrainHeightAt, terrainSlopeAt, terrainColliderSegments } from '../src/village.js';

assert.deepEqual(VILLAGE_BOUNDS, { minX: -310, maxX: 310, minZ: -450, maxZ: 450 });
assert.equal(terrainHeightAt(-250), 0, 'the western low basin should remain at sea level');
assert.ok(Math.abs(terrainHeightAt(VILLAGE_LAYOUT.shop.x) - 2) < 0.03, 'the central village should sit on the medium-height shelf');
assert.equal(terrainHeightAt(30), 2, 'the center shelf should connect continuously to the eastern slope');
assert.equal(terrainHeightAt(230), 4, 'the eastern bus stop ridge should reach about +4 metres');
assert.equal(terrainHeightAt(VILLAGE_LAYOUT.stop.x), 4, 'the stop spawn must stand on the high zone');
assert.equal(terrainSlopeAt(30), 0, 'the height profile should meet the middle shelf without a sharp corner');
assert.equal(terrainSlopeAt(230), 0, 'the height profile should meet the ridge without a sharp corner');
assert.ok(terrainSlopeAt(130) > 0.014 && terrainSlopeAt(130) < 0.016, 'the visible downhill should remain gentle and continuous');
let previousHeight = terrainHeightAt(VILLAGE_LAYOUT.stop.x);
for (let x = VILLAGE_LAYOUT.stop.x - 0.5; x >= VILLAGE_LAYOUT.shop.x; x -= 0.5) {
  const height = terrainHeightAt(x);
  assert.ok(height <= previousHeight, 'the road from the high stop toward the shop must never climb or form a ledge');
  assert.ok(previousHeight - height < 0.01, `the downhill must not have a sudden drop near x=${x}`);
  previousHeight = height;
}
assert.equal('label' in VILLAGE_LAYOUT.pond, false, 'the pond should be identified by scenery rather than a sign');
assert.ok(VILLAGE_LAYOUT.pond.x < -100 && VILLAGE_LAYOUT.pond.z < -250, 'Karpyatnik must occupy the western low basin');
assert.ok(VILLAGE_LAYOUT.school.x < VILLAGE_LAYOUT.shop.x, 'the school should sit to the left/west of the village shop');
assert.ok(VILLAGE_LAYOUT.hangars.some((hangar) => hangar.x > 100), 'the hangars should remain in the eastern industrial area');
assert.ok(VILLAGE_LAYOUT.scrapYards.length >= 2, 'the east should contain multiple fenced scrap yards');
assert.ok(VILLAGE_LAYOUT.lots.every((lot) => ['north', 'south', 'east', 'west'].includes(lot.gate)), 'every fenced lot should have a defined accessible gate side');
assert.ok(Math.hypot(VILLAGE_LAYOUT.auntZina.x - VILLAGE_LAYOUT.shop.x, VILLAGE_LAYOUT.auntZina.z - VILLAGE_LAYOUT.shop.z) < 15, 'Aunt Zina should stand beside the shop');
assert.equal(terrainColliderSegments().length, 62, 'terrain collision should follow the smooth hill in short, overlapping segments');

const mainSource = await readFile(new URL('../src/main.js', import.meta.url), 'utf8');
assert.match(mainSource, /from '\.\/village\.js'/, 'main gameplay should consume the village plan');
assert.match(mainSource, /function addVillageTerrain\(/, 'the map should generate a continuous terrain mesh');
assert.match(mainSource, /terrainColliderSegments\(\)/, 'the hill must have matching segmented physical ground');
assert.match(mainSource, /Math\.atan\(segment\.slope\)/, 'physical ground segments must follow the smooth terrain slope');
assert.match(mainSource, /function addRoadRibbon\(/, 'the village should render textured, curved road ribbons');
assert.match(mainSource, /function addGrassPatch\(/, 'the west basin should have visible tall-grass patches');
assert.match(mainSource, /function addFenceArea\(/, 'lots and industrial yards should have fence panels and gates');
assert.match(mainSource, /function addWarehouse\(/, 'the eastern map should build the Mikhtok hangars');
assert.match(mainSource, /function addPond\(/, 'Karpyatnik should be visibly drawn using its frozen pond, banks and reeds');
assert.match(mainSource, /function addShopFacade\(/, 'the shop should be recognizable from its awning and storefront, not lettering');
assert.match(mainSource, /function buildAuntZina\(/, 'a recognizable, stationary shop-side resident should be built');
assert.match(mainSource, /function updateAuntZinaAI\(/, 'Aunt Zina should turn her head toward a nearby player');
assert.match(mainSource, /updateAuntZinaAI\(dt\)/, 'Aunt Zina head tracking should update each gameplay frame');
assert.doesNotMatch(mainSource, /makeCanvasLabel|ОСТАНОВКА|МИХТОК|КАРПЯТНИК|ПРОДУКТЫ|ЗАПАДНАЯ НИЗИНА|LOAD TEST|LAB SAMPLE/, 'no world-space canvas text, plaques or object labels should remain');
assert.doesNotMatch(mainSource, /signPlate|labelPlate|labelMesh|const plaque/, 'no blank or text-bearing information boards should remain in the 3D world');
assert.match(mainSource, /const playerStart = new CANNON\.Vec3\(VILLAGE_LAYOUT\.stop\.x/, 'player spawn must be at the eastern bus stop');
assert.match(mainSource, /let yaw = Math\.PI \/ 2/, 'the initial view should face west/downhill toward the village');
assert.match(mainSource, /const blizzardCount = 1320/, 'the starting view should include a strong animated blizzard');
assert.doesNotMatch(mainSource, /handGroup|weaponHands|buildHand\s*\(/, 'no first-person hand or fist geometry should be present');

// Simulate the same overlapping, slope-matched boxes used by the game across low, middle and high zones.
const floor = new C.Material('terrain');
const world = new C.World({ gravity: new C.Vec3(0, -9.82, 0), allowSleep: true });
world.broadphase = new C.SAPBroadphase(world);
world.solver = new C.GSSolver();
world.solver.iterations = 12;
world.solver.tolerance = 0.001;
world.defaultContactMaterial.friction = 0.62;
for (const segment of terrainColliderSegments()) {
  const body = new C.Body({ mass: 0, material: floor, collisionFilterGroup: 1, collisionFilterMask: 15 });
  body.addShape(new C.Box(new C.Vec3(segment.width / 2 + 0.14, 0.5, 450)));
  body.position.set(segment.centerX, segment.height - 0.5, 0);
  body.quaternion.setFromEuler(0, 0, Math.atan(segment.slope), 'XYZ');
  world.addBody(body);
}
const testBodies = [];
for (const x of [-250, -150, -50, 0, 50, 150, 250]) {
  const body = new C.Body({ mass: 1, material: floor, position: new C.Vec3(x, 8, 0), allowSleep: false });
  body.addShape(new C.Sphere(0.3));
  world.addBody(body);
  testBodies.push(body);
}
for (let i = 0; i < 900; i++) world.step(1 / 60, 1 / 60, 4);
for (const body of testBodies) {
  const expected = terrainHeightAt(body.position.x) + 0.3;
  assert.ok(Math.abs(body.position.y - expected) < 0.08, `physics must track the continuous grade at x=${body.position.x}: y=${body.position.y}, expected ${expected}`);
}

// A snowdrift sphere collider supports a player, and its removal lets the player reach the ground.
const driftWorld = new C.World({ gravity: new C.Vec3(0, -9.82, 0), allowSleep: true });
driftWorld.broadphase = new C.SAPBroadphase(driftWorld);
driftWorld.defaultContactMaterial.friction = 0.7;
const ground = new C.Body({ mass: 0, material: floor });
ground.addShape(new C.Box(new C.Vec3(4, 0.25, 4)));
ground.position.set(0, -0.25, 0);
driftWorld.addBody(ground);
const drift = new C.Body({ mass: 0, material: floor });
drift.addShape(new C.Sphere(0.48));
drift.position.set(0, 0.48, 0);
driftWorld.addBody(drift);
const player = new C.Body({ mass: 72, material: floor, position: new C.Vec3(0, 3, 0), fixedRotation: true, allowSleep: false });
player.addShape(new C.Sphere(0.3));
driftWorld.addBody(player);
for (let i = 0; i < 180; i++) driftWorld.step(1 / 60, 1 / 60, 4);
assert.ok(player.position.y > 1.18, 'an intact snowdrift must physically support the player above the ground');
driftWorld.removeBody(drift);
for (let i = 0; i < 180; i++) driftWorld.step(1 / 60, 1 / 60, 4);
assert.ok(player.position.y < 0.38, 'removing a dug snowdrift must let the player settle back to the ground');

console.log('village OK: no 3D signs, high-to-center downhill, matched physics, accessible lots, shop-side Aunt Zina and diggable snowdrifts');
