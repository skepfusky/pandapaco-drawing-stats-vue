<template>
  <pds-sidebar>
    <aside>
      <pds-species-container class="flex flex-column">
        <img id="sidebar-species" :src="require(`@/assets/img/${speciesImg}`)" :alt="speciesAlt">
        <h2 id="sidebar-heading">{{ title }}</h2>
        <div id="sidebar-row">
          <TotalCounter />
        </div>
        <div id="sidebar-char-drawn" class="flex">
          <div id="char-drawn_container" class="flex flex-column">
            <h4>{{mostDrawnLabel}}</h4>
            <figure>
              <div id="round-chart-visualize-wrapper">
                <img :src="require(`@/assets/img/${mostCharImg}`)" :alt="mostCharAlt">
                <div id="round-chart" :style="`--val: ${mostCharVal}`"></div>
              </div>
              <figcaption>{{mostCharAlt}} <span id="char-drawn_percentage">({{mostCharVal}}%)</span></figcaption>
            </figure>
          </div>
          <div id="char-drawn_container" class="flex flex-column">
            <h4>{{leastDrawnLabel}}</h4>
            <figure>
              <div id="round-chart-visualize-wrapper">
                <img :src="require(`@/assets/img/${leastCharImg}`)" :alt="leastCharAlt">
                <div id="round-chart" :style="`--val: ${leastCharVal}`"></div>
              </div>
              <figcaption>{{leastCharAlt}} <span id="char-drawn_percentage">({{leastCharVal}}%)</span></figcaption>
            </figure>
          </div>
        </div>
        <hr>
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
      </pds-species-container>
      <!-- <pds-year-container class="flex flex-column">
        <div id="year-row" class="flex">
          <router-link :to="`/year/${titleYear + 1}`" id="year-navigator" class="flex"><i class="fas fa-caret-left"></i>{{titleYear + 1}}</router-link>
          <h2 id="sidebar-heading">{{ titleYear }}</h2>
          <router-link :to="`/year/${titleYear - 1}`" id="year-navigator" class="flex">{{titleYear - 1}}<i class="fas fa-caret-right"></i></router-link>
        </div>
        <div id="sidebar-row">
          <TotalCounter />
        </div>
        <div id="sidebar-row">
          <h4>{{mostDrawnLabel}}</h4>
          <figure>
            <img :src="require(`@/assets/img/${mostCharImg}`)" :alt="mostCharAlt">
            <figcaption>{{mostCharAlt}}</figcaption>
          </figure>
        </div>
        <div id="sidebar-row">
          <h4>{{leastDrawnLabel}}</h4>
          <figure>
            <img :src="require(`@/assets/img/${leastCharImg}`)" :alt="leastCharAlt">
            <figcaption>{{leastCharAlt}}</figcaption>
          </figure>
        </div>
        <div id="sidebar-row" class="flex flex-column">
          <h4>{{mostSpeciesLabel}}</h4>
          <SpeciesChip />
        </div>
        <div id="sidebar-row" class="flex flex-column">
          <h4>{{leastSpeciesLabel}}</h4>
          <SpeciesChip />
        </div>
      </pds-year-container> -->
    </aside>
  </pds-sidebar>
</template>

<script>
import SpeciesChip from "./aside_components/SpeciesChip.vue";
import TotalCounter from "./aside_components/TotalCounter.vue";

export default {
  props: {
    // isSpecies: { type: Boolean },
    title: { default: "Title" },
    titleYear: { default: new Date().getFullYear() },
    speciesImg: { type: String, default: "placeholder.png" },
    speciesAlt: { type: String, default: "Title" },

    mostCharImg: { type: String, default: "placeholder.png" },
    mostCharAlt: { type: String, default: "Skop" },
    mostCharVal: { type: Number, default: 90 },
    leastCharImg: { type: String, default: "placeholder.png" },
    leastCharAlt: { type: String, default: "Skop" },
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
  components: { SpeciesChip, TotalCounter }
}
</script>