<template>
  <v-hover v-model:model-value="isHovering" v-slot:default="{ props }">
    <a
      class="d-flex flex-column align-start josefin-sans font-weight-light cursor-pointer ga-1 location-cell"
      v-bind="props"
      :href="url"
    >
      <v-img class="img" :class="{ 'elevation-16': isHovering }" cover :src="img">
        <template #placeholder>
          <div class="d-flex align-center justify-center fill-height img-placeholder">
            <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
          </div>
        </template>
      </v-img>

      <div class="info d-flex flex-column">
        <div class="location d-flex flex-row align-end text-wrap">
          <div class="icon-parent align-self-start">
            <v-expand-transition>
              <v-icon
                v-show="!location.hoverImg || !isHovering"
                class="mt-1 mr-2 icon"
                :icon="icon"
                :size="isHovering ? 36 : 30"
                :color="isHovering ? '#c82a29' : ''"
              ></v-icon>
            </v-expand-transition>
            <v-expand-transition>
              <img v-show="location.hoverImg && isHovering" :src="location.hoverImg" class="mt-1" />
            </v-expand-transition>
          </div>
          {{ name }}
        </div>
        <div class="description">{{ description }}</div>
      </div>
    </a>
  </v-hover>
</template>
<script lang="ts" setup>
import type { LocationItem } from '@/pages/things-to-do.vue';
import { mdiCoffee, mdiMapMarker, mdiSilverwareForkKnife } from '@mdi/js';

const { type, location } = defineProps<{
  type: 'event' | 'food' | 'cafe';
  location: LocationItem;
}>();

const { name, url, img, description } = location;

const isHovering = ref(false);

const icon = computed(() => {
  switch (type) {
    case 'food':
      return mdiSilverwareForkKnife;
    case 'cafe':
      return mdiCoffee;
    case 'event':
    default:
      return mdiMapMarker;
  }
});
</script>
<style scoped>
.location-cell {
  --width: 240px;
  --image-height: 220px;
  font-size: 20px;
  text-decoration: none;
  color: rgb(var(--v-theme-on-background));
  width: var(--width);
}

.mobile .location-cell {
  --width: 300px;
  --image-height: 280px;
}

.img {
  border-radius: 25px;
  width: var(--width);
  height: var(--image-height);
  max-height: var(--image-height);
}

.img-placeholder {
  background-color: rgba(var(--v-theme-on-background), 0.5);
}

.location {
  font-weight: bold;
  line-height: 26px;
}

.description {
  font-size: 16px;
  margin-top: -4px;
  margin-left: 38px;
  line-height: 20px;
}

.location-cell:hover {
  text-shadow: 0.5px 0.5px 2px #4b4444a1;
}

.icon-parent {
  width: 36px;
  min-width: 36px;
  height: 36px;
  min-height: 36px;
  position: relative;
}

.icon-parent > * {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 34px;
  max-height: 34px;
}
</style>
