<script setup lang="ts">
import { ref } from "vue";

const responseMessage = ref<string>();

async function submit(e: Event) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget as HTMLFormElement);
  const response = await fetch("/api/feedback", {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  responseMessage.value = data.message;
}
</script>
<template>
  <form @submit="submit">
    <label>
      <span>Name</span>
      <input type="text" id="name" name="name" />
    </label>
    <label>
      <span>Email</span>
      <input type="email" id="email" name="email" />
    </label>
    <label>
      <span>Message</span>
      <textarea id="message" name="message" />
    </label>
    <button
      class="mt-6 p-6 border hover:bg-black hover:text-white active:opacity-75"
    >
      Send
    </button>
    <p class="text-orange-700 mt-20" v-if="responseMessage">
      {{ responseMessage }}
    </p>
  </form>
</template>
<style scoped lang="scss">
form {
  width: 400px;
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    margin-top: 2rem;
    align-items: center;
    justify-content: space-between;

    input,
    textarea {
      width: 300px;
      border: 1px solid rgb(86, 86, 184);
      padding: 0 10px;
    }
  }
}
</style>
