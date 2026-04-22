<script setup lang="ts">
const isThemeToggled = ref(false);

const toggleTheme = () => {
  isThemeToggled.value = !isThemeToggled.value;
};
</script>

<template>
  <Icon
    @click="toggleTheme"
    class="h-6 w-6 cursor-pointer text-2xl text-white"
    :name="isThemeToggled ? 'mingcute:moon-stars-fill' : 'mingcute:sun-fill'"
  />
</template>
