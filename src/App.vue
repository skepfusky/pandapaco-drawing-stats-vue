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
              <species-btn sTitle="Baekhyun" sAlt="EXO" />
              <species-btn sTitle="Xiumin" sAlt="EXO" />
              <species-btn sTitle="Sehun" sAlt="EXO" />
              <species-btn sTitle="Kyungsoo" sAlt="EXO" />
              <species-btn sTitle="Chen" sAlt="EXO" />
              <species-btn sTitle="Jin" sAlt="BTS" />
              <species-btn sTitle="Jimin" sAlt="BTS" />
              <species-btn sTitle="Jungkook" sAlt="BTS" />
              <species-btn sTitle="Namjoon" sAlt="BTS" />
              <species-btn sTitle="Suga" sAlt="BTS" />
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
    'species-btn': SpeciesCardHeader
  },
};
</script>

<style lang="scss">
#main-nav {
  @include flex_params(space-between, unset, row);
  background: gainsboro;
  padding: 0 1rem;

  nav {
    @include flex_params(unset, unset, row);
    font-size: 120%;
  }

  #site-logo {
    padding-right: 15px;
  }

  ul {
    @extend %flex_list;
  }

  li {
    @include flex_params(center, center, column);
    position: relative;
    padding: 1rem;
    font-weight: bold;

    .nav-line {
      height: 3px;
      width: 0%;
      background: $bamboo-main;
      transform: translateY(3px);
      @include prop_transition();
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
        @include prop_transition(all, 200ms);
        z-index: 100;
        visibility: hidden;
        // visibility: visible;
        filter: opacity(0%);
        opacity: 0;
        transform: translateY(10px);
        @include pos_absolute(50px);
        width: 50rem;
        background: linear-gradient(
          145deg,
          $bamboo-dark-100,
          $bamboo-dark-200
        );
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

          $decades-array: "d20" $bamboo-light-300
              lighten($bamboo-light-300, 24%),
            "d10" $bamboo-light-200 lighten($bamboo-light-200, 24%),
            "d00" $bamboo-light-100 lighten($bamboo-light-100, 24%);

          @each $decade, $bg-color, $fg-color in $decades-array {
            .btn-#{$decade} {
              @include dd_hover(-2px);
              border-color: $bg-color;
              color: $fg-color;
              padding: 0.5rem 0;
              font-size: 80%;
              border: 2px solid;
              background: $bg-color;
              border-radius: 3px;
              cursor: pointer;

              &:hover {
                background: lighten($bg-color, 10%);
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
