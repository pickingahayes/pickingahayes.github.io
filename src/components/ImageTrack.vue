<script setup lang="ts">
import useIsMobile from '@/composables/useIsMobile';
import useRandomize from '@/composables/useRandomize';
import wait from '@/composables/wait';
import { vh, vmin, vw } from '@/utils/domUtils';
import { inverseLerp } from '@/utils/mathUtils';
import {
  clamp,
  useElementBounding,
  useMousePressed,
  useThrottleFn,
  useTimeoutFn
} from '@vueuse/core';

interface ImageTrackProps {
  photos: String[];
  vertical?: boolean;
  randomize?: boolean;
  hTrackPadding?: number;
  vTrackPadding?: number;
  hEndTrackPadding?: number;
  vEndTrackPadding?: number;
  imagePadding?: number;
  scrollMultiplier?: number;
}

const {
  photos,
  vertical = false,
  randomize = true,
  hTrackPadding = 40,
  vTrackPadding = 85,
  hEndTrackPadding = 0,
  vEndTrackPadding = 50,
  imagePadding = 70,
  scrollMultiplier = 0.5
} = defineProps<ImageTrackProps>();

const { isMobile } = useIsMobile();

const trackPadding = vertical ? vTrackPadding : hTrackPadding;
const trackEndPadding = computed(() => {
  if (vertical) {
    return imageSize.value / 2 + vEndTrackPadding;
  }
  return 0;
});

const imageLinks = ref<any[]>(randomize ? useRandomize(photos) : photos);
const imageSize = computed(() => (vertical ? vmin(86) : vmin(40)));

const viewportSize = computed(() => {
  if (vertical) {
    return vh(100);
  } else {
    return vw(100);
  }
});
const halfViewportSize = computed(() => viewportSize.value / 2);

const trackStart = computed(() => -halfViewportSize.value - imagePadding);
const imagesStart = computed(() => -halfViewportSize.value - imageSize.value + trackPadding);

const trackEnd = computed(() => -(trackSize.value - halfViewportSize.value));
const imagesEnd = computed(() => trackEnd.value + imageSize.value - trackEndPadding.value);
const mouseDownAt = ref(0);
const next = ref(0);
const prev = ref(0);

const isDragging = ref(false);
const isScrolling = ref(false);

const selectedImage = ref();

const track = useTemplateRef('track');
const images = useTemplateRef('images');

const { width: trackWidth, height: trackHeight } = useElementBounding(track);
const trackSize = computed(() => (vertical ? trackHeight.value : trackWidth.value));

onMounted(() => {
  next.value = imagesStart.value;
  prev.value = imagesStart.value;

  moveToPosition(next.value, 0);

  watchEffect(() => {
    if (isDragging.value || isScrolling.value) return;

    if (next.value > imagesStart.value) {
      moveToPosition(imagesStart.value, 200);
    }
    if (next.value < imagesEnd.value) {
      moveToPosition(imagesEnd.value, 200);
    }
  });
});

const { pressed } = useMousePressed();

const { start: startDrag } = useTimeoutFn(() => {
  if (pressed.value) {
    isDragging.value = true;
  }
}, 100);

const { start: endScroll, stop: stopEndScroll } = useTimeoutFn(() => {
  isScrolling.value = false;
}, 500);

const getPosition = (evt: Touch | MouseEvent): number => {
  return vertical ? evt.clientY : evt.clientX;
};

const onMouseStart = (evt: MouseEvent) => {
  mouseDownAt.value = getPosition(evt);
  startDrag();
};

const onTouchStart = (evt: TouchEvent) => {
  mouseDownAt.value = getPosition(evt.touches[0]);
  startDrag();
};

const onDragMouseUpCapture = (evt: MouseEvent) => {
  evt.stopPropagation();
  isDragging.value = false;
  window.removeEventListener('click', onDragMouseUpCapture, true);
};

const onEnd = () => {
  if (!isDragging.value) return;
  window.addEventListener('click', onDragMouseUpCapture, true);
};

const onWheel = (evt: WheelEvent) => {
  isScrolling.value = true;
  stopEndScroll();
  endScroll();
  const val = evt.deltaY / 2;
  scrollTrack(val);
};

const onMove = (changePos: number) => {
  const mouseDelta = mouseDownAt.value - changePos;
  scrollTrack(mouseDelta);
};

const onMouseMove = (evt: MouseEvent) => {
  if (!isDragging.value) return;
  onMove(getPosition(evt));
};

const onTouchMove = (evt: TouchEvent) => {
  if (!isDragging.value) return;
  const touchEvt = evt.touches[0];
  onMove(getPosition(touchEvt));
};

const scrollTrack = (change: number) => {
  const changeVal = -change * scrollMultiplier;

  const val = clamp(prev.value + changeVal, trackEnd.value, trackStart.value);
  next.value = val;
  moveToPosition(val);
};

const scrollForwardByHover = useThrottleFn(() => {
  // scrollTrack(80);
}, 200);

const scrollBackByHover = useThrottleFn(() => {
  // scrollTrack(-80);
}, 200);
const onDelayClickImage = async (src: string) => {
  await wait(150);
  onClickImage(src);
};

const onClickImage = (src: string) => {
  // console.log('onclick: ' + src);
  if (isDragging.value) return;
  selectedImage.value = src;
};

