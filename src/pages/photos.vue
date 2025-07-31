<script setup lang="ts">
import useIsMobile from '@/composables/useIsMobile';

const photos = import.meta.glob('/public/photos/*');
const imageLinks = ref([...Object.keys(photos).map((photo) => photo.replace('/public', ''))]);

const { isMobile } = useIsMobile();
</script>

<template>
  <image-track :photos="imageLinks" :vertical="isMobile"></image-track>
</template>
<style scoped>
.photos-page {
  width: 100vw;
  margin: 0rem;
  overflow: hidden;
  min-width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 50px;
  position: relative;
  padding-bottom: 22px;
}
</style>