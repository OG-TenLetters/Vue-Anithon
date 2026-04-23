<script setup lang="ts">
import AnimeCarousel from '~/components/Pages/HomePage/AnimeCarousel.vue';

</script>

<template>
  <div class="pt-20">
    <AnimeCarousel />
    <div class="flex flex-col gap-y-4 px-10">
      <div
        class="flex h-80 w-full items-center justify-center rounded-3xl bg-[#1c0d35]/90 text-white"
      >
        <h1>Yes</h1>
      </div>
      <div
        class="flex h-80 w-full items-center justify-center rounded-3xl bg-[#031a25]/90 text-white"
      >
        <h1>Yes</h1>
      </div>
      <div
        class="flex h-80 w-full items-center justify-center rounded-3xl bg-[#0f003a]/90 text-white"
      >
        <h1>Yes</h1>
      </div>
    </div>
  </div>
</template>
