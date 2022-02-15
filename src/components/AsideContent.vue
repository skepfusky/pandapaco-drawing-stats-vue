<template>
  <pds-sidebar>
    <aside>
      <pds-species-container v-if="isSpecies" class="flex flex-column">
        <img id="sidebar-species" :src="require(`@/assets/img/${speciesImg}`)" :alt="speciesAlt">
        <h2 id="sidebar-heading">{{ title }}</h2>
        <!-- <div id="sidebar-fictional"> -->
        <div v-if="isSpeciesFiction" id="sidebar-fictional">
          <p>
            This type of species appears to be a fictional and cannot
            be identified in real world terms.
          </p>
        </div>
        <div v-else-if="isHybrid3" id="sidebar-hybrid-3" class="flex flex-wrap">
          <strong>{{ title }}</strong>&nbsp;is a mix of&nbsp;<SpeciesChip />,&nbsp;<SpeciesChip />&nbsp;and&nbsp;<SpeciesChip />.
        </div>
        <div v-else id="sidebar-hybrid" class="flex flex-wrap">
        <!-- <div id="sidebar-hybrid" class="flex flex-wrap"> -->
          <strong>{{ title }}</strong>&nbsp;is a mix of&nbsp;
          <SpeciesChip />
          &nbsp;and&nbsp;
          <SpeciesChip />
          .
        </div>
        <hr>
        <div id="sidebar-row">
          <TotalCounter :digitalNo="digitalNo" :traditionalNo="traditionalNo" />
        </div>
        <div id="sidebar-char-drawn" class="flex">
          <div id="char-drawn_container" class="flex flex-column">
            <h4>Most character drawn</h4>
            <ImgPieChart :pieImg="mostCharImg" :alt="mostCharAlt" :pieVal="mostCharVal" :caption="mostCharAlt" />
          </div>
          <div id="char-drawn_container" class="flex flex-column">
            <h4>Least character drawn</h4>
            <ImgPieChart :pieImg="leastCharImg" :pieAlt="leastCharAlt" :pieVal="leastCharVal" :caption="leastCharAlt" />
          </div>
        </div>
      </pds-species-container>
      <pds-year-container v-else class="flex flex-column">
        <div id="year-row" class="flex">
          <router-link :to="`/year/${titleYear + 1}`" id="year-navigator" class="flex"><i class="fas fa-caret-left"></i>{{titleYear + 1}}</router-link>
          <h2 id="sidebar-heading">{{ titleYear }}</h2>
          <router-link :to="`/year/${titleYear - 1}`" id="year-navigator" class="flex">{{titleYear - 1}}<i class="fas fa-caret-right"></i></router-link>
        </div>
        <hr>
        <div id="sidebar-row">
          <TotalCounter />
        </div>
        <div id="sidebar-char-drawn" class="flex">
          <div id="char-drawn_container" class="flex flex-column">
            <h4>Most character drawn</h4>
            <ImgPieChart :pieImg="mostCharImg" :alt="mostCharAlt" :pieVal="mostCharVal" :caption="mostCharAlt" />
          </div>
          <div id="char-drawn_container" class="flex flex-column">
            <h4>Least character drawn</h4>
            <ImgPieChart :pieImg="leastCharImg" :pieAlt="leastCharAlt" :pieVal="leastCharVal" :caption="leastCharAlt" />
          </div>
        </div>
        <div id="sidebar-row" class="flex flex-column">
          <h4>Most species drawn</h4>
          <SpeciesChip />
        </div>
        <div id="sidebar-row" class="flex flex-column">
          <h4>Least species drawn</h4>
          <SpeciesChip />
        </div>
      </pds-year-container>
    </aside>
  </pds-sidebar>
</template>

<script>
import SpeciesChip from "./aside_components/SpeciesChip.vue";
import TotalCounter from "./aside_components/TotalCounter.vue";
import ImgPieChart from "./layouts/ImgPieChart.vue";

export default {
  props: {
    isSpecies: { type: Boolean },
    title: { default: "Bruh" },
    titleYear: { default: new Date().getFullYear() },

    digitalNo: {type: Number, default: 50},
    traditionalNo: {type: Number, default: 50},

    speciesImg: { type: String, default: "placeholder.png" },
    speciesAlt: { type: String, default: "Title" },

    mostCharImg: { type: String, default: "placeholder.png" },
    mostCharAlt: { type: String, default: "Skeppers" },
    mostCharVal: { type: Number, default: 90 },
    leastCharImg: { type: String, default: "placeholder.png" },
    leastCharAlt: { type: String, default: "Skeppers" },
    leastCharVal: { type: Number, default: 10 },

    speciesLabel: { type: String },

    isSpeciesFiction: { type: Boolean },
    isHybrid3: { type: Boolean },
  },
  data() {
    return {
      mostDrawnLabel: 'Most character drawn',
      leastDrawnLabel: 'Least character drawn',
      mostSpeciesLabel: 'Most species drawn',
      leastSpeciesLabel: 'Least species drawn',
    }
  },
  components: { SpeciesChip, TotalCounter, ImgPieChart }
}
</script>