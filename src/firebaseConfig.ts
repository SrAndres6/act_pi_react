// src/firebaseConfig.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYVN1CcgOlpot5qrczGBMmhVkk5hIGHH8",
  authDomain: "dllo-ejercicio.firebaseapp.com",
  projectId: "dllo-ejercicio",
  storageBucket: "dllo-ejercicio.firebasestorage.app",
  messagingSenderId: "673481486761",
  appId: "1:673481486761:web:1fb4d778b08fe6196314b8",
  measurementId: "G-8DTH1L5ERJ"
};

// Previene inicialización doble en Next.js
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

