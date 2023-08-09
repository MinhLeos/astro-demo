<script setup>
import axios from 'axios';
import { ref } from 'vue';
const listUsers = ref([]);

// fetch(`https://64d1e94bf8d60b174361173e.mockapi.io/api/v1/users`)
//   .then((res) => res.json())
//   .then((data) => {
//     if (data?.length > 0) {
//       listUsers.value = data;
//     }
//   })
//   .catch((err) => {
//     console.log('Error', err);
//   });
const res = await axios({
  method: 'get',
  url: 'https://64d1e94bf8d60b174361173e.mockapi.io/api/v1/users',
});
if (res.data?.length > 0) {
  listUsers.value = res.data;
}
</script>

<template>
  <div>
    <h2 class="text-orange-700">List User Vue</h2>
    <div>
      <div
        class="flex items-center my-5"
        v-for="user in listUsers"
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
  </div>
</template>
