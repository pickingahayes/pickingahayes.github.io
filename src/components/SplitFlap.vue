<script setup lang="ts">

const msg = defineModel('msg', { default: 'Now boarding: The Wedding of Lindsey & Robert!' });
const splitFlapArray = computed(() => {
  return msg.value.split('').map((char) => char.trim());
});
</script>

<template>

    <div class="split-flap">
      <Transition name="slide-fade" mode="out-in" v-for="(val, i) in splitFlapArray" :key="i">
        <div class="split-flap-cell" :class="{blank: !val}" :key="val">{{ val || '_' }}</div>
      </Transition>
    </div>

</template>
<style scoped>

.split-flap {
  font-size: 4.125rem;
  font-family: Epilogue;
  user-select: none;
}

.split-flap-cell {
  min-height: calc(4.125rem * 1.3);
  line-height: calc(4.125rem * 1.3);
  padding-top: calc(4.125rem / 4);
  width: calc(4.125rem * 0.9);
  display: inline-block;
  text-transform: uppercase;
  margin: 2px 4px;
  color: rgb(var(--v-theme-on-logo-dark));
  background: rgb(var(--v-theme-on-background));
  vertical-align: bottom;
  border-radius: 10px;
  position:relative;
}
.split-flap-cell.blank {
  color: rgb(var(--v-theme-on-background));
}
.split-flap-cell::after {
  content: '';
  width: 100px;
  height: 1px;
  background: rgba(var(--v-theme-on-logo-dark), 0.7);
  position:absolute;
  top: 50%;
  left: 0;
  z-index: 10;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: rotateX(-90deg);
  transform-origin: bottom;
  opacity: 0;
}
</style>
