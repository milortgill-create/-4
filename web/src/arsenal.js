export const WEAPON_CATALOG = Object.freeze([
  {
    id: 'cleaver', name: 'Тесак', category: 'Ближний бой', type: 'melee', model: 'cleaver',
    damage: 42, range: 1.75, cooldown: 0.62, swingDuration: 0.46, magazineSize: null, reserve: 0,
    reloadDuration: 0, automatic: false, weight: 1.15,
    description: 'Тяжёлый тесак с коротким широким лезвием. Быстрый рубящий замах.',
    sound: { frequency: 350, filter: 760, duration: 0.18, noise: 0.14, bass: 0.025, swing: 360, impact: 115 }
  },
  {
    id: 'sledgehammer', name: 'Кувалда', category: 'Ближний бой', type: 'melee', model: 'sledgehammer',
    damage: 68, range: 1.95, cooldown: 0.9, swingDuration: 0.72, magazineSize: null, reserve: 0,
    reloadDuration: 0, automatic: false, weight: 4.6,
    description: 'Двуручная кувалда: медленный, но мощный удар и сильный импульс ragdoll.',
    sound: { frequency: 105, filter: 390, duration: 0.28, noise: 0.24, bass: 0.11, swing: 145, impact: 72 }
  },
  {
    id: 'nail-bat', name: 'Бита с гвоздями', category: 'Ближний бой', type: 'melee', model: 'nailBat',
    damage: 50, range: 1.9, cooldown: 0.74, swingDuration: 0.56, magazineSize: null, reserve: 0,
    reloadDuration: 0, automatic: false, weight: 2.1,
    description: 'Деревянная бита с металлическими гвоздями и размашистой атакой.',
    sound: { frequency: 185, filter: 520, duration: 0.22, noise: 0.2, bass: 0.055, swing: 205, impact: 96 }
  },
  {
    id: 'pm', name: 'ПМ (Макаров)', category: 'Пистолеты', type: 'pistol', model: 'pm',
    damage: 24, range: 38, cooldown: 0.29, magazineSize: 8, reserve: 40,
    reloadDuration: 1.1, automatic: false, weight: 0.81,
    description: 'Компактный пистолет. Магазин на 8 патронов.',
    sound: { frequency: 108, filter: 1450, duration: 0.16, noise: 0.82, bass: 0.12, waveform: 'triangle' }
  },
  {
    id: 'tt', name: 'ТТ', category: 'Пистолеты', type: 'pistol', model: 'tt',
    damage: 31, range: 48, cooldown: 0.31, magazineSize: 8, reserve: 40,
    reloadDuration: 1.25, automatic: false, weight: 0.85,
    description: 'Тульский Токарев с длинным стволом. Магазин на 8 патронов.',
    sound: { frequency: 142, filter: 1840, duration: 0.2, noise: 0.91, bass: 0.16, waveform: 'sawtooth' }
  },
  {
    id: 'glock-17', name: 'Glock 17', category: 'Пистолеты', type: 'pistol', model: 'glock',
    damage: 22, range: 42, cooldown: 0.17, magazineSize: 17, reserve: 68,
    reloadDuration: 1.0, automatic: false, weight: 0.71,
    description: 'Лёгкий полимерный пистолет. Увеличенный магазин на 17 патронов.',
    sound: { frequency: 122, filter: 2200, duration: 0.135, noise: 0.74, bass: 0.09, waveform: 'square' }
  },
  {
    id: 'ak-47', name: 'АК-47', category: 'Автоматы', type: 'rifle', model: 'ak',
    damage: 34, range: 58, cooldown: 0.105, magazineSize: 30, reserve: 90,
    reloadDuration: 1.35, automatic: true, weight: 3.8,
    description: 'Автомат с деревянным цевьём. Автоматический огонь, магазин на 30 патронов.',
    sound: { frequency: 86, filter: 980, duration: 0.22, noise: 1.0, bass: 0.22, waveform: 'sawtooth' }
  },
  {
    id: 'm4a1', name: 'M4A1', category: 'Автоматы', type: 'rifle', model: 'm4',
    damage: 29, range: 62, cooldown: 0.092, magazineSize: 30, reserve: 120,
    reloadDuration: 1.25, automatic: true, weight: 3.4,
    description: 'Компактный автомат с планками и складным прикладом. Магазин на 30 патронов.',
    sound: { frequency: 98, filter: 1320, duration: 0.175, noise: 0.9, bass: 0.18, waveform: 'triangle' }
  },
  {
    id: 'pump-shotgun', name: 'Дробовик (помповый)', category: 'Тяжёлое', type: 'shotgun', model: 'shotgun',
    damage: 11, pellets: 8, spread: 0.018, range: 34, cooldown: 0.72, magazineSize: 8, reserve: 32,
    reloadDuration: 1.65, automatic: false, weight: 3.5,
    description: 'Помповый дробовик: 8 дробин за выстрел, трубчатый магазин на 8 патронов.',
    sound: { frequency: 70, filter: 720, duration: 0.31, noise: 1.05, bass: 0.28, waveform: 'sawtooth' }
  },
  {
    id: 'shovel', name: 'Лопата', category: 'Инструменты', type: 'tool', model: 'shovel',
    damage: 24, range: 1.8, cooldown: 0.82, swingDuration: 0.64, magazineSize: null, reserve: 0,
    reloadDuration: 0, automatic: false, weight: 3.6,
    description: 'Стальная штыковая лопата с деревянным черенком. Ею можно черпать и переносить снег.',
    sound: { frequency: 125, filter: 620, duration: 0.24, noise: 0.23, bass: 0.065, swing: 230, impact: 92 }
  }
]);

