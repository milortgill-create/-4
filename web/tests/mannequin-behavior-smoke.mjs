import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import * as C from 'cannon-es';
import * as THREE from 'three';

// Evaluate the game's actual controller functions without booting WebGL or a browser DOM.
const source = await readFile(new URL('../src/main.js', import.meta.url), 'utf8');
const start = source.indexOf('const MANNEQUIN_KNEELING_POSE =');
const end = source.indexOf('\nconst playerStart =', start);
assert.ok(start >= 0 && end > start, 'mannequin controller source markers must exist');
const damageEvents = [];
const sandbox = {
  CANNON: C,
  THREE,
  physicsRecords: [],
  mannequins: [],
  playerBody: { position: new C.Vec3(0, 0.87, 5.25) },
  receiveDamage: (amount, part) => damageEvents.push({ amount, part })
};
runInNewContext(`${source.slice(start, end)}\nglobalThis.updateAIForTest = updateMannequinAI;`, sandbox);

const GROUP_WORLD = 1;
const GROUP_RAGDOLL = 8;
const MASK_ALL = 15;
const floorMaterial = new C.Material('test-floor');
const dummyMaterial = new C.Material('test-mannequin');

function makeWorld() {
  const world = new C.World({ gravity: new C.Vec3(0, -9.82, 0), allowSleep: true });
  world.broadphase = new C.SAPBroadphase(world);
  world.solver = new C.GSSolver();
  world.solver.iterations = 12;
  world.solver.tolerance = 0.001;
  world.defaultContactMaterial.friction = 0.62;
  world.defaultContactMaterial.restitution = 0.02;
  const floor = new C.Body({ mass: 0, material: floorMaterial, collisionFilterGroup: GROUP_WORLD, collisionFilterMask: MASK_ALL });
  floor.addShape(new C.Box(new C.Vec3(9, 0.25, 7)));
  floor.position.set(0, -0.25, 0);
  world.addBody(floor);
  return world;
}

function makeHuman(id, behavior) {
  const origin = id === 'D-01' ? [-3.6, 0, -4.55] : [3.7, 0, -4.5];
  const human = {
    id, origin, behavior, active: true, hitFlash: 0, state: 'falling', stateTime: 0, quietTime: 0,
    parts: [], partMap: {}, rootX: origin[0], rootZ: origin[2], yaw: 0, attackCooldown: 0,
    punchSide: 1, walkPhase: 0, wanderTarget: null, navDirection: null
  };
  const addPart = (key, size, mass, x, y, z) => {
    const body = new C.Body({
      mass, type: C.Body.DYNAMIC, material: dummyMaterial,
      position: new C.Vec3(origin[0] + x, y, origin[2] + z),
      collisionFilterGroup: GROUP_RAGDOLL, collisionFilterMask: MASK_ALL,
      angularDamping: 0.2, linearDamping: 0.08, allowSleep: true,
      sleepSpeedLimit: 0.08, sleepTimeLimit: 0.65
    });
    body.addShape(new C.Box(new C.Vec3(size[0] / 2, size[1] / 2, size[2] / 2)));
    body.gameMeta = { kind: 'mannequin', human, key };
    sandbox.world.addBody(body);
    const part = {
      key, body, mass,
      restLocal: { x, y, z },
      restQuaternion: body.quaternion.clone()
    };
    human.parts.push(part);
    human.partMap[key] = part;
  };
  addPart('pelvis', [0.39, 0.28, 0.25], 5.2, 0, 0.97, 0);
  addPart('torso', [0.44, 0.58, 0.28], 9.4, 0, 1.39, 0);
  addPart('head', [0.32, 0.32, 0.32], 3.1, 0, 1.84, 0);
  for (const side of [-1, 1]) {
    const suffix = side < 0 ? 'L' : 'R';
    addPart(`upperArm${suffix}`, [0.16, 0.39, 0.16], 2.15, side * 0.32, 1.365, 0);
    addPart(`lowerArm${suffix}`, [0.135, 0.34, 0.135], 1.45, side * 0.35, 1, 0.015);
    addPart(`hand${suffix}`, [0.135, 0.13, 0.095], 0.55, side * 0.36, 0.765, 0.025);
    addPart(`thigh${suffix}`, [0.21, 0.45, 0.21], 4.15, side * 0.125, 0.735, 0);
    addPart(`shin${suffix}`, [0.16, 0.41, 0.17], 2.55, side * 0.13, 0.305, 0.005);
    addPart(`foot${suffix}`, [0.17, 0.12, 0.31], 0.9, side * 0.13, 0.06, 0.075);
  }
  human.partMap.torso.body.applyImpulse(new C.Vec3(0, 0, 12), human.partMap.torso.body.position);
  return human;
}

for (const { id, behavior } of [
  { id: 'D-01', behavior: 'peaceful' },
  { id: 'D-02', behavior: 'aggressive' }
]) {
  sandbox.world = makeWorld();
  sandbox.mannequins = [];
  sandbox.physicsRecords = [];
  damageEvents.length = 0;
  const human = makeHuman(id, behavior);
  sandbox.mannequins.push(human);
  const startX = human.rootX;
  const initialTorsoY = human.partMap.torso.body.position.y;
  const seenStates = new Set([human.state]);
  let physicalFallObserved = false;
  for (let step = 0; step < 12 * 60; step++) {
    sandbox.updateAIForTest(1 / 60);
    sandbox.world.step(1 / 60, 1 / 60, 4);
    seenStates.add(human.state);
    if (human.state === 'falling' && human.partMap.torso.body.position.y < initialTorsoY - 0.16) physicalFallObserved = true;
  }
  assert.ok(physicalFallObserved, `${id} should physically fall before recovering`);
  assert.ok(seenStates.has('kneeling-hold'), `${id} should pause visibly on its knees`);
  assert.ok(seenStates.has('recovering-to-feet'), `${id} should then stand from its knees`);
  if (behavior === 'peaceful') {
    assert.ok(seenStates.has('walking-away') || seenStates.has('idle-after'), 'D-01 should leave peacefully');
    assert.ok(human.rootX < startX - 1.4, 'D-01 should move to the side after standing');
    assert.equal(damageEvents.length, 0, 'D-01 must not attack the player');
  } else {
    assert.ok(seenStates.has('chasing') || seenStates.has('attacking'), 'D-02 should chase after standing');
    assert.ok(damageEvents.some((event) => event.amount > 0), 'D-02 should land a fist attack at close range');
  }
  for (const part of human.parts) {
    assert.ok(Number.isFinite(part.body.position.x) && Number.isFinite(part.body.position.y) && Number.isFinite(part.body.position.z), `${id} ${part.key} position must stay finite`);
  }
}

console.log('mannequin behavior OK: physical fall, kneeling recovery, standing, peaceful retreat and aggressive pursuit/punch');
