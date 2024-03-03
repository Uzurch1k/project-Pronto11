// ==============================================================

const refs = {
  body: document.querySelector('body'),
  burger: document.querySelector('.header-btn-burgher'),
  headerNav: document.querySelector('.header-menu'),
  headerLink: document.querySelectorAll('.header-nav-item-modal'),
};

// ========================= Bugrer =========================

function handleHeaderLinkClick() {
  refs.burger.classList.toggle('active');
  refs.headerNav.classList.toggle('active');
  refs.body.classList.toggle('lock');
}

refs.burger.addEventListener('click', handleHeaderLinkClick);

refs.headerLink.forEach(headerLink => {
  headerLink.addEventListener('click', handleHeaderLinkClick);
});

const mediaQueryList = window.matchMedia('(max-width: 768px)');

mediaQueryList.addEventListener('change', event => {
  if (!event.matches) {
    refs.headerLink.forEach(headerLink => {
      headerLink.removeEventListener('click', handleHeaderLinkClick);
    });
  }
});

// ==============================================================
