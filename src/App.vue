<template>
  <paco-header />
    <router-view />
  <paco-footer />
</template>

<script>
import PacoFooter from "./components/PacoFooter.vue";
import PacoHeader from "./components/PacoHeader.vue";

export default {
  components: {
    PacoHeader,
    PacoFooter,
  },
};
</script>

<style lang="scss">
//
</style>