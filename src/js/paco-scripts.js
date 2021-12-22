// Import stuff
const Chart = require("chart.js");

// Init shadow DOM and custom HTML elements for header and footer for multiple pages
// Custom header element
const pacoHdrTemplate = document.createElement("template");
pacoHdrTemplate.innerHTML = `
  <style>
    @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css");
    :host {
      all: initial;
      display: block;
      contain: content;
    }
    * {
      margin: 0;
      padding: 0;
    }
  </style>
`;

class pacoHdr extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(pacoHdrTemplate.content);
  }
}
customElements.define("paco-hdr", pacoHdr);

// Custom footer element
const pacoFtrTemplate = document.createElement("template");
pacoFtrTemplate.innerHTML = `
  <style>
    @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css");
    :host {
      all: initial;
      display: block;
      contain: content;
    }
    * {
      margin: 0;
      padding: 0;
    }
    footer {
			background: gray;
			padding: 10px 25px;
			font-family: 'Lato', sans-serif;
		}
		a {
			text-decoration: none;
			color: inherit;
		}
		.fab {
			padding-right: 5px;
		}
		#about {
			padding: 6px;
			font-size: 90%;
		}
		#social-wrapper {
			display: flex;
			border-top: 2px solid #aaa;
			margin-block: 10px;
		}
		#social-row {
			display: flex;
			margin: 0 auto;
			flex-direction: column;
			align-items: center;
			padding-top: 5px;
		}
		#social-row ul {
			display: flex;
			list-style: none;
		}
		#social-row li {
			margin-left: 10px;
			font-size: 24px;
		}
		#social-row li:first-child {
			margin-left: 0;
		}
		#copyright {
			text-align: center;
			padding-top: 5px;
			margin-top: 10px;
			border-top: 2px solid #aaa;
			font-size: 80%;
		}
		@media only screen and (max-width: 768px) {
			#social-wrapper {
				flex-direction: column;
			}
			#social-row:nth-child(2) {
				padding-top: 14px;
			}
		}
  </style>
  <footer>
		<div id="about">
		<strong>Strong text</strong> Some text here idk
		</div>
		<div id="social-wrapper">
			<div id="social-row">
				<h3>HIM</h3>
				<ul>
				  <li><a href="#"><i class="fab fa-youtube"></i></a></li>
				  <li><a href="#"><i class="fab fa-facebook"></i></a></li>
				  <li><a href="#"><i class="fab fa-github"></i></a></li>
				  <li><a href="#"><i class="fab fa-instagram"></i></a></li>
				</ul>
			</div>
			<div id="social-row">
				<h3>ME</h3>
				<ul>
				  <li><a href="#"><i class="fab fa-youtube"></i></a></li>
				  <li><a href="#"><i class="fab fa-facebook"></i></a></li>
				  <li><a href="#"><i class="fab fa-github"></i></a></li>
				  <li><a href="#"><i class="fab fa-instagram"></i></a></li>
				</ul>
			</div>
		</div>
		<div id="copyright">Copyright &copy; 2021 Skepfusky</div>
  </footer>
`;

class pacoFtr extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const fontAwesome = document.querySelector('link[href*="font-awesome"]');
    const shadowRoot = this.attachShadow({ mode: "open" });

    if (fontAwesome) {
      shadowRoot.appendChild(fontAwesome.cloneNode());
    }

    shadowRoot.appendChild(pacoFtrTemplate.content);
  }
}
customElements.define("paco-ftr", pacoFtr);
