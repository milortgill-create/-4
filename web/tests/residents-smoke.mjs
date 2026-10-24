import assert from 'node:assert/strict';
import { VILLAGE_LAYOUT } from '../src/village.js';
import {
  createVillageResidents,
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
