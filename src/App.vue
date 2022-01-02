<template>
  <paco-navbar />
  <router-view/>
  <paco-footer />
</template>

<script>
import PacoNavbar from "./components/PacoNavbar.vue";
import PacoFooter from "./components/PacoFooter.vue";

export default {
  components: {
    PacoNavbar, PacoFooter
  }
}
</script>

<style lang="scss">
// All SCSS stylesheets are loaded all across Vue components
</style>
