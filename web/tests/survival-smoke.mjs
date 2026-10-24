import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import {
  SNOW_SCOOP_AMOUNT,
  SNOW_CARRY_SPEED_FACTOR,
  scoopSnow,
  depositSnow,
  movementSpeedWithSnow,
  updateHeat
} from '../src/survival.js';

const drift = { amount: 1 };
const scoop = scoopSnow(drift, 0);
assert.equal(scoop.ok, true, 'a shovel should take snow from a non-empty drift');
assert.equal(scoop.amount, SNOW_SCOOP_AMOUNT);
assert.equal(drift.amount, 1 - SNOW_SCOOP_AMOUNT, 'scooping must visibly reduce the remaining drift amount');
assert.equal(scoopSnow(drift, scoop.amount).reason, 'already-carrying', 'the shovel should not take a second load before dumping');

const dumped = depositSnow(scoop.amount, { x: 2.5, z: -1.25 });
assert.deepEqual(dumped, {
  ok: true,
  pile: { x: 2.5, z: -1.25, amount: scoop.amount },
  remaining: 0
}, 'dumping carried snow should create a new pile at the selected floor position');
assert.equal(depositSnow(0, { x: 0, z: 0 }).ok, false, 'empty shovel loads should not create a pile');
assert.equal(scoopSnow({ amount: 0 }, 0).reason, 'empty', 'an exhausted drift should not yield more snow');

assert.equal(movementSpeedWithSnow(5, 0), 5, 'empty hands should preserve the base movement speed');
assert.equal(movementSpeedWithSnow(5, scoop.amount), 5 * SNOW_CARRY_SPEED_FACTOR, 'carrying snow should slow movement');
assert.equal(updateHeat(58, 2, true), 69, 'standing near a lit stove should fill the heat meter');
assert.equal(updateHeat(58, 2, false), 58 - 2 * 0.36, 'cold exposure should slowly drain heat away from the stove');
assert.equal(updateHeat(98, 5, true), 100, 'the warmth meter should cap at 100 percent');
assert.equal(updateHeat(2, 10, false), 0, 'the warmth meter should not go below zero');

const mainSource = await readFile(new URL('../src/main.js', import.meta.url), 'utf8');
const html = await readFile(new URL('../../app/src/main/assets/index.html', import.meta.url), 'utf8');
const css = await readFile(new URL('../../app/src/main/assets/style.css', import.meta.url), 'utf8');
assert.match(mainSource, /makeSnowTexture\('#e2e9e9'/, 'the courtyard floor should use a snow texture');
assert.match(mainSource, /makeWoodTexture\('#775a3d'/, 'the test room walls should use a shed wood texture');
assert.match(mainSource, /function createSnowDrift\(/, 'the scene should create interactable snow drifts');
assert.match(mainSource, /function finishSnowAction\(/, 'shovel actions should complete an animated scoop or dump');
assert.match(mainSource, /function buildStove\(/, 'the scene should include a brick stove');
assert.match(mainSource, /function feedStoveWithHeldWood\(/, 'held firewood should fuel the stove through the action control');
assert.match(mainSource, /function updateFireEffects\(/, 'the burning stove should animate fire and crackling audio');
assert.match(html, /id="heat-bar"/, 'the compact HUD should expose a warmth meter');
assert.match(html, /ВСЕ ПРЕДМЕТЫ <small>10<\/small>/, 'the creative catalog should include the new shovel');
assert.match(css, /\.weapon-controls\s*\{\s*position:\s*relative;\s*display:\s*none;/, 'the weapon/fire HUD should stay hidden until an item is equipped');

console.log('survival OK: shovel scoop/deposit, carried-load slowdown, heat gain/loss, snow yard, wood stove and empty-hand HUD');
