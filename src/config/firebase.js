// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmvYosWJlfMHbEDGQgl9XB9On59HDESDE",
  authDomain: "buybusy2-3a788.firebaseapp.com",
  projectId: "buybusy2-3a788",
  storageBucket: "buybusy2-3a788.appspot.com",
  messagingSenderId: "625445313714",
  appId: "1:625445313714:web:d8f490a6a9a57c145c7dab"
};

console.log(process.env);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
setPersistence(auth, browserLocalPersistence);
export { db };
