<script setup lang="ts">
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
  <div>
    <!-- ANIMECARD__Image -->
    <div class="group relative flex flex-col pt-4 pb-2">
      <div
        @mouseenter="open"
        @mouseleave="close"
        class="pointer-events-none absolute top-8 right-5 z-5 flex rounded-full bg-white opacity-0 transition-all duration-150 group-hover:pointer-events-auto group-hover:-translate-y-3 group-hover:opacity-100 hover:scale-110"
      >
        <Icon class="bg-blue-950 text-2xl" name="mingcute:information-fill" />

        <!-- ANIMECARD__Hover-Popup -->
        <div
          v-if="show"
          class="absolute -top-3 -right-65 mt-2 w-72 rounded-xl border-white/10 bg-linear-to-b from-sky-950/85 to-purple-950/80 px-8 py-5 text-white shadow-lg inset-shadow-[0px_-1px_4px_2px] shadow-black/20 inset-shadow-sky-600/90 backdrop-blur-sm"
        >
        <div class="border bg-white flex items-center justify-center overflow-hidden rounded-full absolute top-1 left-1">
        <Icon class=" bg-blue-950 text-2xl" name="mingcute:information-fill" />
        </div>
          <h3 class="font-bold">Anime Title</h3>

          <p class="line-clamp-3 text-xs text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            nesciunt error ut, atque praesentium laudantium eos distinctio,
            expedita cumque nemo earum facere labore quisquam perferendis
            deleniti obcaecati nisi natus quaerat.
          </p>

          <div class="flex items-center justify-between">
            <div class="my-2 w-4/5 text-xs text-white">
              <div class="flex gap-x-1">
                <h3 class="text-gray-300">Aired:</h3>
                <h3>Oct 15 to ?</h3>
              </div>
              <div class="flex gap-x-1">
                <h3 class="text-gray-300">Status:</h3>
                <h3>Releasing</h3>
              </div>
              <div class="flex gap-x-1">
                <h3 class="text-gray-300">Genres:</h3>
                <h3>Comedy, Love, Hiphop</h3>
              </div>
            </div>

            <button
              class="mt-4 flex w-1/5 items-center justify-center rounded-xl border-2 border-sky-300 bg-sky-900 px-0.5 py-2.5 text-sky-300 opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <Icon name="mingcute:add-fill" />
            </button>
          </div>

          <button
            class="mt-2 w-full rounded-lg border-2 border-white/20 bg-violet-950/60 px-3 py-1 tracking-wider text-purple-200 transition-all duration-300 hover:border-gray-400 hover:text-gray-100 hover:active:border-sky-600 hover:active:bg-transparent hover:active:text-sky-600"
          >
            Full Info
          </button>
        </div>
      </div>
      <figure
        class="max-w-40 overflow-hidden rounded-2xl transition-all duration-300 group-hover:-translate-y-2 group-hover:brightness-80"
      >
        <img
          class="h-[110%] w-[110%] object-cover"
          src="/anime-card-example.webp"
          alt=""
        />
      </figure>
      <div class="flex flex-col">
        <!-- ANIMECARD__Title -->
        <h3
          class="max-w-40 py-2 text-sm font-semibold transition-all duration-300 group-hover:-translate-y-2 hover:text-gray-400"
        >
          Anime Title Longer Edition
        </h3>
        <!-- ANIMECARD__InfoBox -->
        <div class="flex items-start justify-between">
          <div class="flex gap-x-2 text-sm">
            <h2
              class="flex items-center gap-x-1 rounded-md border border-sky-400 bg-sky-900 p-0.5 text-[8px] font-semibold text-sky-400"
            >
              <Icon class="text-sm" name="mingcute:microphone-line" />1144
            </h2>
            <span class="text-sky-200">|</span>
            <h2
              class="flex items-center gap-x-1 rounded-md border border-purple-400 bg-violet-900 p-0.5 text-[8px] font-semibold text-purple-400"
            >
              <span class="font-bold">CC</span>1144
            </h2>
          </div>
          <h4 class="font-semibold">TV</h4>
        </div>
      </div>
    </div>
  </div>
</template>
