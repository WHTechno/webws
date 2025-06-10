<template>
  <section
    class="relative w-full flex flex-col items-center justify-center text-center py-20 px-6"
  >
    <!-- Efek Cahaya Ungu -->
    <div class="absolute inset-0 flex justify-center items-end">
      <div
        class="w-96 h-96 bg-purple-500 opacity-40 blur-3xl rounded-full"
      ></div>
    </div>

    <!-- Konten -->
    <div class="z-10 max-w-3xl w-full">
      <!-- Label di Atas Judul -->
      <a
        href="#"
        class="inline-flex items-center py-1.5 px-4 mb-6 text-sm text-purple-400 bg-purple-900/30 rounded-full hover:bg-purple-800/40 transition"
      >
        API Studio is now in beta →
      </a>

      <!-- Judul -->
      <h1 class="text-4xl md:text-6xl font-extrabold text-white">
        Winsnip
        <span class="text-purple-400">More Than A Leading</span> Blockchain
        Validator
      </h1>

      <!-- Deskripsi -->
      <p class="mt-4 text-lg text-gray-300">
        Your Trusted Security Partner Low Fees, High Security, and 24/7
        Monitoring
      </p>

      <!-- Tombol CTA -->
      <div class="mt-6 flex justify-center">
        <!-- Tombol "Read the docs" (Lebar Tetap Sama di Semua Perangkat) -->
        <a
          href="/testnet"
          class="w-50 px-6 py-3 bg-purple-900 text-white font-semibold rounded-full flex items-center justify-center gap-2 shadow-lg hover:bg-purple-800 transition-all"
        >
          <span
            class="inline-flex items-center justify-center w-5 h-5 bg-purple-700 rounded-full"
          >
            ⚙
          </span>
          Testnet Portal
        </a>
      </div>
    </div>
  </section>
</template>
