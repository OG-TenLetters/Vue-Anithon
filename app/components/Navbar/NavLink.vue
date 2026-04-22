<script setup lang="ts">
const inputValue = ref("");
const { name, linkFrag, linkFrag2, url } = defineProps<{
  name: string | object;
  linkFrag: string;
  linkFrag2: string;
  url: string;
}>();

const emit = defineEmits<{
  (e: "select", value: string): void;
}>();

const LinkAppend = () => {
  inputValue.value = `https://${url}${linkFrag}${linkFrag2}`;
  console.log(`Stored: "${inputValue.value}"`);
  emit("select", url);
};
</script>

<template>
  <h1
    @click="LinkAppend"
    class="cursor-pointer transition-all duration-150"
  >
    {{ name }}
  </h1>
</template>
