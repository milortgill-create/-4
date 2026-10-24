import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import * as C from 'cannon-es';
import { VILLAGE_BOUNDS, VILLAGE_LAYOUT, VILLAGE_SIDEWALKS, getBusStopColliderBoxes, getVillageHouseDoorstep, terrainHeightAt, terrainSlopeAt, terrainColliderSegments } from '../src/village.js';
import { buildVillageRoadGraph, findVillageRoadPath } from '../src/residents.js';

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
assert.equal(VILLAGE_LAYOUT.shop.width, 22, 'the rural supermarket should be a broad rectangular building');
assert.equal(VILLAGE_LAYOUT.shop.depth, 14, 'the supermarket should have enough depth for a recognizable storefront');
assert.ok(VILLAGE_LAYOUT.shop.height >= 4, 'the supermarket should be taller than the village houses');
assert.deepEqual(VILLAGE_LAYOUT.garages.map(({ x, z, width, depth }) => [x, z, width, depth]), [[68, 178, 10, 7], [80, 178, 10, 7], [92, 178, 10, 7]], 'three metal garages should form one straight row');
assert.equal(VILLAGE_LAYOUT.ruins.length, 3, 'the three photo-inspired abandoned buildings should be placed in the village');
assert.deepEqual(new Set(VILLAGE_LAYOUT.ruins.map((ruin) => ruin.type)), new Set(['brick-farm', 'timber-tower', 'brick-shell']), 'the ruins should include low brick shells and the raised timber outbuilding');
assert.equal(VILLAGE_SIDEWALKS.length, VILLAGE_LAYOUT.lots.length + 4, 'each house and both public landmarks should connect to the walkable network');
const shopFootprint = {
  minX: VILLAGE_LAYOUT.shop.x - VILLAGE_LAYOUT.shop.width / 2,
  maxX: VILLAGE_LAYOUT.shop.x + VILLAGE_LAYOUT.shop.width / 2,
  minZ: VILLAGE_LAYOUT.shop.z - VILLAGE_LAYOUT.shop.depth / 2,
  maxZ: VILLAGE_LAYOUT.shop.z + VILLAGE_LAYOUT.shop.depth / 2
};
const zinaDx = Math.max(shopFootprint.minX - VILLAGE_LAYOUT.auntZina.x, 0, VILLAGE_LAYOUT.auntZina.x - shopFootprint.maxX);
const zinaDz = Math.max(shopFootprint.minZ - VILLAGE_LAYOUT.auntZina.z, 0, VILLAGE_LAYOUT.auntZina.z - shopFootprint.maxZ);
assert.ok(Math.hypot(zinaDx, zinaDz) < 5, 'Aunt Zina should remain stationary right beside the supermarket facade');
assert.equal(terrainColliderSegments().length, 62, 'terrain collision should follow the smooth hill in short, overlapping segments');

const residentRoadGraph = buildVillageRoadGraph();
const shopDestination = { x: VILLAGE_LAYOUT.shop.x, z: VILLAGE_LAYOUT.shop.z - VILLAGE_LAYOUT.shop.depth / 2 - 0.72 };
const mikhtokDestination = { x: VILLAGE_LAYOUT.hangars[0].x, z: VILLAGE_LAYOUT.hangars[0].z + VILLAGE_LAYOUT.hangars[0].depth / 2 + 6.2 };
assert.ok(residentRoadGraph.nodes.length > VILLAGE_LAYOUT.roads.length, 'road intersections and footpaths should become explicit route nodes');
for (const lot of VILLAGE_LAYOUT.lots) {
  const start = getVillageHouseDoorstep(lot);
  assert.ok(findVillageRoadPath(residentRoadGraph, start, shopDestination).length > 2, `${lot.id} should have a complete pedestrian route to the supermarket`);
  assert.ok(findVillageRoadPath(residentRoadGraph, start, mikhtokDestination).length > 2, `${lot.id} should have a complete pedestrian route to Mikhtok`);
}
const stopColliders = getBusStopColliderBoxes();
assert.equal(stopColliders.filter((box) => box.kind === 'support').length, 4, 'all four visible bus-stop posts need physical collision');
assert.ok(stopColliders.some((box) => box.kind === 'roof') && stopColliders.some((box) => box.kind === 'bench-seat'), 'the bus-stop roof and bench should also block collision');
const stopWorld = new C.World({ gravity: new C.Vec3(0, 0, 0), allowSleep: false });
stopWorld.broadphase = new C.SAPBroadphase(stopWorld);
for (const collider of stopColliders) {
  const body = new C.Body({ mass: 0 });
  body.addShape(new C.Box(new C.Vec3(...collider.halfExtents)));
  body.position.set(...collider.position);
  stopWorld.addBody(body);
}
const stopWalker = new C.Body({ mass: 1, position: new C.Vec3(VILLAGE_LAYOUT.stop.x - 5, terrainHeightAt(VILLAGE_LAYOUT.stop.x) + 1.3, VILLAGE_LAYOUT.stop.z - 1.65), allowSleep: false });
stopWalker.addShape(new C.Sphere(0.31));
stopWalker.velocity.x = 4;
stopWorld.addBody(stopWalker);
let stopWalkerMaximumX = stopWalker.position.x;
for (let i = 0; i < 120; i++) {
  stopWorld.step(1 / 60, 1 / 60, 4);
  stopWalkerMaximumX = Math.max(stopWalkerMaximumX, stopWalker.position.x);
}
assert.ok(stopWalkerMaximumX < VILLAGE_LAYOUT.stop.x - 3.05, 'the player should be blocked by a bus-stop support post instead of passing through it');
assert.ok(stopWalkerMaximumX > VILLAGE_LAYOUT.stop.x - 3.45, 'the walker should reach the visible post before being stopped');

