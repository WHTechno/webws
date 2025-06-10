<template>
  <nav class="bg-transparent border-transparent">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <!-- Logo -->
      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="@/assets/logo.png" class="h-8" alt="Bang Pateng Logo" />
      </a>

      <!-- Mobile Menu Button -->
      <button
        @click="toggleMenu"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-purple-800/50"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      <!-- Navbar Items -->
      <div
        :class="menuOpen ? 'block' : 'hidden'"
        class="w-full md:block md:w-auto"
      >
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg bg-purple-900/80 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:bg-transparent"
        >
          <li>
            <a
              href="/"
              class="block py-2 px-3 text-white rounded md:bg-transparent md:text-purple-400 md:p-0 hover:text-purple-300"
              >Home</a
            >
          </li>
          <li>
            <a
              href="/testnet"
              class="block py-2 px-3 text-white rounded md:bg-transparent md:text-purple-400 md:p-0 hover:text-purple-300"
              >Testnet</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 text-white rounded md:bg-transparent md:text-purple-400 md:p-0 hover:text-purple-300"
              >Explorer</a
            >
          </li>
          <li>
            <a
              href="/tools"
              class="block py-2 px-3 text-white rounded md:bg-transparent md:text-purple-400 md:p-0 hover:text-purple-300"
              >Tools</a
            >
          </li>
          <li>
            <a
              href="/about"
              class="block py-2 px-3 text-white rounded md:bg-transparent md:text-purple-400 md:p-0 hover:text-purple-300"
              >About</a
            >
          </li>
          <li>
            <a
              href="/contact"
              class="block py-2 px-3 text-white rounded md:bg-transparent md:text-purple-400 md:p-0 hover:text-purple-300"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const menuOpen = ref(false);

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
    };

    return { menuOpen, toggleMenu };
  },
};
</script>
