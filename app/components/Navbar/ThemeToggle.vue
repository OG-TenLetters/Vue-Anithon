<script setup lang="ts">
const isThemeToggled = ref(false);

const toggleTheme = () => {
  isThemeToggled.value = !isThemeToggled.value;
};
</script>

<template>
  <Icon
    @click="toggleTheme"
    class="cursor-pointer w-6 h-6 text-2xl text-white"
    :name="isThemeToggled ? 'mingcute:moon-stars-fill' : 'mingcute:sun-fill'"
  />
</template>
