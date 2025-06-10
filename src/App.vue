<template>
  <!-- Wrapper dengan Warna Solid (Tanpa Gradient) -->
  <div class="relative bg-[#0a0a1a] min-h-screen w-full">
    <!-- Efek Blur Glow di Bagian Bawah -->
    <div
      class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-40 bg-purple-500 blur-3xl opacity-30 rounded-t-full"
    ></div>

    <!-- Navbar -->
    <NavbarMain />

    <!-- Konten Dinamis (Router View) -->
    <main class="relative z-10">
      <router-view />
    </main>

    <!-- Footer -->
    <FooterMain />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

body {
  font-family: "Inter", sans-serif;
}
</style>

<script>
import NavbarMain from "./components/NavbarMain.vue";
import FooterMain from "./components/FooterMain.vue";

export default {
  components: {
    NavbarMain,
    FooterMain,
  },
};
</script>
