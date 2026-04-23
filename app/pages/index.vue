<script setup lang="ts">
import AnimeCarousel from "~/components/Pages/HomePage/AnimeCarousel.vue";
</script>

<template>
  <div class="m-auto max-w-480 pt-20">
    <AnimeCarousel />
    <div class="flex flex-col gap-y-4 px-10">
      <div
        class="flex h-full w-full justify-center gap-x-2 rounded-3xl bg-[#1c0d35]/90 text-white"
      >
        <div class="flex w-8/11 flex-col gap-y-2">
          <!-- SHAREBOX -->
          <div
            class="flex h-1/5 w-full items-center justify-between rounded-2xl bg-[#140925] px-9 py-6"
          >
            <div class="flex items-center gap-x-4">
              <figure
                class="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full"
              >
                <img
                  class="h-full w-full"
                  src="/Anime-Profile-Example.webp"
                  alt=""
                />
              </figure>
              <div class="">
                <h2 class="font-semibold">Love this site?</h2>
                <h2 class="text-blue-500">Share it with you friends!</h2>
              </div>
            </div>
            <!-- SHAREBOX__Links -->
            <div class="flex gap-x-4 font-semibold">
              <button
                class="flex items-center rounded-2xl border-2 border-blue-400 bg-blue-900 px-6 py-1 text-2xl text-blue-400"
              >
                <Icon name="mingcute:facebook-fill" />
              </button>
              <button
                class="flex items-center rounded-2xl border-2 border-gray-200 bg-black px-6 py-1 text-2xl text-gray-200"
              >
                <Icon name="mingcute:social-x-line" />
              </button>
              <button
                class="flex items-center rounded-2xl border-2 border-b-cyan-400 bg-sky-900 px-6 py-1 text-2xl text-cyan-400"
              >
                <Icon name="mingcute:messenger-fill" />
              </button>
              <button
                class="flex items-center rounded-2xl border-2 border-red-400 bg-red-900 px-6 py-1 text-2xl text-red-400"
              >
                <Icon name="mingcute:reddit-fill" />
              </button>
              <button
                class="flex items-center rounded-2xl border-2 border-green-400 bg-green-900 px-6 py-1 text-2xl text-green-400"
              >
                <Icon name="mingcute:whatsapp-fill" />
              </button>
              <button
                class="flex items-center rounded-2xl border-2 border-sky-400 bg-sky-900 px-6 py-1 text-2xl text-sky-400"
              >
                <Icon name="mingcute:share-2-line" />
              </button>
            </div>
          </div>

          <!-- ANIMECARD__Containers -->
          <AnimeCardContainer header="Currently Watching" :count="6" />
          <Divider />
          <AnimeCardContainer header="Latest Updates" :count="12" />
          <Divider />
          <AnimeCardContainer header="Recommended" :count="6" />
        </div>
        <div class="flex w-3/11 max-w-100 flex-col ml-12 mr-7 justify-start gap-y-9">
          <!-- TRENDING__Box -->
           <Trending />
           <Trending />
        </div>
      </div>
      <div
        class="flex h-80 items-center justify-center rounded-3xl bg-[#031a25]/90 text-white"
      >
        <h1>Yes</h1>
      </div>
      <div
        class="flex h-80 w-full items-center justify-center rounded-3xl bg-[#0f003a]/90 text-white"
      >
        <h1>Yes</h1>
      </div>
    </div>
  </div>
</template>
