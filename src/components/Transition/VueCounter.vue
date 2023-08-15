<script setup>
import { defineProps } from 'vue';
const props = defineProps(['counter']);
</script>
<template>
  <div>-----{{ props.counter }}------</div>
</template>
