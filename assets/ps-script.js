// IntersectionObserver - work on this later
//var observer = new IntersectionObserver(entries, observer => {
//  entries.forEach(entry => {
//
//  });
//});

// Chrono buttons
window.onload = () => {
  btn21 = document.getElementById('btn-21');
  art21 = document.getElementById('aw-21');
  btn21.onmouseover = () => {
    art21.classList.add('artwork-stats-21');
    art20.classList.remove('artwork-stats-20');
    console.log('mouse in');
  }
}