<script setup lang="ts">
import TrendCardSkeleton from "./anime-skeletons/TrendCardSkeleton.vue";
import TrendCard from "./TrendCard.vue";

type Props = {
  animeData: any | null;
  pending: boolean | null;
};

const Props = defineProps<Props>();

const isTabOpen = ref(false);

const toggleTab = () => {
  isTabOpen.value = !isTabOpen.value;
  console.log(isTabOpen);
};
</script>

<template>
  <div
    class="relative flex items-center justify-center rounded-2xl bg-gray-900/60 shadow shadow-sky-400/20"
  >
    <!-- TRENDING__Header -->
    <div
      class="absolute top-0 z-5 flex w-full justify-between rounded-2xl bg-linear-to-br from-violet-950/70 to-sky-950/70 px-9 py-3 text-center shadow shadow-sky-300/30 backdrop-blur-sm max-2xl:px-5"
    >
      <h1
        class="flex items-center gap-x-4 text-3xl max-2xl:text-2xl max-xl:text-xl"
      >
        <div
          class="flex w-fit items-center justify-center rounded-full bg-linear-to-br from-violet-700/70 to-sky-700/70 p-1"
        >
          <Icon class="text-amber-300/90" name="mingcute:trophy-line" />
        </div>
        Top Trending
      </h1>
      <div
        @click="toggleTab"
        class="relative w-fit rounded border border-violet-400/60 bg-violet-950 px-4 py-1 inset-shadow-sm hover:brightness-110 max-xl:text-xs"
      >
        Now
        <div
          :class="
            isTabOpen
              ? 'pointer-events-auto opacity-100'
              : 'pointer-events-none opacity-0'
          "
          class="absolute right-0 -bottom-33 bg-gray-900 transition-all duration-300 max-xl:-bottom-25"
        >
          <div
            class="w-27 px-4 py-1 text-left hover:bg-gray-800/50 hover:text-gray-200 hover:active:bg-sky-500"
          >
            Now
          </div>
          <div
            class="w-27 px-4 py-1 text-left hover:bg-gray-800/50 hover:text-gray-200 hover:active:bg-sky-500"
          >
            Day
          </div>
          <div
            class="w-27 px-4 py-1 text-left hover:bg-gray-800/50 hover:text-gray-200 hover:active:bg-sky-500"
          >
            Week
          </div>
          <div
            class="w-27 px-4 py-1 text-left hover:bg-gray-800/50 hover:text-gray-200 hover:active:bg-sky-500"
          >
            Month
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex max-h-147 flex-col gap-y-2 overflow-y-scroll p-9 pt-24 max-2xl:max-h-117 max-2xl:px-5 max-2xl:pt-19"
    >
      <!-- TRENDING__TrendCardSkeleton -->
      <TrendCardSkeleton
        v-if="!animeData || pending"
        v-for="(_, i) in 10"
        :key="i"
      />
      <!-- TRENDING__TrendCard -->
      <TrendCard
        v-else
        v-for="(anime, i) in animeData ?? []"
        :key="anime.mal_id"
        :anime="anime"
        :count="Number(i)"
      />
    </div>
  </div>
</template>
