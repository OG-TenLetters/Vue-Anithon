<script setup lang="ts">
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { dummyAnime } from "~/assets/dummyAnime";

type Aired = {
  from: string;
  to: string | null;
  string: string | null;
};

type Genre = {
  mal_id: number;
  name: string | null;
};

type Anime = {
  mal_id: number;
  title: string;
  title_english?: string | null;
  title_japanese?: string | null;
  episodes: number | null;
  type: string | null;
  genres: Genre[];
  synopsis: string | null;
  rating: string | null;
  aired: Aired;
  // add more later as needed
};

const getAnime = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyAnime);
    }, 300);
  });
};

const animeData = ref<Anime[]>([]);

onMounted(async () => {
  const res: any = await getAnime();
  animeData.value = res.data;
  // console.log(res.data);
});

import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore from "swiper";

const addToList = ref(false);

const tempAddToListToggle = () => {};

const swiperRef = ref<SwiperCore | null>(null);
const currentIndex = ref(0);
const totalSlides = ref(0);

const onSlideChange = (swiper: any) => {
  currentIndex.value = swiper.realIndex;
};

const onSwiper = (swiper: any) => {
  swiperRef.value = swiper;
  totalSlides.value = swiper.slides.length;
};

import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

const modules = [Navigation, Pagination, Autoplay, EffectFade];
</script>

<template>
  <div class="carousel-mask relative px-6 max-md:px-0">
    <div>
      <!-- CAROUSEL Controls -->
      <div
        class="absolute right-40 bottom-6 z-20 flex items-center rounded-xl bg-[#0b2125] px-4 py-2 max-lg:right-20 max-md:right-12 max-sm:right-2"
      >
        <button @click="swiperRef?.slidePrev()" class="">
          <Icon
            name="mingcute:left-line"
            class="cursor-pointer text-4xl text-gray-300 transition-all duration-150 hover:scale-110 hover:text-white max-lg:text-2xl"
          />
        </button>

        <!-- CAROUSEL Pagination -->
        <div class="pb-1 text-xl font-semibold text-white max-lg:text-sm">
          {{ currentIndex + 1 }} / {{ totalSlides }}
        </div>

        <button @click="swiperRef?.slideNext()" class="">
          <Icon
            name="mingcute:right-line"
            class="cursor-pointer text-4xl text-gray-300 transition-all duration-150 hover:scale-110 hover:text-white max-lg:text-2xl"
          />
        </button>
      </div>
    </div>

    <!-- CAROUSEL Banner Skeleton -->
    <div
      v-if="!animeData.length"
      class="h-80 animate-pulse rounded-xl bg-[#0b2429]"
    ></div>

    <Swiper
      v-if="animeData.length"
      @slideChange="onSlideChange"
      @swiper="onSwiper"
      class="max-h-130"
      :modules="modules"
      :slides-per-view="1"
      :effect="'fade'"
      :space-between="50"
      :loop="true"
      :autoplay="{ delay: 6000 }"
    >
      <SwiperSlide v-for="(anime, i) in animeData" :key="anime.mal_id">
        <div
          class="relative flex h-80 w-full items-center justify-start overflow-hidden text-white"
        >
          <img
            :src="`/download${i}.jpg`"
            class="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div
            class="absolute inset-0 bg-linear-to-r from-[#143e46]/20 via-black/20 to-transparent"
          ></div>

          <!-- CAROUSEL__InfoCard -->
          <div
            class="relative z-10 flex flex-col gap-y-1 max-sm:w-full max-sm:translate-y-8 rounded-r-2xl bg-sky-950/85 max-sm:bg-linear-180 max-sm:from-sky-950/10 max-sm:to-black/40 py-6 pr-12 pl-19 max-xl:pl-14 max-md:px-8"
          >
            <h1 class="text-3xl font-bold max-md:text-2xl">
              {{ anime.title ?? anime.title_english ?? anime.title_japanese }}
            </h1>

            <!-- CAROUSEL__InfoCard--Box1 -->
            <div
              class="flex w-fit items-center gap-x-2 rounded-lg py-0.5 max-md:gap-x-1"
            >
              <h2
                class="flex items-center gap-x-1 rounded-lg border-2 border-sky-400 bg-sky-900 p-1 text-[8px] font-semibold text-sky-400"
              >
                <Icon class="text-sm" name="mingcute:microphone-line" />{{
                  anime.episodes
                }}
              </h2>
              <span class="text-sky-200">|</span>
              <h2
                class="flex items-center gap-x-1 rounded-lg border-2 border-purple-400 bg-violet-900 p-1 text-[8px] font-semibold text-purple-400"
              >
                <span class="font-bold">CC</span>{{ anime.episodes }}
              </h2>
              <span class="text-sky-200">|</span>
              <h2 class="text-sm font-bold">{{ anime.type }}</h2>
              <span class="text-sky-200">|</span>
              <h2
                v-for="(genre, i) in anime.genres"
                :key="genre.mal_id"
                class="text-sm"
              >
                {{ genre.name }}
                <span v-if="i !== (anime.genres?.length ?? 0) - 1">,</span>
              </h2>
            </div>

            <!-- CAROUSEL__InfoCard--Description -->
            <h2 class="line-clamp-2 max-w-120 pt-2 text-xs">
              {{ anime.synopsis }}
            </h2>

            <!-- CAROUSEL__InfoCard--Box2 -->
            <div
              class="flex w-fit rounded-xl border-2 border-white/40 bg-black/90 px-4 py-1 text-xs max-md:px-1"
            >
              <div
                class="flex flex-col items-center border-r-2 border-white/40 px-6 max-md:px-2"
              >
                <h3>Rating</h3>
                <h3 class="max-md:text-[10px]">{{ anime.rating }}</h3>
              </div>
              <div class="flex flex-col items-center px-6 max-md:px-2">
                <h3>Release</h3>
                <h3 class="max-md:text-[10px]">{{ anime.aired?.string }}</h3>
              </div>
              <div
                class="flex flex-col items-center border-l-2 border-white/40 px-6 max-md:px-2"
              >
                <h3>Quality</h3>
                <h3 class="max-md:text-[10px]">N/A</h3>
              </div>
            </div>

            <!-- CAROUSEL__InfoCard--AddToListBox -->
            <div class="flex items-center gap-x-2 max-sm:justify-between">
              <button
                @click="tempAddToListToggle"
                class="mt-2 w-fit rounded-xl border flex  items-center border-purple-200 bg-purple-900 px-4 py-2 text-white max-sm:rounded-lg max-sm:px-2 max-sm:py-2"
              >
                <Icon name="mingcute:add-fill" />
                <h3 class="max-sm:text-sm">
                  Add To List
                </h3>
              </button>
              <div class="group relative">
                <Icon
                  class="mt-3 text-3xl text-amber-300 max-sm:mr-24 transition-all duration-300 hover:text-amber-400"
                  name="mingcute:star-fill"
                />
                <div
                  class="pointer-events-none absolute top-2 left-3 rounded-md border border-white bg-neutral-900 px-2 py-1 text-[8px] opacity-0 transition-all duration-300 group-hover:opacity-100"
                >
                  Favorited
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <!-- <div
        class="absolute inset-x-0 bottom-0 z-10 h-24 bg-linear-to-t from-[#143e46] to-transparent"
      ></div> -->
  </div>
</template>
