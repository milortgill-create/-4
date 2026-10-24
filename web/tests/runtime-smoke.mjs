import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import * as arsenal from '../src/arsenal.js';
import * as survival from '../src/survival.js';
import * as village from '../src/village.js';

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
  location: { reload() {} }
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
  document,
  window,
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
source = source.replace(/^import .*;\s*$/gm, '');
source = source.replaceAll('new THREE.WebGLRenderer(', 'new TestRenderer(');
source += '\nglobalThis.__runFrame = animate; globalThis.__scene = scene; globalThis.__camera = camera; globalThis.__world = world; globalThis.__player = playerBody; globalThis.__renderer = renderer; globalThis.__ground = floorSurfaceMesh; globalThis.__drifts = snowDrifts; globalThis.__auntZina = auntZina; globalThis.__updateAuntZinaAI = updateAuntZinaAI; globalThis.__updatePlayer = updatePlayer; globalThis.__keys = keys; globalThis.__joystick = joystick; globalThis.__sprintButton = sprintButton; globalThis.__isSprintHeld = () => sprintHeld; globalThis.__startGame = () => { started = true; };';

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

console.log(`runtime OK: village (${sandbox.__scene.children.length} roots, ${sandbox.__world.bodies.length} bodies), first frame, Aunt Zina head tracking and physical walk/sprint`);
