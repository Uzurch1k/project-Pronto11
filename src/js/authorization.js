import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from 'firebase/auth';
import iziToast from 'izitoast';

import { toggleAuthen } from './authorization-functions';
const headerSubmitCont = document.querySelector('.authentication-buttons');

// Инициализация Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAVC9h8-zdX_Zwfa8u_SlIxJpF4-2QNWH4',
  authDomain: 'bookshelf-pronto.firebaseapp.com',
  projectId: 'bookshelf-pronto',
  storageBucket: 'bookshelf-pronto.appspot.com',
  messagingSenderId: '1040567130254',
  appId: '1:1040567130254:web:b46de7db5d5f846b0f51df',
  measurementId: 'G-7YPT2SGB8V',
};

initializeApp(firebaseConfig);

// Получение ссылки на экземпляр аутентификации Firebase
const auth = getAuth();

// Обработчик отправки формы регистрации
const signUpForm = document.querySelector('.authentication-form-signup');
if (signUpForm) {
  signUpForm.addEventListener('submit', signUpEvent);
}

async function signUpEvent(e) {
  e.preventDefault();

  if(!signUpForm.classList.contains('disable')) {
    const name = signUpForm.querySelector('#name-up').value;
    const email = signUpForm.querySelector('#email-up').value;
    const password = signUpForm.querySelector('#password-up').value;
  
    disableForm(signUpForm);
    emptyError(signUpForm);
    await signUp(signUpForm, name, email, password);
    removeDisableForm(signUpForm);
  }
}

async function signUp(form, name, email, password) {
  try {
    // Регистрация нового пользователя с использованием электронной почты, пароля и имени
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ); 

    // Установка имени пользователя
    await updateProfile(userCredential.user, {
      displayName: name,
    });

    // Дополнительные действия при успешной регистрации
    authState();
    sucessMassage('Registration');
    toggleAuthen(false);
  } catch (error) {
    // Обработка ошибок регистрации
    showError(form, error.code)
  }
}

// Обработчик отправки формы входа
const signInForm = document.querySelector('.authentication-form-signin');
if (signInForm) {
  signInForm.addEventListener('submit', signInEvent);
}

async function signInEvent(e) {
  e.preventDefault();

  if(!signInForm.classList.contains('disable')) {
    const email = signInForm.querySelector('#email-in').value;
    const password = signInForm.querySelector('#password-in').value;

    disableForm(signInForm);
    emptyError(signInForm);
    await signIn(signInForm, email, password);
    removeDisableForm(signInForm);
  }
}

async function signIn(form, email, password) {
  try {
    // Вход пользователя с использованием электронной почты и пароля
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    // Дополнительные действия при успешном входе
    sucessMassage('Authorization');
    toggleAuthen(false);
  } catch (error) {
    // Обработка ошибок входа
    showError(form, error.code)
  }
}


//Logout
headerSubmitCont.addEventListener('click', (e) => {
  const targetIs = e.target.classList.contains('log-out');
  
  if(targetIs) {
    auth.signOut().then(function() {
      sucessMassage('Log out');
    }).catch(function(error) {
      errorMassage('Unable to log out');
    });
  }
});


async function authState() {
  try {
    onAuthStateChanged(auth, (user) => {
      renderAuthHeader(user);
    });
  } catch (error) {
    console.error('Check error:', error.code);
  }
}



function renderAuthHeader(user) {
  const authContainer = document.querySelector('.authentication-buttons');

   if(!user) {
    authContainer.innerHTML = `<button type="button" class="header-btn-submit">Sing up
    <svg width="20" height="20" class="header-sing-svg">
      <use href="../img/icons.svg#icon-header-vector-log-left"></use>
    </svg>
  </button>`;
   } else {
    const name = user.displayName;
    authContainer.innerHTML = `<div class="authorized">
    <button type="button" class="authorized-btn">
      <div class="authorized-data">
        <div class="authorized-ava-wrap">
          <img src="../img/shopping/book-apple.png" alt="" />
        </div>
        <p class="authorized-name">${name}</p>
      </div>
      <div class="authorized-vector-wrap">
        <svg width="23" height="26" class="authorized-vector">
          <use href="../img/icons.svg#icon-header-vector-down"></use>
        </svg>
      </div>
    </button>
    <button type="button" class="log-out">
      Log out
      <svg width="20" height="20" class="header-sing-svg">
        <use href="../img/icons.svg#icon-header-vector-log-left"></use>
      </svg>
    </button>
  </div>`;
   }
}

authState();


//Add disable to form
function disableForm(form) {
  form.classList.add('disable');
}

function removeDisableForm(form) {
  form.classList.remove('disable');
}

function showError(form, errorCode) {
  console.log(errorCode)
  let errorText = 'An unknown error has occurred. Please try again.';
  const errorCont = form.querySelector('.authentication-errorcont');

  if(errorCode === 'auth/email-already-in-use') {
    errorText = 'A user with this email address already exists.';
  }

  if(errorCode === 'auth/invalid-credential') {
    errorText = 'Incorrect login or password';
  }

  if(errorCode === 'auth/weak-password') {
    errorText = 'Your password is too weak';
  }

  errorCont.innerHTML = `<p class="auth-error">${errorText}</p>`;
}

function emptyError(form) {
  const errorCont = form.querySelector('.authentication-errorcont');
  errorCont.innerHTML = '';
}

function sucessMassage(type) {
  iziToast.success({
    message: `${type} is successful`,
    position: 'bottomRight',
    icon: null,
  });
}

function errorMassage(text) {
  iziToast.error({
    message: text,
    position: 'bottomRight',
    icon: null,
  });
}