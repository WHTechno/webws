<template>
  <div class="relative py-6 mx-auto max-w-5xl">
    <!-- Container Grid untuk Logo -->
    <div class="grid grid-cols-3 gap-8 justify-items-center">
      <div v-for="(logo, index) in logos" :key="index" class="logo-wrapper">
        <img
          :src="logo"
          :alt="'Company Logo ' + (index + 1)"
          class="company-logo"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logos: [
        require("@/assets/icons/bitget.svg"),
        require("@/assets/icons/kucoin.svg"),
        require("@/assets/icons/huobi.svg"),
        require("@/assets/icons/okx.svg"),
        require("@/assets/icons/github.svg"),
        require("@/assets/icons/contabo.svg"),
      ],
    };
  },
};
</script>

<style scoped>
/* Gaya grid untuk logo */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 logo per baris */
  gap: 20px; /* Jarak antar logo */
  justify-items: center;
}

/* Ukuran logo */
.company-logo {
  height: 50px;
  filter: brightness(0) invert(1);
}
</style>
