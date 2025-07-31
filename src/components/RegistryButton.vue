<script setup lang="ts">
import useIsMobile from '@/composables/useIsMobile';
import ExternalButton from './ExternalButton.vue';

const { isMobile } = useIsMobile();
</script>
<template>
  <ExternalButton :small="isMobile" text="Registry" link="https://www.theknot.com/pickingahayes/registry" icon="https://cdn.brandfetch.io/idpvQSn3pL/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B"></ExternalButton>
</template>