// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJMavhmAi2F9_4pCVQqthqnDHfYsHYugY",
  authDomain: "delicious-recipes-4c287.firebaseapp.com",
  projectId: "delicious-recipes-4c287",
  storageBucket: "delicious-recipes-4c287.appspot.com",
  messagingSenderId: "787929802070",
  appId: "1:787929802070:web:68b7647bb310ca1cd9e2f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
