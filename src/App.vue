<template>
	<header id="main-nav">
		<nav>
			<router-link to="/home">
				<img id="site-logo" src alt="Site logo" />
			</router-link>
			<ul>
				<li>
					<a href="#">Browse</a>
					<span class="nav-line"></span>
					<div class="dropdown">
						<h2>YOS</h2>
						<div class="dropdown_year">
							<button class="btn-d20">2021</button>
							<button class="btn-d20">2020</button>
							<button class="btn-d10">2019</button>
							<button class="btn-d10">2018</button>
							<button class="btn-d10">2017</button>
							<button class="btn-d10">2016</button>
							<button class="btn-d10">2015</button>
							<button class="btn-d10">2014</button>
							<button class="btn-d10">2013</button>
							<button class="btn-d10">2012</button>
							<button class="btn-d10">2011</button>
							<button class="btn-d10">2010</button>
							<button class="btn-d00">2009</button>
							<button class="btn-d00">2008</button>
							<button class="btn-d00">2007</button>
						</div>
						<h2>SPICES</h2>
						<div class="dropdown_species">
							<species sTitle="Baekhyun" sAlt="EXO" />
							<species sTitle="Xiumin" sAlt="EXO" />
							<species sTitle="Sehun" sAlt="EXO" />
							<species sTitle="Kyungsoo" sAlt="EXO" />
							<species sTitle="Chen" sAlt="EXO" />
							<species sTitle="Jin" sAlt="BTS" />
							<species sTitle="Jimin" sAlt="BTS" />
							<species sTitle="Jungkook" sAlt="BTS" />
							<species sTitle="Namjoon" sAlt="BTS" />
							<species sTitle="Suga" sAlt="BTS" />
						</div>
					</div>
				</li>
				<li>
					<router-link to="/about">About</router-link><span class="nav-line"></span>
				</li>
			</ul>
		</nav>
		<div>
			<a href="#">Light/dark</a>
		</div>
	</header>
	<main>
		<router-view />
	</main>
	<paco-footer />
</template>

<script>
import PacoFooter from "./components/PacoFooter.vue";
import SpeciesCardHeader from "./components/SpeciesCardHeader.vue";

export default {
	components: {
		'paco-footer': PacoFooter,
		'species': SpeciesCardHeader
	},
};
</script>

<style lang="scss">
#main-nav {
	@include flex_params(space-between, unset, row);
	background: gray;
	padding: 0 1rem;

	nav {
		@include flex_params(unset, unset, row);
		font-size: 120%;
	}

	#site-logo {
		padding-right: 15px;
	}

	ul {
		list-style: none;
		display: flex;
	}

	li {
		@include flex_params(center, center, column);
		position: relative;
		padding: 1rem;
		font-weight: bold;

		.nav-line {
			height: 3px;
			width: 0%;
			background: $main-b-green;
			transform: translateY(3px);
			@include prop_transition();
		}

		&:hover {
			.nav-line {
				width: 110%;
			}
		}

		&:focus-within {
			.nav-line {
				width: 110%;
				background: lighten($main-b-green, 20%);
			}

			.dropdown {
				// visibility: hidden;
				visibility: visible;
				transform: translateY(0px);
				filter: opacity(100%);
				opacity: 1;
			}
		}
	}
}

@mixin dd_hover($hoverpos) {
	transform: translateY(0px);
	@include prop_transition();

	&:hover {
		transform: translateY($hoverpos);
	}
}

.dropdown {
	@include prop_transition(all, 200ms);
	visibility: hidden;
	// visibility: visible;
	filter: opacity(0%);
	opacity: 0;
	transform: translateY(10px);
	@include pos_absolute(50px);
	width: 50rem;
	background: linear-gradient(145deg, $b-green-w3, $b-green-w2);
	@extend %radius_small;
	padding: 0.45rem 1rem;

	h2 {
		font-size: 115%;
		color: whitesmoke;

		&:first-child {
			padding-top: 0.5rem;
		}
	}

	&_year {
		grid-template-columns: repeat(10, 1fr);

		$decades_array: "d20" $b-green-w3 lighten($b-green-w3, 24%),
			"d10" $b-green-w2 lighten($b-green-w2, 24%),
			"d00" $b-green-w1 lighten($b-green-w1, 24%);

		@each $decade, $bgcolor, $fgcolor in $decades_array {
			.btn-#{$decade} {
				@include dd_hover(-2px);
				border-color: $bgcolor;
				color: $fgcolor;
				padding: 0.5rem 0;
				font-size: 80%;
				border: 2px solid;
				background: $bgcolor;
				border-radius: 3px;
				cursor: pointer;

				&:hover {
					background: lighten($bgcolor, 10%);
				}
			}
		}
	}

	&_species {
		grid-template-columns: repeat(5, 1fr);
	}

	&_year,
	&_species {
		display: grid;
		gap: 0.45rem;
		padding-block: 0.5rem;
	}
}

.species-card-header {
	@include flex_params(center, center, column);
	@include dd_hover(-5px);
	background: $b-green-w1;
	color: $b-green-w4;
	@extend %radius_small;
	padding-block: 12px;

	&:hover {
		background: lighten($b-green-w1, 10%);
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
