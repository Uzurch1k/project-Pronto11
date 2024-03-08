import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, ref, get, set } from 'firebase/database';
import iziToast from 'izitoast';
import icon from '../img/icons.svg';

import { toggleAuthen } from './authorization-functions';
import { checkIsThereElementOnPage } from './shopping';
const headerSubmitCont = document.querySelector('.authentication-buttons');
const headerSubmitContMob = document.querySelector(
  '.authentication-buttons-mob'
);

// Инициализация Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAVC9h8-zdX_Zwfa8u_SlIxJpF4-2QNWH4',
  authDomain: 'bookshelf-pronto.firebaseapp.com',
  databaseURL:
    'https://bookshelf-pronto-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'bookshelf-pronto',
  storageBucket: 'bookshelf-pronto.appspot.com',
  messagingSenderId: '1040567130254',
  appId: '1:1040567130254:web:b46de7db5d5f846b0f51df',
  measurementId: 'G-7YPT2SGB8V',
};

initializeApp(firebaseConfig);

// Получение ссылки на экземпляр аутентификации Firebase
const auth = getAuth();

function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      unsubscribe();
      if (user) {
        resolve(user);
      } else {
        resolve('');
      }
    });
  });
}

// Обработчик отправки формы регистрации
const signUpForm = document.querySelector('.authentication-form-signup');
if (signUpForm) {
  signUpForm.addEventListener('submit', signUpEvent);
}

async function signUpEvent(e) {
  e.preventDefault();

  if (!signUpForm.classList.contains('disable')) {
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
    await addBooksJson();
    await authState();
    sucessMassage('Registration');
    toggleAuthen(false);
  } catch (error) {
    // Обработка ошибок регистрации
    showError(form, error.code);
  }
}

// Обработчик отправки формы входа
const signInForm = document.querySelector('.authentication-form-signin');
if (signInForm) {
  signInForm.addEventListener('submit', signInEvent);
}

async function signInEvent(e) {
  e.preventDefault();

  if (!signInForm.classList.contains('disable')) {
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
    showError(form, error.code);
  }
}

//Logout
headerSubmitCont.addEventListener('click', logOutFunc);
headerSubmitContMob.addEventListener('click', logOutFunc);

function logOutFunc(e) {
  const targetIs = e.target.classList.contains('log-out');

  if (targetIs) {
    auth
      .signOut()
      .then(function () {
        sucessMassage('Log out');
      })
      .catch(function (error) {
        errorMassage('Unable to log out');
      });
  }
}

async function authState() {
  try {
    onAuthStateChanged(auth, user => {
      renderAuthHeader(user);
      checkIsThereElementOnPage();
      booksCount();
    });
  } catch (error) {
    console.error('Check error:', error.code);
  }
}

function renderAuthHeader(user) {
  const authContainer = document.querySelector('.authentication-buttons');
  const authContainerMob = document.querySelector(
    '.authentication-buttons-mob'
  );

  if (!user) {
    const noneAuthState = `<button type="button" class="header-btn-submit">Sing up
    <svg width="20" height="20" class="header-sing-svg">
      <use href="${icon}#icon-header-vector-log-left"></use>
    </svg>
  </button>`;

    authContainer.innerHTML = noneAuthState;
    authContainerMob.innerHTML = noneAuthState;
  } else {
    const name = user.displayName;
    const AuthState = `<div class="authorized">
    <button type="button" class="authorized-btn">
      <div class="authorized-data">
        <div class="authorized-ava-wrap">
          <svg width="19" height="19">
          <use href="${icon}#icon-header-user"></use>
        </svg>
        </div>
        <p class="authorized-name">${name}</p>
      </div>
      <div class="authorized-vector-wrap">
        <svg width="23" height="26" class="authorized-vector">
          <use href="${icon}#icon-header-vector-down"></use>
        </svg>
      </div>
    </button>
    <button type="button" class="log-out">
      Log out
      <svg width="20" height="20" class="header-sing-svg">
        <use href="${icon}#icon-header-vector-log-left"></use>
      </svg>
    </button>
  </div>`;

    authContainer.innerHTML = AuthState;
    authContainerMob.innerHTML = AuthState;
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
  let errorText = 'An unknown error has occurred. Please try again.';
  const errorCont = form.querySelector('.authentication-errorcont');

  if (errorCode === 'auth/email-already-in-use') {
    errorText = 'A user with this email address already exists.';
  }

  if (errorCode === 'auth/invalid-credential') {
    errorText = 'Incorrect login or password';
  }

  if (errorCode === 'auth/weak-password') {
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

////////////////////////////////////
////////////////////////////////////
////////////////////////////////////
const database = getDatabase();

function writeBooksData(userId, dataJson) {
  set(ref(database, 'users/' + userId), {
    shippinglist: dataJson,
  });
}

async function getBooksData(userId) {
  const shippingListRef = ref(database, 'users/' + userId + '/shippinglist');

  try {
    const snapshot = await get(shippingListRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error getting data:', error);
    return null;
  }
}

export async function addBooksJson(shoppingList) {
  if (!shoppingList) {
    shoppingList = localStorage.getItem('shoppinglist') || '';
  }

  booksCount(shoppingList);

  const user = await getCurrentUser()
    .then(user => {
      return user;
    })
    .catch(error => {
      return '';
    });

  if (!user) {
    localStorage.setItem('shoppinglist', shoppingList);
  } else {
    const userId = user.uid;

    if (shoppingList) {
      writeBooksData(userId, shoppingList);
    }
  }
}

export const getBooksJson = async () => {
  const user = await getCurrentUser()
    .then(user => {
      return user;
    })
    .catch(error => {
      return '';
    });

  if (!user) {
    return localStorage.getItem('shoppinglist');
  } else {
    const userId = user.uid;

    return getBooksData(userId);
  }
};


async function booksCount(books) {
  if(!books) {
    books = await getBooksJson()
    .then(user => {
      return user;
    })
    .catch(error => {
      return '';
    });
  }
  console.log(books)
  const booksParsed = JSON.parse(books).length;
  const headerShip = document.querySelector('.header-shopping span');
  const headerShipModal = document.querySelector('.header-shopping-modal span');
  
  if(booksParsed > 0) {
    headerShip.innerHTML = `<span>${booksParsed}</span>`;
    headerShipModal.innerHTML = `<span>${booksParsed}</span>`;
  } else {
    headerShip.innerHTML = '';
    headerShipModal.innerHTML = '';
  }
}

