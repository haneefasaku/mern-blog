// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog1-80faa.firebaseapp.com",
  projectId: "mern-blog1-80faa",
  storageBucket: "mern-blog1-80faa.firebasestorage.app",
  messagingSenderId: "171441827998",
  appId: "1:171441827998:web:2dfcafd79e1a82efd30b8f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);