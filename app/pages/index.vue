<script setup lang="ts">
import TrendingAnime from "~/components/anime/TrendingAnime.vue";
import AnimeCarouselSection from "./index/AnimeCarouselSection.vue";
import TrendingChat from "~/components/chat/TrendingChat.vue";
import Divider from "~/components/ui/Divider.vue";
import ShareBox from "~/components/ui/ShareBox.vue";
import { useAnimeFromAnilist } from "~/composables/useAnimeFromAnilist";
import type { Anime, AnimeCarousel, AnimeTop } from "~/types/animeFromAnilist";



const { getAnime, getCarouselAnime, getTopAnime } = useAnimeFromAnilist();
// const source = ref<"all" | "top" | "genre" | "recommended" | "id" | "search">(
//   "all",
// );

const searchQuery = ref<string>("");

const { data: popularAnime, pending: popularAnimePending } = useAsyncData<AnimeCarousel[]>(
  "popularAnime",
  () => getCarouselAnime(10, 1)
);
const { data: allAnime, pending: allAnimePending } = useAsyncData<Anime[]>(
  "allAnime",
  () => getAnime(12, 3),
);
const { data: topAnime, pending: topAnimePending } = useAsyncData<AnimeTop[]>(
  "topAnime",
  () => getTopAnime(10, 1),
);
const { data: recommendedAnime, pending: recommendedAnimePending } = useAsyncData<Anime[]>(
  "recommendedAnime",
   () => getAnime(6, 3),
);

const safePopularAnime = computed(() => popularAnime.value ?? []);
const safeAllAnime = computed(() => allAnime.value ?? []);
const safeRecommendedAnime = computed(() => recommendedAnime.value ?? []);
const safeTopAnime = computed(() => topAnime.value ?? []);

// const load = async () => {
//   switch (source.value) {
//     case "top":
//       animeData.value = await getTopAnime();
//       break;
//     case "genre":
//       animeData.value = await getGenreAnime("action");
//       break;
//     case "recommended":
//       animeData.value = await getRecommendedAnime();
//     case "id":
//       animeData.value = await getAnimeById(5);
//       break;
//     case "search":
//       animeData.value = await getSearchAnime(searchQuery.value);
//       break;
//     default:
//       animeData.value = await getAnime();
//   }
// };

// onMounted(load)
</script>

<template>
  <div class="m-auto max-w-480 pt-20 max-sm:pt-16">
    <AnimeCarouselSection
      :anime-data="safePopularAnime"
      :pending="popularAnimePending"
    />
    <div class="flex flex-col gap-y-4 px-10 pb-8 max-xl:px-5 max-sm:px-2">
      <div
        class="flex h-full w-full justify-center gap-x-2 rounded-3xl bg-[#1c0d35]/90 pb-7 text-white"
      >
        <div class="flex w-8/11 flex-col gap-y-2 max-2xl:w-7/11 max-lg:w-full">
          <!-- SHAREBOX -->
          <ShareBox />

          <!-- ANIMECARD__Containers -->
          <AnimeCardContainer
            :pending="null"
            :anime-data="safeRecommendedAnime"
            header="Currently Watching"
            :count="3"
          />
          <Divider class="opacity-30" />
          <AnimeCardContainer
            :pending="allAnimePending"
            :anime-data="safeAllAnime"
            header="Latest Updates"
            :count="12"
          />
          <Divider class="opacity-30" />
          <AnimeCardContainer
            :pending="recommendedAnimePending"
            :anime-data="safeRecommendedAnime"
            header="Recommended"
            :count="6"
          />
        </div>
        <div
          class="max-2xl:4/11 mr-7 ml-12 flex w-3/11 max-w-100 flex-col justify-start gap-y-9 max-lg:hidden"
        >
          <!-- TRENDING__Box -->
          <TrendingAnime :pending="topAnimePending" :anime-data="safeTopAnime" />
          <TrendingChat />
        </div>
      </div>
    </div>
  </div>
</template>
