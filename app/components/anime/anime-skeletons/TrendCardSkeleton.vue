<script setup lang="ts">
import Divider from "~/components/ui/Divider.vue";
</script>

<template>
  <div class="flex items-center">
    <figure
      class="skeleton1 relative flex aspect-square max-w-20 min-w-19 items-center justify-center overflow-hidden rounded-2xl border border-sky-500 max-xl:aspect-12/16 max-xl:max-w-15 max-xl:min-w-14"
    ></figure>
    <div
      class="-ml-6 flex w-full gap-y-1 flex-col rounded-r-2xl bg-gray-950 px-6 py-3 pl-10"
    >
      <h2
        class="skeleton2 mb-1 line-clamp-1 rounded-lg text-transparent max-xl:text-sm"
      >
        text the lorde and say hilkdaljkdasfljda
      </h2>
      <div class="flex w-full justify-between gap-x-2 text-sm max-xl:gap-x-0">
        <div class="skeleton3 w-1/2 rounded-lg text-transparent">Text</div>
        <div class="skeleton3 rounded-lg px-1 text-transparent">TV</div>
      </div>
    </div>
  </div>
  <Divider class="opacity-30" />
</template>
