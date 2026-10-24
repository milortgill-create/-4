import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import * as arsenal from '../src/arsenal.js';
import * as survival from '../src/survival.js';
import * as village from '../src/village.js';
import * as residents from '../src/residents.js';
import * as villageStructures from '../src/village-structures.js';

// Boot the complete main module against a small DOM/WebGL shim so top-level scene errors
// and first-frame exceptions are caught in CI without requiring a browser or Android SDK.
class FakeElement {
  constructor(tag = 'div', id = '') {
    this.tagName = tag.toUpperCase();
    this.id = id;
    this.style = {};
    this.dataset = {};
    this.className = '';
    this.textContent = '';
    this.innerHTML = '';
    this.value = '';
    this.disabled = false;
    this.checked = false;
    this.children = [];
    this.attributes = {};
    this.listeners = new Map();
    this.width = 390;
    this.height = 844;
    this.classList = { add() {}, remove() {}, toggle() {}, contains() { return false; } };
  }
  addEventListener(type, callback) {
    const callbacks = this.listeners.get(type) || [];
    callbacks.push(callback);
    this.listeners.set(type, callbacks);
  }
  removeEventListener() {}
  dispatch(type, event) { for (const callback of this.listeners.get(type) || []) callback(event); }
  appendChild(child) { this.children.push(child); return child; }
  append(...children) { this.children.push(...children); }
  replaceChildren(...children) { this.children = children; }
  setAttribute(name, value) { this.attributes[name] = value; }
  getAttribute(name) { return this.attributes[name] ?? null; }
  removeAttribute(name) { delete this.attributes[name]; }
  querySelector(selector) { return new FakeElement('div', selector); }
  querySelectorAll() { return []; }
  closest() { return null; }
  focus() {}
  blur() {}
  click() {}
  setPointerCapture() {}
  releasePointerCapture() {}
  requestPointerLock() {}
  getBoundingClientRect() { return { left: 0, top: 0, width: 100, height: 100, right: 100, bottom: 100 }; }
  getContext(type) { return type === '2d' ? canvasContext : null; }
}

const gradient = { addColorStop() {} };
const canvasContext = new Proxy({
  createImageData(width, height) { return { data: new Uint8ClampedArray(width * height * 4) }; },
  putImageData() {},
  createRadialGradient() { return gradient; },
  createLinearGradient() { return gradient; },
  measureText(text) { return { width: String(text).length * 8 }; },
  getImageData(width, height) { return { data: new Uint8ClampedArray(width * height * 4) }; }
}, {
  get(target, key) { return key in target ? target[key] : () => {}; },
  set(target, key, value) { target[key] = value; return true; }
});

const elements = new Map();
const document = {
  getElementById(id) {
    if (!elements.has(id)) elements.set(id, new FakeElement(id.includes('canvas') || id === 'game' ? 'canvas' : 'div', id));
    return elements.get(id);
  },
  querySelector(selector) {
    if (!elements.has(selector)) elements.set(selector, new FakeElement('div', selector));
    return elements.get(selector);
  },
  querySelectorAll() { return []; },
  createElement(tag) { return new FakeElement(tag); },
  createElementNS(namespace, tag) { return new FakeElement(tag); },
  addEventListener() {},
  removeEventListener() {},
  body: new FakeElement('body', 'body'),
  documentElement: new FakeElement('html', 'html'),
  hidden: false,
  pointerLockElement: null,
  exitPointerLock() {}
};
const window = {
  innerWidth: 390,
  innerHeight: 844,
  devicePixelRatio: 1,
  addEventListener() {},
  removeEventListener() {},
  location: { href: 'file:///android_asset/index.html?sandbox=test', search: '?sandbox=test', reload() {} }
};
class TestRenderer {
  constructor({ canvas }) {
    this.domElement = canvas;
    this.capabilities = { getMaxAnisotropy() { return 4; } };
    this.shadowMap = {};
    this.renderCount = 0;
  }
  setPixelRatio() {}
  setSize() {}
  render(scene, camera) {
    assert.ok(scene && camera, 'renderer must receive a scene and camera');
    this.renderCount++;
  }
  dispose() {}
}

