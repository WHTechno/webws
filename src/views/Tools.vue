<template>
  <section
    class="relative flex flex-col md:flex-row justify-between items-center py-16 px-6 max-w-6xl mx-auto"
  >
    <!-- Breadcrumb -->
    <nav class="text-gray-400 text-sm mb-4 absolute top-4 left-6">
      <router-link to="/" class="hover:text-purple-400 transition"
        >Home</router-link
      >
      ›
      <span class="text-gray-200">Tools</span>
    </nav>

    <!-- Efek Cahaya Ungu -->
    <div class="absolute inset-0 flex justify-center items-center">
      <div
        class="w-[700px] h-[500px] bg-purple-500 opacity-30 blur-[150px] rounded-full"
      ></div>
    </div>

    <!-- Bagian Kiri: Teks dan Fitur -->
    <div class="w-full md:w-1/2 space-y-6 z-10 mt-6 md:mt-0">
      <p class="text-sm text-purple-400 font-medium uppercase">Use Our Tools</p>
      <h2 class="text-4xl font-extrabold text-white leading-tight">
        Enhance Your Crypto Experience <br />
        with Powerful Telegram Bots
      </h2>
      <p class="text-gray-400">
        Setting up a testnet has never been easier. We provide comprehensive
        guidance to ensure a seamless and secure experience.
      </p>

      <!-- List Fitur -->
      <ul class="space-y-6 text-lg">
        <li class="flex flex-col">
          <a
            href="https://t.me/winsnip_tracker_bot"
            target="_blank"
            class="text-purple-400 font-semibold hover:underline"
          >
            Wallet Tracker Bot
          </a>
          <span class="text-gray-400 mt-1">
            Monitor your wallet transactions and check token prices
            effortlessly.
          </span>
        </li>
        <li class="flex flex-col">
          <a
            href="https://t.me/winsnip_journal"
            target="_blank"
            class="text-purple-400 font-semibold hover:underline"
          >
            Journal Bot
          </a>
          <span class="text-gray-400 mt-1">
            Stay updated with the latest crypto news, all in one place.
          </span>
        </li>
        <li class="flex flex-col">
          <a
            href="https://t.me/winsnip_fundamental"
            target="_blank"
            class="text-purple-400 font-semibold hover:underline"
          >
            Fundamental Bot
          </a>
          <span class="text-gray-400 mt-1">
            Get in-depth token analysis to identify promising projects.
          </span>
        </li>
      </ul>

      <!-- Testimonial -->
      <div class="mt-6">
        <p class="text-gray-400 italic">
          “We provide the tools you need to navigate the crypto space
          efficiently, ensuring you stay informed and ahead of the game.”
        </p>
      </div>
    </div>

    <!-- Bagian Kanan: Diagram -->
    <div
      class="relative w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0"
    >
      <img
        src="@/assets/img-web/tools.png"
        alt="Tools"
        class="w-full max-w-lg opacity-90"
      />
    </div>
  </section>
</template>

<style scoped>
/* Breadcrumb Styling */
nav {
  font-size: 14px;
  font-weight: 500;
}

a {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
  color: #8b5cf6; /* Warna ungu lebih gelap saat hover */
}
</style>
