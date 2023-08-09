<script setup>
import { isOpenVue } from '../../store/index.ts';
import { useStore } from '@nanostores/vue';

// read the store value with the `useStore` hook
const $isOpenVue = useStore(isOpenVue);
</script>

<template>
  <div v-if="$isOpenVue" class="mt-10 text-blue-600">Vue Hello nanostore!</div>
</template>
