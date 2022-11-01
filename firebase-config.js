import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: "twitter-clone-69281.firebaseapp.com",
    projectId: "twitter-clone-69281",
    storageBucket: "twitter-clone-69281.appspot.com",
    messagingSenderId: "893337275726",
    appId: "1:893337275726:web:97e2cd47dbc37342b9a21f"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  export { db }