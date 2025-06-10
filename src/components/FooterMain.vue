<template>
  <footer class="border-t border-purple-800 py-6 relative z-10">
    <div
      class="w-full mx-auto max-w-screen-xl px-6 flex flex-col md:flex-row items-center justify-between"
    >
      <!-- Copyright -->
      <span class="text-sm text-gray-300 sm:text-center">
        © {{ currentYear }}
        <a
          href="https://winsnip.xyz/"
          target="_blank"
          class="hover:text-purple-400 transition"
          >Winsnip</a
        >. All Rights Reserved.
      </span>

      <!-- Menu Footer -->
      <ul
        class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-300 sm:mt-0 relative z-20"
      >
        <li class="me-4 md:me-6">
          <router-link
            v-if="$router"
            to="/about"
            class="hover:text-purple-400 transition"
            >About</router-link
          >
          <a v-else href="/about" class="hover:text-purple-400 transition"
            >About</a
          >
        </li>
        <li class="me-4 md:me-6">
          <router-link
            v-if="$router"
            to="/privacy-policy"
            class="hover:text-purple-400 transition"
            >Privacy Policy</router-link
          >
          <a
            v-else
            href="/privacy-policy"
            class="hover:text-purple-400 transition"
            >Privacy Policy</a
          >
        </li>
        <li class="me-4 md:me-6">
          <router-link
            v-if="$router"
            to="/licensing"
            class="hover:text-purple-400 transition"
            >Licensing</router-link
          >
          <a v-else href="/licensing" class="hover:text-purple-400 transition"
            >Licensing</a
          >
        </li>
        <li>
          <router-link
            v-if="$router"
            to="/contact"
            class="hover:text-purple-400 transition"
            >Contact</router-link
          >
          <a v-else href="/contact" class="hover:text-purple-400 transition"
            >Contact</a
          >
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>
