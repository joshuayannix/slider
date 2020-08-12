const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

// set up all the slides in one horizontal line
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

// control which slide is shown, and which are hidden

let counter = 0;

nextBtn.addEventListener('click', () => {
  counter++
})

prevBtn.addEventListener('click', () => {
  counter--
})