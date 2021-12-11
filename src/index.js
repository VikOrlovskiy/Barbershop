import './sass/main.scss';
// ===============================================
const Refs = {
  slider: document.querySelector('.swiper'),
  nextSlide: document.querySelector('.swiper-button-next'),
  prevSlide: document.querySelector('.swiper-button-prev'),
};
// ===============================================
new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
