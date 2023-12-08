// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCA6m7W1BIcxNqOs74-Mn8JP8YkHe8w1Kw",
  authDomain: "study-and-review-website.firebaseapp.com",
  projectId: "study-and-review-website",
  storageBucket: "study-and-review-website.appspot.com",
  messagingSenderId: "860218393350",
  appId: "1:860218393350:web:064f246f7e96e2f3159487",
  measurementId: "G-85SDT4KNSW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
