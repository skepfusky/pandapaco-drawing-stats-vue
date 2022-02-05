<template>
  <pds-stats-latest>
    <div id="wrapper" class="flex">
      <h1>{{ yearHeading }}</h1>
      <div class="grid justify-center">
        <div id="pie-item" class="flex flex-column">
          <h3>{{ mostDrawnLabel }}</h3>
          <ImgPieChart :pieImg="mostCharImg" :pieAlt="mostCharAlt" :pieVal="mostCharVal" :caption="mostCharAlt" />
        </div>
        <div id="pie-item" class="flex flex-column">
          <h3>{{ leastDrawnLabel }}</h3>
          <ImgPieChart :pieImg="leastCharImg" :pieAlt="leastCharAlt" :pieVal="leastCharVal" :caption="leastCharAlt"/>
        </div>
        <div id="pie-item" class="flex flex-column">
          <h3>{{ mostSpeciesLabel }}</h3>
          <ImgPieChart :pieImg="mostCharImg" :pieAlt="mostCharAlt" :pieVal="mostCharVal" :caption="mostCharAlt"/>
        </div>
        <div id="pie-item" class="flex flex-column">
          <h3>{{ leastSpeciesLabel }}</h3>
          <ImgPieChart :pieImg="leastCharImg" :pieAlt="leastCharAlt" :pieVal="leastCharVal" :caption="leastCharAlt"/>
        </div>
      </div>
    </div>
  </pds-stats-latest>
</template>

<script>
import ImgPieChart from "./layouts/ImgPieChart.vue"

export default {
  components: {
    ImgPieChart
  },
  props: {
    yearHeading: Number,

    mostCharImg: { type: String, default: "placeholder.png" },
    mostCharAlt: { type: String, default: "Skeppers" },
    mostCharVal: { type: Number, default: 90 },
    leastCharImg: { type: String, default: "placeholder.png" },
    leastCharAlt: { type: String, default: "Skeppers" },
    leastCharVal: { type: Number, default: 10 },
  },
  data() {
    return {
      mediumLabel: 'Digital/Traditional',
      mostDrawnLabel: 'Most character drawn',
      leastDrawnLabel: 'Least character drawn',
      mostSpeciesLabel: 'Most species drawn',
      leastSpeciesLabel: 'Least species drawn',
    }
  },
}
</script>