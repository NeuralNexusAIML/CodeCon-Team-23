// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6cFB-obD4nWqMZqc3aWlBFbALnBnjsxg",
  authDomain: "bookmyevent-62b30.firebaseapp.com",
  projectId: "bookmyevent-62b30",
  storageBucket: "bookmyevent-62b30.appspot.com",
  messagingSenderId: "328551460129",
  appId: "1:328551460129:web:8731f59fb280fd9be66260",
  measurementId: "G-7TPHNZMFFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
