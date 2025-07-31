<template>
  <div class="details-page d-flex flex-column">
    <div class="background background-blend">
      <div class="w-100 h-100 position-relative">
        <v-hover v-slot:default="{ isHovering, props }">
          <div class="overtop date text-center" v-bind="props">
            March 20, 2026

            <v-fade-transition>
              <div v-show="isHovering" class="time-remaining">{{ timeAgo }}!</div>
            </v-fade-transition>
          </div>
        </v-hover>

        <v-hover v-slot:default="{ isHovering, props }">
          <div class="overtop location text-center" v-bind="props">
            Southfield, Michigan

            <v-fade-transition>
              <div v-show="isHovering" class="across-the-street">
                Across the street from Lawrence Tech!
              </div>
            </v-fade-transition>
          </div>
        </v-hover>

        <v-hover v-slot:default="{ isHovering, props }">
          <a
            class="wedding-hashtag overtop"
            href="https://www.instagram.com/explore/search/keyword/?q=%23pickingahayes"
            v-bind="props"
            :class="{ hovered: isHovering }"
          >
            #pickingahayes
          </a>
        </v-hover>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useTimeAgo } from '@vueuse/core';

const weddingDate = new Date('March 20, 2026');

const timeAgo = useTimeAgo(weddingDate);
</script>
<style scoped>
.details-page {
  text-align: center;
  justify-content: flex-start !important;
  gap: 100px;
  font-size: 80px;
  min-width: 100%;
  min-height: 100%;
  max-height: 100vh;
  position: relative;
  overflow: hidden;
}

.background {
  width: 100vw;
  height: calc(100vh - 78px);
  background-size: cover;
  background-image: url('/photos/Lindseyrobert-73.webp');
  z-index: 10;
}

.mobile .background {
  width: 200vw;
  transform: translate(-50vw, 0px);
}

.background:after {
  content: '';
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  pointer-events: none;
  background-image: linear-gradient(to top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2) 90%);
  width: 100%;
  height: 2em;
}

.wedding-hashtag {
  font-weight: 300;
  vertical-align: middle;
  font-size: 3.7rem;
  text-decoration: none;
  text-align: center;
}

.date {
  top: calc(6.7vh);
  right: 100px;
  vertical-align: middle;
  position: relative;
  user-select: none;
}

.mobile .date {
  top: calc(3vh);
}

.location {
  top: calc(17vh);
  right: 100px;
  vertical-align: middle;
  position: relative;
  user-select: none;
}
.mobile .location {
  top: calc(8vh);
  right: 80px;
}

.overtop {
  color: white;
  text-shadow: rgb(75 68 68) 3px 3px;
  position: absolute;
  font-size: 100px;
}
.mobile .overtop {
  font-size: 10vw;
  transform: translate(-32vw);
}

.wedding-hashtag.overtop {
  font-family: 'Josefin Sans';
  font-size: 3.9rem;
  bottom: 40px;
  right: 80px;
}
.wedding-hashtag.overtop.hovered {
  font-size: 4.1rem;
  bottom: 38px;
  right: 78px;
}
.mobile .wedding-hashtag {
  font-size: 10vw;
  right: 15%;
}

.time-remaining {
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 40px;
  width: 600px;
}

.across-the-street {
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 40px;
  width: 600px;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: rotateX(-90deg);
  transform-origin: bottom;
  opacity: 0;
}
</style>
