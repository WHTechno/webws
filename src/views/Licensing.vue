<template>
  <section class="py-10 px-6 max-w-4xl mx-auto">
    <!-- Breadcrumb -->
    <nav class="text-gray-400 text-sm mb-4">
      <router-link to="/" class="hover:text-purple-400 transition">Home</router-link> › 
      <span class="text-gray-200">Licensing</span>
    </nav>

    <!-- Header -->
    <h1 class="text-3xl font-bold text-white mb-4">Licensing & Terms of Use</h1>
    <p class="text-gray-300 mb-6">
      Last Updated: <span class="text-purple-400">{{ lastUpdated }}</span>
    </p>

    <!-- Content -->
    <div class="bg-purple-900/30 p-6 rounded-lg border border-purple-800 text-gray-300">
      <p class="mb-4">
        This document outlines the licensing and permitted use of content, tools, and resources related to testnet validators, blockchain nodes, and staking tutorials.
      </p>

      <h2 class="text-xl font-semibold text-white mb-3">1. Open Source Contributions</h2>
      <p class="mb-4">
        Most of our scripts and configurations are provided under the <span class="text-purple-400 font-semibold">MIT License</span>. You are free to use and modify them, but attribution is required if redistributed.
      </p>

      <h2 class="text-xl font-semibold text-white mb-3">2. Node Setup & Validator Guides</h2>
      <p class="mb-4">
        All validator setup guides, staking instructions, and blockchain tutorials are for **educational purposes only**. We do not guarantee uptime, rewards, or network participation eligibility.
      </p>

      <h2 class="text-xl font-semibold text-white mb-3">3. Community & Third-Party Integrations</h2>
      <p class="mb-4">
        Some tools and resources may rely on **third-party APIs and blockchain services**. Ensure you review their terms before use.
      </p>

      <h2 class="text-xl font-semibold text-white mb-3">4. Commercial Use of Scripts</h2>
      <p class="mb-4">
        Our **node automation scripts and staking tools** can be used freely, but commercial redistribution or resale is prohibited without explicit permission.
      </p>

      <h2 class="text-xl font-semibold text-white mb-3">5. No Financial Advice</h2>
      <p class="mb-4">
        This platform does not provide **financial or investment advice**. Participation in validator testnets carries risks, and users should conduct their own research before engaging with any blockchain networks.
      </p>

      <h2 class="text-xl font-semibold text-white mb-3">6. Contact & Support</h2>
      <p class="mb-4">
        If you have questions regarding licensing, please contact us at 
        <a href="mailto:support@winsnip.xyz" class="text-purple-400 hover:text-white">support@winsnip.xyz</a>.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Licensing",
  data() {
    return {
      lastUpdated: "March 10, 2025"
    };
  }
};
</script>

<style scoped>
/* Tambahkan efek hover */
a {
  transition: color 0.3s ease-in-out;
}
</style>
