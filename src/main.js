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

console.error("Where's your god now!?");

/*
  Define custom components in a vanilla way
  I could use a libary like polymer to handle all the custom element crap
  but I still don't know how it works yet

  'pds-' in the beginning of an element stands for 'paco drawing statsitcs'
  as a placeholder nameto make sure these custom elements work cuz it won't
  work otherwise
*/
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

createApp(App).use(router).mount('#app');
