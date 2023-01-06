"use strict";

const btns = [...document.querySelectorAll(".btn")];

const testimonials = [...document.querySelectorAll(".testimonial")];

let switchTestimonial = () => {
  testimonials.forEach((item) => {
    item.classList.toggle("hidden");
  });
};

btns.forEach((btn) => {
  btn.addEventListener("click", switchTestimonial);
});
