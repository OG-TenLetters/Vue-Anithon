<script setup lang="ts">
import AnimeCardSkeleton from "./anime-skeletons/AnimeCardSkeleton.vue";

type Props = {
  count: number | null;
  header: string | null;
  animeData: any | null;
  pending: boolean | null;
};
const props = defineProps<Props>();
</script>

<template>
  <div class="w-full px-8 py-6 max-2xl:px-2 max-md:py-3">
    <h2 class="mb-3 text-xl uppercase max-md:ml-6 max-sm:mb-0">{{ header }}</h2>

    <div class="flex flex-wrap justify-center gap-x-6 max-2xl:gap-x-2">
      <!-- ANIME CARD SKELETON -->
      <AnimeCardSkeleton
        v-if="!animeData || pending"
        v-for="(_, i) in count"
        :key="i"
        class="max-md:1/4 max-sm:1/3 w-1/7"
      />

      <!-- ANIME CARD -->
      <AnimeCard
        v-else
        class="w-1/7 max-md:w-1/4 max-sm:w-1/3"
        v-for="anime in (animeData ?? []).slice(0, count)"
        :key="anime.mal_id"
        :anime="anime"
      />
    </div>
  </div>
</template>
