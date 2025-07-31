import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';

export default function useIsMobile() {
  const breakpoints = useBreakpoints(breakpointsTailwind);
  const isMobile = breakpoints.smaller('md');

  return {
    isMobile
  }
}
