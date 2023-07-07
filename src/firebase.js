// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC8rWq_yQEIE2NslxlktaIn_pSutz0p3Sw",
    authDomain: "formie-freelance.firebaseapp.com",
    projectId: "formie-freelance",
    storageBucket: "formie-freelance.appspot.com",
    messagingSenderId: "340771539256",
    appId: "1:340771539256:web:de67cb62b2d4df1992d9cd",
    measurementId: "G-HMTSCPWC99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);