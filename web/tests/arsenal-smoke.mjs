import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import * as THREE from 'three';
import {
  WEAPON_CATALOG,
  WEAPON_BY_ID,
  createAmmoState,
  consumeAmmo,
  reloadAmmo,
  damageMannequin,
  traceHitscan
} from '../src/arsenal.js';

const expectedIds = ['cleaver', 'sledgehammer', 'nail-bat', 'pm', 'tt', 'glock-17', 'ak-47', 'm4a1', 'pump-shotgun', 'shovel'];
assert.deepEqual(WEAPON_CATALOG.map((weapon) => weapon.id), expectedIds, 'the complete requested arsenal must be available');
assert.equal(WEAPON_CATALOG.filter((weapon) => weapon.type === 'melee').length, 3);
assert.equal(WEAPON_CATALOG.filter((weapon) => weapon.type === 'tool').length, 1);
assert.equal(WEAPON_BY_ID.get('shovel').model, 'shovel', 'the shovel needs a dedicated first-person model');
assert.equal(WEAPON_CATALOG.filter((weapon) => weapon.type === 'pistol').length, 3);
assert.equal(WEAPON_CATALOG.filter((weapon) => weapon.type === 'rifle').length, 2);
assert.equal(WEAPON_CATALOG.filter((weapon) => weapon.type === 'shotgun').length, 1);

const expectedMagazines = { pm: 8, tt: 8, 'glock-17': 17, 'ak-47': 30, m4a1: 30, 'pump-shotgun': 8 };
for (const [id, capacity] of Object.entries(expectedMagazines)) {
  const weapon = WEAPON_BY_ID.get(id);
  const state = createAmmoState(weapon);
  assert.equal(state.magazine, capacity, `${id} magazine capacity`);
  assert.equal(consumeAmmo(weapon, state), true, `${id} should fire while loaded`);
  assert.equal(state.magazine, capacity - 1);
  assert.equal(reloadAmmo(weapon, state), 1, `${id} reload should restore exactly one round`);
  assert.equal(state.magazine, capacity);
}
assert.ok(new Set(Object.values(expectedMagazines)).size >= 3, 'firearms should not all share one magazine size');
for (const weapon of WEAPON_CATALOG.filter((item) => item.type === 'melee')) {
  const state = createAmmoState(weapon);
  assert.equal(state.magazine, null, `${weapon.id} is melee, not ammunition-fed`);
  assert.equal(consumeAmmo(weapon, state), true, `${weapon.id} should swing without ammunition`);
  assert.equal(reloadAmmo(weapon, state), 0);
}
const soundFingerprints = WEAPON_CATALOG.map(({ sound }) => `${sound.frequency}:${sound.filter}:${sound.duration}:${sound.swing}`);
assert.equal(new Set(soundFingerprints).size, WEAPON_CATALOG.length, 'every weapon needs its own distinct synthesized sound profile');

const target = { health: 100, dead: false };
const headshot = damageMannequin(target, WEAPON_BY_ID.get('tt'), 'head');
assert.equal(headshot.damage, 51, 'head hit should use a distinct damage multiplier');
assert.equal(headshot.health, 49);
const lethal = damageMannequin(target, WEAPON_BY_ID.get('sledgehammer'), 'torso');
assert.equal(lethal.lethal, true, 'weapon damage should be able to defeat a test dummy');
assert.equal(lethal.health, 0);

// Exercise the same Three.js hitscan helper used by gameplay: the nearer dummy blocks the wall.
const material = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide });
const dummy = new THREE.Mesh(new THREE.BoxGeometry(0.8, 1.4, 0.35), material);
dummy.position.set(0, 0, -2.5);
dummy.updateMatrixWorld(true);
const wall = new THREE.Mesh(new THREE.BoxGeometry(8, 5, 0.25), material);
wall.position.set(0, 0, -5);
wall.userData.bulletSurface = true;
wall.updateMatrixWorld(true);
const raycaster = new THREE.Raycaster(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, -1), 0, 30);
const firstHit = traceHitscan(raycaster, [wall, dummy])[0];
assert.equal(firstHit.object, dummy, 'a straight center ray should hit the mannequin before the wall');
const wallHit = traceHitscan(raycaster, [wall])[0];
assert.equal(wallHit.object, wall, 'a straight ray should hit the wall surface');
assert.ok(wallHit.distance > firstHit.distance, 'raycast distances must be ordered from muzzle to target');

const mainSource = await readFile(new URL('../src/main.js', import.meta.url), 'utf8');
const inventoryHtml = await readFile(new URL('../../app/src/main/assets/index.html', import.meta.url), 'utf8');
assert.match(inventoryHtml, /id="inventory-tab-all"[^>]*>ВСЕ ПРЕДМЕТЫ/, 'the creative all-items inventory tab should be present');
assert.match(inventoryHtml, /id="inventory-all-grid"/, 'the creative arsenal grid should be present');
assert.match(mainSource, /function createBulletMark\(/, 'wall hits should create persistent bullet marks');
assert.match(mainSource, /currentWeaponId = null/, 'the player should spawn without an equipped weapon');
assert.match(mainSource, /let inventoryItems = \[\]/, 'the backpack should start empty');
assert.match(mainSource, /handGroup\.visible = false/, 'first-person hands should start hidden');
assert.match(mainSource, /bulletSurfaceTargets\.push\(mesh\)/, 'village building surfaces must be included in bullet raycasts');
assert.match(mainSource, /handGroup\.visible = Boolean\(currentWeaponId\) && !dead/, 'FP hands must stay hidden unless a weapon is equipped');
assert.match(mainSource, /weaponView\.visible = !dead && Boolean\(weapon\)/, 'an unarmed player must not render the weapon-and-hands view model');
assert.match(mainSource, /ragdollPart\.body\.type = CANNON\.Body\.DYNAMIC/, 'weapon impacts should switch a mannequin to ragdoll physics');
assert.match(mainSource, /damageMannequin\(human, weapon, meta\.key/, 'weapon hits should subtract mannequin health');

console.log('arsenal OK: 9 weapons plus the shovel tool, unique sound profiles, per-weapon magazines/reloads, damage, hitscan and hidden empty hands');
