<script setup lang="ts">

defineProps<{ isOpen: boolean }>()
const emit = defineEmits(["toggle"])

</script>

<template>
  <div @click="emit('toggle')" class="relative">
    <figure
      :class="isOpen ? 'rotate-0' : 'rotate-45'"
      class="h-9 w-9 max-[478px]:h-6 max-[478px]:w-6 cursor-pointer overflow-hidden rounded-xs bg-amber-300 transition-all duration-300 hover:brightness-90"
    >
      <img
        :class="isOpen ? 'rotate-0' : '-rotate-45'"
        class="absolute top-auto left-auto scale-140 transition-all duration-300"
        src="/Anime-Profile-Example.webp"
        alt="Profile Image"
      />
    </figure>
    <ul
      :class="
        isOpen
          ? 'translate-y-0.5 scale-y-100 opacity-100'
          : '-translate-y-1/2 scale-y-0 opacity-0'
      "
      class="absolute right-0 flex flex-col gap-y-2 rounded-3xl rounded-tr-none bg-gray-800/90 px-4 py-6 pb-3 text-sm text-white inset-shadow-[0px_-4px_4px_2px] inset-shadow-sky-500/40 transition-all duration-300"
    >
      <div class="rounded-xl rounded-tr-none border-2 border-sky-500/40">
        <li
          class="max-md:flex hidden cursor-pointer items-center gap-x-2 px-6 py-3 transition-all duration-150 first:rounded-tl-xl hover:bg-sky-700/30 hover:text-sky-300"
          >
          <span class="text-green-500/70 -mr-1">En</span>/<span class="-ml-1">Jp</span> 
          <div class="flex items-center justify-start transition-all duration-150 w-6 h-4 bg-gray-600 rounded-full border border-white">
            <div class="w-3 h-3 rounded-full bg-green-500/70"></div>
          </div>
        </li>
        <li
          class="cursor-pointer px-6 py-3 transition-all duration-150 first:rounded-tl-xl hover:bg-sky-700/30 hover:text-sky-300"
        >
          Dashboard
        </li>
        <li
          class="cursor-pointer px-6 py-2 transition-all duration-150 hover:bg-sky-700/30 hover:text-sky-300"
        >
          Edit Profile
        </li>
        <li
          class="cursor-pointer px-6 py-2 transition-all duration-150 hover:bg-sky-700/30 hover:text-sky-300"
        >
          Notifications
        </li>
        <li
          class="cursor-pointer px-6 py-3 transition-all duration-150 last:rounded-b-xl hover:bg-sky-700/30 hover:text-sky-300"
        >
          Settings
        </li>
      </div>
      <li
        class="cursor-pointer rounded-b-xl border-t-2 border-gray-500/40 px-6 py-2 text-center transition-all duration-150 hover:bg-gray-700/60 hover:text-gray-300"
      >
        Logout
      </li>
    </ul>
  </div>
</template>
