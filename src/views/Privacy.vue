<template>
  <section class="py-10 px-6 max-w-4xl mx-auto">
    <!-- Breadcrumb -->
    <nav class="text-gray-400 text-sm mb-4">
      <router-link to="/" class="hover:text-purple-400 transition">Home</router-link> › 
      <span class="text-gray-200">Privacy Policy</span>
    </nav>

    <!-- Header -->
    <h1 class="text-3xl font-bold text-white mb-4">Privacy Policy</h1>
    <p class="text-gray-300 mb-6">
      Last Updated: <span class="text-purple-400">{{ lastUpdated }}</span>
    </p>

    <!-- Content -->
    <div class="bg-purple-900/30 p-6 rounded-lg border border-purple-800 text-gray-300">
      <p class="mb-4">
        This Privacy Policy explains how we collect, use, and protect information related to our testnet validator setup tutorials, staking guides, and blockchain tools.
      </p>

      <h2 class="text-xl font-semibold text-white mb-3">1. Information We Collect</h2>
      <ul class="list-disc list-inside text-gray-400 mb-4">
        <li>Website analytics (visitor count, page interactions, etc.)</li>
        <li>Public blockchain addresses submitted for validator rewards</li>
        <li>Email addresses (only for newsletter subscriptions or support)</li>
      </ul>

      <h2 class="text-xl font-semibold text-white mb-3">2. Use of Data</h2>
      <p class="mb-4">
        The collected data is used for:
      </p>
      <ul class="list-disc list-inside text-gray-400 mb-4">
        <li>Providing up-to-date validator setup tutorials</li>
        <li>Sending blockchain news and testnet updates</li>
        <li>Monitoring testnet participation statistics</li>
      </ul>

      <h2 class="text-xl font-semibold text-white mb-3">3. Third-Party Services</h2>
      <p class="mb-4">
        We may use **Google Analytics**, **Discord**, and **Telegram bots** for community engagement and analytics.
      </p>

      <h2 class="text-xl font-semibold text-white mb-3">4. Security Measures</h2>
      <p class="mb-4">
        We implement best practices for **data security**, but we do not store **private keys** or **sensitive financial information**. Always ensure your **wallets and validator keys** are securely managed.
      </p>

      <h2 class="text-xl font-semibold text-white mb-3">5. No KYC Policy</h2>
      <p class="mb-4">
        We do **not require KYC (Know Your Customer) verification**. Participation in testnets is voluntary and does not require personal identity submission.
      </p>

      <h2 class="text-xl font-semibold text-white mb-3">6. Contact for Privacy Concerns</h2>
      <p class="mb-4">
        If you have any concerns about your data privacy, contact us at 
        <a href="mailto:privacy@winsnip.xyz" class="text-purple-400 hover:text-white">privacy@winsnip.xyz</a>.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "PrivacyPolicy",
  data() {
    return {
      lastUpdated: "March 10, 2025"
    };
  }
};
</script>

<style scoped>
a {
  transition: color 0.3s ease-in-out;
}
</style>
