import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from 'firebase/auth';

import { toggleAuthen } from './authorization-functions';

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

  const name = signUpForm.querySelector('#name-up').value;
  const email = signUpForm.querySelector('#email-up').value;
  const password = signUpForm.querySelector('#password-up').value;

  signUp(name, email, password);
}

async function signUp(name, email, password) {
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
    console.log('User registered successfully:', userCredential.user);
    signIn(email, password);
  } catch (error) {
    // Обработка ошибок регистрации
    console.error('Registration error:', error.code);
  }
}

// Обработчик отправки формы входа
const signInForm = document.querySelector('.authentication-form-signin');
if (signInForm) {
  signInForm.addEventListener('submit', signInEvent);
}

async function signInEvent(e) {
  e.preventDefault();

  const email = signInForm.querySelector('#email-in').value;
  const password = signInForm.querySelector('#password-in').value;

  signIn(email, password);
}

async function signIn(email, password) {
  try {
    // Вход пользователя с использованием электронной почты и пароля
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    // Дополнительные действия при успешном входе
    console.log('User signed in successfully:', userCredential.user);
    toggleAuthen(false);
  } catch (error) {
    // Обработка ошибок входа
    console.error('Sign in error:', error.code);
  }
}


async function authState() {
  try {
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user)
        return user.uid;
      } else {
        console.log('111')
      }
    });
  } catch (error) {
    console.error('Check error:', error.code);
  }
}



authState()