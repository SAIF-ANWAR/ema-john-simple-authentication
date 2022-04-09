import { getAuth } from 'firebase/auth'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBAIpaKeSikUDSHM9SPgiwOmLmCY1ASuW8",
    authDomain: "ema-john-simple-8f963.firebaseapp.com",
    projectId: "ema-john-simple-8f963",
    storageBucket: "ema-john-simple-8f963.appspot.com",
    messagingSenderId: "448424947647",
    appId: "1:448424947647:web:739eed01bfac2069967b0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth