<script setup lang="ts">
import Navbar from "~/components/Navbar/Navbar.vue";
import SigninSignupModal from "~/components/SigninSignupModal.vue";

type ModalType = "signin" | "signup" | "forgot-password";
const activeModal = ref<ModalType | null>(null);
const setModal = (modal: ModalType | null) => {
  activeModal.value = modal;
};

</script>

<template>
  <Navbar @open-modal="setModal" />
  <SigninSignupModal
    :activeModal="activeModal"
    @set-modal="setModal"
    @close="setModal(null)"
  />
  <slot />
  <Footer />

</template>
