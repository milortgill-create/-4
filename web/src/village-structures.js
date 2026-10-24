export function buildVillageRuins({ layout, terrainHeightAt, addBuildingPart, addStaticCollider, materials }) {
  function addPart(ruin, localX, localZ, y, dimensions, material, rotation = [0, 0, 0], collider = true) {
    const yaw = ruin.yaw || 0;
    const cos = Math.cos(yaw);
    const sin = Math.sin(yaw);
    const x = ruin.x + localX * cos + localZ * sin;
    const z = ruin.z - localX * sin + localZ * cos;
    const ground = terrainHeightAt(x);
    const position = [x, ground + y + dimensions[1] / 2, z];
    const angles = [rotation[0], yaw + rotation[1], rotation[2]];
    addBuildingPart(dimensions, position, material, false, angles);
    if (collider) addStaticCollider(position, dimensions.map((dimension) => dimension / 2), undefined, angles);
  }

  function addBrickFarm(ruin) {
    const halfW = ruin.width / 2;
    const halfD = ruin.depth / 2;
    addPart(ruin, 0, 0, 0, [ruin.width - 1, 0.16, ruin.depth - 1], materials.stone);
    // Long, low brick facades are broken into piers and lintels to preserve the photo's empty openings.
    addPart(ruin, -8.6, -halfD + 0.25, 0, [8.0, 3.0, 0.5], materials.brick);
    addPart(ruin, 6.4, -halfD + 0.25, 0, [11.4, 2.55, 0.5], materials.brick);
    addPart(ruin, -11.8, halfD - 0.25, 0, [2.4, 3.1, 0.5], materials.brick);
    addPart(ruin, -7.7, halfD - 0.25, 0, [1.5, 2.6, 0.5], materials.brick);
    addPart(ruin, -4.2, halfD - 0.25, 0, [1.4, 3.0, 0.5], materials.brick);
    addPart(ruin, 0.5, halfD - 0.25, 0, [1.6, 2.8, 0.5], materials.brick);
    addPart(ruin, 4.3, halfD - 0.25, 0, [1.5, 2.35, 0.5], materials.brick);
    addPart(ruin, 9.7, halfD - 0.25, 0, [4.6, 3.05, 0.5], materials.brick);
    addPart(ruin, -5.95, halfD - 0.23, 2.35, [2.1, 0.42, 0.58], materials.brick);
    addPart(ruin, 2.35, halfD - 0.23, 2.1, [2.4, 0.38, 0.58], materials.brick);
    addPart(ruin, halfW - 0.25, -3.8, 0, [0.5, 2.7, 5.0], materials.brick);
    addPart(ruin, -halfW + 0.25, 3.5, 0, [0.5, 1.8, 5.8], materials.brick);
    // Two surviving corrugated roof fragments and snapped rafters make the roofline visibly collapsed.
    addPart(ruin, -4.8, -1.2, 2.85, [13.5, 0.16, 6.4], materials.corrugated, [0, 0, 0.09]);
    addPart(ruin, 7.7, 2.1, 1.95, [6.0, 0.18, 4.8], materials.corrugated, [0, 0, -0.24]);
    addPart(ruin, -1.5, -2.0, 2.55, [0.2, 0.22, 11.8], materials.timber, [0, 0.12, 0.04]);
    addPart(ruin, 6.6, 1.3, 1.45, [0.22, 0.2, 7.4], materials.timberLight, [0, -0.18, -0.22]);
    addPart(ruin, -8.3, halfD + 1.1, 0.05, [3.8, 0.28, 0.5], materials.timber, [0, 0, 0.16]);
    addPart(ruin, 8.0, halfD + 1.8, 0.04, [4.6, 0.24, 0.42], materials.brick, [0, 0, -0.1]);
  }

  function addTimberTower(ruin) {
    const halfW = ruin.width / 2;
    const halfD = ruin.depth / 2;
    for (const x of [-halfW + 1.1, halfW - 1.1]) {
      for (const z of [-halfD + 1.0, halfD - 1.0]) {
        addPart(ruin, x, z, 0, [0.42, 2.55, 0.42], materials.timber);
      }
    }
    addPart(ruin, 0, -halfD + 0.9, 2.28, [ruin.width, 0.28, 0.4], materials.timberLight);
    addPart(ruin, 0, halfD - 0.9, 2.28, [ruin.width, 0.28, 0.4], materials.timberLight);
    addPart(ruin, -halfW + 0.9, 0, 2.28, [0.4, 0.28, ruin.depth], materials.timberLight);
    addPart(ruin, halfW - 0.9, 0, 2.28, [0.4, 0.28, ruin.depth], materials.timber);
    addPart(ruin, 0, 1.8, 2.38, [ruin.width - 1, 0.16, 5.2], materials.timberLight);
    // A few diagonal braces hold up the raised, uneven room without closing its lower level.
    addPart(ruin, -3.9, -3.0, 0.25, [0.24, 2.85, 0.24], materials.timberLight, [0, 0.58, 0.12]);
    addPart(ruin, 3.9, 3.0, 0.12, [0.24, 2.9, 0.24], materials.timber, [0, -0.56, -0.08]);
    const upperBase = 2.55;
    const upperHeight = 2.0;
    for (let plank = 0; plank < 16; plank++) {
      const x = -halfW + 0.75 + plank * 0.78;
      if (plank === 6 || plank === 7 || plank === 11) continue;
      const height = plank % 5 === 0 ? 1.25 : upperHeight;
      addPart(ruin, x, -halfD + 0.35, upperBase, [0.68, height, 0.18], plank % 3 ? materials.timber : materials.timberLight);
    }
    for (let plank = 0; plank < 15; plank++) {
      const x = -halfW + 0.7 + plank * 0.78;
      if (plank >= 6 && plank <= 9) continue;
      const height = plank % 4 === 0 ? 1.35 : 1.85;
      addPart(ruin, x, halfD - 0.32, upperBase, [0.62, height, 0.16], plank % 2 ? materials.timberLight : materials.timber);
    }
    for (const side of [-1, 1]) {
      for (let plank = 0; plank < 10; plank++) {
        if (plank === 4 || (side > 0 && plank === 7)) continue;
        const z = -halfD + 0.55 + plank * 1.05;
        addPart(ruin, side * (halfW - 0.3), z, upperBase, [0.16, plank % 3 === 0 ? 1.35 : upperHeight, 0.92], materials.timber);
      }
    }
    addPart(ruin, 0, -halfD + 0.1, 4.48, [ruin.width + 0.8, 0.18, 5.6], materials.corrugated, [0, 0, 0.07]);
    addPart(ruin, 3.5, 1.3, 4.0, [5.3, 0.16, 4.8], materials.corrugated, [0, 0, -0.28]);
    addPart(ruin, -4.8, 0, 4.34, [0.2, 0.2, 10.0], materials.timberLight, [0, 0.16, 0.03]);
    addPart(ruin, -7.4, halfD + 1.7, 0.02, [4.8, 0.22, 0.4], materials.timber, [0, 0.08, 0.18]);
    addPart(ruin, 6.5, halfD + 2.0, 0.03, [5.6, 0.2, 0.36], materials.timberLight, [0, -0.12, -0.12]);
  }

  function addCollapsedBrickHouse(ruin) {
    const halfW = ruin.width / 2;
    const halfD = ruin.depth / 2;
    addPart(ruin, 0, 0, 0, [ruin.width - 0.6, 0.14, ruin.depth - 0.5], materials.stone);
    // The long front and back walls are interrupted by door-sized and window-sized holes.
    addPart(ruin, -9.4, halfD - 0.22, 0, [4.0, 2.55, 0.44], materials.brick);
    addPart(ruin, -5.9, halfD - 0.22, 0, [1.0, 2.8, 0.44], materials.brick);
    addPart(ruin, -3.8, halfD - 0.22, 0, [1.0, 2.25, 0.44], materials.brick);
    addPart(ruin, 0.0, halfD - 0.22, 0, [1.0, 2.7, 0.44], materials.brick);
    addPart(ruin, 4.3, halfD - 0.22, 0, [1.0, 2.6, 0.44], materials.brick);
    addPart(ruin, 7.1, halfD - 0.22, 0, [1.5, 2.2, 0.44], materials.brick);
    addPart(ruin, 10.5, halfD - 0.22, 0, [2.6, 2.95, 0.44], materials.brick);
    addPart(ruin, -4.85, halfD - 0.18, 2.12, [2.4, 0.35, 0.5], materials.brick);
    addPart(ruin, 2.2, halfD - 0.18, 2.15, [3.2, 0.4, 0.5], materials.brick);
    addPart(ruin, -9.0, -halfD + 0.22, 0, [6.2, 2.8, 0.44], materials.brick);
    addPart(ruin, 0.0, -halfD + 0.22, 0, [3.4, 2.1, 0.44], materials.brick);
    addPart(ruin, 8.2, -halfD + 0.22, 0, [7.8, 2.6, 0.44], materials.brick);
    addPart(ruin, -halfW + 0.22, -2.4, 0, [0.44, 2.4, 6.4], materials.brick);
    addPart(ruin, halfW - 0.22, 1.7, 0, [0.44, 1.75, 8.5], materials.brick);
    // A sagging half-roof and exposed timber cladding echo the broken roofline in the reference photos.
    addPart(ruin, 4.4, -1.2, 2.45, [13.4, 0.16, 5.9], materials.corrugated, [0, 0, -0.18]);
    addPart(ruin, -7.6, 2.3, 1.95, [4.8, 0.18, 4.1], materials.corrugated, [0, 0, 0.22]);
    for (let plank = 0; plank < 10; plank++) {
      if (plank === 2 || plank === 7) continue;
      const x = -8.4 + plank * 0.88;
      const height = plank % 3 === 0 ? 1.05 : 1.5;
      addPart(ruin, x, -halfD + 0.38, 2.45, [0.76, height, 0.15], plank % 2 ? materials.timber : materials.timberLight);
    }
    addPart(ruin, -1.5, -0.6, 2.1, [0.2, 0.22, 10.3], materials.timber, [0, 0.22, 0.05]);
    addPart(ruin, 8.2, 4.8, 0.02, [4.0, 0.2, 0.42], materials.timber, [0, 0.16, -0.12]);
  }

  for (const ruin of layout.ruins) {
    if (ruin.type === 'brick-farm') addBrickFarm(ruin);
    else if (ruin.type === 'timber-tower') addTimberTower(ruin);
    else addCollapsedBrickHouse(ruin);
  }
}
