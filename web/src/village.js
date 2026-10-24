export const VILLAGE_BOUNDS = Object.freeze({ minX: -310, maxX: 310, minZ: -450, maxZ: 450 });

// A smooth west-low / center-middle / east-high profile keeps the bus stop on the ridge
// and gives the road an immediately walkable, gentle downhill toward the central village.
function smoothStep01(value) {
  const t = Math.max(0, Math.min(1, value));
  return t * t * (3 - 2 * t);
}

export function terrainHeightAt(x) {
  if (x <= -230) return 0;
  if (x < 30) return 2 * smoothStep01((x + 230) / 260);
  if (x < 230) return 2 + 2 * smoothStep01((x - 30) / 200);
  return 4;
}

export function terrainSlopeAt(x) {
  if (x <= -230 || x >= 230) return 0;
  if (x < 30) {
    const t = (x + 230) / 260;
    return 12 * t * (1 - t) / 260;
  }
  const t = (x - 30) / 200;
  return 12 * t * (1 - t) / 200;
}

export const TERRAIN_COLLIDER_SEGMENT_WIDTH = 10;
export function terrainColliderSegments(segmentWidth = TERRAIN_COLLIDER_SEGMENT_WIDTH) {
  const count = Math.ceil((VILLAGE_BOUNDS.maxX - VILLAGE_BOUNDS.minX) / segmentWidth);
  const width = (VILLAGE_BOUNDS.maxX - VILLAGE_BOUNDS.minX) / count;
  return Array.from({ length: count }, (_, index) => {
    const centerX = VILLAGE_BOUNDS.minX + (index + 0.5) * width;
    return Object.freeze({ centerX, width, height: terrainHeightAt(centerX), slope: terrainSlopeAt(centerX) });
  });
}

