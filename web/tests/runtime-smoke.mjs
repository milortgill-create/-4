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
    this.width = 390;
    this.height = 844;
    this.classList = { add() {}, remove() {}, toggle() {}, contains() { return false; } };
  }
  addEventListener() {}
  removeEventListener() {}
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
source += '\nglobalThis.__runFrame = animate; globalThis.__scene = scene; globalThis.__camera = camera; globalThis.__world = world; globalThis.__player = playerBody; globalThis.__renderer = renderer; globalThis.__ground = floorSurfaceMesh; globalThis.__drifts = snowDrifts;';

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

console.log(`runtime OK: village scene initialized (${sandbox.__scene.children.length} roots, ${sandbox.__world.bodies.length} physics bodies) and first frame rendered`);
