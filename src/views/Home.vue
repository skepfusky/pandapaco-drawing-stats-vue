<template>
  <main class="home" role="main">
    <div id="component-wrapper">
      <pds-stats-latest>
        <div id="wrapper" class="flex">
          <h2>{{ new Date().getFullYear() }}</h2>
          <div class="grid justify-center">
            <div id="pie-item">
              <h3>{{mostDrawnLabel}}</h3>
              <ImgPieChart />
            </div>
            <div id="pie-item">
              <h3>{{leastDrawnLabel}}</h3>
              <ImgPieChart />
            </div>
            <div id="pie-item">
              <h3>{{mostSpeciesLabel}}</h3>
              <ImgPieChart />
            </div>
            <div id="pie-item">
              <h3>{{leastSpeciesLabel}}</h3>
              <ImgPieChart />
            </div>
          </div>
        </div>
      </pds-stats-latest>
      <pds-stats-latest>
        <div id="wrapper" class="flex">
          <h2>{{ new Date().getFullYear() - 1}}</h2>
          <div class="grid justify-center">
            <div id="pie-item">
              <h3>{{mostDrawnLabel}}</h3>
              <ImgPieChart />
            </div>
            <div id="pie-item">
              <h3>{{leastDrawnLabel}}</h3>
              <ImgPieChart />
            </div>
            <div id="pie-item">
              <h3>{{mostSpeciesLabel}}</h3>
              <ImgPieChart />
            </div>
            <div id="pie-item">
              <h3>{{leastSpeciesLabel}}</h3>
              <ImgPieChart />
            </div>
          </div>
        </div>
      </pds-stats-latest>
      <pds-stats-latest>
        <div id="wrapper" class="flex">
          <h2>{{ new Date().getFullYear() - 2}}</h2>
          <div class="grid justify-center">
            <div id="pie-item">
              <h3>{{mostDrawnLabel}}</h3>
              <ImgPieChart />
            </div>
            <div id="pie-item">
              <h3>{{leastDrawnLabel}}</h3>
              <ImgPieChart />
            </div>
            <div id="pie-item">
              <h3>{{mostSpeciesLabel}}</h3>
              <ImgPieChart />
            </div>
            <div id="pie-item">
              <h3>{{leastSpeciesLabel}}</h3>
              <ImgPieChart />
            </div>
          </div>
        </div>
      </pds-stats-latest>
      
    </div>

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

<script>
import AsideContent from "../components/AsideContent.vue"
import GalleryGrid from "../components/GalleryGrid.vue"
import ImgPieChart from "../components/layouts/ImgPieChart.vue"
// import MediumPieChart from "../components/layouts/MediumPieChart.vue"

export default {
  name: 'Home',
  data() {
    return {
      mediumLabel: 'Digital/Traditional',
      mostDrawnLabel: 'Most character drawn',
      leastDrawnLabel: 'Least character drawn',
      mostSpeciesLabel: 'Most species drawn',
      leastSpeciesLabel: 'Least species drawn',
    }
  },
  components: {
    AsideContent,
    GalleryGrid,
    ImgPieChart,
    // MediumPieChart
  }
}
</script>

<style lang="scss">
pds-stats-latest {
  #pie-item {
    width: 13.5rem;
    margin: 0 auto;
    row-gap: 0.55rem;
    text-align: center;
    @extend .flex;
    @extend .flex-column;
  }

  #wrapper {
    @media (max-width: 940px) {
      flex-direction: column;
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
}

pds-gallery-container {
  gap: 0.45ex;
}
</style>