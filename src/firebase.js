import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBRT-YsLtZuNtlMI5CiWqp9Tpb19riR3iI",
  authDomain: "business-card-creator-5b639.firebaseapp.com",
  projectId: "business-card-creator-5b639",
  storageBucket: "business-card-creator-5b639.appspot.com",
  messagingSenderId: "1060318262963",
  appId: "1:1060318262963:web:5c562c84aa1b9010c562c6"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
