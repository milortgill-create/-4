## POLYGON 01 — v1.4.0 Android build

Android-focused combat controls and a low-poly first-person rifle, with collision damage restricted to intentional threats.

- Restored compact translucent top-right Menu and Inventory buttons; kept the compact health panel, left joystick and right-side action control.
- Added a low-poly pair of arms holding a detailed dark rifle, aligned to the center reticle, with touch fire, recoil, muzzle flash and an animated magazine reload.
- Removed damage from ordinary contact with crates, planks and NPCs. Health is reduced only by hard falls from height, explicit NPC attacks or weapons; hunger, thirst and bleeding indicators no longer drain health on their own.
- Kept inventory pickup/storage, the mannequin recovery behaviors, physical props and offline Android WebGL runtime.

- Minimum Android version: Android 6.0 (API 23)
- Target: Android 15 (API 35)
- Package: `dev.arena.polyground`
- Network access: none; Three.js, Cannon-es and all game assets are bundled inside the APK
- Controls: left joystick to move, swipe the scene to look, «ДЕЙСТВИЕ» to interact, fire button to shoot, reload button to reload, Menu/Inventory buttons at top right

The APK is a debug-signed test build. If installing over an older Arena build is rejected because the temporary debug signatures differ, uninstall the old copy first.
