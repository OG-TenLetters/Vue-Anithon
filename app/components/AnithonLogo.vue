<script setup lang="ts">

defineProps<{ bgColor: string }>()
</script>

<template>
        <div class="flex items-center gap-1">
        <figure 
        :class="bgColor"
        class="max-md:w-4 rounded-xs w-6 rotate-45">
            <img class="w-full h-full -rotate-45" src="/anime-logo.png" alt="Anithon Icon">
        </figure>
        <h1 class="font-bold text-white max-md:text-sm text-xl tracking-wide">ANiTHON</h1>
    </div>
</template>