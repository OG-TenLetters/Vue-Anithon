<script setup lang="ts">
type Props = {
  dropdownTitle: string;
  infoDropdown: string | null;
  setInfoDropdown: any | null;
  dropdownType: string;
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
      <!-- InfoCard__Content--Characters -->
      <div
        class="rounded-b-3xl border border-blue-300/50 bg-gray-900 p-28 px-8 pb-20"
      >
        <!-- CharacterCard__Grid -->
        <div class="grid grid-cols-7 grid-rows-3 gap-y-8">
          <!-- CharacterCard -->
          <div v-for="(_, i) in 20" :key="i" class="flex flex-col items-center">
            <figure class="h-25 w-25 overflow-hidden rounded-2xl">
              <div
                class="to h-full w-full bg-red-800/50 bg-linear-to-r from-green-800/50"
              ></div>
            </figure>
            <h3>En Name</h3>
            <h3>Jap Name</h3>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
