// src/firebase.ts

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCA8c1dWH2vkCdH68Sm8kqgvG_87MEXJ2A",
  authDomain: "smart-energy-firebase-18cbf.firebaseapp.com",
  databaseURL: "https://smart-energy-firebase-18cbf-default-rtdb.firebaseio.com",
  projectId: "smart-energy-firebase-18cbf",
  storageBucket: "smart-energy-firebase-18cbf.firebasestorage.app",
  messagingSenderId: "193973073460",
  appId: "1:193973073460:web:13f73fad7ef07bc9fafc61",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
