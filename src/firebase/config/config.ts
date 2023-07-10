// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/app';
import 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, push, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM2oTZMrAk2QseGikJBgqC0nvgxfVfQoE",
  authDomain: "quanlyxephang-591f7.firebaseapp.com",
  projectId: "quanlyxephang-591f7",
  storageBucket: "quanlyxephang-591f7.appspot.com",
  messagingSenderId: "785649008220",
  appId: "1:785649008220:web:d7ce5add3ae0c72e0ab099",
  measurementId: "G-P1DFJ4JCBC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const db = getDatabase();
const postListRef = ref(db, 'data');



