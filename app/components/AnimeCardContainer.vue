<script setup lang="ts">

type Props = {
    count: number | null
    header: string | null
}
const props = defineProps<Props>();
</script>

<template>
  <div class="h-4/5 w-full px-8 py-6">
    <h2 class="mb-3 text-xl uppercase">{{ header }}</h2>

    <!-- ANIME CARD -->
    <div class="flex justify-center flex-wrap gap-x-6">
      <AnimeCard class="w-1/7" v-for="(_, i) in props.count" :key="i" />
    </div>
  </div>
</template>
