<script setup lang="ts">
defineProps<{ bgColor: string }>();
</script>

<template>
  <div class="flex items-center gap-1">
    <figure :class="bgColor" class="w-6 rotate-45 rounded-xs max-md:w-4">
      <img
        class="h-full w-full -rotate-45"
        src="/anime-logo.png"
        alt="Anithon Icon"
      />
    </figure>
    <h1 class="text-xl font-bold tracking-wide text-white max-md:text-sm">
      ANiTHON
    </h1>
  </div>
</template>
