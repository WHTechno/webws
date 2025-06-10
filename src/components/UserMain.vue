<template>
  <section class="py-12 bg-gray-900 text-white">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        
        <!-- Active Users -->
        <div>
          <p class="text-sm text-purple-400 font-semibold uppercase">Active Users</p>
          <h2 class="text-3xl font-bold">
            {{ formatNumber(activeUsers) }}
          </h2>
        </div>

        <!-- Companies Managed -->
        <div>
          <p class="text-sm text-purple-400 font-semibold uppercase">Companies Managed</p>
          <h2 class="text-3xl font-bold">
            {{ formatNumber(companiesManaged) }}
          </h2>
        </div>

        <!-- Projects Created -->
        <div>
          <p class="text-sm text-purple-400 font-semibold uppercase">Projects Created</p>
          <h2 class="text-3xl font-bold">
            {{ formatNumber(projectsCreated) }}
          </h2>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeUsers: 1415,
      companiesManaged: 57,
      projectsCreated: 31
    };
  },
  methods: {
    formatNumber(value) {
      return new Intl.NumberFormat("en-US").format(value);
    }
  }
};
</script>

<style scoped>
/* Sesuaikan warna agar cocok dengan tema ungu gelap */
.bg-gray-900 {
  background-color: rgba(15, 15, 35, 0); /* 100% transparan */
}
.text-purple-400 {
  color: #AC94FA; /* Warna ungu sesuai dengan tema */
}
</style>
