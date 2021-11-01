const page = document.getElementById('page');
const text = document.getElementById('text');
const btn = document.getElementById('btn');
let backgroundOn = true;
  
function changeBg() {
  if(backgroundOn) {
    page.style.background = "rgb(36, 26, 26)";
    text.style.color = "rgb(239, 244, 248)";
    btn.style.transform = 'translateX(0)';
    backgroundOn = false;
    localStorage.setItem('cookie', true);
  } else {
    page.style.background = "rgb(239, 244, 248)";
    text.style.color = "rgb(36, 26, 26)";
    btn.style.transform = 'translateX(100%)';
    backgroundOn = true;
    localStorage.setItem('cookie', false);
  }
}

if(localStorage.getItem('cookie', true)) {
    page.style.background = "rgb(36, 26, 26)";
    text.style.color = "rgb(239, 244, 248)";
    btn.style.transform = 'translateX(0)';
  } else {
    page.style.background = "rgb(239, 244, 248)";
    text.style.color = "rgb(36, 26, 26)";
    btn.style.transform = 'translateX(100%)';
  }
  