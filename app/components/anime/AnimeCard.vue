<script setup lang="ts">
type Props = {
  anime: any | null;
};
const props = defineProps<Props>();

const show = ref(false);
let timeout: any;

const open = () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => (show.value = true), 150);
};

const close = () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => (show.value = false), 100);
};
</script>

<template>
  <div class="group relative flex flex-col pt-4 pb-2">
    <div
      @mouseenter="open"
      @mouseleave="close"
      class="pointer-events-none absolute top-8 right-3 z-6 flex rounded-full bg-white opacity-0 transition-all duration-150 group-hover:pointer-events-auto group-hover:-translate-y-3 group-hover:opacity-100 hover:scale-110 max-lg:hidden"
    >
      <Icon class="bg-blue-950 text-2xl" name="mingcute:information-fill" />

      <!-- ANIMECARD__Hover-Popup -->
      <div
        v-if="show"
        class="absolute -top-3 -right-68 z-1 mt-2 -translate-x-1 rounded-xl border-white/10 bg-linear-to-b from-sky-950/85 to-purple-950/80 px-8 py-5 text-white shadow-lg inset-shadow-[0px_-1px_4px_2px] shadow-black/20 inset-shadow-sky-600/90 backdrop-blur-sm max-lg:hidden"
      >
        <div
          class="absolute top-1 left-1 flex items-center justify-center overflow-hidden rounded-full border bg-white"
        >
          <Icon class="bg-blue-950 text-2xl" name="mingcute:information-fill" />
        </div>
        <h3 class="font-bold">{{ anime.title.english || anime.title.native }}</h3>

        <p class="line-clamp-3 text-xs text-gray-300">
          {{ anime.description }}
        </p>

        <div class="flex items-center justify-between">
          <div class="my-2 w-4/5 text-xs text-white">
            <div class="flex gap-x-1">
              <h3 class="text-gray-300">Aired:</h3>
              <h3>{{ anime.startDate.year }}</h3>
            </div>
            <div class="flex gap-x-1">
              <h3 class="text-gray-300">Status:</h3>
              <h3>
                {{
                  anime.status === "Finished Airing"
                    ? "Completed"
                    : anime.status
                }}
              </h3>
            </div>
            <div class="flex gap-x-1">
              <h3 class="text-gray-300">Genres:</h3>
              <h3>{{ anime.genres.join(", ") }}</h3>
            </div>
          </div>

          <button
            class="mt-4 flex w-1/5 items-center justify-center rounded-xl border-2 border-sky-300 bg-sky-900 px-0.5 py-2.5 text-sky-300 opacity-70 transition-all duration-300 hover:opacity-100"
          >
            <Icon name="mingcute:add-fill" />
          </button>
        </div>

        <NuxtLink :to="`/InfoPage`">
          <button
            class="mt-2 w-full rounded-lg border-2 border-white/20 bg-violet-950/60 px-3 py-1 tracking-wider text-purple-200 transition-all duration-300 hover:border-gray-400 hover:text-gray-100 hover:active:border-sky-600 hover:active:bg-transparent hover:active:text-sky-600"
          >
            Full Info
          </button>
        </NuxtLink>
      </div>
    </div>

    <NuxtLink :to="`/InfoPage`">
      <!-- ANIMECARD__Image -->
      <figure
        class="flex items-center justify-center aspect-7/11 overflow-hidden rounded-2xl transition-all duration-300 group-hover:-translate-y-2 group-hover:brightness-80 max-2xl:rounded-xl"
      >
        <img class="h-full w-full scale-105" :src="anime.coverImage?.large" alt="" />
      </figure>
      <div class="flex flex-col">
        <!-- ANIMECARD__Title -->
        <h3
          class="max-w-40 py-2 text-sm font-semibold transition-all duration-300 group-hover:-translate-y-2 hover:text-gray-400 max-h-8 overflow-hidden  max-2xl:line-clamp-1 max-2xl:text-xs"
        >
          {{ anime.title.english || anime.title.native }}
        </h3>
        <!-- ANIMECARD__InfoBox -->
        <div
          class="flex items-center justify-between max-xl:hidden max-lg:flex"
        >
          <div class="flex gap-x-2 text-sm max-2xl:gap-x-0.5">
            <h2
              class="flex items-center gap-x-1 rounded-md border border-sky-400 bg-sky-900 p-0.5 text-[8px] font-semibold text-sky-400 max-md:text-[6px] max-sm:flex max-sm:py-[0.5px]"
            >
              <Icon
                class="text-xs max-md:text-[6px]"
                name="mingcute:microphone-line"
              />{{ anime.episodes }}
            </h2>
            <h2
              class="flex items-center gap-x-1 rounded-md border border-purple-400 bg-violet-900 p-0.5 text-[8px] font-semibold text-purple-400 max-md:text-[6px] max-sm:flex max-sm:py-[0.5px]"
            >
              <span class="font-bold max-md:font-normal">CC</span>N/A
            </h2>
          </div>
          <h4 class="font-semibold">{{ null }}</h4>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
