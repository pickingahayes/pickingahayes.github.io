import useMediaBreakpoint from './useMediaBreakpoint';

export default function useSizeClass() {
  const { isMedium, isLarge } = useMediaBreakpoint();
  const sizeClass = computed(() => {
    if (isLarge.value) return 'large';
    if (isMedium.value) return 'medium';
    return 'small';
  });
  return sizeClass;
}
