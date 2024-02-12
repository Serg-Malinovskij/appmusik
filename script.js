// scripts.js
function vieport() {
  window.addEventListener('resize', function () {
      set_100vh_var();
      detect_mobile();
  });
  window.addEventListener('orientationchange', function () {
      set_100vh_var();
  });
  
  setTimeout(
      set_100vh_var, 
      50
  );
}

function set_100vh_var() {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight/100}px`);
};