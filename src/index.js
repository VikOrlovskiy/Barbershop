import './sass/main.scss';
import { Refs } from './Refs.js';
import { onHadleClickMenu } from './mobile-menu.js';
var debounce = require('lodash.debounce');
var throttle = require('lodash.throttle');
const windowInnerWidth = document.documentElement.clientWidth;
// =================mobile-menu=======================
Refs.openMobileMenuRef.addEventListener('click', onHadleClickMenu);
Refs.closenMobileMenuRef.addEventListener('click', onHadleClickMenu);
if (windowInnerWidth >= 768) {
  Refs.mobileMenuRef.classList.remove('is-open');
}
// ===============================================
new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
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

window.addEventListener('scroll', throttle(onScrollHeaderMove, 5000));

function onScrollHeaderMove(e) {
  if (Refs.header.classList.contains('active')) {
    return;
  }
  Refs.header.classList.toggle('active');
}
