<script setup lang="ts">
import AnimeCarousel from "~/components/Pages/HomePage/AnimeCarousel.vue";
</script>

<template>
  <div class="m-auto max-w-480 pt-20 max-sm:pt-16">
    <AnimeCarousel />
    <div class="flex flex-col gap-y-4 px-10 pb-8 max-xl:px-5 max-sm:px-2">
      <div
        class="flex h-full w-full justify-center gap-x-2 rounded-3xl bg-[#1c0d35]/90 pb-7 text-white"
      >
        <div class="flex w-8/11 flex-col gap-y-2 max-2xl:w-7/11 max-lg:w-full">
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
          class="max-2xl:4/11 mr-7 ml-12 flex w-3/11 max-w-100 flex-col justify-start gap-y-9 max-lg:hidden"
        >
          <!-- TRENDING__Box -->
          <TrendingAnime />
          <TrendingChat />
        </div>
      </div>
    </div>
  </div>
</template>
