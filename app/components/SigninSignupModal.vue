<script setup lang="ts">
type ModalType = "signin" | "signup" | "forgot-password";
defineProps<{ activeModal: ModalType | null }>();
const emit = defineEmits(["set-modal", "close"]);
</script>

<template>
  <Transition name="modal">
    <div v-if="activeModal">
    <div class="fixed top-0 right-0 bottom-0 left-0 z-20 bg-black/40"></div>
    <div
      class="fixed top-1/2 left-1/2 z-30 -translate-1/2 overflow-hidden rounded-3xl bg-gray-800/80 p-10 inset-shadow-[0px_0px_8px_2px] inset-shadow-sky-500/30"
    >
      <Icon
        @click="emit('close')"
        class="absolute top-7 right-7 cursor-pointer text-3xl text-sky-700 transition-colors duration-150 hover:text-white"
        name="mingcute:xrp-line"
      />
      <div
        class="absolute -top-25 left-1/2 h-50 w-50 -translate-x-1/2 rotate-45 bg-sky-700/50"
      ></div>
      <div
        class="absolute -bottom-40 left-1/2 h-50 w-50 -translate-x-1/2 rotate-45 bg-sky-700/50"
      ></div>
      <div
        class="absolute top-5/9 -right-42 h-50 w-50 -translate-y-1/2 rotate-45 bg-sky-700/50"
      ></div>
      <div
        class="absolute top-4/9 -left-42 h-50 w-50 -translate-y-1/2 rotate-45 bg-sky-700/50"
      ></div>
      <div class="flex items-center justify-center">
        <figure class="max-w-20 rotate-45 rounded-sm bg-sky-950/70">
          <img src="/anime-logo.png" class="h-20 w-20 -rotate-45" alt="" />
        </figure>
      </div>

      <form
        v-if="activeModal === 'signin'"
        class="flex flex-col items-center gap-y-4 rounded-2xl border-2 border-sky-500/40 p-10 text-white"
        action=""
      >
        <h1 class="mb-3 text-2xl font-bold">Sign in to your Account</h1>
        <input
          class="w-full rounded-lg bg-gray-700 px-2 py-1 ring-1 ring-transparent outline-none focus:ring-white"
          type="text"
          placeholder="Email or Username"
        />
        <input
          class="w-full rounded-lg bg-gray-700 px-2 py-1 ring-1 ring-transparent outline-none focus:ring-white"
          type="password"
          placeholder="Password"
        />
        <button
          class="mt-2 w-full cursor-pointer rounded-xl border-2 border-sky-600 bg-sky-600 px-4 py-2 font-bold tracking-wider transition-all duration-150 hover:border-sky-500 hover:bg-sky-500 active:border-sky-600 active:bg-transparent active:text-sky-600"
        >
          Sign In
        </button>

        <h3>
          Don't have an account?
          <span
            @click="emit('set-modal', 'signup')"
            class="cursor-pointer font-bold text-blue-500 underline-offset-1 hover:underline"
            >Sign up</span
          >
        </h3>
        <h3
          @click="emit('set-modal', 'forgot-password')"
          class="cursor-pointer text-blue-500 underline-offset-1 hover:underline"
        >
          Forgot Password?
        </h3>
      </form>
      <form
        v-if="activeModal === 'signup'"
        class="flex flex-col items-center gap-y-4 rounded-2xl border-2 border-sky-500/40 p-10 text-white"
        action=""
      >
        <h1 class="mb-3 text-2xl font-bold">Make an Account</h1>
        <input
          class="w-full rounded-lg bg-gray-700 px-2 py-1 ring-1 ring-transparent outline-none focus:ring-white"
          type="text"
          placeholder="Username"
        />
        <input
          class="w-full rounded-lg bg-gray-700 px-2 py-1 ring-1 ring-transparent outline-none focus:ring-white"
          type="email"
          placeholder="Email"
        />
        <input
          class="w-full rounded-lg bg-gray-700 px-2 py-1 ring-1 ring-transparent outline-none focus:ring-white"
          type="password"
          placeholder="Password"
        />
        <input
          class="w-full rounded-lg bg-gray-700 px-2 py-1 ring-1 ring-transparent outline-none focus:ring-white"
          type="password"
          placeholder="Confirm Password"
        />
        <button
          class="mt-2 w-full cursor-pointer rounded-xl border-2 border-sky-600 bg-sky-600 px-4 py-2 font-bold tracking-wider transition-all duration-150 hover:border-sky-500 hover:bg-sky-500 active:border-sky-600 active:bg-transparent active:text-sky-600"
        >
          Create
        </button>

        <h3>
          Already have an account?
          <span
            @click="emit('set-modal', 'signin')"
            class="cursor-pointer font-bold text-blue-500 underline-offset-1 hover:underline"
            >Sign In</span
          >
        </h3>
      </form>

      <form
        v-if="activeModal === 'forgot-password'"
        class="flex flex-col items-center gap-y-4 rounded-2xl border-2 border-sky-500/40 p-10 text-white"
        action=""
      >
        <h1 class="mb-3 text-2xl font-bold">Forgot Password</h1>
        <input
          class="w-full rounded-lg bg-gray-700 px-2 py-1 ring-1 ring-transparent outline-none focus:ring-white"
          type="email"
          placeholder="Email"
        />
        <button
          class="mt-2 w-full cursor-pointer rounded-xl border-2 border-sky-600 bg-sky-600 px-4 py-2 font-bold tracking-wider transition-all duration-150 hover:border-sky-500 hover:bg-sky-500 active:border-sky-600 active:bg-transparent active:text-sky-600"
        >
          Request
        </button>

        <h3>
          Back to
          <span
            @click="emit('set-modal', 'signin')"
            class="cursor-pointer font-bold text-blue-500 underline-offset-1 hover:underline"
            >Sign In</span
          >
        </h3>
      </form>
    </div>
  </div>
  </Transition>
</template>
