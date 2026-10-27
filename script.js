// script.js
const slides = document.querySelectorAll('.slide');
const counter = document.getElementById('counter');
const progress = document.getElementById('progress');
let current = 0;

function show(index) {
  slides[current].classList.remove('active');
  current = (index + slides.length) % slides.length;
  slides[current].classList.add('active');
  counter.textContent = (current + 1) + ' / ' + slides.length;
  progress.style.width = ((current + 1) / slides.length * 100) + '%';
}

document.getElementById('next').addEventListener('click', () => show(current + 1));
document.getElementById('prev').addEventListener('click', () => show(current - 1));

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === ' ') show(current + 1);
  if (e.key === 'ArrowLeft') show(current - 1);
});
