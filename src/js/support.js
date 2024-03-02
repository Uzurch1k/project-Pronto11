import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';



const swiper = new Swiper('.swiper', {
  direction: 'vertical',
    loop: false,
  speed: 100,
  slidesPerView: 6,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    },
  mousewheel: {
    invert: true,
    },
  shortSwipes: false,
 navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},

});
