<template>
    <a class="species-card-header" href="#">
      <img src="@/assets/img/placeholder.png"/>
      <!-- <img :src="`@/assets/img/header/${sImg}`" :alt="`${sAlt}`" :aria-label="`Picture of ${$sAlt}`"/> -->
      <span>{{ sTitle }}</span>
    </a>
</template>

<script lang="ts">
export default {
  props: {
    sTitle: {
      type: String,
    }
  },
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