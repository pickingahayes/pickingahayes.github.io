<template>
  <img class="alt-logo" src="/PickingAHayesLogo.Circle.Alt.png" :width :height></img>
</template>
<script lang="ts" setup>

let { width, height } = defineProps<{ width: number | string; height?: number | string }>();

</script>
<style scoped>
.alt-logo {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}
</style>