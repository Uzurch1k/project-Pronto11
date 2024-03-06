// ==============================================================

const body = document.querySelector('body');
const authen = document.querySelector('.authentication');
const headerSubmit = document.querySelector('.header-btn-submit');
const headerSubmitModal = document.querySelector('.header-btn-submit-modal');
const authenClose = document.querySelector('.authentication-close');

function handleAuthenOpenClick() {
  toggleAuthen(true);
}
function handleAuthenOpenModalClick() {
  toggleAuthen(true);
}
function handleAuthenCloseClick() {
  toggleAuthen(false);
}
function toggleAuthen(open) {
  authen.classList.toggle('is-active', open);
  body.classList.toggle('authentication-open', open);
}

export const open = headerSubmit.addEventListener(
  'click',
  handleAuthenOpenClick
);
export const openModal = headerSubmitModal.addEventListener(
  'click',
  handleAuthenOpenModalClick
);
export const close = authenClose.addEventListener(
  'click',
  handleAuthenCloseClick
);

// ==============================================================
