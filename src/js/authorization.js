// ==============================================================

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAVC9h8-zdX_Zwfa8u_SlIxJpF4-2QNWH4',
  authDomain: 'bookshelf-pronto.firebaseapp.com',
  projectId: 'bookshelf-pronto',
  storageBucket: 'bookshelf-pronto.appspot.com',
  messagingSenderId: '1040567130254',
  appId: '1:1040567130254:web:b46de7db5d5f846b0f51df',
  measurementId: 'G-7YPT2SGB8V',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ==============================================================

// ==============================================================

// ==============================================================
