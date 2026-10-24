## POLYGON 01 — v1.5.0 Android build

A complete test arsenal for the offline Android sandbox, with hitscan fire, mannequin damage and a creative weapon catalog.

- Added 9 selectable weapons: cleaver, sledgehammer, nail bat, PM, TT, Glock 17, AK-47, M4A1 and pump-action shotgun.
- Added per-weapon synthesized shot/swing sounds, distinct damage/fire rates and magazine capacities. Melee weapons have swing-and-impact animations; firearms support recoil, muzzle flash and reload animation, with a pump cycle for the shotgun.
- Added straight raycast shots, temporary wall bullet marks, and mannequin health/damage that triggers or re-triggers ragdoll physics.
- Added an «ВСЕ ПРЕДМЕТЫ» backpack tab so every weapon can be selected and equipped for test firing.
- Preserved safe crate/plank contact, fall/NPC damage rules, Android touch HUD and offline operation.

- Minimum Android version: Android 6.0 (API 23)
- Target: Android 15 (API 35)
- Package: `dev.arena.polyground`
- Network access: none; Three.js, Cannon-es and all game assets are bundled inside the APK
- Controls: left joystick to move, swipe the scene to look, fire/attack button to shoot or swing, reload button to reload, «ВСЕ ПРЕДМЕТЫ» in the backpack to change weapons

The APK is a debug-signed test build. If installing over an older Arena build is rejected because the temporary debug signatures differ, uninstall the old copy first.
