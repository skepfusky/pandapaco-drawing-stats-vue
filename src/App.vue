<script setup>
import StaticHeader from "./components/static/StaticHeader.vue"
import StaticFooter from "./components/static/StaticFooter.vue"
</script>

<template>
  <StaticHeader />
  <router-view />
  <StaticFooter />
</template>

<style lang="scss">
@import 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Montserrat:wght@500;700;800&family=Noto+Sans+KR:wght@100;300;500;700&family=Poppins:ital,wght@0,500;0,700;1,500;1,700&Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Poppins:ital,wght@0,500;0,700;1,500;1,700&display=swap';
</style>