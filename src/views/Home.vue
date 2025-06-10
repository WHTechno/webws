<template>
  <HeaderMain />
  <NetworkMain />
  <PatnerMain />
  <TestnetMain />
  <CardMain />
  <UserMain />
</template>

<script>
import HeaderMain from "../components/HeaderMain.vue";
import NetworkMain from "../components/NetworkMain.vue";
import TestnetMain from "../components/TestnetMain.vue";
import CardMain from "../components/CardMain.vue";
import UserMain from "../components/UserMain.vue";
import PatnerMain from "../components/PatnerMain.vue";

export default {
  components: {
    HeaderMain,
    NetworkMain,
    PatnerMain,
    TestnetMain,
    CardMain,
    UserMain,
  }
};
</script>
