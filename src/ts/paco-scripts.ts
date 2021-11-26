// Copyright year lol
document.getElementById('copyright').innerHTML = new Date().getFullYear().toString();

// Init shadow DOM and custom HTML elements for header and footer for multiple pages
// I don't need to put a comment in this what am I doing
class pacoFtr extends HTMLElement {
  constructor() {
    super();
  }
}

customElements.define('paco-ftr', pacoFtr);