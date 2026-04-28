<script setup lang="ts">
type Props = {
  count: number | null;
  header: string | null;
};
const props = defineProps<Props>();
</script>

<template>
  <div class="w-full px-8 py-6 max-2xl:px-2 max-md:py-3">
    <h2 class="mb-3 text-xl uppercase max-md:ml-6 max-sm:mb-0">{{ header }}</h2>

    <!-- ANIME CARD -->
    <div class="flex flex-wrap justify-center gap-x-6 max-2xl:gap-x-2">
      <AnimeCard
        class="w-1/7 max-md:w-1/4 max-sm:w-1/3"
        v-for="(_, i) in props.count"
        :key="i"
      />
    </div>
  </div>
</template>
