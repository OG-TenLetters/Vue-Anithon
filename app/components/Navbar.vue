<script setup lang="ts">
import LanguageToggle from "./Navbar/LanguageToggle.vue";
import NavLink from "./Navbar/NavLink.vue";
import OptionsModal from "./Navbar/OptionsModal.vue";
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
      <OptionsModal name="Genres" link-frag-items="/genres" link-frag2-items="" url="mock-url"/>
      <OptionsModal name="Type" link-frag-items="" link-frag2-items="" url="mock-url"/>
      <NavLink class="hover:text-neutral-200" name="New Releases" linkFrag="/new-releases" link-frag2="" url="mock-url" />
      <NavLink class="hover:text-neutral-200" name="Updates" linkFrag="/updates" link-frag2="" url="mock-url" />
      <NavLink class="hover:text-neutral-200" name="Ongoing" linkFrag="/ongoing" link-frag2="" url="mock-url" />
      <NavLink class="hover:text-neutral-200" name="Recent" linkFrag="/recent" link-frag2="" url="mock-url" />
    </div>
    <div class="flex items-center gap-x-4">
      <LanguageToggle />
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
