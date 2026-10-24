import assert from 'node:assert/strict';
import * as C from 'cannon-es';

const GROUP_WORLD = 1, GROUP_PLAYER = 2, GROUP_PROPS = 4, GROUP_RAGDOLL = 8;
const MASK_ALL = GROUP_WORLD | GROUP_PLAYER | GROUP_PROPS | GROUP_RAGDOLL;
const concrete = new C.Material('concrete');
const props = new C.Material('props');
const mannequinMaterial = new C.Material('mannequin');

function makeWorld() {
  const world = new C.World({ gravity: new C.Vec3(0, -9.82, 0), allowSleep: true });
  world.broadphase = new C.SAPBroadphase(world);
  world.solver = new C.GSSolver();
  world.solver.iterations = 12;
  world.solver.tolerance = 0.001;
  world.addContactMaterial(new C.ContactMaterial(concrete, props, { friction: 0.75, restitution: 0.06 }));
  world.addContactMaterial(new C.ContactMaterial(props, props, { friction: 0.55, restitution: 0.09 }));
  world.addContactMaterial(new C.ContactMaterial(concrete, mannequinMaterial, { friction: 0.62, restitution: 0.02 }));
  const floor = new C.Body({ mass: 0, material: concrete, collisionFilterGroup: GROUP_WORLD, collisionFilterMask: MASK_ALL });
  floor.addShape(new C.Box(new C.Vec3(9, 0.25, 7)));
  floor.position.set(0, -0.25, 0);
  world.addBody(floor);
  for (const side of [-1, 1]) {
    const xWall = new C.Body({ mass: 0, material: concrete, collisionFilterGroup: GROUP_WORLD, collisionFilterMask: MASK_ALL });
    xWall.addShape(new C.Box(new C.Vec3(0.2, 3, 7)));
    xWall.position.set(side * 9, 3, 0);
    world.addBody(xWall);
    const zWall = new C.Body({ mass: 0, material: concrete, collisionFilterGroup: GROUP_WORLD, collisionFilterMask: MASK_ALL });
    zWall.addShape(new C.Box(new C.Vec3(9, 3, 0.2)));
    zWall.position.set(0, 3, side * 7);
    world.addBody(zWall);
  }
  return world;
}

function addProp(world, name, mass, position, shape, offset = new C.Vec3(), yaw = 0) {
  const body = new C.Body({
    mass, material: props, position: new C.Vec3(...position),
    collisionFilterGroup: GROUP_PROPS, collisionFilterMask: MASK_ALL,
    linearDamping: 0.08, angularDamping: 0.18, allowSleep: true,
    sleepSpeedLimit: 0.07, sleepTimeLimit: 0.55
  });
  body.addShape(shape, offset);
  body.quaternion.setFromEuler(0, yaw, 0, 'YZX');
  world.addBody(body);
  return { name, body };
}

// Verify the level's varied rigid bodies keep contact with the actual floor collider.
{
  const world = makeWorld();
  const bodies = [];
  const box = (name, p, size, mass, yaw = 0) => bodies.push(addProp(world, name, mass, p, new C.Box(new C.Vec3(size[0] / 2, size[1] / 2, size[2] / 2)), new C.Vec3(), yaw));
  box('crate A01', [-3.55, 0.42, -1], [0.86, 0.84, 0.78], 7.5, -0.08);
  box('crate A02', [-2.73, 0.38, -1.27], [0.72, 0.76, 0.68], 5.2, 0.14);
  box('crate A03', [-3.1, 1.23, -1.12], [0.68, 0.76, 0.64], 5.8, 0.06);
  box('crate B01', [4.95, 0.48, 0.1], [0.95, 0.96, 0.86], 11, 0.24);
  box('crate B02', [5.8, 0.38, -0.25], [0.72, 0.76, 0.72], 5.4, -0.17);
  for (const [name, p, r, h, m] of [
    ['barrel 1', [2.75, 0.54, -1.9], 0.38, 1.08, 18],
    ['barrel 2', [3.75, 0.5, -2.75], 0.35, 1, 15],
    ['barrel 3', [1.93, 0.47, -3.25], 0.33, 0.94, 14]
  ]) bodies.push(addProp(world, name, m, p, new C.Cylinder(r * 0.9, r, h, 12)));
  for (const [i, p] of [[0, [-0.62, 0.22, -2.35]], [1, [0.05, 0.22, -2.55]], [2, [0.62, 0.22, -2.38]], [3, [-4.72, 0.22, 1]], [4, [4.2, 0.22, 1.6]]]) {
    const bottle = addProp(world, `bottle ${i}`, 0.38, p, new C.Cylinder(0.103, 0.103, 0.33, 10), new C.Vec3(0, -0.055, 0));
    bottle.body.addShape(new C.Cylinder(0.043, 0.043, 0.19, 9), new C.Vec3(0, 0.165, 0));
    bodies.push(bottle);
  }
  for (const [i, p, l, w, h, m, yaw] of [
    [0, [-1.45, 0.085, -4.1], 2.35, 0.36, 0.15, 3.4, 0.06],
    [1, [-0.2, 0.09, -4.35], 2, 0.32, 0.16, 3.1, -0.33],
    [2, [0.85, 0.075, 1.05], 2.7, 0.4, 0.13, 4.2, 0.52],
    [3, [6.15, 0.08, 2.2], 2.15, 0.3, 0.14, 3, -0.13]
  ]) box(`plank ${i}`, p, [l, h, w], m, yaw);
  bodies.push(addProp(world, 'shovel', 3.6, [-5.55, 0.07, 2.7], new C.Box(new C.Vec3(0.64, 0.07, 0.2)), new C.Vec3(), -0.25));
  for (const [i, position, yaw] of [
    [1, [6.15, 0.1, -4.1], 0.18],
    [2, [6.78, 0.1, -4.22], -0.36],
    [3, [5.82, 0.1, -4.52], 0.46],
    [4, [6.22, 0.1, -3.72], -0.2]
  ]) {
    bodies.push(addProp(world, `firewood ${i}`, 1.35, position, new C.Box(new C.Vec3(0.34, 0.09, 0.09)), new C.Vec3(), yaw));
  }

  for (let step = 0; step < 600; step++) world.step(1 / 60, 1 / 60, 4);
  for (const { name, body } of bodies) {
    body.updateAABB();
    assert.ok(body.aabb.lowerBound.y >= -0.03, `${name} penetrated floor: ${body.aabb.lowerBound.y}`);
    assert.ok(Number.isFinite(body.position.y), `${name} received a non-finite position`);
  }
  console.log(`floor contact OK: ${bodies.length} props simulated for 10 seconds`);
}

