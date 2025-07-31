<template>
  <router-link v-slot="{ navigate, isExactActive }" to="/" class="header-logo">
    <v-hover v-slot:default="{ isHovering, props }">
      <div class="logo-tab d-flex align-center justify-center">
        <v-img
          src="/PickingAHayesLogo.Circle.png"
          :class="{ hovered: isHovering, active: isExactActive }"
          v-bind="props"
          @click="navigate"
        ></v-img>
      </div>
    </v-hover>
  </router-link>
</template>

<script lang="ts" setup>
</script>
<style scoped>
.mobile .header-logo {
  margin-left: calc(50vw - 40px);
}
.logo-tab {
  flex: 0;
  height: 60px;
  width: 60px;
}

.logo-tab .v-img {
  height: 50px;
  width: 50px;
}

.logo-tab .v-img.active {
  height: 60px;
  width: 60px;
}
.logo-tab .v-img.hovered {
  transform: scale(1.1);
}
</style>