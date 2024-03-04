// ==========================================================

const toggleBtn = document.querySelector('.toggle-checkbox');

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-dark');
    toggleBtn.checked = true;
  }
});

function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  const root = document.documentElement;
  root.setAttribute('data-theme', themeName);
}

export const toggle = toggleBtn.addEventListener('click', () => {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-light');
  } else {
    setTheme('theme-dark');
  }
});

// ===============================================================

const scrollToTopBtn = document.querySelector('.scroll-up');

window.addEventListener('scroll', () => {
  if (window.scrollY > 120) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// ===============================================================
