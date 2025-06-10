<template>
  <section class="py-16 px-6 max-w-6xl mx-auto">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="flex items-start space-x-4"
      >
        <!-- Icon -->
        <div class="text-purple-400 text-2xl">
          <font-awesome-icon :icon="feature.icon" />
        </div>
        <!-- Text -->
        <div>
          <h3 class="text-white font-bold text-lg">{{ feature.title }}</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FeaturesGrid",
  data() {
    return {
      features: [
        {
          title: "Validator Progress",
          description:
            "Monitor your validator’s real-time status to ensure optimal performance and network uptime.",
          icon: "fa-solid fa-clipboard-list",
        },
        {
          title: "Blockchain Network Overview",
          description:
            "Get a full view of the testnet & mainnet, including block height, active validators, and transaction stats.",
          icon: "fa-solid fa-network-wired",
        },
        {
          title: "Decentralized Data Search",
          description:
            "Quickly find on-chain data, including recent blocks, active validators, and transaction history.",
          icon: "fa-solid fa-search",
        },
        {
          title: "Governance & Staking Initiatives",
          description:
            "Manage staking, governance votes, and validator rewards to maximize participation and network security.",
          icon: "fa-solid fa-coins",
        },
        {
          title: "Node Synchronization Monitoring",
          description:
            "Ensure your node is fully synced with the latest blocks and avoid penalties due to delayed updates.",
          icon: "fa-solid fa-sync",
        },
        {
          title: "Blockchain Timeline & Historical Logs",
          description:
            "Analyze past transactions, validator activities, and network trends with detailed historical logs.",
          icon: "fa-solid fa-calendar-alt",
        },
      ],
    };
  },
};
</script>
