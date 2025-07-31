import { randomFloat, randomSign } from '@/utils/mathUtils';

let lastNeg = false;

export default function useRandomAngle() {
  const angle = ref(0);

  const randDeg = randomFloat(5, 20);
  const sign = lastNeg ? 1 : -1;
  lastNeg = !lastNeg;
  angle.value = sign * randDeg;

  return {
    angle
  }
}