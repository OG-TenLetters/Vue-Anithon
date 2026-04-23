<script setup lang="ts">
import LanguageToggle from "./LanguageToggle.vue";
import NavLink from "./NavLink.vue";
import OptionsModal from "./OptionsModal.vue";
import ProfileModal from "./ProfileModal.vue";
import ThemeToggle from "./ThemeToggle.vue";

const isProfileModalOpen = ref(false);
const emit = defineEmits(["open-modal"]);
const isSignedIn = ref(true); // REPLACE LATER

const handleProfileClick = () => {
  if (!isSignedIn.value) {
    emit("open-modal", "signin");
  } else {
    isProfileModalOpen.value = !isProfileModalOpen.value;
  }
};
</script>

<template>
  <div
    class="fixed top-0 left-1/2 -translate-x-1/2  z-50 m-auto flex w-full max-w-480 items-center justify-between gap-x-2 rounded-b-lg border-b border-white/10 bg-linear-to-b from-sky-700/70 to-sky-900/50 px-6 py-5 shadow-lg inset-shadow-[0px_-1px_4px_2px] shadow-black/20 inset-shadow-sky-600/90 backdrop-blur-sm"
  >
    <NuxtLink to="/">
      <AnithonLogo
        class="ml-15 cursor-pointer transition-all duration-150 hover:brightness-90"
      />
    </NuxtLink>
    <div class="relative">
      <input
        class="flex w-140 items-center gap-x-2 rounded-md bg-white px-4 py-2 pl-8 inset-shadow-sm ring-sky-950/50 inset-shadow-neutral-500 outline-none focus:ring-3"
        name="search"
        id="search"
        placeholder="Search..."
      />
      <Icon
        class="absolute top-1/2 left-2 -translate-y-4/9 text-xl text-blue-950"
        name="mingcute:search-3-line"
      />
      <button
        class="absolute top-1/2 right-2 flex -translate-y-1/2 cursor-pointer items-center p-4 font-semibold text-blue-950 uppercase hover:brightness-170"
      >
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
      <ThemeToggle />
      <ProfileModal @toggle="handleProfileClick" :isOpen="isProfileModalOpen" />
    </div>
  </div>
</template>
