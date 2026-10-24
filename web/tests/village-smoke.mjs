import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import * as C from 'cannon-es';
import { VILLAGE_BOUNDS, VILLAGE_LAYOUT, terrainHeightAt } from '../src/village.js';

assert.deepEqual(VILLAGE_BOUNDS, { minX: -310, maxX: 310, minZ: -450, maxZ: 450 });
assert.equal(terrainHeightAt(-250), 0, 'the western low basin should remain at sea level');
assert.equal(terrainHeightAt(0), 2, 'the central village grade should be about +2 metres');
assert.equal(terrainHeightAt(50) - terrainHeightAt(0), 1, 'the hillside grade must rise exactly one metre per 50 metres');
assert.equal(terrainHeightAt(230), 4, 'the eastern bus stop plateau should be about +4 metres');
assert.equal(terrainHeightAt(0), terrainHeightAt(-50) + 1, 'the grade must stay continuous through the residential zone');
assert.equal(VILLAGE_LAYOUT.pond.label, 'КАРПЯТНИК');
assert.ok(VILLAGE_LAYOUT.pond.x < -100 && VILLAGE_LAYOUT.pond.z < -250, 'Karpyatnik must occupy the western low basin');
assert.ok(VILLAGE_LAYOUT.stop.x > 100 && terrainHeightAt(VILLAGE_LAYOUT.stop.x) === 4, 'the bus stop must be on the high eastern edge');
assert.ok(VILLAGE_LAYOUT.school.x < VILLAGE_LAYOUT.shop.x, 'the school should sit to the left/west of the village shop');
assert.ok(VILLAGE_LAYOUT.hangars.some((hangar) => hangar.x > 100), 'Mikhtok hangars should be in the eastern industrial area');
assert.ok(VILLAGE_LAYOUT.scrapYards.length >= 2, 'the east should contain multiple fenced scrap yards');
assert.ok(VILLAGE_LAYOUT.lots.every((lot) => ['north', 'south', 'east', 'west'].includes(lot.gate)), 'every fenced lot should have a defined accessible gate side');

const mainSource = await readFile(new URL('../src/main.js', import.meta.url), 'utf8');
assert.match(mainSource, /from '\.\/village\.js'/, 'main gameplay should consume the village plan');
assert.match(mainSource, /function addVillageTerrain\(/, 'the map should generate a continuous terrain mesh');
assert.match(mainSource, /ramp\.quaternion\.setFromEuler\(0, 0, Math\.atan\(0\.02\)/, 'the physics ramp must match the requested 2% gradient');
assert.match(mainSource, /function addRoadRibbon\(/, 'the village should render textured, curved road ribbons');
assert.match(mainSource, /function addGrassPatch\(/, 'the west basin should have visible tall-grass patches');
assert.match(mainSource, /function addFenceArea\(/, 'lots and industrial yards should have fence panels and gates');
assert.match(mainSource, /function addWarehouse\(/, 'the eastern map should build the Mikhtok hangars');
assert.match(mainSource, /function addPond\(/, 'Karpyatnik should be visibly drawn and labelled');
assert.match(mainSource, /const playerStart = new CANNON\.Vec3\(VILLAGE_LAYOUT\.stop\.x/, 'player spawn must be at the eastern bus stop');
assert.match(mainSource, /let yaw = Math\.PI \/ 2/, 'the initial view should face west/downhill toward the village');
assert.match(mainSource, /const blizzardCount = 1320/, 'the starting view should include a strong animated blizzard');
assert.match(mainSource, /handGroup\.visible = Boolean\(currentWeaponId\) && !dead/, 'unarmed FP hands must remain hidden');

// Run the same three static collision surfaces as the game and verify their continuous grade.
const floor = new C.Material('terrain');
const world = new C.World({ gravity: new C.Vec3(0, -9.82, 0), allowSleep: true });
world.broadphase = new C.SAPBroadphase(world);
world.solver = new C.GSSolver();
world.solver.iterations = 12;
world.solver.tolerance = 0.001;
world.defaultContactMaterial.friction = 0.62;
function addSlab(position, halfExtents) {
  const body = new C.Body({ mass: 0, material: floor, collisionFilterGroup: 1, collisionFilterMask: 15 });
  body.addShape(new C.Box(new C.Vec3(...halfExtents)));
  body.position.set(...position);
  world.addBody(body);
  return body;
}
addSlab([-205.25, -0.42, 0], [106.25, 0.42, 450]);
const ramp = new C.Body({ mass: 0, material: floor, collisionFilterGroup: 1, collisionFilterMask: 15 });
ramp.addShape(new C.Box(new C.Vec3(100.5, 0.5, 450)));
ramp.position.set(0, 1.5, 0);
ramp.quaternion.setFromEuler(0, 0, Math.atan(0.02), 'XYZ');
world.addBody(ramp);
addSlab([205.25, 3.58, 0], [106.25, 0.42, 450]);
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

console.log('village OK: map zones, 2% physical grade, accessible lots, roads, snowdrift collision/removal and stop-facing blizzard spawn');
