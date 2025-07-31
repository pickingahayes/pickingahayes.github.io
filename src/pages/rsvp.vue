<script setup lang="ts">
</script>

<template>

<div class="rsvp-page w-100 h-100 d-flex flex-column align-center justify-center">
  <div class="prompt">Follow the link to RSVP!</div>
  <div class="spacer"></div>
  <RSVPButton></RSVPButton>
</div>
</template>
<style scoped>
.rsvp-page {
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