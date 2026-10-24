import { VILLAGE_LAYOUT, VILLAGE_SIDEWALKS, getVillageHouseDoorstep } from './village.js';

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
  const doorstep = getVillageHouseDoorstep(lot);
  return {
    x: doorstep.x + (random() - 0.5) * 0.65,
    z: doorstep.z + (random() - 0.5) * 0.22
  };
}

function spawnPoint(index, layout, random) {
  const jitter = (span) => (random() - 0.5) * span;
  if (index < 12) {
    const column = index % 4;
    const row = Math.floor(index / 4);
    return {
      zone: 'stop',
      x: layout.stop.x - 34 + column * 7.5 + jitter(1.0),
      z: layout.stop.z - 2 + row * 1.1 + jitter(0.5),
      targetIndex: 1
    };
  }
  if (index < 24) {
    const local = index - 12;
    const column = local % 4;
    const row = Math.floor(local / 4);
    const frontZ = layout.shop.z - layout.shop.depth / 2 - 1.8;
    return {
      zone: 'shop',
      x: layout.shop.x - 8 + column * 5.3 + jitter(0.65),
      z: frontZ + (row - 1) * 1.1 + jitter(0.25),
      targetIndex: 2
    };
  }
  if (index < 36) {
    const local = index - 24;
    const column = local % 4;
    const row = Math.floor(local / 4);
    const hangar = layout.hangars[0];
    const frontZ = hangar.z + hangar.depth / 2 + 6.2;
    return {
      zone: 'mikhtok',
      x: hangar.x - 25 + column * (50 / 3) + jitter(1.0),
      z: frontZ + (row - 1) * 1.1 + jitter(0.25),
      targetIndex: 0
    };
  }
  if (index < 48) {
    const local = index - 36;
    const column = local % 4;
    const row = Math.floor(local / 4);
    const school = layout.school;
    return {
      zone: 'road',
      x: school.x + school.width / 2 + 9 + column * 3.2 + jitter(0.55),
      z: 224.5 + row * 0.7 + jitter(0.3),
      targetIndex: 1
    };
  }
  return null;
}

const GRAPH_EPSILON = 1e-8;

function cross2d(ax, az, bx, bz) {
  return ax * bz - az * bx;
}

function addSegmentSplit(segment, amount) {
  const t = Math.max(0, Math.min(1, amount));
  if (segment.splits.some((split) => Math.abs(split.t - t) < 1e-7)) return;
  segment.splits.push({ t, x: segment.a.x + (segment.b.x - segment.a.x) * t, z: segment.a.z + (segment.b.z - segment.a.z) * t });
}

function splitAtSegmentIntersection(first, second) {
  const rx = first.b.x - first.a.x;
  const rz = first.b.z - first.a.z;
  const sx = second.b.x - second.a.x;
  const sz = second.b.z - second.a.z;
  const qx = second.a.x - first.a.x;
  const qz = second.a.z - first.a.z;
  const denominator = cross2d(rx, rz, sx, sz);
  if (Math.abs(denominator) > GRAPH_EPSILON) {
    const t = cross2d(qx, qz, sx, sz) / denominator;
    const u = cross2d(qx, qz, rx, rz) / denominator;
    if (t >= -GRAPH_EPSILON && t <= 1 + GRAPH_EPSILON && u >= -GRAPH_EPSILON && u <= 1 + GRAPH_EPSILON) {
      addSegmentSplit(first, t);
      addSegmentSplit(second, u);
    }
    return;
  }
  if (Math.abs(cross2d(qx, qz, rx, rz)) > GRAPH_EPSILON) return;
  const firstLengthSquared = rx * rx + rz * rz || 1;
  const secondLengthSquared = sx * sx + sz * sz || 1;
  for (const point of [second.a, second.b]) {
    const t = ((point.x - first.a.x) * rx + (point.z - first.a.z) * rz) / firstLengthSquared;
    if (t >= -GRAPH_EPSILON && t <= 1 + GRAPH_EPSILON) addSegmentSplit(first, t);
  }
  for (const point of [first.a, first.b]) {
    const u = ((point.x - second.a.x) * sx + (point.z - second.a.z) * sz) / secondLengthSquared;
    if (u >= -GRAPH_EPSILON && u <= 1 + GRAPH_EPSILON) addSegmentSplit(second, u);
  }
}

