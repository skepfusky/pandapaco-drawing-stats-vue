<script setup>
import { defineAsyncComponent } from "vue"
import AsideContent from "../components/AsideContent.vue"
import ImgPieChart from "../components/layouts/ImgPieChart.vue"

const GalleryGrid = defineAsyncComponent(() => import("../components/GalleryGrid.vue"))
const BackdropWaterfall = defineAsyncComponent(() => import("../components/BackdropWaterfall.vue")) 
const StatsRow = defineAsyncComponent(() => import("../components/StatsRow.vue"))
</script>

<template>
  <main class="home" role="main">
    <div id="top">
      <BackdropWaterfall />
    </div>
    <div id="component-wrapper">
      <div id="stats-wrapper" class="flex flex-column">
        <StatsRow :yearHeading="new Date().getFullYear()" />
        <StatsRow :yearHeading="new Date().getFullYear() - 1" />
        <StatsRow :yearHeading="new Date().getFullYear() - 2" />
        
        <pds-stats-latest>
          <div id="wrapper" class="flex">
            <h1>{{ new Date().getFullYear() - 1}}</h1>
            <div class="grid justify-center">
              <div id="pie-item" class="flex flex-column">
                <h3>{{ mostDrawnLabel }}</h3>
                <ImgPieChart />
              </div>
              <div id="pie-item" class="flex flex-column">
                <h3>{{ leastDrawnLabel }}</h3>
                <ImgPieChart />
              </div>
              <div id="pie-item" class="flex flex-column">
                <h3>{{ mostSpeciesLabel }}</h3>
                <ImgPieChart />
              </div>
              <div id="pie-item" class="flex flex-column">
                <h3>{{ leastSpeciesLabel }}</h3>
                <ImgPieChart />
              </div>
            </div>
          </div>
        </pds-stats-latest>
        <pds-stats-latest>
          <div id="wrapper" class="flex">
            <h1>{{ new Date().getFullYear() - 2}}</h1>
            <div class="grid justify-center">
              <div id="pie-item" class="flex flex-column">
                <h3>{{ mostDrawnLabel }}</h3>
                <ImgPieChart />
              </div>
              <div id="pie-item" class="flex flex-column">
                <h3>{{ leastDrawnLabel }}</h3>
                <ImgPieChart />
              </div>
              <div id="pie-item" class="flex flex-column">
                <h3>{{ mostSpeciesLabel }}</h3>
                <ImgPieChart />
              </div>
              <div id="pie-item" class="flex flex-column">
                <h3>{{ leastSpeciesLabel }}</h3>
                <ImgPieChart />
              </div>
            </div>
          </div>
        </pds-stats-latest>
      </div>
    </div>
    <!-- Seperated for each vue-router for species and year -->
    <div id="component-wrapper" class="flex">
      <div id="component-item">
        <div id="component-item_seperator" class="component-sticky">
          <AsideContent :isSpecies=true :digitalNo=85.1 :traditionalNo=14.9 />
        </div>
      </div>
      <div id="component-item">
        <div id="component-item_seperator">
          <GalleryGrid />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
#stats-wrapper {
  max-width: 1280px;
  margin: 0 auto;
  overflow-x: hidden !important;
  row-gap: 0.75rem;
  
  // &::before {
  //   content: '';
  //   background: green;
  //   position: absolute;
  //   inset: 0 auto auto 10.5%;

  //   @media (max-width: 1280px) {
  //   inset: 0 auto auto 13.5%;
  //   }

  //   height: 610px;
  //   width: 6px;
  // }

  &::after {
    content: '';
    position: absolute;
    inset: auto auto 0 auto;
    width: 100%;
    height: 21rem;
    z-index: 10;
    background: linear-gradient(to top, rgba(white, 100%) 16%, rgba(white, 0%) 100%);
  }
}

pds-stats-latest {
  position: relative;
  z-index: 2;

  > #wrapper {
    align-items: center;

    @media (max-width: 940px) {
      flex-direction: column;
    }

    h1 {
      padding: 0.5ex 2rem;
      box-shadow: 0 0 16px rgba(#000, 27%);
      background: white;
      border-radius: 7px;
      margin-left: 6.4%;

      @media (max-width: 940px) {
        padding: 0.75rem;
        box-shadow: none;
      }

      @media (max-width: 576px) {
        margin-left: 0;
      }
    }
  }

  #wrapper > .grid.justify-center {
    gap: 6ex;
    width: fit-content;
    margin: 0 auto;
    grid-template-columns: repeat(4, 1fr);
    transition: all 550ms cubic-bezier(.17,.82,0,.99);

    @media (min-width: 1440px) {
      column-gap: 4em;
    }

    column-gap: 1.5em;

    @media (max-width: 1240px) {
      row-gap: 0.5rem;
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }
  }

  #pie-item {
    width: 13.5rem;
    margin: 0 auto;
    row-gap: 0.55rem;
    text-align: center;
  }
}

pds-gallery-container {
  gap: 0.45ex;
}
</style>