let scheduledFrame = null;
const sandbox = {
  THREE,
  CANNON,
  ...arsenal,
  ...survival,
  ...village,
  ...residents,
  ...villageStructures,
  document,
  window,
  URL,
  URLSearchParams,
  TestRenderer,
  matchMedia() { return { matches: true }; },
  requestAnimationFrame(callback) { scheduledFrame = callback; return 1; },
  cancelAnimationFrame() {},
  setTimeout() { return 1; },
  clearTimeout() {},
  performance: { now() { return 0; } },
  console
};
let source = await readFile(new URL('../src/main.js', import.meta.url), 'utf8');
source = source.replace(/^import\b[\s\S]*?;\s*$/gm, '');
source = source.replaceAll('new THREE.WebGLRenderer(', 'new TestRenderer(');
source += '\nglobalThis.__runFrame = animate; globalThis.__scene = scene; globalThis.__camera = camera; globalThis.__world = world; globalThis.__player = playerBody; globalThis.__renderer = renderer; globalThis.__ground = floorSurfaceMesh; globalThis.__drifts = snowDrifts; globalThis.__auntZina = auntZina; globalThis.__updateAuntZinaAI = updateAuntZinaAI; globalThis.__updatePlayer = updatePlayer; globalThis.__keys = keys; globalThis.__joystick = joystick; globalThis.__sprintButton = sprintButton; globalThis.__isSprintHeld = () => sprintHeld; globalThis.__startGame = () => { started = true; }; globalThis.__residents = residentPopulation; globalThis.__activeResidents = () => [...activeVillageResidents]; globalThis.__updateResidents = updateVillageResidents; globalThis.__equipWeapon = equipWeapon; globalThis.__currentWeaponId = () => currentWeaponId; globalThis.__weaponView = weaponView; globalThis.__weaponModel = weaponModel; globalThis.__inventoryItems = () => inventoryItems; globalThis.__testSandbox = TEST_SANDBOX; globalThis.__getTargetMeta = getTargetMeta; globalThis.__doAction = doAction; globalThis.__takeInventoryItem = takeInventoryItem; globalThis.__addShovel = addShovel; globalThis.__updateCamera = updateCamera; globalThis.__physicsRecords = physicsRecords; globalThis.__setView = (nextYaw, nextPitch = 0) => { yaw = nextYaw; pitch = nextPitch; };';

runInNewContext(source, sandbox, { filename: 'main.js', timeout: 30_000 });
assert.ok(sandbox.__scene.children.length > 100, 'complete village geometry should be present in the scene');
assert.ok(sandbox.__ground?.userData.groundSurface, 'the player must have a rendered ground surface beneath the map');
assert.ok(sandbox.__world.bodies.length > 100, 'the village terrain, buildings, fences and snowbanks should have physics bodies');
assert.ok(sandbox.__drifts.length >= village.VILLAGE_LAYOUT.snowDrifts.length, 'map snowdrifts should be instantiated');
assert.ok(sandbox.__drifts.every((drift) => drift.group.parent === sandbox.__scene && drift.body?.world === sandbox.__world), 'every snowdrift needs a visible mesh and a live collider');
assert.equal(sandbox.__player.position.x, village.VILLAGE_LAYOUT.stop.x, 'spawn must be at the eastern bus stop');
assert.equal(sandbox.__player.position.z, village.VILLAGE_LAYOUT.stop.z + 4);

sandbox.__runFrame(16);
assert.equal(sandbox.__renderer.renderCount, 1, 'the initial gameplay frame should render');
const viewDirection = new THREE.Vector3();
sandbox.__camera.getWorldDirection(viewDirection);
assert.ok(viewDirection.x < -0.9, 'the initial view should face west into the village');
assert.ok(Number.isFinite(sandbox.__player.position.y), 'the player should remain on a valid physical surface on frame one');
assert.ok(scheduledFrame, 'the animation loop should continue scheduling frames');
assert.equal(sandbox.__testSandbox, true, 'the runtime should recognize the optional test-sandbox URL mode');
assert.deepEqual([...sandbox.__inventoryItems()].map((item) => item.meta.weaponId), ['shovel', 'glock-17', 'ak-47'], 'the test backpack should begin with a shovel, pistol and automatic rifle');
assert.equal(sandbox.__residents.length, 200, 'all 200 villagers should exist as lightweight records');
assert.ok(sandbox.__activeResidents().length >= 10 && sandbox.__activeResidents().length <= 15, 'only about 10–15 villagers should be rendered near the player');
assert.equal(sandbox.__residents.filter((resident) => resident.visual).length, sandbox.__activeResidents().length, 'distant residents must remain unspawned');
const movingResident = sandbox.__activeResidents()[0];
const residentStart = { x: movingResident.x, z: movingResident.z };
for (let i = 0; i < 70; i++) sandbox.__updateResidents(0.1);
assert.ok(Math.hypot(movingResident.x - residentStart.x, movingResident.z - residentStart.z) > 0.5, 'streamed villagers should walk along their saved route');

