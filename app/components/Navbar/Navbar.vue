<script setup lang="ts">
import LanguageToggle from "./LanguageToggle.vue";
import NavLink from "./NavLink.vue";
import OptionsModal from "./OptionsModal.vue";
import ProfileModal from "./ProfileModal.vue";
import ThemeToggle from "./ThemeToggle.vue";

const isProfileModalOpen = ref(false);
const emit = defineEmits(["open-modal"]);
const isSignedIn = ref(true); // REPLACE LATER

const toggleSignIn = () => {
  isSignedIn.value = !isSignedIn.value;
};

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
    class="fixed top-0 left-1/2 z-50 m-auto flex w-full max-w-480 -translate-x-1/2 items-center justify-between gap-x-4 rounded-b-lg border-b border-white/10 bg-linear-to-b from-sky-700/70 to-sky-900/50 px-6 py-5 shadow-lg inset-shadow-[0px_-1px_4px_2px] shadow-black/20 inset-shadow-sky-600/90 backdrop-blur-sm max-xl:pl-12"
  >
    <MobileMenu />
    <AnithonLogo
      bgColor="bg-blue-950"
      class="mr-6 ml-8 cursor-pointer transition-all duration-150 hover:brightness-90 max-md:mx-4 max-sm:mr-0"
    />
    <!-- SEARCHBAR -->
    <div class="relative block w-full min-w-40 max-[478px]:hidden">
      <input
        class="flex w-full items-center gap-x-2 rounded-md bg-[#c9cdd3] px-4 py-2 pl-8 inset-shadow-sm ring-sky-950/50 inset-shadow-neutral-500 outline-none placeholder:text-gray-600 focus:ring-3 max-sm:py-1 max-sm:pl-6"
        name="search"
        id="search"
        placeholder="Search..."
      />
      <Icon
        class="absolute top-1/2 left-2 -translate-y-4/9 text-xl text-blue-950 max-sm:left-1"
        name="mingcute:search-3-line"
      />
      <button
        class="absolute top-1/2 right-2 flex -translate-y-1/2 cursor-pointer items-center p-4 font-semibold text-blue-950 uppercase hover:brightness-170 max-sm:px-1 max-sm:text-sm"
      >
        <Icon name="mingcute:filter-fill" />
        Filter
      </button>
    </div>

    <!--MOBILE__Search--Button -->
    <button
      class="mr-auto hidden items-center justify-center rounded-lg border border-white/60 bg-violet-900 px-5 py-1 text-white max-[478px]:flex"
    >
      <Icon name="mingcute:search-3-line" />
    </button>
    <!-- MOBILE__Search--Bar -->

    <!-- CATEGORIES -->
    <div
      class="max-2xl:text-md mx-3 flex min-w-140 gap-x-5 font-semibold text-white uppercase max-xl:hidden max-xl:text-sm"
    >
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
      <LanguageToggle class="block max-md:hidden" />
      <!-- Enable Later -->

      <div
        @click="toggleSignIn"
        :class="isSignedIn ? 'bg-green-600' : 'bg-red-600'"
        class="h-5 w-5 cursor-pointer rounded-full transition-colors duration-300"
      ></div>
      <ThemeToggle class="hidden" />
      <ProfileModal @toggle="handleProfileClick" :isOpen="isProfileModalOpen" />
    </div>
  </div>
</template>
