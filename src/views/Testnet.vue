<template>
  <section class="py-8 px-4 mx-auto max-w-screen-xl text-center">
    <!-- Judul -->
    <h1 class="text-4xl font-extrabold text-white">
      Winsnip <span class="text-purple-400">Testnets</span> Aggregator
    </h1>
    <p class="text-gray-300 mt-2">
      Entry point for node running, and early-stage project discovering.
    </p>

    <!-- Search Input -->
    <div class="relative mt-6 max-w-lg mx-auto">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search Project"
        class="w-full p-3 pl-10 bg-purple-900/30 border border-purple-800 rounded-full focus:outline-none focus:ring-1 focus:ring-purple-600 text-white placeholder-gray-400"
      />
      <svg
        class="absolute left-3 top-3 w-5 h-5 text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="4 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-5-5m-4 0a7 7 0 1 1 14 0 7 7 0 0 1-14 0z"
        />
      </svg>
    </div>

    <!-- Tabs: Active, Upcoming, Ended -->
    <div class="mt-6 flex justify-center space-x-4">
      <button 
        v-for="status in ['active', 'upcoming', 'ended']" 
        :key="status"
        @click="currentStatus = status"
        class="px-6 py-2 text-sm font-medium rounded-full transition-all"
        :class="{
          'bg-purple-700 text-white': currentStatus === status,
          'bg-purple-900/30 text-purple-400 hover:bg-purple-800/50': currentStatus !== status
        }"
      >
        {{ status.charAt(0).toUpperCase() + status.slice(1) }}
      </button>
    </div>

    <!-- Grid Testnet Cards -->
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
      <div
        v-for="(project, index) in filteredProjects"
        :key="index"
        class="relative p-4 bg-purple-900/30 border border-purple-800 rounded-2xl transition-all text-white overflow-hidden hover:bg-purple-800/50"
        @mouseover="hoverIndex = index"
        @mouseleave="hoverIndex = null"
      >
        <!-- Logo -->
        <div class="flex flex-col items-center justify-center relative h-28">
          <img
            :src="project.logo"
            class="w-16 h-16 rounded-md transition-all object-contain"
            alt="Project Logo"
          />
        </div>

        <!-- Nama Project -->
        <h5 class="text-lg font-bold text-white mt-2">
          {{ project.name }}
        </h5>
        <p class="text-purple-400 text-sm">
          {{ project.category }}
        </p>

        <!-- Tombol hanya muncul saat hover -->
        <div
          v-if="hoverIndex === index"
          class="flex justify-center mt-2 space-x-2 transition-all duration-300"
        >
          <a
            :href="`/testnet/${project.name.toLowerCase()}`"
            class="px-4 py-1 bg-purple-700 text-white rounded-full text-sm font-medium hover:bg-purple-600 transition"
          >
            Detail
          </a>
        </div>
      </div>
    </div>

    <!-- Tombol Show More -->
    <button
      v-if="displayedCount < totalFilteredCount"
      @click="loadMore"
      class="mt-6 px-6 py-2 bg-purple-900/30 text-white rounded-full text-sm font-medium hover:bg-purple-800/50 transition"
    >
      Show more
    </button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      currentStatus: "active",
      hoverIndex: null,
      projects: [
        { name: "Intento", category: "Tech/Community", status: "active", logo: "https://explorer.intento.zone/logos/intento.png" },
        { name: "Dill", category: "Tech", status: "active", logo: "https://raw.githubusercontent.com/bangpateng/image/main/dill.jpg" },
        { name: "Hemi", category: "Tech", status: "active", logo: "https://ping.pub/logos/8ball.png" },
        { name: "Sunrise", category: "Tech/Community", status: "active", logo: "https://ping.pub/logos/andromeda.png" },
        { name: "Sahara AI", category: "Tech/Community", status: "upcoming", logo: "https://ping.pub/logos/bitsong.svg" },
        { name: "Nexus", category: "Tech/Community", status: "active", logo: "https://ping.pub/logos/canto.png" },
        { name: "IOTA", category: "Tech/Community", status: "upcoming", logo: "https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.png" },
        { name: "Pell", category: "Tech/Community", status: "ended", logo: "https://ping.pub/logos/celestia.png" }
      ],
      displayedCount: 8
    };
  },
  computed: {
    filteredProjects() {
      return this.projects
        .filter(project => 
          project.name.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
          project.status === this.currentStatus
        )
        .slice(0, this.displayedCount);
    },
    totalFilteredCount() {
      return this.projects.filter(project => 
        project.name.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
        project.status === this.currentStatus
      ).length;
    }
  },
  methods: {
    loadMore() {
      this.displayedCount += 4;
    }
  }
};
</script>
