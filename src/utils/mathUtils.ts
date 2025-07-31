
/**
 * Returns the percentage in the closed interval [0, 1] of the given value between the start and end point.
 */
export function inverseLerp(start: number, end: number, val: number): number {
  return (val - start) / (end - start);
}

export function randomFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export function randomBool(): boolean {
  return Math.random() < 0.5;
}

export function randomSign(): number {
  return randomBool() ? 1 : -1;
}
