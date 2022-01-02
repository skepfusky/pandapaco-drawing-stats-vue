<template>
    <a class="species-card-header" href="#">
      <img :src="require(`../img/${sImg}`)"/>
      <!-- <img :src="`@/assets/img/header/${sImg}`" :alt="`${sAlt}`" :aria-label="`Picture of ${$sAlt}`"/> -->
      <p>{{ sTitle }}</p>
    </a>
</template>

<script>
export default {
  props: {
    sImg: {type: String, default: "placeholder.png"},
    // sAlt: {type: String,},
    sTitle: {type: String, default: "Bruh"},
  }
}
</script>

<style lang="scss">
.species-card-header {
	@include p-flexy(center, center, column);
	@include dropdown-element(-5px);
	background: var(--bamboo-light-100);
	color: var(--bamboo-light-400);
	@include soft-corners;
	padding-block: 12px;

	&:hover {
		background: var(--bamboo-light-200);
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