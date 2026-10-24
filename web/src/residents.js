import { VILLAGE_LAYOUT } from './village.js';

export const VILLAGE_RESIDENT_COUNT = 200;
export const MAX_ACTIVE_RESIDENTS = 15;
export const RESIDENT_VISIBILITY_RADIUS = 120;
export const RESIDENT_RETENTION_RADIUS = 138;

function seededRandom(seed) {
  let value = seed >>> 0;
  return () => {
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 4294967296;
  };
}

function createHome(lot, random) {
  const offset = (span) => (random() - 0.5) * span;
  const home = { x: lot.x, z: lot.z };
  if (lot.gate === 'east') {
    home.x += lot.width * 0.25;
    home.z += offset(lot.depth * 0.2);
  } else if (lot.gate === 'west') {
    home.x -= lot.width * 0.25;
    home.z += offset(lot.depth * 0.2);
  } else if (lot.gate === 'south') {
    home.z += lot.depth * 0.28;
    home.x += offset(lot.width * 0.2);
  } else {
    home.z -= lot.depth * 0.28;
    home.x += offset(lot.width * 0.2);
  }
  return home;
}

function spawnPoint(index, layout, random) {
  const jitter = () => (random() - 0.5) * 2.2;
  if (index < 12) {
    const column = index % 4;
    const row = Math.floor(index / 4);
    return {
      zone: 'stop',
      x: layout.stop.x - 28 + column * 13 + jitter(),
      z: layout.stop.z - 14 + row * 14 + jitter(),
      targetIndex: 1
    };
  }
  if (index < 24) {
    const local = index - 12;
    const column = local % 4;
    const row = Math.floor(local / 4);
    return {
      zone: 'shop',
      x: layout.shop.x - 13 + column * 8 + jitter(),
      z: layout.shop.z - 15 + row * 3.2 + jitter(),
      targetIndex: 2
    };
  }
  if (index < 36) {
    const local = index - 24;
    const column = local % 4;
    const row = Math.floor(local / 4);
    const hangar = layout.hangars[0];
    return {
      zone: 'mikhtok',
      x: hangar.x - 24 + column * 16 + jitter(),
      z: hangar.z + hangar.depth / 2 + 8 + row * 3.5 + jitter(),
      targetIndex: 0
    };
  }
  if (index < 48) {
    const local = index - 36;
    const column = local % 4;
    const row = Math.floor(local / 4);
    const school = layout.school;
    return {
      zone: 'school',
      x: school.x + school.width / 2 + 5 + column * 7 + jitter(),
      z: school.z - 10 + row * 10 + jitter(),
      targetIndex: 1
    };
  }
  return null;
}

/**
 * Build lightweight persistent records for the whole village. Only a small, nearby
 * subset needs a Three.js model; all 200 residents retain their route and position.
 */
export function createVillageResidents(layout = VILLAGE_LAYOUT, count = VILLAGE_RESIDENT_COUNT, seed = 0x504f4c59) {
  const random = seededRandom(seed);
  const lots = layout.lots;
  const residents = [];
  for (let index = 0; index < count; index++) {
    const lot = lots[index % lots.length];
    const home = createHome(lot, random);
    const specialSpawn = spawnPoint(index, layout, random);
    const initialZone = specialSpawn?.zone || 'home';
    const start = specialSpawn || {
      x: home.x + (random() - 0.5) * 1.8,
      z: home.z + (random() - 0.5) * 1.8,
      targetIndex: 1
    };
    residents.push({
      id: `resident-${String(index + 1).padStart(3, '0')}`,
      index,
      home,
      homeLotId: lot.id,
      x: start.x,
      z: start.z,
      initialZone,
      currentLocation: initialZone === 'home' ? 0 : initialZone === 'shop' ? 1 : initialZone === 'mikhtok' ? 2 : -1,
      targetIndex: start.targetIndex,
      moveSpeed: 1.05 + random() * 0.55,
      walkPhase: random() * Math.PI * 2,
      yaw: 0,
      dwellTimer: 0.5 + random() * 3.5,
      path: [],
      pathIndex: 0,
      fleeing: false,
      fleeTimer: 0,
      fleeTarget: null,
      active: false,
      visual: null,
      styleIndex: Math.floor(random() * 6)
    });
  }
  return residents;
}

/** Return the closest residents within the activation radius, capped for mobile rendering. */
export function selectActiveResidents(residents, x, z, limit = MAX_ACTIVE_RESIDENTS, radius = RESIDENT_VISIBILITY_RADIUS) {
  const radiusSquared = radius * radius;
  return residents
    .map((resident) => {
      const dx = resident.x - x;
      const dz = resident.z - z;
      return { resident, distanceSquared: dx * dx + dz * dz };
    })
    .filter((entry) => entry.distanceSquared <= radiusSquared)
    .sort((a, b) => a.distanceSquared - b.distanceSquared || a.resident.index - b.resident.index)
    .slice(0, limit)
    .map((entry) => entry.resident);
}