const moveToPosition = (position: number, duration: number = 1200) => {
  const transform = vertical ? `translate(-50%, ${position}px)` : `translate(${position}px, -50%)`;
  track.value?.animate(
    {
      transform: transform
    },
    { duration, fill: 'forwards' }
  );

  const progressPercent = 1 - inverseLerp(imagesEnd.value, imagesStart.value, position);
  const objPos = progressPercent * 100;
  const objectPosition = vertical ? `50% ${objPos}%` : `${objPos}% 50%`;

  images.value?.forEach((img) => {
    img.animate(
      {
        objectPosition: objectPosition
      },
      { duration, fill: 'forwards' }
    );
  });
};

watchEffect(() => {
  if (!pressed.value) {
    isDragging.value = false;
    prev.value = next.value;
  }
});
</script>

<template>
  <div
    class="photos-page"
    :class="{ vertical: vertical, horizontal: !vertical }"
    @mousedown.prevent="onMouseStart"
    @mousemove.prevent="onMouseMove"
    @mouseup.prevent="onEnd"
    @touchstart.prevent="onTouchStart"
    @touchmove.prevent="onTouchMove"
    @touchend.prevent="onEnd"
  >
    <div class="photo-reel">
      <div ref="track" class="track" @wheel="onWheel">
        <div class="filmstrip"></div>

        <div class="image beginning"></div>
        <img
          v-for="(image, i) in imageLinks"
          :key="i"
          ref="images"
          class="image cursor-pointer"
          :class="{ 'cursor-pointer': !isDragging, 'cursor-move': isDragging }"
          :src="image"
          :draggable="false"
          @touchstart="onDelayClickImage(image)"
          @click="onClickImage(image)"
        />

        <alt-logo v-if="isMobile" class="logo" width="70px"></alt-logo>
      </div>
    </div>
    <div class="mouse-scroll left" @mouseover="scrollBackByHover"></div>
    <div class="mouse-scroll right" @mouseover="scrollForwardByHover"></div>

    <div
      v-show="selectedImage"
      class="full-image-modal"
      @touchstart="selectedImage = undefined"
      @click="selectedImage = undefined"
    >
      <img
        :src="selectedImage"
        class="full-image"
        @touchstart="selectedImage = undefined"
        @click="selectedImage = undefined"
      />
    </div>
  </div>
</template>
<style scoped>
.photos-page {
  margin: 0rem;
  overflow: hidden;
  min-width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  font-size: 50px;
  position: relative;
}

.photos-page.vertical {
  height: 100%;
  justify-content: center;
}
.photos-page.horizontal {
  width: 100vw;
  justify-content: flex-start;
}

.photo-reel {
  margin: 0rem;
  overflow: hidden;
  position: relative;
}
.horizontal .photo-reel {
  height: 64vh;
  width: 100vw;
}
.vertical .photo-reel {
  width: 80vw;
  height: 100%;
}

.track {
  display: flex;
  gap: 4vmin;
  position: absolute;
  left: 50%;
  top: 50%;
}
.horizontal .track {
  transform: translate(calc(3 * -40vmin - 50px), -50%);
  padding-right: calc(40vmin + 4vmin);
  flex-direction: row;
}
.vertical .track {
  transform: translate(-50%, calc(3 * -86vmin - 50px));
  padding-bottom: calc(40vmin + 4vmin);
  flex-direction: column;
}
.filmstrip {
  position: absolute;
  z-index: -1;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  --background: #1d1806;
  --size: 10px;
}

.horizontal .filmstrip {
  top: -30px;
  bottom: -30px;

  background: conic-gradient(at 50% var(--size), var(--background) 75%, #0000 0) 0 0 /
    calc(2 * var(--size)) calc(100% - var(--size)) padding-box;
  border: var(--size) solid var(--background);
  padding: calc(var(--size) * 2.5);
}

.vertical .filmstrip {
  right: -30px;
  left: -30px;

  background: conic-gradient(at var(--size), var(--background) 75%, #0000 0) 0 0 /
    calc(100% - var(--size)) calc(2 * var(--size)) padding-box;
  border: var(--size) solid var(--background);
  padding: calc(var(--size) * 2.5);
}

.image {
  object-fit: cover;
  border-radius: 5px;
}

.vertical .image {
  width: 68vmin;
  height: 86vmin;
}
.horizontal .image {
  width: 40vmin;
  height: 56vmin;
}

.beginning {
  filter: blur(1.5rem);
  opacity: 10%;
}

.horizontal .beginning {
  background: linear-gradient(to right, white 40%, transparent 100%);
  margin-right: -50px;
}

.vertical .beginning {
  background: linear-gradient(to bottom, white 40%, transparent 100%);
  margin-bottom: -50px;
}

.mouse-scroll {
  position: absolute;
  top: 17%;
  bottom: 17%;
  width: 15vw;
  min-width: 100px;
  filter: blur(190px);
}
.mouse-scroll.left {
  left: 0;
}
.mouse-scroll.right {
  right: 0;
}

.full-image-modal {
  position: absolute;
  height: 100vh;
  width: 100vw;
  cursor: pointer;
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
}

.full-image {
  width: 100%;
  height: 100%;
  max-height: calc(100vh - 48px);
  object-fit: contain;
  overflow: hidden;
  border-radius: 5px;
}
.logo {
  bottom: 20px;
}
</style>
