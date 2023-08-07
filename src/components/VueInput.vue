<script setup>
const handleFocus = () => {
  console.log("Focus");
};
const handleBlur = () => {
  console.log("Blur");
};
const handleClick = () => {
  console.log("Click");
};
const handleOnchange = (e) => {
  console.log(e.target.value);
};
</script>

<template>
  <div class="mt-5 flex items-center justify-center">
    <input
      class="p-2 border-2 rounded"
      @focus="handleFocus"
      @blur="handleBlur"
      type="text"
      placeholder="Vue Input"
      @change="handleOnchange"
    />
    <button class="ml-5 border-2 rounded p-2" @click="handleClick">
      Click
    </button>
  </div>
</template>
