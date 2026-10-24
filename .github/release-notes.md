# POLYGON 01 — v1.7.1 «Карпятник: исправление запуска»

Hotfix for the village update. Fixed the snowbank-spawn function name that stopped JavaScript initialization before the first frame, leaving the Android screen black. Added a full startup/first-frame runtime smoke test so scene-construction errors are caught by CI.

- The supplied village map loads into a visible, walkable 3D world with a rendered snow-covered ground, smooth physical 2% grade, roads, homes, fences, pond, school, shop, garages, Mikhtok hangars and scrap yards.
- Start at the eastern bus stop facing west into the village; physical snowdrifts load with the scene and can be dug with the shovel.
- Preserves the offline Android game, empty backpack, hidden FP hands when unarmed, survival needs, snow carrying, wood stove, fire and warmth.

Debug-signed APK for Android 6.0+ (API 23). Gameplay assets are bundled locally; no network connection is required.
