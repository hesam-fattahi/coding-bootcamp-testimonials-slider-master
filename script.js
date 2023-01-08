"use strict";

const nextBtns = [...document.querySelectorAll(".btn--next")];
const prevBtns = [...document.querySelectorAll(".btn--prev")];

const testimonials = [...document.querySelectorAll(".testimonial")];

let switchTestimonial = () => {
  testimonials.forEach((item) => {
    item.classList.toggle("hidden");
  });
};

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    !testimonials[0].classList.contains("hidden") && switchTestimonial();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    testimonials[0].classList.contains("hidden") && switchTestimonial();
  });
});
