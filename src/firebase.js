import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDzLb6EBH6iw7sAtg34wEQVWDLAdWHnk9k",
  authDomain: "chatapp-bfa93.firebaseapp.com",
  projectId: "chatapp-bfa93",
  storageBucket: "chatapp-bfa93.appspot.com",
  messagingSenderId: "573280032168",
  appId: "1:573280032168:web:72d4d5801bc45b2543399d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
