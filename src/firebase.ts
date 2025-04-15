// src/firebase.ts

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCA8c1dWH2vkCdH68Sm8kqgvG_87MEXJ2A",
  authDomain: "smart-energy-firebase-18cbf.firebaseapp.com",
  projectId: "smart-energy-firebase-18cbf",
  storageBucket: "smart-energy-firebase-18cbf.appspot.com",
  messagingSenderId: "193973073460",
  appId: "1:193973073460:web:13f73fad7ef07bc9fafc61",
  measurementId: "G-5NV0FHH646"
};

const app = initializeApp(firebaseConfig);
console.log("Firebase initialized");

export const auth = getAuth(app);
export const db = getFirestore(app);
