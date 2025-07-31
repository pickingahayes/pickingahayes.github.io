<template>
  <div class="our-story-page">
    <div class="locations d-flex align-start justify-center w-100 ga-12" :class="{ 'flex-row': !isMobile, 'flex-column': isMobile, 'align-center': isMobile, [sizeClass]: true }">
      <div class="map"></div>
      <polaroid
        v-for="(polaroid, i) in locations"
        :class="{ lower: i % 2, [sizeClass]: true }"
        style=""
        :key="i"
        :polaroid
      ></polaroid>

      <alt-logo v-if="isMobile" width="70px"></alt-logo>
    </div>
  </div>
</template>
<script setup lang="ts">
import useIsMobile from '@/composables/useIsMobile';
import useSizeClass from '@/composables/useSizeClass';

const { isMobile } = useIsMobile();
const sizeClass = useSizeClass();
const locations = ref([
  {
    title: 'Our First Date',
    location: 'Isalita, Ann Arbor MI',
    date: '3/20/21',
    image: '/polaroids/isalita.webp',
    description:
      'We met for dinner and spent nearly three hours talking about our lives, families and traveling and Lindsey remembers being excited about the many things that she and Robert shared in common. We ordered Sunflower tacos, which was a fundraiser the restaurant was doing for humanitarian aid.'
  },
  {
    title: 'First Trip Together',
    location: 'Chicago, IL',
    date: '6/3/22',
    image: '/polaroids/chicago.webp',
    smallDescription: true,
    description:
      'We decided to take a long weekend trip together to Chicago and take the train from Ann Arbor. It was the first time we would spent 72 hours straight together and our first trip and Lindsey remembers doing lots of planning to prepare and was excited to explore the city with Robert. The trip took and unexpected turn when Lindsey tested Positive for COVID day 2, and our 72 hour trip turned into 10 days of quarantine. Ultimately, it showed a very caring, sweet side of Robert as he helped take care of Lindsey and the challenges that came up.'
  },
  {
    title: 'Moved In Together',
    location: 'Ypsilanti, MI',
    date: '7/23/23',
    image: '/polaroids/home.webp',
    description:
      'After a year and a half of dating, and spending lots of time at each other’s places, we decided to move in together. Lindsey moved into Robert’s house and over the last two years, has helped it feel more like a home; adding more indoor plants, gardens, and painting rooms.'
  },
  {
    title: 'Got Engaged!',
    location: 'Our House, Ypsilanti, MI',
    date: '4/12/25',
    image: '/polaroids/engaged.webp',
    smallDescription: true,
    description:
      'Lindsey was eagerly awaiting the day Robert would ask to marry her and when it finally came it was no surprise, as Robert accidentally let things slip throughout the week. He recreated our third date; a date which solidified that we were dating and on our way to being a couple. We went to play putt-putt (Lindsey beat Robert both times!) and then to dinner at Silvio’s Trattoria in Canton MI. Robert proposed in our living room and then we celebrated with a surprise party of close friends and family.'
  }
]);
</script>
<style scoped>
.our-story-page {
  min-width: 100%;
  min-height: 100%;
  height: calc(100vh - 80px);
  font-size: 50px;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
}

.mobile .locations {
  padding-bottom: 120px;
}

.locations {
  position: relative;
  padding-top: 80px;
  height: 100%;
  min-height: fit-content;
}

.lower {
  margin-top: 200px;
}
.lower.medium {
  margin-top: 100px;
}

.mobile .lower {
  margin-top: 0;
}

.map {
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url('/map.webp');
  z-index: 0;
  filter: blur(3px);
}
</style>
