import assert from 'node:assert/strict';
import { VILLAGE_LAYOUT, VILLAGE_SIDEWALKS, getVillageHousePlacement } from '../src/village.js';
import {
  buildVillageRoadGraph,
  createVillageResidents,
  findVillageRoadPath,
  selectActiveResidents,
  VILLAGE_RESIDENT_COUNT,
  MAX_ACTIVE_RESIDENTS,
  RESIDENT_VISIBILITY_RADIUS
} from '../src/residents.js';

const residents = createVillageResidents();
assert.equal(VILLAGE_RESIDENT_COUNT, 200, 'the village population should be persisted as 200 records');
assert.equal(residents.length, VILLAGE_RESIDENT_COUNT, 'all residents should exist in lightweight memory records');
assert.equal(new Set(residents.map((resident) => resident.id)).size, VILLAGE_RESIDENT_COUNT, 'each resident needs a unique stable id');
assert.ok(residents.every((resident) => resident.homeLotId && Number.isFinite(resident.x) && Number.isFinite(resident.z)), 'each resident needs a saved home and current location');
assert.ok(residents.every((resident) => resident.visual === null), 'the population must not eagerly create 200 Three.js character models');

const graph = buildVillageRoadGraph();
const pedestrianLines = [
  ...VILLAGE_LAYOUT.roads.map((road) => road.points),
  ...VILLAGE_SIDEWALKS.map((sidewalk) => sidewalk.points)
];
function distanceToSegment(point, start, end) {
  const dx = end[0] - start[0];
  const dz = end[1] - start[1];
  const denominator = dx * dx + dz * dz || 1;
  const t = Math.max(0, Math.min(1, ((point.x - start[0]) * dx + (point.z - start[1]) * dz) / denominator));
  return Math.hypot(point.x - start[0] - dx * t, point.z - start[1] - dz * t);
}
function distanceToPedestrianNetwork(point) {
  let closest = Infinity;
  for (const line of pedestrianLines) {
    for (let index = 1; index < line.length; index++) closest = Math.min(closest, distanceToSegment(point, line[index - 1], line[index]));
  }
  return closest;
}
function destinationFor(resident) {
  if (resident.targetIndex === 0) return resident.home;
  if (resident.targetIndex === 1) return { x: VILLAGE_LAYOUT.shop.x, z: VILLAGE_LAYOUT.shop.z - VILLAGE_LAYOUT.shop.depth / 2 - 0.72 };
  const hangar = VILLAGE_LAYOUT.hangars[0];
  return { x: hangar.x, z: hangar.z + hangar.depth / 2 + 6.2 };
}
assert.ok(graph.nodes.length > 150 && graph.edges.length > graph.nodes.length, 'road intersections and house/shop footpaths should form a connected pedestrian graph');
for (const resident of residents) {
  const spawn = { x: resident.x, z: resident.z };
  assert.ok(distanceToPedestrianNetwork(spawn) < 2.5, `${resident.id} should spawn on a road or sidewalk, never in forest or on a roof`);
  const route = findVillageRoadPath(graph, spawn, destinationFor(resident));
  assert.ok(route.length > 1, `${resident.id} should have a route from the spawn point to its next destination`);
  for (let index = 1; index < route.length; index++) {
    const midpoint = { x: (route[index - 1].x + route[index].x) / 2, z: (route[index - 1].z + route[index].z) / 2 };
    assert.ok(distanceToPedestrianNetwork(midpoint) < 1.25, `${resident.id}'s route segment ${index} should stay on a road or sidewalk`);
  }
  if (resident.initialZone === 'home') {
    const lot = VILLAGE_LAYOUT.lots.find((item) => item.id === resident.homeLotId);
    const house = getVillageHousePlacement(lot);
    assert.ok(resident.home.z > house.z + lot.houseDepth / 2 + 0.6, `${resident.id} should start outside the house footprint at its doorstep`);
  }
}

for (const [label, point] of [
  ['bus stop', VILLAGE_LAYOUT.stop],
  ['shop', VILLAGE_LAYOUT.shop],
  ['Mikhtok', VILLAGE_LAYOUT.hangars[0]]
]) {
  const nearby = selectActiveResidents(residents, point.x, point.z);
  assert.ok(nearby.length >= 10 && nearby.length <= MAX_ACTIVE_RESIDENTS, `${label} should stream roughly 10–15 nearby residents`);
  assert.ok(nearby.every((resident) => Math.hypot(resident.x - point.x, resident.z - point.z) <= RESIDENT_VISIBILITY_RADIUS), `${label} residents should be within the activation radius`);
}

assert.ok(residents.some((resident) => resident.initialZone === 'home'), 'residents should live in fenced house lots');
assert.ok(residents.some((resident) => resident.initialZone === 'shop'), 'some residents should gather by the store');
assert.ok(residents.some((resident) => resident.initialZone === 'mikhtok'), 'some residents should work by Mikhtok');
assert.ok(residents.some((resident) => resident.initialZone === 'stop'), 'some residents should be present by the bus stop');

console.log('residents OK: 200 lightweight village records, deterministic home assignments, 10–15 streamed residents at village landmarks');
