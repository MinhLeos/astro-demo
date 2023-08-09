<script setup>
import { listUsers } from '../../store/index.ts';
import { useStore } from '@nanostores/vue';

// read the store value with the `useStore` hook
const $listUsers = useStore(listUsers);
</script>

<template>
  <div>
    <div
      class="flex items-center my-5"
      v-for="user in $listUsers.datas"
      :key="user.id"
    >
      <img
        class="block w-10 h-10 rounded-full"
        :alt="user.name"
        :src="user.avatar"
      />
      <p class="text-lg ml-5">{{ user.name }}</p>
    </div>
  </div>
</template>
