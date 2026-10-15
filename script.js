/* ==========================================================
   GAMEVERSE — simple interactions only
   1. Mobile menu toggle
   2. Genre chip selection on the Games page
   ========================================================== */

/* ---------- 1. Mobile menu ---------- */
var menuBtn  = document.getElementById('menuBtn');
var navLinks = document.getElementById('navLinks');

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });
}

/* ---------- 2. Genre chips (Games page only) ---------- */
var chips = document.querySelectorAll('.chip');

for (var i = 0; i < chips.length; i++) {
  chips[i].addEventListener('click', function () {
    for (var j = 0; j < chips.length; j++) {
      chips[j].classList.remove('active');
    }
    this.classList.add('active');
  });
}