/** Build a walkable graph from road centerlines and every public/private village footpath. */
export function buildVillageRoadGraph(layout = VILLAGE_LAYOUT, sidewalks = VILLAGE_SIDEWALKS) {
  const segments = [];
  const paths = [
    ...layout.roads.map((road) => road.points),
    ...sidewalks.map((sidewalk) => sidewalk.points)
  ];
  for (const points of paths) {
    for (let index = 1; index < points.length; index++) {
      const a = { x: points[index - 1][0], z: points[index - 1][1] };
      const b = { x: points[index][0], z: points[index][1] };
      if (Math.hypot(b.x - a.x, b.z - a.z) < 0.01) continue;
      segments.push({ a, b, splits: [{ t: 0, ...a }, { t: 1, ...b }] });
    }
  }
  for (let a = 0; a < segments.length; a++) {
    const first = segments[a];
    const firstMinX = Math.min(first.a.x, first.b.x) - 0.001;
    const firstMaxX = Math.max(first.a.x, first.b.x) + 0.001;
    const firstMinZ = Math.min(first.a.z, first.b.z) - 0.001;
    const firstMaxZ = Math.max(first.a.z, first.b.z) + 0.001;
    for (let b = a + 1; b < segments.length; b++) {
      const second = segments[b];
      if (Math.max(second.a.x, second.b.x) < firstMinX || Math.min(second.a.x, second.b.x) > firstMaxX ||
          Math.max(second.a.z, second.b.z) < firstMinZ || Math.min(second.a.z, second.b.z) > firstMaxZ) continue;
      splitAtSegmentIntersection(first, second);
    }
  }

  const nodes = [];
  const adjacency = [];
  const nodeByPosition = new Map();
  const edgeKeys = new Set();
  const edges = [];
  const getNode = (point) => {
    const key = `${Math.round(point.x * 10000)},${Math.round(point.z * 10000)}`;
    if (nodeByPosition.has(key)) return nodeByPosition.get(key);
    const index = nodes.length;
    nodes.push({ x: point.x, z: point.z });
    adjacency.push([]);
    nodeByPosition.set(key, index);
    return index;
  };
  for (const segment of segments) {
    segment.splits.sort((a, b) => a.t - b.t);
    const splits = segment.splits.filter((split, index, values) => index === 0 || Math.abs(split.t - values[index - 1].t) > 1e-7);
    for (let index = 1; index < splits.length; index++) {
      const from = getNode(splits[index - 1]);
      const to = getNode(splits[index]);
      if (from === to) continue;
      const key = from < to ? `${from}:${to}` : `${to}:${from}`;
      if (edgeKeys.has(key)) continue;
      edgeKeys.add(key);
      const length = Math.hypot(nodes[from].x - nodes[to].x, nodes[from].z - nodes[to].z);
      edges.push({ a: from, b: to, length });
      adjacency[from].push({ to, length });
      adjacency[to].push({ to: from, length });
    }
  }
  return { nodes, adjacency, edges };
}

function projectToRoadGraph(point, graph) {
  let closest = null;
  let bestDistanceSquared = Infinity;
  for (let edgeIndex = 0; edgeIndex < graph.edges.length; edgeIndex++) {
    const edge = graph.edges[edgeIndex];
    const start = graph.nodes[edge.a];
    const end = graph.nodes[edge.b];
    const dx = end.x - start.x;
    const dz = end.z - start.z;
    const lengthSquared = dx * dx + dz * dz || 1;
    const t = Math.max(0, Math.min(1, ((point.x - start.x) * dx + (point.z - start.z) * dz) / lengthSquared));
    const x = start.x + dx * t;
    const z = start.z + dz * t;
    const distanceSquared = (point.x - x) ** 2 + (point.z - z) ** 2;
    if (distanceSquared < bestDistanceSquared) {
      bestDistanceSquared = distanceSquared;
      closest = { edgeIndex, edge, t, x, z, distance: Math.sqrt(distanceSquared) };
    }
  }
  return closest;
}

/** Return a route that follows only connected road and sidewalk segments, or [start] if disconnected. */
export function findVillageRoadPath(graph, start, destination, maxSnapDistance = 7.5) {
  if (!start || !destination || !Number.isFinite(start.x) || !Number.isFinite(start.z) ||
      !Number.isFinite(destination.x) || !Number.isFinite(destination.z) || graph.edges.length === 0) return [start];
  const sourceProjection = projectToRoadGraph(start, graph);
  const targetProjection = projectToRoadGraph(destination, graph);
  if (!sourceProjection || !targetProjection || sourceProjection.distance > maxSnapDistance || targetProjection.distance > maxSnapDistance) return [start];

  const source = graph.nodes.length;
  const target = source + 1;
  const adjacency = [...graph.adjacency.map((edges) => edges.slice()), [], []];
  const connect = (from, to, length) => {
    adjacency[from].push({ to, length });
    adjacency[to].push({ to: from, length });
  };
  connect(source, sourceProjection.edge.a, sourceProjection.t * sourceProjection.edge.length);
  connect(source, sourceProjection.edge.b, (1 - sourceProjection.t) * sourceProjection.edge.length);
  connect(target, targetProjection.edge.a, targetProjection.t * targetProjection.edge.length);
  connect(target, targetProjection.edge.b, (1 - targetProjection.t) * targetProjection.edge.length);
  if (sourceProjection.edgeIndex === targetProjection.edgeIndex) {
    connect(source, target, Math.abs(sourceProjection.t - targetProjection.t) * sourceProjection.edge.length);
  }

  const distances = new Array(adjacency.length).fill(Infinity);
  const previous = new Array(adjacency.length).fill(-1);
  const visited = new Uint8Array(adjacency.length);
  distances[source] = 0;
  for (let step = 0; step < adjacency.length; step++) {
    let current = -1;
    let bestDistance = Infinity;
    for (let index = 0; index < adjacency.length; index++) {
      if (!visited[index] && distances[index] < bestDistance) {
        current = index;
        bestDistance = distances[index];
      }
    }
    if (current < 0 || current === target) break;
    visited[current] = 1;
    for (const edge of adjacency[current]) {
      const nextDistance = bestDistance + edge.length;
      if (nextDistance < distances[edge.to]) {
        distances[edge.to] = nextDistance;
        previous[edge.to] = current;
      }
    }
  }
  if (!Number.isFinite(distances[target])) return [start];
  const routeIndices = [];
  for (let index = target; index >= 0; index = previous[index]) {
    routeIndices.push(index);
    if (index === source) break;
  }
  if (routeIndices.at(-1) !== source) return [start];
  routeIndices.reverse();
  const route = [];
  const append = (point) => {
    const last = route.at(-1);
    if (!last || Math.hypot(last.x - point.x, last.z - point.z) > 0.025) route.push({ x: point.x, z: point.z });
  };
  append(start);
  append(sourceProjection);
  for (const index of routeIndices) if (index < graph.nodes.length) append(graph.nodes[index]);
  append(targetProjection);
  append(destination);
  return route;
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
      fleePath: null,
      fleePathIndex: 0,
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
