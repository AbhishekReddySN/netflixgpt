// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJbmWbUdpDL54RM__SAQlGYqSLN_SEl8k",
  authDomain: "netflixgpt-1ad1b.firebaseapp.com",
  projectId: "netflixgpt-1ad1b",
  storageBucket: "netflixgpt-1ad1b.appspot.com",
  messagingSenderId: "672550038178",
  appId: "1:672550038178:web:2f80b11790d1a0f68885fb",
  measurementId: "G-NVMPT25CS7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
