// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

import 'firebase/firestore'




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAppPcR-JboOsLxmghHQyY1cCF4CxlM6iM",
  authDomain: "hotel-booking-app-fc251.firebaseapp.com",
  projectId: "hotel-booking-app-fc251",
  storageBucket: "hotel-booking-app-fc251.appspot.com",
  messagingSenderId: "39167125526",
  appId: "1:39167125526:web:9477494013bbc134182d37",
  measurementId: "G-KY22GFBDV4",
  //databaseURL: "https://hotel-booking-app-fc251-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth=getAuth(app)

export  {db,auth}