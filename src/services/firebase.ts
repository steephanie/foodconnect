import * as firebase from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBLPmEu9S6qR5Frou9Yjf58rmt1Uw-qkeU",
  authDomain: "foodconnect-011.firebaseapp.com",
  projectId: "foodconnect-011",
  storageBucket: "foodconnect-011.appspot.com",
  messagingSenderId: "226909765147",
  appId: "1:226909765147:web:ed4bcca978a382e30182be",
  measurementId: "G-T2RPYR5TR7"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, sendPasswordResetEmail };


// const firebaseConfig = {
//   apiKey: "AIzaSyBw-gS5CSzR5N-qAC5sXz-2Bqq5FIfh598",
//   authDomain: "foodconnect-b21a5.firebaseapp.com",
//   projectId: "foodconnect-b21a5",
//   storageBucket: "foodconnect-b21a5.appspot.com",
//   messagingSenderId: "520126550866",
//   appId: "1:520126550866:web:5c63dfc705e5c0ced5a08b",
//   measurementId: "G-NHXCRDC3SB"
// };
