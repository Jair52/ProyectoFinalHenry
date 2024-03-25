import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { FirebaseConfig } from "../utils/types";

const firebaseConfig: FirebaseConfig = {
  apiKey: process.env["VITE_FIREBASE_API_KEY"]!,
  authDomain: process.env["VITE_FIREBASE_AUTH_DOMAIN"]!,
  projectId: process.env["VITE_FIREBASE_PROJECT_ID"]!,
  storageBucket: process.env["VITE_FIREBASE_STORAGE_BUCKET"]!,
  messagingSenderId: process.env["VITE_FIREBASE_MESSAGING_SENDER_ID"]!,
  appId: process.env["VITE_FIREBASE_APP_ID"]!,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Configurar proveedores de autenticación
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();

export { app, auth, googleProvider, githubProvider, facebookProvider };
