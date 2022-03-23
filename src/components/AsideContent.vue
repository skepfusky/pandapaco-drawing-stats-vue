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
            <h4>{{ mostDrawnLabel }}</h4>
            <ImgPieChart :pieImg="mostCharImg" :alt="mostCharAlt" :pieVal="mostCharVal" :caption="mostCharAlt" />
          </div>
          <div id="char-drawn_container" class="flex flex-column">
            <h4>{{ leastDrawnLabel }}</h4>
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
            <h4>{{ mostDrawnLabel }}</h4>
            <ImgPieChart :pieImg="mostCharImg" :alt="mostCharAlt" :pieVal="mostCharVal" :caption="mostCharAlt" />
          </div>
          <div id="char-drawn_container" class="flex flex-column">
            <h4>{{ leastDrawnLabel }}</h4>
            <ImgPieChart :pieImg="leastCharImg" :pieAlt="leastCharAlt" :pieVal="leastCharVal" :caption="leastCharAlt" />
          </div>
        </div>
        <div id="sidebar-row" class="flex flex-column">
          <h4>{{ mostSpeciesLabel }}</h4>
          <SpeciesChip />
        </div>
        <div id="sidebar-row" class="flex flex-column">
          <h4>{{ leastSpeciesLabel }}</h4>
          <SpeciesChip />
        </div>
      </pds-year-container>
    </aside>
  </pds-sidebar>
</template>

<script>
import SpeciesChip from "./aside_components/SpeciesChipAside.vue";
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

<style lang="scss">

aside img {
  border-radius: 50%;
}

pds-species-container,
pds-year-container {
  row-gap: 0.55rem;
  padding: 0.85rem;
}

pds-species-container img {
  width: max(50%, 140px);
}

#sidebar-row,
#sidebar-char-drawn {
  position: relative;
}

#sidebar-char-drawn {
  flex-direction: column;

  @media only screen and (min-width: 1400px) {
    flex-direction: row;
  }
  @media only screen and (max-width: 960px) {
    flex-direction: row;
  }
}

#char-drawn_container {
  text-align: center;
  row-gap: 0.55ex;

  h4 {
    font-size: 102.5%;
    margin-bottom: 0.35rem;
  }
}

#year {
  &-row {
    margin: 0 auto;
    column-gap: 1.2rem;
    align-items: center;
  }
  
  &-navigator {
    column-gap: 0.3rem;
    
    > .svg-inline--fa {
      position: relative;
      top: 2px;
    }
  }
}

#chip-color {
  border: 1px solid #aaa;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

pds-species-chip {
  width: max-content;

  > a {
    column-gap: 0.25rem;
  } 
}

#pds-bar-wrapper {
  overflow: hidden;
  border-radius: 10px;
}

#pds-md {
  &-traditional, &-digital {
    border: 1px solid #aaa;
    height: 14px;
  }

  &-digital {
    position: relative;
    background: var(--pds-bar-digital);
    z-index: 2;
  }

  &-traditional {
    z-index: 1;
    background: var(--pds-bar-traditional);
  }

  &-lower-third {
    column-gap: 1rem;
    margin: 0 auto;    
    padding: 0.32rem 0;
    font-size: 90%;
    flex-direction: column;
    text-align: center;
    @media only screen and (min-width: 1366px) {
      flex-direction: row;
    }
    @media only screen and (max-width: 960px) {
      flex-direction: row;
    }
  }
}
</style>