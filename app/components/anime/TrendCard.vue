<script setup lang="ts">
import type { AnimeTop } from "~/types/animeFromAnilist";
import Divider from "../ui/Divider.vue";

type Props = {
  anime: AnimeTop;
  count: number;
};
const props = defineProps<Props>();
</script>

<template>
  <NuxtLink to="/InfoPage">
    <div class="group flex items-center">
      <figure
        class="relative flex aspect-square max-xl:max-w-15 max-xl:min-w-14 max-w-20 min-w-19 items-center justify-center overflow-hidden rounded-2xl border-2 border-purple-950 max-xl:aspect-12/16"
      >
        <img
          class="h-full w-full brightness-75 group-hover:brightness-100"
          :src="anime.coverImage.large"
          alt=""
        />
        <div
          class="absolute top-1/2 left-1/2 z-1 -translate-1/2 max-2xl:text-3xl text-4xl font-bold"
        >
          {{ count + 1 }}
        </div>
        <div
          class="absolute inset-0 border border-sky-400 bg-linear-to-bl from-sky-950/85 to-purple-950/85 transition-all duration-300 group-hover:from-purple-950/40 group-hover:to-sky-950/40"
        ></div>
      </figure>
      <div
        class="-ml-6 w-full rounded-r-2xl bg-gray-950 px-6 py-3 pl-10 transition-all duration-150 group-hover:bg-violet-300/10"
      >
        <h2 class="mb-1 line-clamp-1 max-xl:text-sm">{{ anime.title.english || anime.title.native || anime.title.romaji }}</h2>
        <div class="flex items-start justify-between">
          <div class="flex gap-x-2 text-sm max-xl:gap-x-0">
            <h2
              class="flex items-center gap-x-0.5 rounded-md border border-sky-400 bg-sky-900 p-0.5 text-[8px] font-semibold text-sky-400"
            >
              <Icon class="text-sm" name="mingcute:microphone-line" />N/A
            </h2>
            <span class="text-sky-200">|</span>
            <h2
              class="flex items-center gap-x-1 rounded-md border border-purple-400 bg-violet-900 p-0.5 text-[8px] font-semibold text-purple-400"
            >
              <span class="font-bold">CC</span>{{ anime.episodes || "?" }}
            </h2>
          </div>
          <h4 class="font-semibold">{{ anime.format === "TV Special" ? "Special" : anime.format}}</h4>
        </div>
      </div>
    </div>
  </NuxtLink>

  <Divider class="opacity-30" />
</template>
