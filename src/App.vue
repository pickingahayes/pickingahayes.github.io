<template>
  <v-responsive>
    <v-app class="app background background-blend" :class="{ mobile: isMobile }">
      <nav id="nav-bar" class="header w-100 d-flex flex-row px-4 mt-2">
        <header-logo class="mr-1"></header-logo>
        <div class="nav-bar d-flex flex-row justify-space-around align-center">
          <nav-link v-for="{ route, title } in routes" :route :title></nav-link>
        </div>
      </nav>

      <alt-logo v-show="!hideLogo" width="70px"></alt-logo>
      <router-view />
    </v-app>
  </v-responsive>
</template>

<script lang="ts" setup>
import useIsMobile from './composables/useIsMobile';

  const routes = ref([
    // { route: "rsvp", title: "RSVP" },
    { route: "registry", title: "Registry" },
    { route: "our-story", title: "Our Story" },
    { route: "photos", title: "Photos" },
    // { route: "wedding-party", title: "Wedding Party" },
    { route: "q-and-a", title: "Q&A" },
    { route: "accommodations", title: "Accommodations" },
    { route: "things-to-do", title: "Things To Do" },
  ]);

  const { isMobile } = useIsMobile();
  const route = useRoute();

  const hideLogo = computed(() => {
    if (isMobile.value) {
      return ['our-story', 'photos', 'accommodations', 'things-to-do', 'q-and-a'].some((name) => route.name?.includes(name));
    }
      return ['q-and-a', 'accommodations', 'things-to-do'].some((name) => route.name?.includes(name));
  })
</script>
<style scoped>
:deep(.v-responsive__content) {
  min-width: 100% !important;
}

.app {
  padding: 0;
}

.background {
  background: url('/background.webp') repeat;
  z-index: -10;
}

.background-blend {
  background-color: #c4c3c1bb;
  background-blend-mode: multiply;
}

.background-blend {
  background-color: #f3e9e5bb;
  background-blend-mode: multiply;
}
.header {
  height: 70px;
  z-index: 10px;
  overflow-x: auto;
  overflow-y: hidden;
}

.nav-bar {
  flex: 1;
}
</style>
