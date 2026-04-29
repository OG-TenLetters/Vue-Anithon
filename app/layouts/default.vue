<script setup lang="ts">

import Footer from '~/components/layout/Footer.vue';
import Navbar from '~/components/layout/Navbar/Navbar.vue';
import SigninSignupModal from '~/components/ui/modals/SigninSignupModal.vue';

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
