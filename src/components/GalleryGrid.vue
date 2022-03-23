<template>
  <pds-gallery-container class="grid">
    <GalleryItem />
    <GalleryItem />
    <GalleryItem />
    <GalleryItem />
    <GalleryItem />
    <GalleryItem />
    <GalleryItem />
    <GalleryItem />
    <GalleryItem />
    <GalleryItem />
  </pds-gallery-container>
</template>

<script>
import GalleryItem from './GalleryItem.vue'

export default {
  components: {
    GalleryItem
  }
}
</script>

<style lang="scss">
pds-gallery-container {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
</style>