assert.equal(sandbox.__auntZina.root.userData.npcId, 'aunt-zina', 'the shop-side resident should be a real scene character');
assert.equal(sandbox.__auntZina.root.position.x, village.VILLAGE_LAYOUT.auntZina.x);
assert.equal(sandbox.__auntZina.root.position.z, village.VILLAGE_LAYOUT.auntZina.z);
const zinaHome = sandbox.__auntZina.root.position.clone();
const playerHome = sandbox.__player.position.clone();
sandbox.__player.position.set(zinaHome.x + 2, zinaHome.y + 0.87, zinaHome.z - 7);
const initialHeadYaw = sandbox.__auntZina.head.rotation.y;
for (let i = 0; i < 30; i++) sandbox.__updateAuntZinaAI(0.05);
assert.ok(Math.abs(sandbox.__auntZina.head.rotation.y - initialHeadYaw) > 0.15, 'Aunt Zina should turn her head toward a nearby player');
assert.deepEqual(sandbox.__auntZina.root.position.toArray(), zinaHome.toArray(), 'Aunt Zina should stay planted by the shop while tracking the player');
sandbox.__player.position.copy(playerHome);
sandbox.__player.velocity.set(0, 0, 0);
sandbox.__keys.clear();
sandbox.__joystick.x = 0;
sandbox.__joystick.y = 0;
sandbox.__keys.add('KeyW');
for (let i = 0; i < 90; i++) sandbox.__updatePlayer(1 / 60);
assert.ok(Math.abs(Math.hypot(sandbox.__player.velocity.x, sandbox.__player.velocity.z) - survival.PLAYER_WALK_SPEED) < 0.05, 'walking should reach a normal shooter pace');

sandbox.__player.velocity.x = 0;
sandbox.__player.velocity.z = 0;
sandbox.__keys.clear();
sandbox.__keys.add('KeyW');
sandbox.__startGame();
const sprintEvent = { pointerId: 7, preventDefault() {}, stopPropagation() {} };
sandbox.__sprintButton.dispatch('pointerdown', sprintEvent);
assert.equal(sandbox.__isSprintHeld(), true, 'the touch sprint button should hold sprint');
for (let i = 0; i < 90; i++) sandbox.__updatePlayer(1 / 60);
assert.ok(Math.abs(Math.hypot(sandbox.__player.velocity.x, sandbox.__player.velocity.z) - survival.PLAYER_SPRINT_SPEED) < 0.05, 'the touch button should reach the faster sprint pace');
sandbox.__sprintButton.dispatch('pointerup', { pointerId: 7 });
assert.equal(sandbox.__isSprintHeld(), false, 'releasing the touch sprint button should stop the sprint boost');

function simulateTravel(useSprint) {
  const startX = village.VILLAGE_LAYOUT.stop.x;
  const startZ = village.VILLAGE_LAYOUT.stop.z + 4;
  sandbox.__player.position.set(startX, village.terrainHeightAt(startX) + 0.87, startZ);
  sandbox.__player.velocity.set(0, 0, 0);
  sandbox.__keys.clear();
  sandbox.__keys.add('KeyW');
  if (useSprint) sandbox.__sprintButton.dispatch('pointerdown', sprintEvent);
  for (let i = 0; i < 60; i++) {
    sandbox.__updatePlayer(1 / 60);
    sandbox.__world.step(1 / 60, 1 / 60, 4);
  }
  if (useSprint) sandbox.__sprintButton.dispatch('pointerup', { pointerId: 7 });
  sandbox.__keys.clear();
  return startX - sandbox.__player.position.x;
}
const walkingDistance = simulateTravel(false);
const sprintingDistance = simulateTravel(true);
assert.ok(walkingDistance > 3.5, `the player must move briskly while walking (travelled ${walkingDistance.toFixed(2)} m in one second)`);
assert.ok(sprintingDistance > walkingDistance * 1.25, 'physical movement under the sprint button should be meaningfully faster than walking');