export const VILLAGE_LAYOUT = Object.freeze({
  pond: Object.freeze({ x: -232, z: -356, radiusX: 34, radiusZ: 23 }),
  stop: Object.freeze({ x: 232, z: 164 }),
  auntZina: Object.freeze({ x: 28, z: 169.5, yaw: 0 }),
  school: Object.freeze({ x: -164, z: 236, width: 32, depth: 21 }),
  shop: Object.freeze({ x: 42, z: 178, width: 22, depth: 14, height: 4.2 }),
  garages: Object.freeze([
    Object.freeze({ x: 68, z: 178, width: 10, depth: 7, height: 3.0 }),
    Object.freeze({ x: 80, z: 178, width: 10, depth: 7, height: 3.0 }),
    Object.freeze({ x: 92, z: 178, width: 10, depth: 7, height: 3.0 })
  ]),
  ruins: Object.freeze([
    Object.freeze({ id: 'old-brick-farm', type: 'brick-farm', x: -251, z: 246, width: 26, depth: 13, height: 3.3, yaw: 0.08 }),
    Object.freeze({ id: 'raised-timber-barn', type: 'timber-tower', x: -271, z: 309, width: 13, depth: 12, height: 4.8, yaw: -0.12 }),
    Object.freeze({ id: 'collapsed-brick-house', type: 'brick-shell', x: -232, z: 346, width: 24, depth: 12, height: 2.8, yaw: -0.04 })
  ]),
  hangars: Object.freeze([
    Object.freeze({ x: 145, z: -338, width: 72, depth: 27, height: 7 }),
    Object.freeze({ x: 150, z: -276, width: 28, depth: 76, height: 6 }),
    Object.freeze({ x: 207, z: -274, width: 30, depth: 78, height: 6 }),
    Object.freeze({ x: 268, z: -220, width: 32, depth: 50, height: 5 })
  ]),
  scrapYards: Object.freeze([
    Object.freeze({ x: 240, z: -342, width: 58, depth: 44, gate: 'south' }),
    Object.freeze({ x: 255, z: -150, width: 62, depth: 54, gate: 'west' }),
    Object.freeze({ x: 187, z: -82, width: 42, depth: 34, gate: 'south' })
  ]),
  roads: Object.freeze([
    Object.freeze({ width: 9, points: Object.freeze([[-159, -420], [-151, -320], [-153, -220], [-150, -126], [-155, -16], [-156, 92], [-160, 176], [-151, 286], [-142, 414]]) }),
    Object.freeze({ width: 8, points: Object.freeze([[-91, -143], [-84, -70], [-81, 4], [-78, 87], [-70, 162], [-70, 235]]) }),
    Object.freeze({ width: 9, points: Object.freeze([[-14, 106], [-13, 188], [-17, 276], [-22, 383]]) }),
    Object.freeze({ width: 11, points: Object.freeze([[-214, -108], [-157, -104], [-103, -98], [-42, -94], [27, -86], [99, -63], [166, -33], [220, 16]]) }),
    Object.freeze({ width: 11, points: Object.freeze([[-130, 153], [-85, 151], [-35, 149], [24, 151], [91, 155], [157, 160], [232, 164]]) }),
    Object.freeze({ width: 8, points: Object.freeze([[-156, 225], [-117, 223], [-75, 221], [-35, 216], [10, 211], [55, 208]]) }),
    Object.freeze({ width: 8, points: Object.freeze([[-81, 283], [-42, 286], [3, 290], [44, 294]]) }),
    Object.freeze({ width: 7, points: Object.freeze([[91, 155], [87, 128], [121, 117], [154, 101], [176, 66], [183, 22], [200, 20], [220, 16]]) }),
    Object.freeze({ width: 6, points: Object.freeze([[42, 151], [42, 158], [42, 164], [42, 169.2]]) }),
    Object.freeze({ width: 7, points: Object.freeze([[183, 22], [185, -18], [186, -48], [187, -60]]) }),
    Object.freeze({ width: 7, points: Object.freeze([[187, -60], [208, -60], [218, -72], [218, -112], [218, -148]]) }),
    Object.freeze({ width: 8, points: Object.freeze([[218, -148], [218, -180], [230, -210], [237, -245], [238, -280], [238, -310]]) }),
    Object.freeze({ width: 5.2, points: Object.freeze([[-207, -150], [-207, -108], [-207, -66], [-207, -6], [-207, 54], [-207, 114], [-198, 137], [-176, 150], [-130, 153]]) }),
    Object.freeze({ width: 4.8, points: Object.freeze([[-14, 106], [8, 106], [20, 96], [20, 54], [20, 0], [20, -45], [20, -77], [27, -86]]) }),
    Object.freeze({ width: 4.5, points: Object.freeze([[-44, 240], [-44, 283], [-44, 325], [-44, 393], [-44, 421]]) }),
    Object.freeze({ width: 4.5, points: Object.freeze([[5, 240], [5, 283], [5, 325], [5, 393], [5, 421]]) }),
    Object.freeze({ width: 4.8, points: Object.freeze([[-22, 383], [-12, 389], [0, 393], [5, 393]]) }),
    Object.freeze({ width: 5.8, points: Object.freeze([[-151, 286], [-182, 286], [-213, 278], [-236, 267], [-250, 258]]) }),
    Object.freeze({ width: 5.0, points: Object.freeze([[-213, 278], [-231, 290], [-251, 302], [-257, 309]]) }),
    Object.freeze({ width: 5.0, points: Object.freeze([[-231, 290], [-237, 317], [-237, 334]]) }),
    Object.freeze({ width: 6.0, points: Object.freeze([[238, -310], [218, -313], [195, -316], [173, -319], [150, -321], [145, -319.5]]) })
  ]),
  lots: Object.freeze([
    Object.freeze({ id: 'L-01', x: -226, z: -126, width: 36, depth: 52, gate: 'east', houseWidth: 11, houseDepth: 8, roof: 0 }),
    Object.freeze({ id: 'L-02', x: -226, z: -66, width: 36, depth: 52, gate: 'east', houseWidth: 10, houseDepth: 8, roof: 1 }),
    Object.freeze({ id: 'L-03', x: -226, z: -6, width: 36, depth: 52, gate: 'east', houseWidth: 12, houseDepth: 9, roof: 2 }),
    Object.freeze({ id: 'L-04', x: -226, z: 54, width: 36, depth: 52, gate: 'east', houseWidth: 10, houseDepth: 8, roof: 3 }),
    Object.freeze({ id: 'L-05', x: -226, z: 114, width: 36, depth: 52, gate: 'east', houseWidth: 12, houseDepth: 9, roof: 0 }),
    Object.freeze({ id: 'L-06', x: -124, z: -103, width: 38, depth: 52, gate: 'west', houseWidth: 12, houseDepth: 9, roof: 1 }),
    Object.freeze({ id: 'L-07', x: -124, z: -43, width: 38, depth: 52, gate: 'west', houseWidth: 10, houseDepth: 8, roof: 2 }),
    Object.freeze({ id: 'L-08', x: -124, z: 17, width: 38, depth: 52, gate: 'west', houseWidth: 12, houseDepth: 9, roof: 3 }),
    Object.freeze({ id: 'L-09', x: -124, z: 77, width: 38, depth: 52, gate: 'west', houseWidth: 11, houseDepth: 8, roof: 0 }),
    Object.freeze({ id: 'M-01', x: -51, z: -91, width: 38, depth: 47, gate: 'south', houseWidth: 11, houseDepth: 8, roof: 2 }),
    Object.freeze({ id: 'M-02', x: -4, z: -87, width: 38, depth: 47, gate: 'south', houseWidth: 12, houseDepth: 9, roof: 3 }),
    Object.freeze({ id: 'M-03', x: -51, z: -34, width: 38, depth: 47, gate: 'south', houseWidth: 10, houseDepth: 8, roof: 0 }),
    Object.freeze({ id: 'M-04', x: -4, z: -30, width: 38, depth: 47, gate: 'south', houseWidth: 11, houseDepth: 8, roof: 1 }),
    Object.freeze({ id: 'M-05', x: -51, z: 24, width: 38, depth: 47, gate: 'south', houseWidth: 12, houseDepth: 9, roof: 3 }),
    Object.freeze({ id: 'M-06', x: -4, z: 29, width: 38, depth: 47, gate: 'south', houseWidth: 10, houseDepth: 8, roof: 2 }),
    Object.freeze({ id: 'S-01', x: -73, z: 257, width: 48, depth: 52, gate: 'east', houseWidth: 13, houseDepth: 10, roof: 1 }),
    Object.freeze({ id: 'S-02', x: 34, z: 257, width: 48, depth: 52, gate: 'west', houseWidth: 12, houseDepth: 9, roof: 2 }),
    Object.freeze({ id: 'S-03', x: -73, z: 325, width: 48, depth: 52, gate: 'east', houseWidth: 11, houseDepth: 8, roof: 3 }),
    Object.freeze({ id: 'S-04', x: 34, z: 325, width: 48, depth: 52, gate: 'west', houseWidth: 12, houseDepth: 9, roof: 0 }),
    Object.freeze({ id: 'S-05', x: -73, z: 393, width: 48, depth: 52, gate: 'east', houseWidth: 12, houseDepth: 9, roof: 2 }),
    Object.freeze({ id: 'S-06', x: 34, z: 393, width: 48, depth: 52, gate: 'west', houseWidth: 13, houseDepth: 10, roof: 1 })
  ]),
  snowDrifts: Object.freeze([
    Object.freeze({ x: -281, z: -278, amount: 1.1 }),
    Object.freeze({ x: -196, z: -274, amount: 0.92 }),
    Object.freeze({ x: -270, z: -187, amount: 1.18 }),
    Object.freeze({ x: -203, z: -151, amount: 0.88 }),
    Object.freeze({ x: -285, z: -69, amount: 1.16 }),
    Object.freeze({ x: -178, z: -5, amount: 1.08 }),
    Object.freeze({ x: -281, z: 42, amount: 1.2 }),
    Object.freeze({ x: -184, z: 164, amount: 0.95 }),
    Object.freeze({ x: -108, z: -295, amount: 1.06 }),
    Object.freeze({ x: -106, z: 184, amount: 0.9 }),
    Object.freeze({ x: 95, z: 236, amount: 0.94 }),
    Object.freeze({ x: 110, z: 315, amount: 1.12 }),
    Object.freeze({ x: 208, z: -22, amount: 1.04 }),
    Object.freeze({ x: 275, z: 54, amount: 0.92 })
  ])
});

