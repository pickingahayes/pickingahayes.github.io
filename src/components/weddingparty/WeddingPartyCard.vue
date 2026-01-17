<template>
  <v-card
    class="wedding-party-card mx-auto bg-logo-dark"
    elevation="16"
    variant="elevated"
    @click="onClick"
  >
    <div class="img-container">
      <v-avatar size="380">
        <v-expand-transition>
          <v-img v-if="!showMainPhoto" class="card-img align-end text-white" :src="picture" cover>
          </v-img>
          <v-img v-else class="card-img align-end text-white" :src="altPictureUrl" cover> </v-img>
        </v-expand-transition>
        <div class="title text-h5">
          {{ name }}
          <small class="d-block mt-n1">{{ status || '&nbsp;' }}</small>
        </div>
      </v-avatar>
    </div>

    <v-card-text class="description pb-2" :class="{ full: expanded }">
      {{ cardDescription }}
    </v-card-text>

    <v-card-actions v-if="expandable">
      <v-spacer></v-spacer>
      <v-btn :text="expanded ? 'Say less' : 'Read More'" @click.stop="expanded = !expanded"></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" setup>
import type { Component } from 'vue';

export interface MemberInfo {
  name: string;
  easterEggs?: number;
  description?: string;
  status?: string;
  expandable?: boolean;
  component?: Component;
}
const { member } = defineProps<{ member: MemberInfo }>();

const emit = defineEmits(['onclick']);

const { name, description, status } = member;

const expanded = ref(false);
const showMainPhoto = ref(false);

const cardDescription = computed(() => {
  return (
    description ||
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  );
});

const expandable = computed(() => {
  return member.expandable ?? true;
});

const picture = computed(() => {
  const filename = name.toLocaleLowerCase().split(' ').join('.');
  return `people/${filename}.webp`;
});

const altPictureUrl = computed(() => {
  let idx = picture.value.lastIndexOf('.');
  return picture.value.substring(0, idx) + '.alt' + picture.value.substring(idx);
});

const onClick = () => {
  showMainPhoto.value = !showMainPhoto.value;
  emit('onclick');
};
</script>
<style scoped>
.wedding-party-card {
  border-top-right-radius: 190px;
  border-top-left-radius: 190px;
  padding-top: 10px;
  width: 400px;
}

.img-container {
  height: 380px;
  width: 400px;
  position: relative;
}

.img-container > .v-img {
  position: absolute;
  min-width: 100%;
  height: 100%;
}

.card-img {
  position: absolute;
}

.title {
  position: absolute;
  bottom: 15px;
  color: white;
  text-shadow: rgb(75 68 68) 3px 3px;
}

.title > small {
  font-style: italic;
}

.description {
  font-size: 0.975rem;
  text-align: justify;
  overflow: hidden; /* Hides the overflowing text */
  display: -webkit-box; /* Required for the -webkit-line-clamp to work */
  -webkit-box-orient: vertical; /* Required for the -webkit-line-clamp to work */
  -webkit-line-clamp: 4;
  line-clamp: 4;
  height: 108px;
}

.description.full {
  height: fit-content;
  display: block;
}
</style>
