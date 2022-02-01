<template>
  <pds-sidebar>
    <aside>
      <pds-species-container class="flex flex-column">
        <img id="sidebar-species" :src="speciesImg" :alt="speciesAlt">
        <h2 id="sidebar-heading">{{ title }}</h2>
        <div id="sidebar-row">
          <TotalCounter />
        </div>
        <div id="sidebar-row">
          <h4>{{mostDrawnLabel}}</h4>
          <figure>
            <img :src="mostCharImg" :alt="mostCharAlt">
            <figcaption>{{mostCharImg}}</figcaption>
          </figure>
        </div>
        <div id="sidebar-row">
          <h4>{{leastDrawnLabel}}</h4>
          <figure>
            <img :src="leastCharImg" :alt="leastCharAlt">
            <figcaption>{{leastCharImg}}</figcaption>
          </figure>
        </div>
        <!-- <div v-if="isSpeciesFiction" id="sidebar-fictional"> -->
        <div id="sidebar-fictional">
          <p>
            This type of species appears to be a fictional and cannot
            be identified in real world terms.
          </p>
        </div>
        <!-- <div v-else id="sidebar-hybrid" class="flex flex-wrap"> -->
        <div id="sidebar-hybrid" class="flex flex-wrap">
          <strong>{{ title }}</strong>&nbsp;is a mix of&nbsp;
          <SpeciesChip />
          &nbsp;and&nbsp;
          <SpeciesChip />
          .
        </div>
        <div id="sidebar-hybrid-3" class="flex flex-wrap">
          <strong>{{ title }}</strong>&nbsp;is a mix of&nbsp;<SpeciesChip />,&nbsp;<SpeciesChip />&nbsp;and&nbsp;<SpeciesChip />.
        </div>
      </pds-species-container>
      <pds-year-container class="flex flex-column">
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
            <img :src="mostCharImg" :alt="mostCharAlt">
            <figcaption>{{mostCharImg}}</figcaption>
          </figure>
        </div>
        <div id="sidebar-row">
          <h4>{{leastDrawnLabel}}</h4>
          <figure>
            <img :src="leastCharImg" :alt="leastCharAlt">
            <figcaption>{{leastCharImg}}</figcaption>
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
      </pds-year-container>
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
    speciesImg: { type: String, default: "Title" },
    speciesAlt: { type: String, default: "Title" },

    mostCharImg: { type: String, default: "Oof" },
    mostCharAlt: { type: String, default: "Oof" },
    leastCharImg: { type: String, default: "Oof" },
    leastCharAlt: { type: String, default: "Oof" },

    speciesLabel: { type: String },

    // isSpeciesFiction: { type: Boolean },
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