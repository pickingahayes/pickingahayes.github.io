<template>
  <div class="polaroid bg-white elevation-20 cursor-pointer" @click="showFront = !showFront">
    <div v-if="showFront" class="card front bg-white">
      <div class="image">
        <img :src="image" />
      </div>
      <div class="bottom josefin-sans">
        <p class="text-center">
          <span class="great-vibes title">{{ title }}</span>
        </p>

        <div class="info-row text-center px-3">
          <span class="location float-left">{{ location }}</span>
          <span class="date float-right">{{ date }}</span>
        </div>
      </div>
    </div>
    <div v-else class="card back bg-white pa-5" :class="{ small: small }">{{ description }}</div>
  </div>
</template>
<script lang="ts" setup>
import useMediaBreakpoint from '@/composables/useMediaBreakpoint';
import { randomFloat, randomSign } from '@/utils/mathUtils';

export interface Polaroid {
  title: string;
  location: string;
  date: string;
  image: string;
}

export interface DetailedPolaroid extends Polaroid {
  description: string;
  smallDescription?: boolean;
}

const { polaroid } = defineProps<{ polaroid: DetailedPolaroid }>();

const { title, location, date, description, image, smallDescription: small } = polaroid;
const { isMedium, isLarge } = useMediaBreakpoint();
const showFront = ref(true);

const angle = ref(0);
const rotationStyle = computed(() => {
  return `rotate(${angle.value}deg)`;
});

const width = computed(() => {
  if (isLarge.value) return '374px';
  if (isMedium.value) return '300px';
  return '300px';
})

onMounted(() => {
  const randDeg = randomFloat(5, 20);
  const sign = randomSign();
  angle.value = sign * randDeg;
});
</script>
<style scoped>
.polaroid {
  --width: v-bind(width);
  --margin: calc((var(--width) * 0.134));
  --space: calc(var(--margin) / 2);
  --height: calc((var(--width) * 1.134) + var(--space));
  width: var(--width);
  height: var(--height);
  user-select: none;
  transform: v-bind(rotationStyle);
}

.image {
  --size: calc(var(--width) - var(--margin));
  width: var(--size);
  height: var(--size);
  margin: var(--space) var(--space) 0 var(--space);
}

.image img {
  width: 100%;
  height: 100%;
  border-radius: 2px;
}

.bottom {
  height: 70px;
  font-size: 20px;
  margin: 5px 20px 2px 20px;
}

.medium .bottom {
  font-size: 16px;
}

.bottom .title {
  font-weight: bold;
  font-size: 28px;
  margin-right: 15px;
}

.medium .bottom .title {
  font-size: 24px;
}

.bottom p {
  vertical-align: middle;
  height: fit-content;
}

.info-row {
  margin-top: -7px;
}

.small .info-row {
  font-size: 16px;
  margin-top: -1px;
}

.medium .info-row {
  margin-top: 0px;
}

.front {
  position: absolute;
  width: 100%;
  height: 100%;
}
.back {
  font-size: 24px;
  width: 100%;
  height: 100%;
}

.medium .back {
  font-size: 20px;
}

.small {
  font-size: 20px;
}

.medium .small {
  font-size: 15.5px;
}
</style>
