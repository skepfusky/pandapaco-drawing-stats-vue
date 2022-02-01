<template>
  <main class="home" role="main">
    <div id="component-wrapper" class="flex">
      <!-- <AsideContent :isSpecies=true /> -->
      <div id="component-item">
        <AsideContent />
      </div>
      <div id="component-item">
        <GalleryGrid />
      </div>
    </div>
  </main>
</template>

<script>
import AsideContent from "../components/AsideContent.vue"
import GalleryGrid from "../components/GalleryGrid.vue"

export default {
  name: 'Home',
  components: {
    AsideContent,
    GalleryGrid
  }
}
</script>

<style lang="scss">
#component-wrapper {
  --panel-1: 25%;
  --panel-2: 85%;
  @media only screen and (max-width: 960px) {
    --panel-1: 100%;
    --panel-2: 100%;
    flex-direction: column;
  }
}
#component-item {
  padding: 1.65ex;

  &:nth-child(1) {
    width: var(--panel-1);
    border-right: 2px dashed rgba(black, 35%);
    border-bottom: 2px dashed rgba(black, 35%);

    @media only screen and (max-width: 960px) {
      border-right: none;
    }
  }

  &:nth-child(2) {
    width: var(--panel-2);
  }
}

</style>