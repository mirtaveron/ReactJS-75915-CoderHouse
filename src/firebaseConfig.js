import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBsclMmhM3hIBMuQbJYU_FA2P-5UqSGI2U",
    authDomain: "backend-75915-61c78.firebaseapp.com",
    projectId: "backend-75915-61c78",
    storageBucket: "backend-75915-61c78.firebasestorage.app",
    messagingSenderId: "681856419594",
    appId: "1:681856419594:web:715d6344a42baa39ef5cf3"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
