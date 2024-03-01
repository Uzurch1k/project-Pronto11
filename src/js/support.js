<<<<<<< Updated upstream
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';



const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
    loop: false,
  speed: 100,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 6,
            spaceBetween: 10
        },
    },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
    },
    mousewheel: {
    invert: true,
    },
    watchOverflow: true,
    shortSwipes: false,
//     navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

});
=======

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {

  direction: 'vertical',
    loop: true,
    speed: 400,
    spaceBetween: 0,
  centeredSlides: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

export function openCharitySite(url) {
        window.open(url, '_blank');
    }
>>>>>>> Stashed changes
