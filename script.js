const slides = document.querySelectorAll('.slide');
const counter = document.getElementById('counter');
const progress = document.getElementById('progress');
let current = 0;

function show(index) {
  slides[current].classList.remove('active');
  current = (index + slides.length) % slides.length;
  slides[current].classList.add('active');
}
