"use strict";

const nextBtns = [...document.querySelectorAll(".btn--next")];
const prevBtns = [...document.querySelectorAll(".btn--prev")];

const testimonials = [...document.querySelectorAll(".testimonial")];

let switchTestimonial = () => {
  testimonials.forEach((item) => {
    item.classList.toggle("hidden");
  });
};

let switchNext = () => {
  !testimonials[0].classList.contains("hidden") && switchTestimonial();
};

let switchPrev = () => {
  testimonials[0].classList.contains("hidden") && switchTestimonial();
};

// html buttons functionality

nextBtns.forEach((btn) => {
  btn.addEventListener("click", switchNext);
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", switchPrev);
});

// keyboard functionality

document.onkeydown = (e) => {
  switch (e.keyCode) {
    case 37:
      switchPrev();
      break;
    case 39:
      switchNext();
      break;
  }
};
