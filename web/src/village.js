export const VILLAGE_BOUNDS = Object.freeze({ minX: -310, maxX: 310, minZ: -450, maxZ: 450 });

// A smooth west-low / center-middle / east-high profile keeps the bus stop on the ridge
// and gives the road an immediately walkable, gentle downhill toward the village.
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
  auntZina: Object.freeze({ x: 33, z: 184.3, yaw: Math.PI }),
  school: Object.freeze({ x: -164, z: 236, width: 32, depth: 21 }),
  shop: Object.freeze({ x: 42, z: 178, width: 13, depth: 9 }),
  garages: Object.freeze([
    Object.freeze({ x: 76, z: 172, width: 10, depth: 7 }),
    Object.freeze({ x: 88, z: 172, width: 10, depth: 7 }),
    Object.freeze({ x: 76, z: 183, width: 10, depth: 7 })
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
    Object.freeze({ width: 7, points: Object.freeze([[87, 128], [121, 117], [154, 101], [176, 66], [183, 22]]) }),
    Object.freeze({ width: 5, points: Object.freeze([[42, 151], [42, 158], [42, 164]]) }),
    Object.freeze({ width: 7, points: Object.freeze([[183, 22], [185, -18], [186, -48], [187, -60]]) }),
    Object.freeze({ width: 7, points: Object.freeze([[187, -60], [208, -60], [218, -72], [218, -112], [218, -148]]) }),
    Object.freeze({ width: 8, points: Object.freeze([[218, -148], [218, -180], [230, -210], [237, -245], [238, -280], [238, -310]]) })
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
