<script lang="ts" setup>

const text = defineModel('text', { required: true, type: String });
const link = defineModel('link', { required: true, type: String });
const icon = defineModel('icon', { required: true, type: String });
const small = defineModel('small', { required: false, type: Boolean, default: false });
</script>
<template>
<div>
<v-hover v-slot:default="{ isHovering, props }">
  <v-btn class="external-btn" :class="{ small }" size="x-large" :href="link" target="_blank" v-bind="props" :height="88" color="logo-dark">
    {{ text }}
    <template #append>
      <v-img
        class="rounded-circle"
        :class="{ 'opacity-70': !isHovering, 'opacity-100': isHovering }"
        :width="50"
        :src="icon"
      ></v-img>
    </template>
  </v-btn>
</v-hover>
</div>
</template>
<script lang="ts" setup>
</script>
<style scoped>
.external-btn {
  height: 83px;
  font-size: 70px;
  font-weight: bold;
}

.external-btn.small {
  font-size: 10vw;
}
</style>