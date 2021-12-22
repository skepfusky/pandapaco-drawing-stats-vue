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
            <h2>By Decade</h2>
            <div class="dropdown_year">
              <button class="btn-d20">2020</button>
              <button class="btn-d10">2019</button>
              <button class="btn-d00">2009</button>
            </div>
            <h2>By Species</h2>
            <div class="dropdown_species">
              <species-card sTitle="Baekhyun" sAlt="EXO" />
              <species-card sTitle="Xiumin" sAlt="EXO" />
              <species-card sTitle="Sehun" sAlt="EXO" />
              <species-card sTitle="Kyungsoo" sAlt="EXO" />
              <species-card sTitle="Chen" sAlt="EXO" />
              <species-card sTitle="Jin" sAlt="BTS" />
              <species-card sTitle="Jimin" sAlt="BTS" />
              <species-card sTitle="Jungkook" sAlt="BTS" />
              <species-card sTitle="Namjoon" sAlt="BTS" />
              <species-card sTitle="Suga" sAlt="BTS" />
            </div>
          </div>
        </li>
        <li>
          <router-link to="/about">About</router-link>
          <span class="nav-line"></span>
        </li>
      </ul>
    </nav>
    <div>
      <a href="#">Light/dark</a>
    </div>
  </header>
</template>

<script>
import SpeciesCard from "./SpeciesCard.vue";

export default {
  components: {
    SpeciesCard
  }
};
</script>

<style lang="scss">
#main-nav {
  @include p-flexy(space-between, unset, row);
  background: gainsboro;
  padding: 0 1rem;

  nav {
    @include p-flexy(unset, unset, row);
    font-size: 120%;
  }

  #site-logo {
    padding-right: 15px;
  }

  ul {
    @extend %flex_list;
  }

  li {
    @include p-flexy(center, center, column);
    position: relative;
    padding: 1rem;
    font-weight: bold;

    .nav-line {
      height: 3px;
      width: 0%;
      background: $bamboo-main;
      transform: translateY(3px);
      @include prop-transition();
    }

    &:hover {
      .nav-line {
        width: 110%;
        background: lighten($bamboo-main, 20%);
      }

      .dropdown {
        // visibility: hidden;
        visibility: visible;
        transform: translateY(0px);
        filter: opacity(100%);
        opacity: 1;
      }

      @at-root .dropdown {
        @include prop-transition(all, 200ms);
        z-index: 100;
        visibility: hidden;
        // visibility: visible;
        filter: opacity(0%);
        opacity: 0;
        transform: translateY(10px);
        @include pos-a(50px);
        width: 50rem;
        background: linear-gradient(145deg, var(--bamboo-dark-100), var(--bamboo-dark-200));
        box-shadow: 2px 2px 6px rgba(black, 50%);

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

          $decades-array: "d20" var(--bamboo-light-300) var(--bamboo-light-400),
            "d10" var(--bamboo-light-200) var(--bamboo-light-300),
            "d00" var(--bamboo-light-100) var(--bamboo-light-200);

          @each $decade, $bg-color, $fg-color in $decades-array {
            .btn-#{$decade} {
              @include dropdown-element(-2px);
              border-color: $bg-color;
              color: $fg-color;
              padding: 0.5rem 0;
              font-size: 80%;
              border: 2px solid;
              background: $bg-color;
              border-radius: 3px;
              cursor: pointer;

              &:hover {
                filter: brightness(125%);
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
    }
  }
}
</style>