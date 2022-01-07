<template>
  <paco-navbar/>
  <router-view/>
  <paco-footer/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PacoNavbar from "@/components/PacoNavbar.vue";
import PacoFooter from "@/components/PacoFooter.vue";

export default defineComponent({
  components: {
    PacoNavbar, PacoFooter
  }
})
</script>

<style lang="scss">
//
</style>
