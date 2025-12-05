let prevButton = document.querySelector('.arrows button:first-child');
let nextButton = document.querySelector('.arrows button:last-child');
let items = document.querySelectorAll('section .list .item');
let dots = document.querySelectorAll('section .indicators ul li');
let numberDisplay = document.querySelector('section .indicators .number');

let active = 0;
let lastPosition = items.length - 1;

function updateCarousel() {
  items.forEach((item, index) => {
    item.classList.toggle('active', index === active);
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === active);
  });

  const displayNumber = String(active + 1).padStart(2, '0');
  if (numberDisplay) {
    numberDisplay.textContent = displayNumber;
  }
}

nextButton.onclick = () => {
  active = active + 1 > lastPosition ? 0 : active + 1;
  updateCarousel();
};

prevButton.onclick = () => {
  active = active - 1 < 0 ? lastPosition : active - 1;
  updateCarousel();
};

updateCarousel();