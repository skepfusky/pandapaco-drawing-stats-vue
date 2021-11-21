const temp = document.createElement('template');
temp.innerHTML =`
  <style>
  .tt-w {
    position:absolute;
    top:-35px;
    left:-75px;
    width:175px;
    background: rgba(0,0,0, .75);
    color: white;
    padding: 8px 0;
    border-radius: 5px;
    font-size: 115%;
  }  
  </style>
  <div class="tt-w">
    <span style="display:flex;justify-content:center;"><strong id="title"></strong>&nbsp;artwork(s)&nbsp;submitted</span>
  </div>
`
class toolTips extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode:'open'});
    this.shadowRoot.appendChild(temp.content.cloneNode(true));
    this.shadowRoot.getElementById('title').innerText = this.getAttribute('count');
  };
};

window.customElements.define('aw-tooltip', toolTips);