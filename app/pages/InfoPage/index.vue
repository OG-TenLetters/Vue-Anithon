<script setup lang="ts">
import TrendingAnime from "~/components/anime/TrendingAnime.vue";
import TrendingChat from "~/components/chat/TrendingChat.vue";
import PersonDropdown from "./components/PersonDropdown.vue";
const router = useRouter();

function goBack() {
  if (window.history.length > 1) {
    router.back();
  } else {
    navigateTo("/");
  }
}

const infoDropdown = ref<"episodes" | "characters" | "staff">("episodes");

const setInfoDropdown = (newInfoDropdown: typeof infoDropdown.value) => {
  infoDropdown.value = newInfoDropdown;
  console.log(infoDropdown.value);
};
</script>

<template>
  <!-- Main Row -->
  <div class="m-auto max-w-480 pt-20 select-none max-sm:pt-16">
    <!-- Main Container -->
    <div class="flex flex-col gap-y-4 px-10 pb-8 max-xl:px-5 max-sm:px-2">
      <!-- Content Container -->

      <div
        class="flex h-full w-full justify-center gap-x-2 rounded-3xl bg-[#1c0d35]/85 pb-7 text-white"
      >
        <!-- Left Content -->
        <div
          class="relative flex w-8/11 flex-col gap-y-2 p-8 pr-0 max-2xl:w-7/11 max-lg:w-full"
        >
          <!-- Back Button -->
          <button
            @click="goBack"
            class="absolute top-12 left-12 z-20 flex w-fit items-center justify-center gap-x-2 rounded-lg border border-violet-400/60 bg-violet-950 px-4 py-1 text-2xl inset-shadow-sm transition duration-300 hover:brightness-110 active:translate-y-1 max-xl:text-xs"
          >
            <Icon name="mingcute:back-fill" />
            <h2 class="mb-0.5">Back</h2>
          </button>
          <div
            class="relative overflow-hidden rounded-3xl border-2 border-sky-950"
          >
            <!-- InfoCard__Background -->
            <figure
              class="pointer-events-none absolute h-full w-full rounded-3xl"
            >
              <img
                class="h-full w-full"
                src="/anime-card-example.webp"
                alt=""
              />
            </figure>
            <!-- InfoCard -->
            <div
              class="relative flex flex-col items-center rounded-3xl bg-linear-to-b from-sky-950/80 to-black/95 p-8 backdrop-blur-lg"
            >
              <div class="flex w-full justify-center gap-x-12">
                <!-- InfoCard__Image -->
                <figure
                  class="pointer-events-none w-1/3 overflow-hidden rounded-3xl bg-sky-800 shadow-lg shadow-gray-950"
                >
                  <img
                    class="h-full w-full rounded-2xl"
                    src="/anime-card-example.webp"
                    alt=""
                  />
                </figure>
                <!-- InfoCard__Details -->
                <ul
                  class="flex w-1/3 flex-col gap-y-1 rounded-3xl border-2 border-white/50 bg-sky-800/50 p-12 text-lg shadow-lg shadow-gray-950"
                >
                  <li class="flex gap-x-2">
                    <h3 class="font-semibold text-gray-400">Japanese:</h3>
                    <h3 class="text-white select-text">Random</h3>
                  </li>
                  <li class="flex gap-x-2">
                    <h3 class="font-semibold text-gray-400">English:</h3>
                    <h3 class="text-white select-text">Random</h3>
                  </li>
                  <li class="flex gap-x-2">
                    <h3 class="font-semibold text-gray-400">Synonyms:</h3>
                    <h3 class="text-white select-text">Random</h3>
                  </li>
                  <li class="flex gap-x-2">
                    <h3 class="font-semibold text-gray-400">Aired:</h3>
                    <h3 class="text-white select-text">Random</h3>
                  </li>
                  <li class="flex gap-x-2">
                    <h3 class="font-semibold text-gray-400">Duration:</h3>
                    <h3 class="text-white select-text">Random</h3>
                  </li>
                  <li class="flex gap-x-2">
                    <h3 class="font-semibold text-gray-400">Status:</h3>
                    <h3 class="text-white select-text">Random</h3>
                  </li>
                  <li class="flex gap-x-2">
                    <h3 class="font-semibold text-gray-400">MAL Score:</h3>
                    <h3 class="text-white select-text">Random</h3>
                  </li>
                  <li class="flex gap-x-2">
                    <h3 class="font-semibold text-gray-400">Genres:</h3>
                    <h3 class="text-white select-text">Random</h3>
                  </li>
                  <li class="flex gap-x-2">
                    <h3 class="font-semibold text-gray-400">Studios:</h3>
                    <h3 class="text-white select-text">Random</h3>
                  </li>
                  <li class="flex gap-x-2">
                    <h3 class="font-semibold text-gray-400">Producers:</h3>
                    <h3 class="text-white select-text">Random</h3>
                  </li>
                  <!-- InfoCard__Details--AddToListButton -->
                  <button
                    class="mt-8 flex w-fit items-center gap-x-2 rounded-xl border border-purple-200 bg-purple-900 px-4 py-2 text-2xl text-white max-sm:rounded-lg max-sm:px-2 max-sm:py-2"
                  >
                    <Icon name="mingcute:add-fill" />
                    <h3 class="max-sm:text-sm">Add To List</h3>
                  </button>
                </ul>
              </div>

              <!-- InfoCard__Title -->
              <h1
                class="mt-8 mb-4 w-fit rounded-lg py-4 pt-6 text-5xl font-bold tracking-wide select-text"
              >
                One Piece
              </h1>
              <!-- InfoCard__Content -->
              <div
                class="flex flex-col gap-y-4 rounded-3xl bg-sky-700/70 p-12 inset-shadow-[0px_0px_8px_1px] inset-shadow-gray-950"
              >
                <!-- InfoCard__Content--Description -->
                <p
                  class="rounded-2xl bg-gray-900 px-10 py-6 pb-12 text-lg font-semibold tracking-wide text-white/90"
                >
                  Barely surviving in a barrel after passing through a terrible
                  whirlpool at sea, carefree Monkey D. Luffy ends up aboard a
                  ship under attack by fearsome pirates. Despite being a
                  naive-looking teenager, he is not to be underestimated.
                  Unmatched in battle, Luffy is a pirate himself who resolutely
                  pursues the coveted One Piece treasure and the King of the
                  Pirates title that comes with it. The late King of the
                  Pirates, Gol D. Roger, stirred up the world before his death
                  by disclosing the whereabouts of his hoard of riches and
                  daring everyone to obtain it. Ever since then, countless
                  powerful pirates have sailed dangerous seas for the prized One
                  Piece only to never return. Although Luffy lacks a crew and a
                  proper ship, he is endowed with a superhuman ability and an
                  unbreakable spirit that make him not only a formidable
                  adversary but also an inspiration to many. As he faces
                  numerous challenges with a big smile on his face, Luffy
                  gathers one-of-a-kind companions to join him in his ambitious
                  endeavor, together embracing perils and wonders on their
                  once-in-a-lifetime adventure. [Written by MAL Rewrite]
                </p>
                <!-- InfoCard__Content--Episodes -->
                <div class="flex flex-col gap-y-4">
                  <!-- Episode Dropdown -->
                  <div
                    @click="setInfoDropdown('episodes')"
                    :class="infoDropdown === 'episodes' ? 'border-b-0' : ''"
                    class="relative z-5 flex items-center rounded-2xl border border-blue-300/50 bg-[#273283] p-4"
                  >
                    <div
                      :class="
                        infoDropdown === 'episodes'
                          ? 'rotate-360'
                          : 'rotate-270'
                      "
                      class="flex items-center justify-center transition-all duration-600"
                    >
                      <Icon class="text-5xl" name="mingcute:down-small-fill" />
                    </div>
                    <h1 class="text-3xl">Episodes</h1>
                  </div>
                  <!-- InfoCard__Content--Episodes-Box -->
                  <Transition name="dropdown">
                    <div
                      v-show="infoDropdown === 'episodes'"
                      class="-mt-10 overflow-hidden"
                    >
                      <div
                        class="relative top-0 flex w-full flex-col gap-y-6 rounded-b-2xl border border-blue-300/50 bg-gray-900 pt-12 pb-10 transition-all duration-300"
                      >
                        <div class="flex justify-between px-20">
                          <!-- Season Button -->
                          <div
                            class="flex cursor-pointer justify-center rounded-lg bg-gray-800 px-3 py-1.5 text-2xl transition-all duration-150 hover:text-sky-400"
                          >
                            <div class="flex items-center gap-x-2">
                              <Icon name="mingcute:down-fill" />
                              <h3>Season 1</h3>
                            </div>
                          </div>
                          <!-- Episodes Button -->
                          <div
                            class="flex cursor-pointer justify-center rounded-lg bg-gray-800 px-3 py-4 text-2xl transition-all duration-150 hover:text-sky-400"
                          >
                            <div class="flex items-center gap-x-2">
                              <Icon name="mingcute:down-fill" />
                              <h3>001 - 050</h3>
                            </div>
                          </div>
                        </div>
                        <div
                          class="mx-auto grid w-4/5 grid-cols-10 grid-rows-5 gap-x-2 gap-y-3 px-20"
                        >
                          <div
                            v-for="(_, i) in 50"
                            :key="i"
                            class="flex cursor-pointer justify-center rounded-lg bg-gray-700 px-3 py-1.5 text-2xl inset-shadow-[0px_0px_8px_1px] inset-shadow-sky-400/50 hover:bg-sky-950/80 hover:inset-shadow-white"
                          >
                            {{ i + 1 }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Transition>

                  <!-- Characters Dropdown -->
                  <PersonDropdown
                    dropdown-title="Characters"
                    dropdown-type="characters"
                    :set-info-dropdown="setInfoDropdown"
                    :info-dropdown="infoDropdown"
                  />
                  <!-- Staff Dropdown -->
                  <PersonDropdown
                    dropdown-title="Staff"
                    dropdown-type="staff"
                    :set-info-dropdown="setInfoDropdown"
                    :info-dropdown="infoDropdown"
                  />
                </div>

                <!-- InfoCard__Content--Staff -->
              </div>
            </div>
          </div>
        </div>
        <!-- Right Content -->
        <div
          class="max-2xl:4/11 mr-7 ml-12 flex w-3/11 max-w-100 flex-col justify-start gap-y-9 max-lg:hidden"
        >
          <!-- TRENDING__Anime -->
          <TrendingAnime :pending="true" :anime-data="false" />
          <!-- TRENDING__Chat -->
          <TrendingChat />
        </div>
      </div>
    </div>
  </div>
</template>