sandbox.__takeInventoryItem('sandbox-glock-17');
assert.equal(sandbox.__currentWeaponId(), 'glock-17', 'a test-backpack pistol should equip directly');
sandbox.__takeInventoryItem('sandbox-ak-47');
assert.equal(sandbox.__currentWeaponId(), 'ak-47', 'a test-backpack automatic rifle should equip directly');
assert.equal(sandbox.__inventoryItems().length, 1, 'equipping test gear should remove only that selected item from the backpack');
assert.equal(sandbox.__weaponView.parent, sandbox.__camera, 'the held item model should be attached to the camera');
assert.equal(sandbox.__weaponView.children.length, 2, 'the camera should contain only the selected weapon model and muzzle effect');
assert.doesNotMatch(source, /handGroup|weaponHands|buildHand\s*\(/, 'first-person hand and fist geometry must be absent');

const nearbyResident = [...sandbox.__activeResidents()].sort((a, b) => Math.hypot(a.x - sandbox.__player.position.x, a.z - sandbox.__player.position.z) - Math.hypot(b.x - sandbox.__player.position.x, b.z - sandbox.__player.position.z))[0];
sandbox.__player.position.set(nearbyResident.x, village.terrainHeightAt(nearbyResident.x) + 0.87, nearbyResident.z);
sandbox.__player.velocity.set(0, 0, 0);
sandbox.__keys.clear();
sandbox.__joystick.x = 0;
sandbox.__joystick.y = 0;
sandbox.__updateCamera(1 / 60);
const fleeStart = { x: nearbyResident.x, z: nearbyResident.z };
sandbox.__sprintButton.dispatch('pointerdown', sprintEvent);
for (let i = 0; i < 6; i++) sandbox.__updateResidents(0.25);
assert.equal(nearbyResident.fleeing, true, 'a nearby villager should enter flee behavior when the armed player sprints');
assert.ok(Math.hypot(nearbyResident.x - fleeStart.x, nearbyResident.z - fleeStart.z) > 0.5, 'a threatened villager should move away from the player');
sandbox.__sprintButton.dispatch('pointerup', { pointerId: 7 });

const dropButton = document.getElementById('drop-button');
const dropEvent = { pointerId: 8, preventDefault() {}, stopPropagation() {} };
sandbox.__player.position.set(100, village.terrainHeightAt(100) + 0.87, 100);
sandbox.__player.velocity.set(0, 0, 0);
sandbox.__setView(Math.PI / 2, 0);
sandbox.__updateCamera(1 / 60);
dropButton.dispatch('click', dropEvent);
assert.equal(sandbox.__currentWeaponId(), null, 'the dedicated touch button should unequip and throw the held weapon');
const droppedRifle = [...sandbox.__physicsRecords].find((record) => record.body.gameMeta.kind === 'weapon' && record.body.gameMeta.weaponId === 'ak-47' && record.body.world === sandbox.__world);
assert.ok(droppedRifle, 'a thrown weapon should become a live world pickup');
assert.ok(droppedRifle.body.velocity.length() > 0, 'a thrown weapon should receive physical velocity');
sandbox.__updateCamera(1 / 60);
sandbox.__doAction();
assert.equal(sandbox.__currentWeaponId(), 'ak-47', 'the dropped weapon should be recoverable with Action');

// Leave the rifle away from the shovel-pickup test so only the intended shovel is in reach.
dropButton.dispatch('click', dropEvent);
sandbox.__player.position.set(120, village.terrainHeightAt(120) + 0.87, 100);
sandbox.__player.velocity.set(0, 0, 0);
sandbox.__setView(Math.PI / 2, 0);
sandbox.__updateCamera(1 / 60);
const testBagCount = sandbox.__inventoryItems().length;
const testShovelBody = sandbox.__addShovel('runtime-shovel', [120, village.terrainHeightAt(120) + 0.08, 100], 0);
const shovelTarget = sandbox.__getTargetMeta();
assert.equal(shovelTarget.meta, testShovelBody.gameMeta, 'Action target search should find a shovel beneath the player even when the reticle faces away');
assert.equal(shovelTarget.steppedOn, true, 'standing over the shovel should count as a pickup target');
sandbox.__doAction();
assert.equal(sandbox.__currentWeaponId(), 'shovel', 'Action should equip the nearby shovel without routing it through the backpack');
assert.equal(sandbox.__inventoryItems().length, testBagCount, 'world pickup should not add the shovel to the backpack');
assert.equal(testShovelBody.world, null, 'equipping the shovel should remove its world collider');
dropButton.dispatch('click', dropEvent);
assert.equal(sandbox.__currentWeaponId(), null, 'the separate drop button should also throw the shovel');
const droppedShovel = [...sandbox.__physicsRecords].find((record) => record.body.gameMeta.kind === 'weapon' && record.body.gameMeta.weaponId === 'shovel' && record.body.world === sandbox.__world);
assert.ok(droppedShovel, 'the dropped shovel should remain as a world pickup');
sandbox.__updateCamera(1 / 60);
sandbox.__doAction();
assert.equal(sandbox.__currentWeaponId(), 'shovel', 'the dropped shovel should be recoverable with Action');

console.log(`runtime OK: village (${sandbox.__scene.children.length} roots, ${sandbox.__world.bodies.length} bodies), streamed residents and flee, no first-person hands, test backpack, quick pickup, throw and recovery`);
