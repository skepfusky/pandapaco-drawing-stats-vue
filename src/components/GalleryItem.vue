<template>
  <figure id="pds-gallery-item">
    <img :src="src" :alt="alt" :aria-label="alt">
    <figcaption>
      <h3>Title</h3>
      <span>Date</span>
      <div id="links">
        <!-- Get the pawprint icon for FurAffinity cuz Font Awesome doesn't have it -->
        <i class="fab fa-deviantart"></i>
      </div>
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    src: {type: String, default:'image stuff in here'},
    alt: {type: String, default:'image stuff in here'}
  }
}
</script>

<style lang="scss">
#pds-gallery-item {
  padding: 1.25ex;
  margin: 0.25ex;
  border-radius: 6px;
  transition: all 275ms ease;

  &:hover {
    box-shadow: 0 1px 12px rgba(black, 20%);
    transform: translateY(-3px);
  }

  > img {width: 100%;}
}
</style>