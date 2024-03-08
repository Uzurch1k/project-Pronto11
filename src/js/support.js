import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  loop: false,
  initialSlide: 0,
  speed: 500,
  slidesPerView: 6,
  effect: 'slide',
  rewind: true,
  breakpoints: {
    292: {
      slidesPerView: 6,
    },
  },
  spaceBetween: 20,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  shortSwipes: false,
  preventClicks: true,
  disableMouseEvents: true,
});
swiper.allowTouchMove = false;

swiper.on('slideChange', function () {
  if (swiper.isEnd) {
    swiper.allowTouchMove = false;
  } else {
    swiper.allowTouchMove = true;
  }
});

const customButton = document.querySelector('.swiper-button');

customButton.addEventListener('click', function () {
  if (swiper.activeIndex === 2) {
    customButton.classList.add('rotate');
  } else {
    customButton.classList.remove('rotate');
  }
  if (swiper.activeIndex < swiper.slides.length - 1) {
    swiper.slideNext();
  } else {
    swiper.slideTo(0);
  }
});
