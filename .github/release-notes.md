## POLYGON 01 — v1.2.0 offline Android build

Survival HUD and inventory update for the offline first-person physics sandbox.

- Replaced smooth pale hand meshes with original, dark, square-cut gloves: block palms, separated finger segments and a closing grip pose on pickup.
- The injury silhouette is interactive; damaged regions glow red, severe wounds pulse with a bleeding marker, and major neck trauma or zero health triggers a blood-washed death scene with the camera falling and controls disabled.
- Hunger and thirst drain gradually. When either reaches zero, health begins to decrease; bleeding also causes periodic blood loss.
- Reworked the backpack into a three-column layout with a rotating 3D operator preview, 8×5 grid, selected-item description/weight card, and 30 kg capacity. A shovel occupies 2×3 cells; bottles occupy 1×1.
- Preserved safe pickup/drop collision filters, room boundaries, the 1.1 visual improvements and limited ragdoll joints.

- Minimum Android version: Android 6.0 (API 23)
- Target: Android 15 (API 35)
- Package: `dev.arena.polyground`
- Network access: none; Three.js, Cannon-es and all game assets are bundled inside the APK
- Controls: left virtual stick to move, swipe on the right to look, action to pick up/throw, `ПОЛОЖИТЬ` for a gentle release, `В РЮКЗАК` to stash; `Tab` opens inventory on desktop preview

The APK is a debug-signed test build. If installing over an older Arena build is rejected because the temporary debug signatures differ, uninstall the old copy first.
