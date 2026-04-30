<script setup>
import { ref } from 'vue';
const isEnglish = ref(true);
const toggleLanguage = () => {
  isEnglish.value = !isEnglish.value;
};

</script>

<template>
          <button
      @click="toggleLanguage"
       class="hover:brightness-108 transition-all duration-150 w-22 mr-5 flex font-semibold cursor-pointer bg-sky-600 text-black inset-shadow-sky-950 rounded-lg inset-shadow-sm">
        <div class="text-black flex py-1 px-4 gap-x-5.5">
          <h3 class="transition-all duration-300" :class="isEnglish ? 'opacity-0' : 'opacity-100'">en</h3>
          <h3 class="transition-all duration-300" :class="isEnglish ? 'opacity-100' : 'opacity-0'">jp</h3>
        </div>
        <div
        class=" bg-purple-900 inset-shadow-purple-300 w-13 text-white rounded-lg px-4 py-1 inset-shadow-sm transition-all duration-300 absolute"
          :class="isEnglish ?  'translate-x-0' : 'translate-x-9'""
        >
        {{ isEnglish ? "en" : "jp" }}
        </div>
      </button>
</template>