## POLYGON 01 — v1.3.0 Android build

A cleaner Android HUD and new mannequin behaviors for the offline first-person survival sandbox.

- Removed persistent branding, sector text, PC/mouse hints, the joystick caption, target readouts and extra gameplay buttons. The regular game view now keeps only the compact top-left status panel, left joystick and right action button.
- Kept the injury map and health, hunger and thirst meters. Hold the action button to open the backpack; item pickup, gentle placement, storage and retrieval remain available inside it.
- D-01 now takes a physical ragdoll fall, visibly recovers through a kneeling pose before standing, then walks away peacefully.
- D-02 now falls physically, rises in stages, pursues the player and throws alternating punches. A full joystick tilt enables sprinting so the player can escape.
- Kept the original limited ragdoll joints, level physics, survival damage, bleeding, death state, inventory grid and 3D character preview.

- Minimum Android version: Android 6.0 (API 23)
- Target: Android 15 (API 35)
- Package: `dev.arena.polyground`
- Network access: none; Three.js, Cannon-es and all game assets are bundled inside the APK
- Controls: left joystick to move, swipe the scene to look, action button to interact/attack, hold action to open the backpack

The APK is a debug-signed test build. If installing over an older Arena build is rejected because the temporary debug signatures differ, uninstall the old copy first.
