// Importe os módulos que você precisa do SDK
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBw-gS5CSzR5N-qAC5sXz-2Bqq5FIfh598",
  authDomain: "foodconnect-b21a5.firebaseapp.com",
  projectId: "foodconnect-b21a5",
  storageBucket: "foodconnect-b21a5.appspot.com",
  messagingSenderId: "520126550866",
  appId: "1:520126550866:web:5c63dfc705e5c0ced5a08b",
  measurementId: "G-NHXCRDC3SB"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };