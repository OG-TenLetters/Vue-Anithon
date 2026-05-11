<script setup lang="ts">
import type { Person } from '~/types/animeFromAnilist';


type Props = {
  dropdownTitle: string;
  infoDropdown: string | null;
  setInfoDropdown: any | null;
  dropdownType: string;
  animeCast: Person[];
};

const props = defineProps<Props>();

</script>

<template>
  <div
    @click="setInfoDropdown(`${dropdownType}`)"
    :class="infoDropdown === 'characters' ? 'border-b-0' : ''"
    class="relative z-5 flex items-center rounded-2xl border border-blue-300/50 bg-[#273283] p-4"
  >
    <div
      :class="infoDropdown === dropdownType ? 'rotate-360' : 'rotate-270'"
      class="flex items-center justify-center transition-all duration-600"
    >
      <Icon class="text-5xl" name="mingcute:down-small-fill" />
    </div>
    <h1 class="text-3xl">{{ dropdownTitle }}</h1>
  </div>

  <Transition name="dropdown">
    <div
      v-show="infoDropdown === `${dropdownType}`"
      class="-mt-10 overflow-hidden"
    >
      <!-- InfoCard__Content--Cast -->
      <div
        class="rounded-b-3xl border border-blue-300/50 bg-gray-900 p-28 px-8 pb-20"
      >
        <!-- CastCard__Grid -->
        <div class="grid grid-cols-7 grid-rows-3 gap-y-8 my-auto">
          <!-- CastCard -->
          <div v-for="charCard in animeCast" :key="charCard.name.full" class="flex flex-col text-center items-center">
            <figure class="h-25 w-25 overflow-hidden rounded-2xl">
              <div v-if="!charCard"
                class="h-full w-full bg-red-800/50 bg-linear-to-r from-green-800/50"
              ></div>
              <img
              v-if="charCard"
              class="w-full object-contain" :src="charCard.image" alt="">
            </figure>
            <!-- <h3>{{ charCard.name.native }}</h3> -->
            <h3>{{ charCard.name.full }}</h3>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
