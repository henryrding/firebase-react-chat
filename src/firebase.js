// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCM5ePq2B03_Y48y_zksWo4q-URTC2WWCA',
  authDomain: 'react-chat-2fe89.firebaseapp.com',
  projectId: 'react-chat-2fe89',
  storageBucket: 'react-chat-2fe89.appspot.com',
  messagingSenderId: '976509494666',
  appId: '1:976509494666:web:4f6315829405b367831473',
  measurementId: 'G-JVMH6X6Z62',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
