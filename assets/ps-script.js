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