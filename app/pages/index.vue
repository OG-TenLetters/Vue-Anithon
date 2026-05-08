<script setup lang="ts">
import TrendingAnime from "~/components/anime/TrendingAnime.vue";
import AnimeCarousel from "./index/AnimeCarousel.vue";
import TrendingChat from "~/components/chat/TrendingChat.vue";
import Divider from "~/components/ui/Divider.vue";
import ShareBox from "~/components/ui/ShareBox.vue";
import { useAnime } from "#imports";
import { useAnimeFromAnilist } from "~/composables/useAnimeFromAnilist"

const {
  // getAnime,
  getTopAnime,
  getGenreAnime,
  getRecommendedAnime,
  getAnimeById,
  getSearchAnime,
} = useAnime();

const {
  getAnime,
} = useAnimeFromAnilist();
// const source = ref<"all" | "top" | "genre" | "recommended" | "id" | "search">(
//   "all",
// );


const searchQuery = ref<string>("");

  onMounted(() => {
  useAnimeFromAnilist()
})

const { data: allAnime, pending: allAnimePending } = await useAsyncData(
  "allAnime",
  () => getAnime(),
  { server: false },
);
const { data: topAnime, pending: topAnimePending } = await useAsyncData(
  "topAnime",
  () => getTopAnime(),
  { server: false },
);
const { data: recommendedAnime, pending: recommendedAnimePending } =
  await useAsyncData("recommendedAnime", () => getRecommendedAnime(), {
    server: false,
  });


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
    <AnimeCarousel />
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
            :anime-data="null"
            header="Currently Watching"
            :count="0"
          />
          <Divider class="opacity-30" />
          <AnimeCardContainer
            :pending="allAnimePending"
            :anime-data="allAnime"
            header="Latest Updates"
            :count="12"
          />
          <Divider class="opacity-30" />
          <AnimeCardContainer
            :pending="recommendedAnimePending"
            :anime-data="recommendedAnime"
            header="Recommended"
            :count="6"
          />
        </div>
        <div
          class="max-2xl:4/11 mr-7 ml-12 flex w-3/11 max-w-100 flex-col justify-start gap-y-9 max-lg:hidden"
        >
          <!-- TRENDING__Box -->
          <TrendingAnime :pending="topAnimePending" :anime-data="topAnime" />
          <TrendingChat />
        </div>
      </div>
    </div>
  </div>
</template>
