<script setup>
import { ref, onMounted } from 'vue';
import { isOpenVue } from '../../store/index.ts';
import { useStore } from '@nanostores/vue';

const count = ref(0);
const $isOpenVue = useStore(isOpenVue);
function increase() {
  count.value++;
  isOpenVue.set(!$isOpenVue.value);
}
onMounted(() => {
  console.log('------');
});
</script>
<template>
  <div>
    <p>{{ count }}</p>
    <button @click="increase">Increase</button>
    <p>-----{{ $isOpenVue }}</p>
  </div>
</template>
