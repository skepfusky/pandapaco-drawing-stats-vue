<template>
  <StaticHeader />
  <router-view/>
  <StaticFooter />
</template>

<script>
import StaticHeader from "./components/static/StaticHeader.vue"
import StaticFooter from "./components/static/StaticFooter.vue"

export default {
  components: {
    StaticHeader,
    StaticFooter
  }
}
</script>

<style lang="scss">
//
</style>