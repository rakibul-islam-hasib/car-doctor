// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: "car-doctor-420",
  storageBucket: "car-doctor-420.appspot.com",
  messagingSenderId: "900046765375",
  appId: "1:900046765375:web:a82abb96b57dd09f5c678a",
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);