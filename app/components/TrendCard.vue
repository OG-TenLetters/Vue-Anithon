<script setup lang="ts">

type Props = {
    count: number | null
}
const props = defineProps<Props>();

</script>

<template>
  <div class="flex group items-center">
    <figure
      class="relative flex h-20 w-20 overflow-hidden rounded-2xl border-2 border-purple-950"
    >
      <img
        class="h-full w-full object-cover brightness-75"
        src="/anime-card-example.webp"
        alt=""
      />
      <div
        class="absolute top-1/2 left-1/2 z-1 -translate-1/2 text-4xl font-bold"
      >
    {{ count }}
    </div>
      <div
        class="absolute inset-0 border border-sky-400 bg-linear-to-bl from-sky-950/85 to-purple-950/85 transition-all duration-300 group-hover:to-sky-950/67 group-hover:from-purple-950/67"
      ></div>
    </figure>
    <div class="-ml-6 rounded-r-2xl bg-gray-950 group-hover:bg-violet-300/10 transition-all duration-150 px-6 py-3 pl-10">
      <h2 class="line-clamp-1 mb-1">Anime Title And Other Things</h2>
      <!-- REFACTOR LATER -->
      <div class="flex items-start justify-between">
        <div class="flex gap-x-2 text-sm">
          <h2
            class="flex items-center gap-x-1 rounded-md border border-sky-400 bg-sky-900 p-0.5 text-[8px] font-semibold text-sky-400"
          >
            <Icon class="text-sm" name="mingcute:microphone-line" />1144
          </h2>
          <span class="text-sky-200">|</span>
          <h2
            class="flex items-center gap-x-1 rounded-md border border-purple-400 bg-violet-900 p-0.5 text-[8px] font-semibold text-purple-400"
          >
            <span class="font-bold">CC</span>1144
          </h2>
        </div>
        <h4 class="font-semibold">TV</h4>
      </div>
    </div>
  </div>
  <Divider class="opacity-30" />
</template>