const mainSource = await readFile(new URL('../src/main.js', import.meta.url), 'utf8');
const ruinSource = await readFile(new URL('../src/village-structures.js', import.meta.url), 'utf8');
assert.match(mainSource, /from '\.\/village\.js'/, 'main gameplay should consume the village plan');
assert.match(mainSource, /function addVillageTerrain\(/, 'the map should generate a continuous terrain mesh');
assert.match(mainSource, /terrainColliderSegments\(\)/, 'the hill must have matching segmented physical ground');
assert.match(mainSource, /Math\.atan\(segment\.slope\)/, 'physical ground segments must follow the smooth terrain slope');
assert.match(mainSource, /function addRoadRibbon\(/, 'the village should render textured, curved road ribbons');
assert.match(mainSource, /function addGrassPatch\(/, 'the west basin should have visible tall-grass patches');
assert.match(mainSource, /function addFenceArea\(/, 'lots and industrial yards should have fence panels and gates');
assert.match(mainSource, /function addWarehouse\(/, 'the eastern map should build the Mikhtok hangars');
assert.match(mainSource, /function addPond\(/, 'Karpyatnik should be visibly drawn using its frozen pond, banks and reeds');
assert.match(mainSource, /function addShopFacade\(/, 'the supermarket should have a dedicated storefront with large windows');
assert.match(mainSource, /makeVillageShopSignTexture/, 'the supermarket is the explicit exception allowed to have a 3D brand sign');
assert.match(mainSource, /ПЯТЁРОЧКА/, 'the supermarket sign should use the requested red-and-green village-market style');
assert.match(mainSource, /function addMetalGarage\(/, 'the garages should be corrugated metal modules with ribbed roll-up doors');
assert.match(ruinSource, /function addBrickFarm\(/, 'one reference ruin should be a low brick farm building with wall openings');
assert.match(ruinSource, /function addTimberTower\(/, 'one reference ruin should reproduce the raised timber outbuilding');
assert.match(ruinSource, /function addCollapsedBrickHouse\(/, 'one reference ruin should be a collapsed brick house with roof fragments');
assert.match(mainSource, /getBusStopColliderBoxes\(stop\)/, 'the stop model should register every visible structural collider');
assert.match(mainSource, /residentGloveMaterial/, 'village residents should use blocky dark winter clothing and gloves');
assert.match(mainSource, /findVillageRoadPath\(residentRoadGraph/, 'residents should route on the road-and-sidewalk graph');
assert.match(mainSource, /function buildAuntZina\(/, 'a recognizable, stationary shop-side resident should be built');
assert.match(mainSource, /function updateAuntZinaAI\(/, 'Aunt Zina should turn her head toward a nearby player');
assert.match(mainSource, /updateAuntZinaAI\(dt\)/, 'Aunt Zina head tracking should update each gameplay frame');
assert.doesNotMatch(mainSource, /makeCanvasLabel|ОСТАНОВКА|МИХТОК|КАРПЯТНИК|ПРОДУКТЫ|ЗАПАДНАЯ НИЗИНА|LOAD TEST|LAB SAMPLE/, 'no generic world-space signs should remain apart from the explicitly requested supermarket sign');
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

console.log('village OK: market-sign exception, connected pedestrian network, bus-stop collision, downhill terrain and photo-inspired ruins');
