<template>
  <section class="py-10 px-6 max-w-5xl mx-auto">
    <!-- Breadcrumb -->
    <nav class="text-gray-400 text-sm mb-4">
      <a href="/" class="hover:underline">Home</a> ›
      <a href="/testnet" class="hover:underline">Testnet</a> ›
      <span class="text-white font-semibold">{{ project }}</span>
    </nav>

    <!-- Card Utama -->
    <div class="bg-purple-900/30 rounded-lg p-6 text-white">
      <!-- Logo & Nama -->
      <div class="flex flex-col items-center">
        <img :src="logoUrl" :alt="project + ' Logo'" class="w-16 h-16 mb-2" />
        <h1 class="text-3xl font-bold">{{ project.toUpperCase() }}</h1>

        <!-- Social Media Icons -->
        <div class="flex items-center justify-center space-x-4 mt-4">
          <a
            :href="socialLinks.website"
            target="_blank"
            class="text-purple-400 hover:text-purple-500 dark:text-purple-300 dark:hover:text-purple-200 transition"
          >
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
              />
            </svg>
          </a>
          <a
            :href="socialLinks.github"
            target="_blank"
            class="text-purple-400 hover:text-purple-500 dark:text-purple-300 dark:hover:text-purple-200 transition"
          >
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"
              />
            </svg>
          </a>
          <a
            :href="socialLinks.twitter"
            target="_blank"
            class="text-purple-400 hover:text-purple-500 dark:text-purple-300 dark:hover:text-purple-200 transition"
          >
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
              />
            </svg>
          </a>
          <a
            :href="socialLinks.telegram"
            target="_blank"
            class="text-purple-400 hover:text-purple-500 dark:text-purple-300 dark:hover:text-purple-200 transition"
          >
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M9.78 18.65L10.06 14.42L17.74 7.5C18.08 7.19 17.67 7.04 17.22 7.31L7.74 13.3L3.64 12C2.76 11.75 2.75 11.14 3.84 10.7L19.81 4.54C20.54 4.21 21.24 4.72 20.96 5.84L18.24 18.65C18.05 19.56 17.5 19.78 16.74 19.36L12.6 16.3L10.61 18.23C10.38 18.46 10.19 18.65 9.78 18.65Z"
              />
            </svg>
          </a>
          <a
            :href="socialLinks.discord"
            target="_blank"
            class="text-purple-400 hover:text-purple-500 dark:text-purple-300 dark:hover:text-purple-200 transition"
          >
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 00-.079.036c-.21.385-.39.779-.53 1.162-1.796-.27-3.593-.27-5.325 0-.14-.38-.32-.777-.53-1.162a.077.077 0 00-.079-.036c-1.714.29-3.354.8-4.885 1.491a.07.07 0 00-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 00.03.057 20.03 20.03 0 006.031 3.056.077.077 0 00.084-.028c.462-.63.874-1.295 1.226-1.995a.076.076 0 00-.041-.106 13.209 13.209 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.372.292a.077.077 0 01-.006.127 12.412 12.412 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.963 19.963 0 006.032-3.055.077.077 0 00.032-.057c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.029zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
              />
            </svg>
          </a>
          <a
            :href="socialLinks.docs"
            target="_blank"
            class="text-purple-400 hover:text-purple-500 dark:text-purple-300 dark:hover:text-purple-200 transition"
          >
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z"
              />
            </svg>
          </a>
        </div>

        <!-- Status -->
        <span
          class="mt-3 inline-block px-3 py-1 bg-green-500/30 text-green-300 rounded-full text-sm"
        >
          {{ status }}
        </span>
      </div>

      <!-- Deskripsi -->
      <p
        class="mt-6 leading-relaxed text-gray-300"
        v-html="description.part1"
      ></p>
    </div>

    <!-- Fundraising dan System Requirements -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <!-- Fundraising -->
      <div class="bg-purple-900/30 rounded-lg p-6 text-white">
        <h3 class="text-lg font-bold mb-4">
          Fundraising {{ fundraising.amount }}
        </h3>
        <div class="flex flex-wrap items-center gap-2">
          <a
            v-for="token in fundraising.tokens"
            :key="token.name"
            :href="token.link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              :src="token.logo"
              :alt="token.name"
              class="w-8 h-8 rounded-full hover:opacity-80 transition"
            />
          </a>
        </div>
      </div>

      <!-- System Requirements -->
      <div class="bg-purple-900/30 rounded-lg p-6 text-white">
        <h3 class="text-lg font-bold mb-4">System Requirements</h3>
        <ul class="text-gray-300 space-y-2">
          <li
            v-for="(value, key) in systemRequirements"
            :key="key"
            class="flex justify-between items-center"
          >
            <span>{{ key }}:</span>
            <span class="font-medium">{{ value }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Rewards -->
    <div class="mt-8 bg-purple-900/30 rounded-lg p-6 text-white">
      <h3 class="text-lg font-bold mb-2">Rewards</h3>
      <p class="text-gray-300" v-html="rewards"></p>
    </div>

    <!-- Commands Section -->
    <div class="mt-8">
      <div v-for="(cmd, id) in commands" :key="id" class="mb-6">
        <h2 class="text-xl font-bold mb-4 text-white">{{ cmd.title }}</h2>

        <!-- Kotak Command -->
        <div
          v-if="cmd.hasCommand"
          class="relative mb-4 flex justify-between items-center w-full px-4 py-3 rounded-lg border border-purple-700 text-white bg-purple-900/30 shadow-md"
        >
          <span class="truncate">{{ cmd.command }}</span>

          <!-- Tombol Copy (Seperti gambar, tanpa button background) -->
          <div
            @click="copyToClipboard(cmd.command)"
            class="flex items-center gap-2 text-purple-300 cursor-pointer hover:text-white transition"
          >
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path
                d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"
              />
            </svg>
            <span>Copy</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      project: "Intento",
      logoUrl: "https://explorer.intento.zone/logos/intento.png",
      status: "Active",

      socialLinks: {
        website: "https://intento.zone/",
        github: "https://github.com/trstlabs/networks",
        twitter: "https://x.com/bangpateng_",
        telegram: "#",
        discord: "https://discord.gg/WUsJNVBG",
        docs: "https://intento.zone/post/intento-announcement-testnet-kick-off-and-atom-aligned-intent-based-flows-orchestration/",
      },

      description: {
        part1:
          "Intento: The Future of Blockchain Workflows. The blockchain for secure, self-custodial and scalable orchestration of intent-driven actions.",
      },

      fundraising: {
        amount: "$2.00M",
        tokens: [
          {
            name: "Bitcoin",
            logo: "https://img.cryptorank.io/funds/60x60.find_satoshi_lab1679664061415.png",
            link: "https://www.coingecko.com/en/coins/bitcoin",
          },
          {
            name: "Ethereum",
            logo: "https://img.cryptorank.io/funds/60x60.santiago_r_santos1678783357863.png",
            link: "https://www.coingecko.com/en/coins/ethereum",
          },
          {
            name: "Solana",
            logo: "https://img.cryptorank.io/funds/60x60.modular_capital1675764017903.png",
            link: "https://www.coingecko.com/en/coins/solana",
          },
        ],
      },

      systemRequirements: {
        CPU: "2 cores",
        RAM: "8 GB RAM",
        OS: "Ubuntu 20.04+",
        Storage: "200 GB SSD",
      },

      rewards:
        "Testnet Points Program rewards contributors who run infrastructure, build integrations, engage with the community, and enhance security.",

      commands: [
        {
          title: "Install Dependencies",
          command: "sudo apt update && sudo apt install -y curl git jq",
          hasCommand: true,
        },
        {
          title: "Download Intento Node",
          command:
            "git clone https://github.com/trstlabs/networks.git && cd networks",
          hasCommand: true,
        },
      ],
    };
  },
  methods: {
    copyToClipboard(command) {
      navigator.clipboard.writeText(command);
      alert("Copied to clipboard!");
    },
  },
};
</script>
