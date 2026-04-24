<script setup lang="ts">

const isTabOpen = ref(false);

const toggleTab = () => {
    isTabOpen.value = !isTabOpen.value
    console.log(isTabOpen)
}

</script>

<template>
  <div
    class="relative flex items-center justify-center rounded-2xl bg-gray-900/60 shadow shadow-sky-400/20"
  >
    <!-- TRENDING__Header -->
    <div
      class="absolute top-0 z-10 flex w-full justify-between rounded-2xl bg-linear-to-br from-violet-950/70 to-sky-950/70 px-9 py-3 text-center shadow shadow-sky-300/30 backdrop-blur-sm"
    >
      <h1 class="flex items-center gap-x-4 text-3xl">
        <div
          class="flex w-fit items-center justify-center rounded-full bg-linear-to-br from-violet-700/70 to-sky-700/70 p-1"
        >
          <Icon class="text-amber-300/90" name="mingcute:trophy-line" />
        </div>
        Top Trending
      </h1>
      <div
        @click="toggleTab"
        class="relative w-fit rounded border hover:brightness-110 border-violet-400/60 bg-violet-950 px-4 py-1 inset-shadow-sm"
      >
        Now
        <div 
        :class="isTabOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'"
        class="absolute right-0 -bottom-33 transition-all duration-300 bg-gray-900">
          <div class="w-27 px-4 py-1 text-left hover:active:bg-sky-500 hover:bg-gray-800/50 hover:text-gray-200">Now</div>
          <div class="w-27 px-4 py-1 text-left hover:active:bg-sky-500 hover:bg-gray-800/50 hover:text-gray-200">Day</div>
          <div class="w-27 px-4 py-1 text-left hover:active:bg-sky-500 hover:bg-gray-800/50 hover:text-gray-200">Week</div>
          <div class="w-27 px-4 py-1 text-left hover:active:bg-sky-500 hover:bg-gray-800/50 hover:text-gray-200">Month</div>
        </div>
      </div>
    </div>
    <div class="flex max-h-123 flex-col gap-y-2 overflow-y-scroll p-9 pt-24">
      <!-- TRENDING__TrendCard -->
      <TrendCard :count="i + 1" v-for="(_, i) in 10" />
    </div>
  </div>
</template>
