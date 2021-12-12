<template>
    <a class="species-card-header" href="#">
      <img :src="require(`@/assets/img/header-assets/${sImg}`)" :alt="`${sAlt}`" :aria-label="`Picture of ${$sAlt}`"/>
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

<style lang="scss" scoped>
.species-card-header {
	@include flex_params(center, center, column);
	@include dd_hover(-5px);
	background: $bamboo-light-100;
	color: $bamboo-light-400;
	@extend %radius_small;
	padding-block: 12px;

	&:hover {
		background: lighten($bamboo-light-100, 10%);
    color: whitesmoke;
	}

	img {
		width: 80px;
		border-radius: 50%;
		box-shadow: 0 0 12px rgba(black, 55%);
	}

	p {
		margin-top: 12px;
		font-size: 95%;
	}
}
</style>