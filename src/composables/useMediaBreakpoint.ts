import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

export default function useMediaBreakpoint() {
  const breakpoints = useBreakpoints(breakpointsTailwind);

  const isSmall = breakpoints.smallerOrEqual('sm');
  const isMedium = computed(() => breakpoints.isGreater('sm') && breakpoints.isSmaller('2xl'));
  const isLarge = breakpoints.greaterOrEqual('2xl');

  return {
    breakpoints,
    isSmall,
    isMedium,
    isLarge,
  }
}