export const WEAPON_BY_ID = new Map(WEAPON_CATALOG.map((weapon) => [weapon.id, weapon]));

export function createAmmoState(weapon) {
  return {
    magazine: weapon.magazineSize === null ? null : weapon.magazineSize,
    reserve: weapon.magazineSize === null ? 0 : weapon.reserve
  };
}

export function consumeAmmo(weapon, ammo) {
  if (weapon.magazineSize === null) return true;
  if (!ammo || ammo.magazine <= 0) return false;
  ammo.magazine--;
  return true;
}

export function reloadAmmo(weapon, ammo) {
  if (weapon.magazineSize === null || !ammo || ammo.reserve <= 0 || ammo.magazine >= weapon.magazineSize) return 0;
  const loaded = Math.min(weapon.magazineSize - ammo.magazine, ammo.reserve);
  ammo.magazine += loaded;
  ammo.reserve -= loaded;
  return loaded;
}

export function classifyHitZone(partKey = 'torso') {
  const part = String(partKey).toLowerCase();
  if (part === 'head' || part === 'neck') return 'head';
  if (part === 'torso' || part === 'pelvis' || part === 'chest') return 'torso';
  if (/arm|hand|leg|thigh|shin|foot/.test(part)) return 'limb';
  return 'torso';
}

export function damageMannequin(human, weapon, partKey = 'torso', multiplier = 1) {
  if (!human || !weapon) return { damage: 0, health: human?.health ?? 0, lethal: false, zone: classifyHitZone(partKey) };
  const zone = classifyHitZone(partKey);
  // Small-arms fire now rewards precise head shots, while two or so torso hits
  // can quickly defeat a target. Limb hits hurt less but still cause knockdown.
  const zoneMultiplier = zone === 'head' ? 4.7 : zone === 'torso' ? 2.75 : 0.62;
  const damage = Math.max(1, Math.round(weapon.damage * zoneMultiplier * multiplier));
  human.health = Math.max(0, (Number.isFinite(human.health) ? human.health : 100) - damage);
  if (human.health === 0) human.dead = true;
  return { damage, health: human.health, lethal: human.dead === true, zone };
}

export function traceHitscan(raycaster, targets) {
  return raycaster.intersectObjects(targets, true);
}
