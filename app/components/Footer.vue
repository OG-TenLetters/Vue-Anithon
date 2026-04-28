<script setup lang="ts">
const alphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i),
);
</script>

<template>
  <div>
    <div class="w-full border-b border-white/30 bg-[#031825]">
      <div
        class="mx-auto flex w-full max-w-480 flex-col gap-y-7 px-16 py-12 text-gray-200 max-lg:px-7 max-md:gap-y-3 max-md:py-6"
      >
        <div class="flex items-center gap-x-6 max-sm:flex-col">
          <h1 class="text-2xl max-lg:text-xl">A-Z List</h1>
          <h2 class="text-gray-400 max-lg:text-xs max-md:text-sm">
            Searching anime order by alphabet name A to Z.
          </h2>
        </div>
        <div class="flex flex-wrap gap-x-1 gap-y-2 max-lg:justify-center">
          <button
            class="flex w-fit items-center rounded-lg border-2 border-gray-200 bg-gray-900 px-3 py-1 transition-all duration-300 hover:-translate-y-0.5 hover:brightness-125 max-sm:px-2 max-sm:py-0.5 max-sm:text-sm"
          >
            All
          </button>
          <button
            class="flex w-fit items-center rounded-lg border-2 border-gray-200 bg-gray-900 px-3 py-1 transition-all duration-300 hover:-translate-y-0.5 hover:brightness-125 max-sm:px-2 max-sm:py-0.5 max-sm:text-sm"
          >
            0-9
          </button>
          <button
            v-for="letter in alphabet"
            class="flex w-fit items-center rounded-lg border-2 border-gray-200 bg-gray-900 px-3 py-1 capitalize transition-all duration-300 hover:-translate-y-0.5 hover:brightness-125 max-sm:px-2 max-sm:py-0.5 max-sm:text-sm"
          >
            {{ letter }}
          </button>
        </div>
      </div>
    </div>
    <div class="w-full border-t border-white/30 bg-[#031825]">
      <div
        class="mx-auto flex w-full max-w-480 justify-between px-16 py-12 text-gray-200 max-md:p-6"
      >
        <h2 class="max-md:text-xs max-sm:text-[8px]">
          <Icon name="mingcute:copyright-line" /> Copyright of Jadon Smith * All
          Rights Reserved
        </h2>
        <AnithonLogo class="ml-2" bgColor="bg-blue-950" />
      </div>
    </div>
  </div>
</template>
