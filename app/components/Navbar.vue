<script setup lang="ts">
import LanguageToggle from "./Navbar/LanguageToggle.vue";
import NavLink from "./Navbar/NavLink.vue";
import OptionsModal from "./Navbar/OptionsModal.vue";
</script>

<template>
  <div
    class="m-auto flex w-full max-w-480 items-center justify-between gap-x-2 rounded-b-lg bg-sky-800 px-6 py-5 opacity-90 inset-shadow-sm inset-shadow-blue-400 backdrop-blur-3xl"
  >
    <NuxtLink to="/">
      <AnithonLogo
        class="ml-15 cursor-pointer transition-all duration-150 hover:brightness-90"
      />
    </NuxtLink>
    <div class="relative">
      <input
        class="outline-none focus:ring-3 ring-sky-950/50  inset-shadow-sm inset-shadow-neutral-500 flex w-140 items-center gap-x-2 rounded-md bg-white px-4 py-2 pl-8"
        name="search"
        id="search"
        placeholder="Search..."
      />
      <Icon
        class="absolute text-blue-950 top-1/2 left-2 -translate-y-4/9 text-xl"
        name="mingcute:search-3-line"
      />
      <button class="hover:brightness-170 p-4 cursor-pointer text-blue-950 absolute right-2 top-1/2 -translate-y-1/2 flex items-center font-semibold uppercase">
        <Icon name="mingcute:filter-fill" />
        Filter
      </button>
    </div>
    <div class="mx-10 flex gap-x-7 font-semibold text-white uppercase">
      <OptionsModal
        name="Genres"
        link-frag-items="/genres"
        link-frag2-items=""
        url="mock-url"
      />
      <OptionsModal
        name="Type"
        link-frag-items=""
        link-frag2-items=""
        url="mock-url"
      />
      <NavLink
        class="hover:text-neutral-200"
        name="New Releases"
        linkFrag="/new-releases"
        link-frag2=""
        url="mock-url"
      />
      <NavLink
        class="hover:text-neutral-200"
        name="Updates"
        linkFrag="/updates"
        link-frag2=""
        url="mock-url"
      />
      <NavLink
        class="hover:text-neutral-200"
        name="Ongoing"
        linkFrag="/ongoing"
        link-frag2=""
        url="mock-url"
      />
      <NavLink
        class="hover:text-neutral-200"
        name="Recent"
        linkFrag="/recent"
        link-frag2=""
        url="mock-url"
      />
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
          alt="Profile Image"
        />
      </figure>
    </div>
  </div>
</template>
