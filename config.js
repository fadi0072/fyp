// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZE4ncR6fPeqKm6h35M5lVFabtR7pB1RI",
  authDomain: "doopler-7d44f.firebaseapp.com",
  projectId: "doopler-7d44f",
  storageBucket: "doopler-7d44f.appspot.com",
  messagingSenderId: "251210147924",
  appId: "1:251210147924:web:b162dacb1690894181e5c1",
  measurementId: "G-DGPCLVQSWV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
