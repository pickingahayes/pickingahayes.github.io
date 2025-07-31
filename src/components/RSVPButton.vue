<script setup lang="ts">
import useIsMobile from '@/composables/useIsMobile';
import ExternalButton from './ExternalButton.vue';

const { isMobile } = useIsMobile();
</script>
<template>
  <ExternalButton :small="isMobile" class="rsvp-btn" text="RSVP" link="https://www.theknot.com" icon="https://cdn.brandfetch.io/idpvQSn3pL/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B"></ExternalButton>
</template>
<style scoped>
</style>