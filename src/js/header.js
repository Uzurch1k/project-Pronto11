// ==============================================================

const refs = {
  body: document.querySelector('body'),
  burger: document.querySelector('.header-btn-burgher'),
  headerNav: document.querySelector('.header-menu'),
  headerLink: document.querySelectorAll('.header-nav-item-modal'),

  logo: document.querySelector('.header-logo'),
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

function handleHomeClick() {
  localStorage.setItem('isActive', 'home');
}
refs.logo.addEventListener('click', handleHomeClick);
refs.home.addEventListener('click', handleHomeClick);
refs.homeMobal.addEventListener('click', handleHomeClick);

function handleShoppingClick() {
  localStorage.setItem('isActive', 'shopping');
}
refs.shopping.addEventListener('click', handleShoppingClick);
refs.shoppingMobal.addEventListener('click', handleShoppingClick);

window.addEventListener('DOMContentLoaded', () => {
  const activeElement = localStorage.getItem('isActive');
  refs.home.classList.add('active');
  refs.homeMobal.classList.add('active');

  if (activeElement === 'home') {
    refs.home.classList.add('active');
    refs.shopping.classList.remove('active');

    refs.homeMobal.classList.add('active');
    refs.shoppingMobal.classList.remove('active');
  } else if (activeElement === 'shopping') {
    refs.home.classList.remove('active');
    refs.shopping.classList.add('active');

    refs.homeMobal.classList.remove('active');
    refs.shoppingMobal.classList.add('active');
  }
});
