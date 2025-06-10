<template>
  <section class="relative py-16 px-6 max-w-6xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Kartu 1 (Network Active) -->
      <div class="relative bg-[#101018] p-6 rounded-xl shadow-md border border-gray-700 transition-all hover:border-purple-500 group">
        <!-- Efek Cahaya -->
        <div class="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-20 blur-3xl rounded-xl transition"></div>

        <div class="flex justify-center mb-4">
          <img src="@/assets/img-web/img2.png" alt="Network Active" class="w-50 opacity-90" />
        </div>
        <p class="text-purple-400 font-medium text-sm">Network Active</p>
        <p class="text-gray-400 mt-2">
          We utilize top blockchain networks like Ethereum, Solana, IBC, and Sui for speed, security, and seamless interoperability.
        </p>
      </div>

      <!-- Kartu 2 (Seamless Integration) -->
      <div class="relative bg-[#101018] p-6 rounded-xl shadow-md border border-gray-700 transition-all hover:border-purple-500 group">
        <!-- Efek Cahaya -->
        <div class="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-20 blur-3xl rounded-xl transition"></div>

        <div class="flex justify-center mb-4">
          <img src="@/assets/img-web/img3.png" alt="Seamless Integration" class="w-50 opacity-90" />
        </div>
        <p class="text-purple-400 font-medium text-sm">Seamless Integration</p>
        <p class="text-gray-400 mt-2">
          Easily connect with multiple blockchain networks and protocols.
        </p>
      </div>

      <!-- Kartu 3 (Community Friendly) -->
      <div class="relative bg-[#101018] p-6 rounded-xl shadow-md border border-gray-700 transition-all hover:border-purple-500 group">
        <!-- Efek Cahaya -->
        <div class="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-20 blur-3xl rounded-xl transition"></div>

        <div class="flex justify-center mb-4">
          <img src="@/assets/img-web/img4.png" alt="Community Friendly" class="w-50 opacity-90" />
        </div>
        <p class="text-purple-400 font-medium text-sm">Community Friendly</p>
        <p class="text-gray-400 mt-2">
          We foster an inclusive, supportive community, empowering users with knowledge, updates, and seamless blockchain interactions.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Efek hover untuk kartu */
.group:hover {
  transition: all 0.3s ease-in-out;
}
</style>
