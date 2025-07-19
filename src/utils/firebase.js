// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJfJry9K1Myc1rRuv2_OIae8OOfncrayY",
  authDomain: "souravnetflixgpt.firebaseapp.com",
  projectId: "souravnetflixgpt",
  storageBucket: "souravnetflixgpt.firebasestorage.app",
  messagingSenderId: "856767610080",
  appId: "1:856767610080:web:1e7d838db5233140bbe485",
  measurementId: "G-NSZDY5FDET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();