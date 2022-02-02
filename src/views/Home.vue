<template>
  <main class="home" role="main">
    <div id="component-wrapper" class="flex">
      <!-- <AsideContent :isSpecies=true /> -->
      <div id="component-item">
        <div id="component-item_seperator" class="component-sticky">
          <AsideContent :isSpecies=true />
        </div>
      </div>
      <div id="component-item">
        <div id="component-item_seperator">
          <GalleryGrid />
        </div>
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

<style>
pds-gallery-container {
  gap: 0.45ex;
}
</style>