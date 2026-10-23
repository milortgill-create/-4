## POLYGON 01 — v1.1 offline Android build

Incremental update for the offline first-person concrete-room physics sandbox.

- Hand-held objects no longer collide with the operator; they retain floor/wall contacts. Added a gentle place action and a collision re-enable grace period after release.
- Added hard player bounds and a recovery point for falling outside the test chamber.
- Added detailed, animated gloves; higher-resolution concrete/wood maps; soft shadow-casting ceiling spots.
- Added a minimal health/hunger HUD, red body-part injury silhouette, and an 8×5 weighted inventory (30 kg limit).
- Refined elbow/knee hinge-like ragdoll limits.

- Minimum Android version: Android 6.0 (API 23)
- Target: Android 15 (API 35)
- Package: `dev.arena.polyground`
- Network access: none; Three.js, Cannon-es and all game assets are bundled inside the APK
- Controls: left virtual stick to move, swipe on the right to look, action to pick up/throw, `ПОЛОЖИТЬ` for a gentle release, `В РЮКЗАК` to stash; `Tab` opens inventory on desktop preview

The APK is a debug-signed test build. If installing over an older Arena build is rejected because the temporary debug signatures differ, uninstall the old copy first.
