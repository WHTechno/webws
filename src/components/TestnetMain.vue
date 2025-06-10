<template>
  <section
    class="relative flex flex-col md:flex-row justify-between items-center py-16 px-6 max-w-6xl mx-auto"
  >
    <!-- Efek Cahaya Ungu -->
    <div class="absolute inset-0 flex justify-center items-center">
      <div
        class="w-[700px] h-[500px] bg-purple-500 opacity-30 blur-[150px] rounded-full"
      ></div>
    </div>

    <!-- Bagian Kiri: Teks dan Fitur -->
    <div class="w-full md:w-1/2 space-y-6 z-10">
      <h2 class="text-4xl font-extrabold text-white leading-tight">
        Enhance Efficiency & <br />
        Expand Your Network
      </h2>
      <p class="text-gray-400">
        Deploying a testnet has never been easier. Our step-by-step guidance
        ensures a seamless and secure experience, helping validators, node
        operators, and developers optimize their blockchain infrastructure for
        maximum efficiency.
      </p>

      <!-- List Fitur -->
      <ul class="space-y-4 text-lg">
        <li
          class="group relative flex items-center text-gray-500 transition-all"
        >
          <span
            class="absolute -left-6 text-purple-400 text-xl group-hover:text-white transition"
            >✔</span
          >
          <strong class="group-hover:text-white transition"
            >Step-by-Step Setup -</strong
          >
          <span class="text-gray-400 group-hover:text-white transition">
            Get clear instructions to deploy your testnet efficiently.
          </span>
        </li>
        <li
          class="group relative flex items-center text-gray-500 transition-all"
        >
          <span
            class="absolute -left-6 text-purple-400 text-xl group-hover:text-white transition"
            >✔</span
          >
          <strong class="group-hover:text-white transition"
            >Reliable Feedback -</strong
          >
          <span class="text-gray-400 group-hover:text-white transition">
            Optimize your blockchain performance with best-in-class practices.
          </span>
        </li>
        <li
          class="group relative flex items-center text-gray-500 transition-all"
        >
          <span
            class="absolute -left-6 text-purple-400 text-xl group-hover:text-white transition"
            >✔</span
          >
          <strong class="group-hover:text-white transition"
            >Scalability-Ready -</strong
          >
          <span class="text-gray-400 group-hover:text-white transition">
            Designed for projects of all sizes, from startups to large
            enterprises.
          </span>
        </li>
      </ul>

      <!-- Testimonial -->
      <div class="mt-6">
        <p class="text-gray-400 italic">
          “We are committed to guiding you through the testnet setup, ensuring a
          smooth and successful blockchain experience.”
        </p>
      </div>
    </div>

    <!-- Bagian Kanan: Diagram -->
    <div
      class="relative w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0"
    >
      <img
        src="@/assets/img-web/img1.png"
        alt="Diagram"
        class="w-full max-w-lg opacity-90"
      />
    </div>
  </section>
</template>

<style scoped>
/* Efek Hover untuk List */
ul li {
  position: relative;
  padding-left: 1.5rem; /* Agar teks tidak bertabrakan dengan centang */
}
</style>
