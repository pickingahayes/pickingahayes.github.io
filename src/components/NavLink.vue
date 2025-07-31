<script setup lang="ts">
import wait from '@/composables/wait';
import { useElementSize } from '@vueuse/core';

const { route, title } = defineProps<{ route: string; title: string }>();

const tab = useTemplateRef('tab');
const tabContent = useTemplateRef('hiddenTabTitle');

const { width: contentWidth } = useElementSize(tabContent, undefined, { box: 'content-box' });
const { width } = useElementSize(tab, undefined, { box: 'content-box' });
const widthStyle = computed(() => `${width.value}px`);

const currentRoute = useRoute();
const isActive = computed(() => {
  return '/' + route === currentRoute.path;
});

const scrollIntoView = () => {
  tab.value?.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'center'
  });
};

watchEffect(async () => {
  if (isActive.value && tab.value) {
    await wait(500);
    scrollIntoView();
  }
});

watchEffect(() => {
  if (width.value < contentWidth.value) {
    width.value = contentWidth.value;
  }
});
</script>
<template>
  <div ref="tab" class="tab">
    <router-link
      class="d-inline-flex flex-column align-center justify-center"
      :to="route"
      exactActiveClass="active"
      @click="scrollIntoView"
    >
      <div class="tab-title">{{ title }}</div>
      <div ref="hiddenTabTitle" class="tab-title hidden">{{ title }}</div>
    </router-link>
  </div>
</template>
<style scoped>
.tab {
  position: relative;
  margin-bottom: 10px;
  text-align: center;
  width: v-bind(widthStyle);
  font-size: 18px;
}

.mobile .tab {
  margin-left: -2px;
  margin-right: -2px;
}

.mobile .tab:first-child {
  margin-left: calc(22vw);
  margin-right: calc(10vw);
}
.mobile .tab:last-child {
  margin-right: calc(20vw);
}

.tab a {
  color: rgb(var(--v-theme-on-background));
}

.tab-title {
  font-weight: 900;
  text-wrap: nowrap;
  font-size: 80%;
  text-shadow: 0.1px 0.1px #4b4444a1;
  letter-spacing: 3px;
  text-decoration: none;
  text-wrap: nowrap;
  text-transform: uppercase;
}

.tab:hover .tab-title,
.active .tab-title {
  text-shadow: 3px 21px 6px #4b4444a1;
}

.tab-title.hidden {
  visibility: hidden;
  font-size: 25px;
}

.tab:hover,
.tab .active {
  font-size: 25px;
}

.tab div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
