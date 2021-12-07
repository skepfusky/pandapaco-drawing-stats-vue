<template>
    <a class="species-card-header" href="#">
      <img :src="require(`@/assets/img/header-assets/${sImg}`)" :alt="`${sAlt}`"/>
      <p>{{ sTitle }}</p>
    </a>
</template>

<script>
export default {
  name: 'species_card_header',
  props: {
    sImg: {type: String, default: "placeholder4.png"},
    sAlt: {type: String, default: "salt"},
    sTitle: {type: String, default: "Bruh"},
  }
}
</script>