// Physical walls plus the game-level bounds fallback prevent the operator leaving the test chamber.
{
  const world = makeWorld();
  const player = new C.Body({
    mass: 72, position: new C.Vec3(0, 0.87, 0), material: concrete,
    collisionFilterGroup: GROUP_PLAYER, collisionFilterMask: MASK_ALL & ~GROUP_PLAYER,
    fixedRotation: true, linearDamping: 0.02, allowSleep: false
  });
  player.addShape(new C.Cylinder(0.31, 0.31, 1.08, 12));
  player.addShape(new C.Sphere(0.31), new C.Vec3(0, 0.53, 0));
  player.addShape(new C.Sphere(0.31), new C.Vec3(0, -0.53, 0));
  world.addBody(player);
  for (let step = 0; step < 300; step++) {
    player.velocity.set(9, 0, 0);
    world.step(1 / 60, 1 / 60, 4);
  }
  assert.ok(player.position.x <= 8.6, `player escaped through wall: x=${player.position.x}`);
  assert.ok(player.position.y > 0.75, `player fell through the floor: y=${player.position.y}`);
  console.log(`player boundary OK: physical wall held at x=${player.position.x.toFixed(2)}`);
}

// A held dynamic body keeps level collisions, but its reciprocal player bit is removed.
{
  const world = makeWorld();
  const player = new C.Body({
    mass: 72, position: new C.Vec3(0, 0.87, 0), material: concrete,
    collisionFilterGroup: GROUP_PLAYER, collisionFilterMask: MASK_ALL & ~GROUP_PLAYER,
    fixedRotation: true, linearDamping: 0.02, allowSleep: false
  });
  player.addShape(new C.Cylinder(0.31, 0.31, 1.08, 12));
  player.addShape(new C.Sphere(0.31), new C.Vec3(0, 0.53, 0));
  player.addShape(new C.Sphere(0.31), new C.Vec3(0, -0.53, 0));
  world.addBody(player);
  const held = addProp(world, 'held test crate', 7.5, [0, 0.9, 0], new C.Box(new C.Vec3(0.36, 0.36, 0.36)));
  held.body.collisionFilterMask = MASK_ALL & ~GROUP_PLAYER;
  const placedCenterY = 0.385;
  for (let step = 0; step < 180; step++) {
    held.body.velocity.set(0, Math.max(-7, Math.min(7, (placedCenterY - held.body.position.y) * 18)), 0);
    held.body.force.set(0, held.body.mass * 9.82, 0);
    world.step(1 / 60, 1 / 60, 4);
  }
  assert.ok(Math.abs(player.position.x) < 0.03, `held item pushed player in X: ${player.position.x}`);
  assert.ok(Math.abs(player.position.z) < 0.03, `held item pushed player in Z: ${player.position.z}`);
  assert.ok(Math.abs(player.velocity.x) < 0.05 && Math.abs(player.velocity.z) < 0.05, 'held item imparted sideways velocity');
  held.body.updateAABB();
  assert.ok(held.body.aabb.lowerBound.y >= -0.03, 'held item penetrated floor');
  assert.ok(held.body.position.y < 0.45, `held item was not placeable on the floor: ${held.body.position.y}`);
  console.log('pickup collision OK: item can be placed under player without propulsion and settles on floor');
}

