import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-80928.firebaseapp.com",
  projectId: "mern-estate-80928",
  storageBucket: "mern-estate-80928.appspot.com",
  messagingSenderId: "108224302774",
  appId: "1:108224302774:web:28d62133c91c775e82e017"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);