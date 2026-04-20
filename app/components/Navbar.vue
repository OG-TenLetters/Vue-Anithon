<script setup>
import { ref } from 'vue';
const isEnglish = ref(true);
const toggleLanguage = () => {
  isEnglish.value = !isEnglish.value;
  console.log(isEnglish.value)
};

</script>

<template>
  <div
    class="m-auto flex w-full max-w-480 items-center justify-between gap-x-2 rounded-b-lg bg-sky-800 px-6 py-5 opacity-90 inset-shadow-sm inset-shadow-blue-400 backdrop-blur-3xl"
  >
    <AnithonLogo class="ml-15" />
    <div
      class="flex w-full max-w-140 items-center gap-x-2 rounded-md bg-white px-4 py-2"
    >
      <Icon class="text-lg" name="mingcute:search-3-line" />
      <input name="search" id="search" placeholder="Search Anime..." />
    </div>
    <div class="mx-10 flex gap-x-7 font-semibold text-white uppercase">
      <h1>Genres</h1>
      <h1>Type</h1>
      <h1>New Releases</h1>
      <h1>Updates</h1>
      <h1>Ongoing</h1>
      <h1>Recent</h1>
    </div>
    <div class="flex items-center gap-x-4">
      <button @click="toggleLanguage" class="mr-5 flex font-semibold cursor-pointer">
        <div
        class="rounded-lg px-4 py-1 inset-shadow-sm transition-all duration-300"
          :class="isEnglish ? 'bg-purple-900 text-white z-1 inset-shadow-purple-300' : 'bg-sky-600 text-black inset-shadow-sky-950'""
        >
          en
        </div>
        <div
        class="-ml-2 rounded-lg px-4 py-1 inset-shadow-sm transition-all duration-300"
          :class="isEnglish ? 'bg-sky-600 text-black inset-shadow-sky-950' : 'bg-purple-900 text-white z-4 inset-shadow-purple-300'"
        >
          jp
        </div>
      </button>
      <Icon class="text-2xl text-white" name="mingcute:sun-fill" />
      <figure
        class="h-9 w-9 rotate-45 overflow-hidden rounded-xs bg-white shadow-lg shadow-sky-900"
      >
        <img
          class="absolute top-auto left-auto scale-140 -rotate-45 bg-amber-300"
          src="/Anime-Profile-Example.webp"
          alt=""
        />
      </figure>
    </div>
  </div>
</template>
