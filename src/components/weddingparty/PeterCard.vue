<template>
  <wedding-party-card :member @onclick="onClick"></wedding-party-card>
</template>

<script lang="ts" setup>
import { Howl, Howler } from 'howler';
import type { MemberInfo } from './WeddingPartyCard.vue';

const { member } = defineProps<{ member: MemberInfo }>();

const sound = new Howl({
  src: ['sounds/hey.peter.aac'],
  sprite: {
    peter: [500, 1000]
  }
});

const onClick = () => {
  sound.play('peter');
};
</script>
<style scoped></style>
