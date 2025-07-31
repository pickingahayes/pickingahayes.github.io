<script setup lang="ts">
</script>

<template>

<div class="registry-page w-100 h-100 d-flex flex-column align-center justify-center">
  <div class="prompt">Follow the link to our registry!</div>
  <div class="spacer"></div>
  <RegistryButton></RegistryButton>
</div>
</template>
<style scoped>
.registry-page {
  min-width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 50px;
}
.spacer {
  height: 10%;
}

.mobile .prompt {
  text-align: center;
}
</style>