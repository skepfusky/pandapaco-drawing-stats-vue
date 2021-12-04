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
@import 'assets/scss/mixins.scss';

// The usuals
*,*::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*::before, *::after {
  content: '';
  display: block;
}
body {
  overflow-x: hidden;
  font-family: 'Lato', sans-serif;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
