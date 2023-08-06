<template>
  <div class="m-5">
    <h2 class="text-orange-700">{{ title }}</h2>
    <slot name="vue" />
    <button
      class="mt-5 border-2 p-2 rounded hover:bg-slate-100"
      @click="handleClick"
    >
      Change Title
    </button>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const title = ref("Vue Component");

const handleClick = () => {
  title.value =
    title.value === "Vue Component" ? "Vue Title Changed" : "Vue Component";
};
</script>
