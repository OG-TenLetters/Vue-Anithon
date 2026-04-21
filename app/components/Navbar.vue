<script setup lang="ts">
import LanguageToggle from "./Navbar/LanguageToggle.vue";
import NavLink from "./Navbar/NavLink.vue";
import OptionsModal from "./Navbar/OptionsModal.vue";
import ThemeToggle from "./Navbar/ThemeToggle.vue";
const isProfileModalOpen = ref(false);
const isSignedIn = ref(true); // CHANGE LATER
const isSigninModalOpen = ref(false);

const handleUserAuth = () => {
  if (isSignedIn.value === false) {
    isProfileModalOpen.value = false;
    isSigninModalOpen.value = true;
  } else {
    isProfileModalOpen.value = !isProfileModalOpen.value;
  }

  console.log("SignedIn?:", isSignedIn.value);
  console.log("Open Signin?:", isSigninModalOpen.value);
  console.log("Open Profile Menu?:", isProfileModalOpen.value);
};

const toggleProfileModal = () => {
  isProfileModalOpen.value = !isProfileModalOpen.value;
  console.log(isProfileModalOpen.value);
};
</script>

<template>
  <div
    class="m-auto flex w-full max-w-480 items-center justify-between gap-x-2 rounded-b-lg bg-sky-800 px-6 py-5 opacity-90 inset-shadow-[0px_-1px_4px_2px] inset-shadow-sky-600/90 backdrop-blur-3xl"
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
      <div @click="handleUserAuth" class="relative">
        <figure
          :class="isProfileModalOpen ? 'rotate-0' : 'rotate-45'"
          class="h-9 w-9 cursor-pointer overflow-hidden rounded-xs bg-white shadow-lg shadow-sky-900 transition-all duration-300 hover:brightness-90"
        >
          <img
            :class="isProfileModalOpen ? 'rotate-0' : '-rotate-45'"
            class="absolute top-auto left-auto scale-140 -rotate-45 bg-amber-300 transition-all duration-300"
            src="/Anime-Profile-Example.webp"
            alt="Profile Image"
          />
        </figure>
        <ul
          :class="
            isProfileModalOpen
              ? 'translate-y-0.5 scale-y-100 opacity-100'
              : '-translate-y-1/2 scale-y-0 opacity-0'
          "
          class="absolute right-0 flex flex-col gap-y-2 rounded-3xl rounded-tr-none bg-gray-800/80 px-4 py-6 pb-3 text-sm text-white inset-shadow-[0px_-4px_4px_2px] inset-shadow-sky-500/40 transition-all duration-300"
        >
          <div class="rounded-xl rounded-tr-none border-2 border-sky-500/40">
            <li
              class="cursor-pointer px-6 py-3 transition-all duration-150 first:rounded-tl-xl hover:bg-gray-700 hover:text-neutral-300"
            >
              Dashboard
            </li>
            <li
              class="cursor-pointer px-6 py-2 transition-all duration-150 hover:bg-gray-700 hover:text-neutral-300"
            >
              Edit Profile
            </li>
            <li
              class="cursor-pointer px-6 py-2 transition-all duration-150 hover:bg-gray-700 hover:text-neutral-300"
            >
              Notifications
            </li>
            <li
              class="cursor-pointer px-6 py-3 transition-all duration-150 last:rounded-b-xl hover:bg-gray-700 hover:text-neutral-300"
            >
              Settings
            </li>
          </div>
          <li
            class="cursor-pointer rounded-b-xl border-t-2 border-gray-500/40 px-6 py-2 text-center transition-all duration-150 hover:bg-gray-700 hover:text-neutral-300"
          >
            Logout
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
