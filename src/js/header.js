// ==============================================================

const refs = {
  body: document.querySelector('body'),
  burger: document.querySelector('.header-btn-burgher'),
  headerNav: document.querySelector('.header-menu'),
  headerLink: document.querySelectorAll('.header-nav-item-modal'),

  home: document.querySelector('.header-home'),
  shopping: document.querySelector('.header-shopping'),
  homeMobal: document.querySelector('.header-home-modal'),
  shoppingMobal: document.querySelector('.header-shopping-modal'),
};

// ========================= Bugrer =========================

function handleHeaderLinkClick() {
  refs.burger.classList.toggle('active');
  refs.headerNav.classList.toggle('active');
  refs.body.classList.toggle('lock');
}

refs.burger.addEventListener('click', handleHeaderLinkClick);

// =========================== Home and Shopping ===========================

if (window.location.href.includes('index.html')) {
  window.addEventListener('DOMContentLoaded', () => {
    refs.home.classList.add('active');
    refs.shopping.classList.remove('active');

    refs.homeMobal.classList.add('active');
    refs.shoppingMobal.classList.remove('active');
  });
} else {
  window.addEventListener('DOMContentLoaded', () => {
    refs.home.classList.remove('active');
    refs.shopping.classList.add('active');

    refs.homeMobal.classList.remove('active');
    refs.shoppingMobal.classList.add('active');
  });
}
