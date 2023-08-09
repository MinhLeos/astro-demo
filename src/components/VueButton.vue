<script setup>
import { isOpenVue } from '../store/index.ts';
import { useStore } from '@nanostores/vue';

// read the store value with the `useStore` hook
const $isOpenVue = useStore(isOpenVue);
const handleClick = () => {
  isOpenVue.set(!$isOpenVue.value);
};
</script>

<template>
  <!--write to the imported store using `.set`-->
  <button
    @click="handleClick"
    class="mt-10 border p-4 hover:bg-black hover:text-white active:opacity-75"
  >
    Open Vue Modal
  </button>
</template>
