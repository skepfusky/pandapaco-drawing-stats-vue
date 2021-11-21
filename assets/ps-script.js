// IntersectionObserver - work on this later
//var observer = new IntersectionObserver(entries, observer => {
//  entries.forEach(entry => {
//
//  });
//});

// Tooltips
const temp = document.createElement('template');
temp.innerHTML =`
  <style>
  .tt-w {
    position:absolute;
    top:-40px;
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

// Chrono buttons
window.onload = () => {
  btn21 = document.getElementById('btn-21');
  art21 = document.getElementById('aw-21');
  btn21.onmouseover = () => {
    art21.classList.add('artwork-stats-21');
    art20.classList.remove('artwork-stats-20');
    console.log('mouse in');
  }

  btn20 = document.getElementById('btn-20');
  art20 = document.getElementById('aw-20');
  btn20.onmouseover = () => {
    art21.classList.remove('artwork-stats-21');
    art20.classList.add('artwork-stats-20');
    console.log('mouse in1');
  }
}