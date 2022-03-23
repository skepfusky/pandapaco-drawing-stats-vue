<template>
  <figure class="pds-gallery-item pds-traditional">
    <img :src="require(`@/assets/img/${src}`)" :alt="alt" :aria-label="alt">
    <figcaption>
      <div id="pds-gi__meta">
        <h3>{{ title }}</h3>
        <span>{{ date }}</span>
      </div>
      <div id="pds-gi__chars">
        
      </div>
      <div id="pds-gi__links">
        <!-- Get the pawprint icon for FurAffinity cuz Font Awesome doesn't have it -->
        <i class="fab fa-deviantart"></i>
      </div>
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    src: {type: String, default:'placeholder.png'},
    alt: {type: String, default:'image stuff in here'},
    title: {type: String, default: 'Masterpiece'},
    date: {type: String, default: 'Date'},
  }
}
</script>

<style lang="scss">
.pds-gallery-item {
  padding: 1.25rem;
  border-radius: 6px;
  transition: all 275ms ease;
  cursor: default;

  &:hover {
    box-shadow: 0 1px 12px rgba(black, 20%);
    transform: translateY(-3px);
  }

  img {
    width: 100%;
    border-radius: 6px;
    border-bottom: 0.35rem solid;
  }

  &.pds-traditional img {
    border-bottom-color: red;
  }

  &.pds-digital img {
    border-bottom-color: green;
  }
  
}
</style>