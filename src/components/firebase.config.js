// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8cEM2P97J4XpnkLINdfiH3CmASeKKmAE",
  authDomain: "torurist-management.firebaseapp.com",
  projectId: "torurist-management",
  storageBucket: "torurist-management.appspot.com",
  messagingSenderId: "1017948266318",
  appId: "1:1017948266318:web:cd356dda2e2c5ed259c81f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;