<script setup lang="ts">
import NavLink from './NavLink.vue';

const { name } = defineProps<{
  name: string | object;
}>();

const items = [
  "Action",
  "Adventure",
  "Avant Garde",
  "Comedy",
  "Demons",
  "Drama",
  "Fantasy",
  "Gourmet",
  "Horror",
  "Isekai",
  "Iyashikei",
  "Josei",
  "Kids",
  "Action",
  "Adventure",
  "Avant Garde",
  "Comedy",
  "Demons",
  "Drama",
  "Fantasy",
  "Gourmet",
  "Horror",
  "Isekai",
  "Iyashikei",
  "Josei",
  "Kids",
];

const items2 = [
    "Movies",
    "TV Series",
    "OVAs",
    "ONAs",
    "Specials"
]


</script>

<template>
  <div
    class="group relative"
  >
    <div
      class="absolute -bottom-0.5 h-1 w-0 rounded-br-sm bg-purple-600 transition-all duration-150 group-hover:w-[50%]"
    ></div>
    <h1 class="transition-all duration-150 hover:text-neutral-200">{{ name }}</h1>
    <ul
    class="invisible absolute top-8 left-3/7 z-10 grid w-full min-w-max gap-y-1.5 rounded-2xl bg-[#031825] p-6 font-normal text-gray-200  capitalize opacity-0 transition-all duration-150 group-hover:visible group-hover:top-6 group-hover:opacity-100"
    :class="name === 'Type' ? 'grid-cols-1 pr-4' : 'grid-cols-4 pr-14'"
    >
      <li
        class="cursor-pointer pr-10 whitespace-nowrap transition-all duration-150 hover:text-blue-500"
        v-for="item in (name === 'Genres' ? items : items2)"
        :key="item"
      >
      <NavLink class="" :name="item" :link-frag= "name === 'Genres' ? '/genres' : ''" :link-frag2="item" url="mock-url" />
      </li>
    </ul>
  </div>
</template>
