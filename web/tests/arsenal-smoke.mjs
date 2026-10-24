import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import * as THREE from 'three';
import {
  WEAPON_CATALOG,
  WEAPON_BY_ID,
  createAmmoState,
  consumeAmmo,
  reloadAmmo,
  classifyHitZone,
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

assert.equal(classifyHitZone('neck'), 'head', 'neck impacts should share the critical head zone');
assert.equal(classifyHitZone('arm-left'), 'limb', 'arm impacts should be classified as a limb wound');
assert.equal(classifyHitZone('shinR'), 'limb', 'ragdoll lower-leg hits should remain in the limb zone');
const headTarget = { health: 100, dead: false };
const headshot = damageMannequin(headTarget, WEAPON_BY_ID.get('glock-17'), 'head');
assert.equal(headshot.zone, 'head');
assert.equal(headshot.lethal, true, 'a precise head hit should kill quickly');
assert.equal(headTarget.health, 0);
const torsoTarget = { health: 100, dead: false };
const torsoHit = damageMannequin(torsoTarget, WEAPON_BY_ID.get('glock-17'), 'torso');
assert.equal(torsoHit.zone, 'torso');
assert.equal(torsoHit.lethal, false, 'one ordinary torso hit should leave the NPC badly hurt but not always dead');
assert.ok(torsoHit.damage >= 55 && torsoHit.damage <= 65);
const torsoFinisher = damageMannequin(torsoTarget, WEAPON_BY_ID.get('glock-17'), 'torso');
assert.equal(torsoFinisher.lethal, true, 'a second torso hit should finish the target quickly');
const limbTarget = { health: 100, dead: false };
const limbHit = damageMannequin(limbTarget, WEAPON_BY_ID.get('ak-47'), 'leg-left');
assert.equal(limbHit.zone, 'limb');
assert.equal(limbHit.lethal, false, 'a limb hit should injure and knock down rather than immediately kill');
assert.ok(limbHit.health < 100);

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
assert.match(mainSource, /let inventoryItems = \[\]/, 'the normal-game backpack should start empty');
assert.match(mainSource, /if \(TEST_SANDBOX\) seedTestSandboxInventory\(\)/, 'the test kit must only be added in the separate sandbox mode');
assert.match(inventoryHtml, /id="menu-sandbox"/, 'the test sandbox should be a separate menu entry');
assert.doesNotMatch(mainSource, /handGroup|weaponHands|buildHand\s*\(/, 'first-person hands and fists must not exist in the view model');
assert.match(mainSource, /bulletSurfaceTargets\.push\(mesh\)/, 'village building surfaces must be included in bullet raycasts');
assert.match(mainSource, /weaponView\.visible = !dead && !heldBody/, 'only a held item or weapon model may appear in the first-person view');
assert.match(mainSource, /weaponView\.visible = false/, 'the first-person item view should begin hidden');
assert.match(mainSource, /ragdollPart\.body\.type = CANNON\.Body\.DYNAMIC/, 'weapon impacts should switch a mannequin to ragdoll physics');
assert.match(mainSource, /damageMannequin\(human, weapon, meta\.key/, 'weapon hits should subtract mannequin health');

console.log('arsenal OK: 9 weapons plus the shovel tool, separate test kit, unique sounds, magazines/reloads, damage, hitscan and no first-person hands');
