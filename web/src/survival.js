export const SNOW_SCOOP_AMOUNT = 0.28;
export const SNOW_CARRY_SPEED_FACTOR = 0.72;
export const PLAYER_WALK_SPEED = 5.5;
export const PLAYER_SPRINT_SPEED = 8.5;
export const HEAT_WARMING_RATE = 5.5;
export const HEAT_COOLING_RATE = 0.36;

export function scoopSnow(drift, carriedAmount = 0, scoopAmount = SNOW_SCOOP_AMOUNT) {
  if (carriedAmount > 0) return { ok: false, reason: 'already-carrying', amount: 0 };
  if (!drift || !Number.isFinite(drift.amount) || drift.amount <= 0) {
    return { ok: false, reason: 'empty', amount: 0 };
  }
  const amount = Math.min(Math.max(0, scoopAmount), drift.amount);
  drift.amount = Math.max(0, drift.amount - amount);
  return { ok: amount > 0, reason: amount > 0 ? null : 'empty', amount };
}

export function depositSnow(carriedAmount, point) {
  if (!Number.isFinite(carriedAmount) || carriedAmount <= 0 || !point || !Number.isFinite(point.x) || !Number.isFinite(point.z)) {
    return { ok: false, pile: null, remaining: Math.max(0, Number(carriedAmount) || 0) };
  }
  return {
    ok: true,
    pile: { x: point.x, z: point.z, amount: carriedAmount },
    remaining: 0
  };
}

export function movementSpeedWithSnow(baseSpeed, carriedAmount) {
  return baseSpeed * (carriedAmount > 0 ? SNOW_CARRY_SPEED_FACTOR : 1);
}

export function updateHeat(heat, deltaSeconds, nearLitStove) {
  const rate = nearLitStove ? HEAT_WARMING_RATE : -HEAT_COOLING_RATE;
  return Math.max(0, Math.min(100, heat + Math.max(0, deltaSeconds) * rate));
}
