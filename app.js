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
  carousel()
})

prevBtn.addEventListener('click', () => {
  counter--
  carousel()
})

// function that grabs value of counter, 
// and then adds translateX value to all the slides

const carousel = () => {
  
  // circle back to beginining of slideshow if you get to end
  if(counter === slides.length){
    counter = 0;
  }

  if(counter < 0){
    counter = slides.length - 1
  }

  // translate will move EVERY slide over to the left or right, depending on the counter
  slides.forEach(slide => {
    slide.style.transform = `translateX(-${counter * 100}%)`
  })
}