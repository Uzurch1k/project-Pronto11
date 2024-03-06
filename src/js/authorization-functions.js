// ==============================================================

const body = document.querySelector('body');
const authen = document.querySelector('.authentication');

const headerSubmit = document.querySelector('.header-btn-submit');
const headerSubmitModal = document.querySelector('.header-btn-submit-modal');

const authenClose = document.querySelector('.authentication-close');

const signUpLink = document.querySelector('.authentication-signup');
const signInLink = document.querySelector('.authentication-signin');

// ==============================================================

function toggleAuthen(open) {
  authen.classList.toggle('is-active', open);
  body.classList.toggle('authentication-open', open);
}

// ==============================================================

function showSignUpForm() {
  const signUpForm = document.querySelector('.authentication-form-signup');
  signUpForm.classList.remove('hide');
  signUpLink.classList.add('active');

  const signInForm = document.querySelector('.authentication-form-signin');
  signInForm.classList.add('hide');
  signInLink.classList.remove('active');
}

function showSignInForm() {
  const signInForm = document.querySelector('.authentication-form-signin');
  signInForm.classList.remove('hide');
  signInLink.classList.add('active');

  const signUpForm = document.querySelector('.authentication-form-signup');
  signUpForm.classList.add('hide');
  signUpLink.classList.remove('active');
}

if (authen) {
  headerSubmit.addEventListener('click', () => {
    toggleAuthen(true);
  });
  headerSubmitModal.addEventListener('click', () => {
    toggleAuthen(true);
  });
  authenClose.addEventListener('click', () => {
    toggleAuthen(false);
  });

  // ===================================================

  signUpLink.classList.add('active');

  signUpLink.addEventListener('click', () => {
    showSignUpForm();
  });
  signInLink.addEventListener('click', () => {
    showSignInForm();
  });
}
