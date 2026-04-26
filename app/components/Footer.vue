<script setup lang="ts">
const alphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i)
);
</script>

<template>
  <div>
    <div class="w-full border-b border-white/30 bg-[#031825]">
      <div
        class="mx-auto flex w-full max-w-480 flex-col gap-y-7 px-16 py-12 text-gray-200"
      >
        <div class="flex items-center gap-x-6">
          <h1 class="text-2xl">A-Z List</h1>
          <h2>Searching anime order by alphabet name A to Z.</h2>
        </div>
        <div class="flex gap-x-1">
          <button
            class="flex w-fit items-center rounded-lg border-2 border-gray-200 bg-gray-900 px-3 py-1 transition-all duration-300 hover:-translate-y-0.5 hover:brightness-125"
          >
            All
          </button>
          <button
            class="flex w-fit items-center rounded-lg border-2 border-gray-200 bg-gray-900 px-3 py-1 transition-all duration-300 hover:-translate-y-0.5 hover:brightness-125"
          >
            0-9
          </button>
          <button
          v-for="letter in alphabet"
            class="flex w-fit items-center rounded-lg border-2 border-gray-200 bg-gray-900 px-3 py-1 capitalize transition-all duration-300 hover:-translate-y-0.5 hover:brightness-125"
          >
          {{ letter }}
          </button>
        </div>
      </div>
    </div>
    <div class="w-full border-t border-white/30 bg-[#031825]">
      <div
        class="mx-auto flex w-full max-w-480 justify-between px-16 py-12 text-gray-200"
      >
        <h2>
          <Icon name="mingcute:copyright-line" /> Copyright of Jadon Smith * All
          Rights Reserved
        </h2>
        <AnithonLogo bgColor="bg-blue-950" />
      </div>
    </div>
  </div>
</template>
