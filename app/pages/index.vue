<script setup lang="ts">
import AnimeCarousel from "~/components/Pages/HomePage/AnimeCarousel.vue";
</script>

<template>
  <div class="m-auto max-w-480 pt-20">
    <AnimeCarousel />
    <div class="flex flex-col gap-y-4 px-10 pb-8">
      <div
        class="flex h-full w-full justify-center gap-x-2 rounded-3xl pb-7  bg-[#1c0d35]/90 text-white"
      >
        <div class="flex w-8/11 flex-col gap-y-2">
          <!-- SHAREBOX -->
          <ShareBox />

          <!-- ANIMECARD__Containers -->
          <AnimeCardContainer header="Currently Watching" :count="6" />
          <Divider class="opacity-30" />
          <AnimeCardContainer header="Latest Updates" :count="12" />
          <Divider class="opacity-30" />
          <AnimeCardContainer header="Recommended" :count="6" />
        </div>
        <div
          class="mr-7 ml-12 flex w-3/11 max-w-100 flex-col justify-start gap-y-9"
        >
          <!-- TRENDING__Box -->
          <TrendingAnime />
          <TrendingChat />
        </div>
      </div>
    </div>
  </div>
</template>
