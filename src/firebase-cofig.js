import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCLGW_dJ8kjDW8EEP0MmdDDFx959mV3o68",
  authDomain: "bayyinah-904ed.firebaseapp.com",
  projectId: "bayyinah-904ed",
  storageBucket: "bayyinah-904ed.firebasestorage.app",
  messagingSenderId: "505543454764",
  appId: "1:505543454764:web:b35772758223fd608d6189",
  measurementId: "G-7P780R5JGS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);