<template>
  <pacoHeader></pacoHeader>
  content is <i class="fas fa-times"></i>
  <pacoFooter></pacoFooter>
</template>

<script>
import pacoHeader from './components/PacoHeader.vue';
import pacoFooter from './components/PacoFooter.vue';

export default {
  name: 'paco-stats',
  components: {
    pacoHeader,
    pacoFooter
  }
}
</script>

<style lang="scss">

</style>
