// Import stuff
const Chart = require('chart.js');

// Init shadow DOM and custom HTML elements for header and footer for multiple pages
// I don't need to put a comment in this what am I doing

// Custom header element
const pacoHdrTemplate = document.createElement('template');
pacoHdrTemplate.innerHTML = `
  <style>
    @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css");
  </style>

  :host {
    all: inital;
    display: block;
    contain: content;
  }
  * {
    margin: 0;
    padding: 0;
  }
`;

class pacoHdr extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(pacoHdrTemplate.content);
  }
}

customElements.define('paco-hdr', pacoHdr);

// Custom footer element
const pacoFtrTemplate = document.createElement('template');
pacoFtrTemplate.innerHTML = `
  <style>
    @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css");
  </style>

  :host {
    all: inital;
    display: block;
    contain: content;
  }
  * {
    margin: 0;
    padding: 0;
  }
`;

class pacoFtr extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback () {
    const fontAwesome = document.querySelector('link[href*="font-awesome"]');
    const shadowRoot = this.attachShadow({ mode: 'open' });

    if (fontAwesome) {
      shadowRoot.appendChild(fontAwesome.cloneNode());
    }

    shadowRoot.appendChild(pacoFtrTemplate.content);
  }
}

customElements.define('paco-ftr', pacoFtr);