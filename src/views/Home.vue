<template>
  <main class="home" role="main">
    <div id="component-wrapper" class="flex">
      <!-- <AsideContent :isSpecies=true /> -->
      <AsideContent />
      <div></div>
    </div>
  </main>
</template>

<script>
import AsideContent from "../components/AsideContent.vue"

export default {
  name: 'Home',
  components: {
    AsideContent
  }
}
</script>

<style lang="scss">
#component-wrapper {
  --panel-1: 30%;
  --panel-2: 70%;

  &:nth-child(1) {width: var(--panel-1);}
  &:nth-child(2) {width: var(--panel-2);}

  @media only screen and (max-width: 960px) {
    --panel-1: 100%;
    --panel-2: 100%;
    flex-direction: column;
  }

}
</style>