export function getBusStopColliderBoxes(stop = VILLAGE_LAYOUT.stop) {
  const ground = terrainHeightAt(stop.x);
  const boxes = [
    { kind: 'platform', position: [stop.x, ground + 0.11, stop.z], halfExtents: [3.2, 0.11, 2.1] },
    { kind: 'roof', position: [stop.x, ground + 2.66, stop.z], halfExtents: [3.3, 0.12, 2.15] },
    { kind: 'bench-seat', position: [stop.x, ground + 0.72, stop.z + 1.1], halfExtents: [2.25, 0.06, 0.27] },
    { kind: 'bench-back', position: [stop.x, ground + 1.12, stop.z + 1.27], halfExtents: [2.25, 0.06, 0.07] }
  ];
  for (const dx of [-2.8, 2.8]) {
    for (const dz of [-1.65, 1.65]) {
      boxes.push({ kind: 'support', position: [stop.x + dx, ground + 1.3, stop.z + dz], halfExtents: [0.08, 1.3, 0.08] });
    }
  }
  return Object.freeze(boxes.map((box) => Object.freeze({
    kind: box.kind,
    position: Object.freeze(box.position),
    halfExtents: Object.freeze(box.halfExtents)
  })));
}

function getClosestPointOnSegment(point, start, end) {
  const dx = end[0] - start[0];
  const dz = end[1] - start[1];
  const denominator = dx * dx + dz * dz || 1;
  const amount = Math.max(0, Math.min(1, ((point.x - start[0]) * dx + (point.z - start[1]) * dz) / denominator));
  return { x: start[0] + dx * amount, z: start[1] + dz * amount };
}

