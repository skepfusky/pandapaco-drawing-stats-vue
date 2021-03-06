import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { dom } from "@fortawesome/fontawesome-svg-core";

library.add(fab);
library.add(fas);
library.add(far);
dom.watch();

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);

/*
  Define custom components in a vanilla way
  I could use a libary like polymer to handle all the custom element crap
  but I still don't know how it works yet

  'pds-' in the beginning of an element stands for 'paco drawing statsitcs'
  as a placeholder nameto make sure these custom elements work cuz it won't
  work otherwise
*/

// #region Sidebar 
class pdsSidebar extends HTMLElement {
  constructor() {
    super();
  }
}
customElements.define('pds-sidebar', pdsSidebar);

class pdsSpeciesContainer extends HTMLElement {
  constructor() {
    super();
  }
}
customElements.define('pds-species-container', pdsSpeciesContainer);

class pdsYearContainer extends HTMLElement {
  constructor() {
    super();
  }
}
customElements.define('pds-year-container', pdsYearContainer);

class pdsSpeciesChip extends HTMLElement {
  constructor() {
    super();
  }
}
customElements.define('pds-species-chip', pdsSpeciesChip);

class pdsMediumBar extends HTMLElement {
  constructor() {
    super();
  }
}
customElements.define('pds-medium-bar', pdsMediumBar);
// #endregion 
class pdsGalleryContainer extends HTMLElement {
  constructor() {
    super();
  }
}
customElements.define('pds-gallery-container', pdsGalleryContainer);

class pdsVisualEmbed extends HTMLElement {
  constructor() {
    super();
  }
}
customElements.define('pds-visual-embedded', pdsVisualEmbed);

class pdsStatsLatest extends HTMLElement {
  constructor() {
    super();
  }
} 
customElements.define('pds-stats-latest', pdsStatsLatest);

class pdsWater extends HTMLElement {
  constructor() {
    super();
  }
}
customElements.define('pds-backdrop-waterfall', pdsWater);
createApp(App).use(router).mount('#app');