// Build the same 15-part mannequin; after activation the hinge limits keep the ragdoll grounded.
{
  const world = makeWorld();
  const human = { parts: [], partMap: [], constraints: [] };
  const origin = [-3.6, 0, -4.55];
  function addPart(key, size, mass, x, y, z) {
    const body = new C.Body({
      mass, type: C.Body.KINEMATIC, material: mannequinMaterial,
      position: new C.Vec3(origin[0] + x, y, origin[2] + z),
      collisionFilterGroup: GROUP_RAGDOLL, collisionFilterMask: MASK_ALL,
      angularDamping: 0.2, linearDamping: 0.08, allowSleep: true,
      sleepSpeedLimit: 0.08, sleepTimeLimit: 0.65
    });
    body.addShape(new C.Box(new C.Vec3(size[0] / 2, size[1] / 2, size[2] / 2)));
    world.addBody(body);
    const part = { key, size, mass, body };
    human.parts.push(part);
    human.partMap[key] = part;
  }
  addPart('pelvis', [0.39, 0.28, 0.25], 5.2, 0, 0.97, 0);
  addPart('torso', [0.44, 0.58, 0.28], 9.4, 0, 1.39, 0);
  addPart('head', [0.32, 0.32, 0.32], 3.1, 0, 1.84, 0);
  for (const side of [-1, 1]) {
    const suffix = side < 0 ? 'L' : 'R';
    addPart(`upperArm${suffix}`, [0.16, 0.39, 0.16], 2.15, side * 0.32, 1.365, 0);
    addPart(`lowerArm${suffix}`, [0.135, 0.34, 0.135], 1.45, side * 0.35, 1.0, 0.015);
    addPart(`hand${suffix}`, [0.135, 0.13, 0.095], 0.55, side * 0.36, 0.765, 0.025);
    addPart(`thigh${suffix}`, [0.21, 0.45, 0.21], 4.15, side * 0.125, 0.735, 0);
    addPart(`shin${suffix}`, [0.16, 0.41, 0.17], 2.55, side * 0.13, 0.305, 0.005);
    addPart(`foot${suffix}`, [0.17, 0.12, 0.31], 0.9, side * 0.13, 0.06, 0.075);
  }
  function joint(aName, bName, pivotA, pivotB, angle, twist, axis = [0, 1, 0]) {
    const constraint = new C.ConeTwistConstraint(human.partMap[aName].body, human.partMap[bName].body, {
      pivotA: new C.Vec3(...pivotA), pivotB: new C.Vec3(...pivotB),
      axisA: new C.Vec3(...axis), axisB: new C.Vec3(...axis),
      angle, twistAngle: twist, maxForce: 2e5, collideConnected: false
    });
    world.addConstraint(constraint);
    human.constraints.push(constraint);
  }
  joint('pelvis', 'torso', [0, 0.14, 0], [0, -0.29, 0], 0.34, 0.28);
  joint('torso', 'head', [0, 0.285, 0], [0, -0.15, 0], 0.5, 0.38);
  for (const side of [-1, 1]) {
    const suffix = side < 0 ? 'L' : 'R';
    joint('torso', `upperArm${suffix}`, [side * 0.215, 0.17, 0], [-side * 0.105, 0.19, 0], 1.36, 0.88, [1, 0, 0]);
    joint(`upperArm${suffix}`, `lowerArm${suffix}`, [side * 0.015, -0.195, 0], [-side * 0.015, 0.17, -0.015], 0.16, 2.15, [1, 0, 0]);
    joint(`lowerArm${suffix}`, `hand${suffix}`, [side * 0.005, -0.17, 0], [-side * 0.005, 0.06, -0.01], 0.42, 0.46, [1, 0, 0]);
    joint('pelvis', `thigh${suffix}`, [side * 0.125, -0.02, 0], [0, 0.22, 0], 1.08, 0.55, [1, 0, 0]);
    joint(`thigh${suffix}`, `shin${suffix}`, [0, -0.22, 0], [0, 0.205, -0.005], 0.14, 2.05, [1, 0, 0]);
    joint(`shin${suffix}`, `foot${suffix}`, [0, -0.205, 0], [0, 0.035, -0.075], 0.34, 0.42, [1, 0, 0]);
  }
  for (let step = 0; step < 60; step++) world.step(1 / 60, 1 / 60, 4);
  for (const part of human.parts) {
    part.body.type = C.Body.DYNAMIC;
    part.body.updateMassProperties();
    part.body.wakeUp();
  }
  human.partMap.torso.body.applyImpulse(new C.Vec3(0, 0, 12), human.partMap.torso.body.position);
  for (let step = 0; step < 600; step++) world.step(1 / 60, 1 / 60, 4);
  assert.equal(human.parts.length, 15);
  assert.equal(human.constraints.length, 14);
  for (const part of human.parts) {
    part.body.updateAABB();
    assert.ok(Number.isFinite(part.body.position.y), `${part.key} received a non-finite position`);
    assert.ok(part.body.aabb.lowerBound.y >= -0.04, `${part.key} penetrated floor: ${part.body.aabb.lowerBound.y}`);
  }
  console.log('ragdoll OK: 15 parts / 14 limited joints, stable on floor after impact');
}
