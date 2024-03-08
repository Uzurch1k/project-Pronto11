const elements = {
  body: document.querySelector('body'),
  authen: document.querySelector('.authentication'),
  authenClose: document.querySelector('.authentication-close'),
  headerSubmitCont: document.querySelector('.authentication-buttons'),
  headerSubmitContMob: document.querySelector('.authentication-buttons-mob'),
  headerSubmit: document.querySelector('.header-btn-submit'),
  headerSubmitModal: document.querySelector('.header-btn-submit-modal'),
  signUpLink: document.querySelector('.authentication-signup'),
  signInLink: document.querySelector('.authentication-signin'),
};

export function toggleAuthen(open) {
  elements.authen.classList.toggle('is-active', open);
  elements.body.classList.toggle('authentication-open', open);
}

function showSignUpForm() {
  const signUpForm = document.querySelector('.authentication-form-signup');
  signUpForm.classList.remove('hide');
  elements.signUpLink.classList.add('active');

  const signInForm = document.querySelector('.authentication-form-signin');
  signInForm.classList.add('hide');
  elements.signInLink.classList.remove('active');
}

function showSignInForm() {
  const signInForm = document.querySelector('.authentication-form-signin');
  signInForm.classList.remove('hide');
  elements.signInLink.classList.add('active');

  const signUpForm = document.querySelector('.authentication-form-signup');
  signUpForm.classList.add('hide');
  elements.signUpLink.classList.remove('active');
}

if (elements.authen) {
  elements.headerSubmitCont.addEventListener('click', e => {
    const targetIs = e.target.classList.contains('header-btn-submit');
    if (targetIs) {
      toggleAuthen(true);
    }
  });
  elements.headerSubmitContMob.addEventListener('click', e => {
    const targetIs = e.target.classList.contains('header-btn-submit');
    if (targetIs) {
      toggleAuthen(true);
    }
  });
  elements.authenClose.addEventListener('click', () => {
    toggleAuthen(false);
  });

  elements.signUpLink.classList.add('active');

  elements.signUpLink.addEventListener('click', () => {
    event.preventDefault();
    showSignUpForm();
  });
  elements.signInLink.addEventListener('click', () => {
    event.preventDefault();
    showSignInForm();
  });
}