export function getLotGateApproach(lot, offset = 1.4, along = 0) {
  if (lot.gate === 'east') return { x: lot.x + lot.width / 2 + offset, z: lot.z + along };
  if (lot.gate === 'west') return { x: lot.x - lot.width / 2 - offset, z: lot.z + along };
  if (lot.gate === 'south') return { x: lot.x + along, z: lot.z + lot.depth / 2 + offset };
  return { x: lot.x + along, z: lot.z - lot.depth / 2 - offset };
}

export function getVillageHousePlacement(lot) {
  let x = lot.x;
  let z = lot.z;
  if (lot.gate === 'east') x -= 6;
  else if (lot.gate === 'west') x += 6;
  else if (lot.gate === 'north') z += 5;
  else z -= 5;
  return { x, z };
}

export function getVillageHouseDoorstep(lot, offset = 0.9) {
  const house = getVillageHousePlacement(lot);
  return { x: house.x, z: house.z + (lot.houseDepth || 8) / 2 + offset };
}

export function createVillageSidewalks(layout = VILLAGE_LAYOUT) {
  const roadSegments = [];
  for (const road of layout.roads) {
    for (let index = 1; index < road.points.length; index++) {
      roadSegments.push([road.points[index - 1], road.points[index]]);
    }
  }
  const lotWalkways = layout.lots.map((lot) => {
    const doorstep = getVillageHouseDoorstep(lot);
    const gate = getLotGateApproach(lot);
    let closest = null;
    let bestDistance = Infinity;
    for (const [from, to] of roadSegments) {
      const candidate = getClosestPointOnSegment(gate, from, to);
      const distance = Math.hypot(gate.x - candidate.x, gate.z - candidate.z);
      if (distance < bestDistance) { bestDistance = distance; closest = candidate; }
    }
    return Object.freeze({
      id: `house-walk-${lot.id}`,
      lotId: lot.id,
      width: 2.2,
      points: Object.freeze([[doorstep.x, doorstep.z], [gate.x, gate.z], [closest.x, closest.z]].map((point) => Object.freeze(point)))
    });
  });
  const shop = layout.shop;
  const shopFrontZ = shop.z - shop.depth / 2 - 1.8;
  const shopDoorZ = shop.z - shop.depth / 2 - 0.72;
  const hangar = layout.hangars[0];
  const mikhtokZ = hangar.z + hangar.depth / 2 + 6.2;
  const mikhtokRoadZ = hangar.z + hangar.depth / 2 + 5;
  return Object.freeze([
    ...lotWalkways,
    Object.freeze({ id: 'shop-front-walk', width: 4.8, points: Object.freeze([[shop.x - shop.width / 2 - 2, shopFrontZ], [shop.x, shopFrontZ], [shop.x + shop.width / 2 + 2, shopFrontZ]].map((point) => Object.freeze(point))) }),
    Object.freeze({ id: 'shop-entry-walk', width: 2.4, points: Object.freeze([[shop.x, shopFrontZ], [shop.x, shopDoorZ]].map((point) => Object.freeze(point))) }),
    Object.freeze({ id: 'mikhtok-front-walk', width: 5.2, points: Object.freeze([[hangar.x - hangar.width / 2 - 1, mikhtokZ], [hangar.x, mikhtokZ], [hangar.x + hangar.width / 2 + 1, mikhtokZ]].map((point) => Object.freeze(point))) }),
    Object.freeze({ id: 'mikhtok-entry-walk', width: 3.2, points: Object.freeze([[hangar.x, mikhtokRoadZ], [hangar.x, mikhtokZ]].map((point) => Object.freeze(point))) })
  ]);
}

export const VILLAGE_SIDEWALKS = createVillageSidewalks();
