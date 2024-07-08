// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUfsUIthAHyS7arnMEi7Od8M2nj8CS1rc",
  authDomain: "netflixgpt-35fd6.firebaseapp.com",
  projectId: "netflixgpt-35fd6",
  storageBucket: "netflixgpt-35fd6.appspot.com",
  messagingSenderId: "380395081226",
  appId: "1:380395081226:web:b6587babd2b21db29c19f3",
  measurementId: "G-51S9RGTDG2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
