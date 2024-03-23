import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider } from "firebase/auth";

//config proyecto firebase
interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyDGBicy5gY0luTu6A7n3px_UJ16tc1Y_qM",
  authDomain: "quickdb08.firebaseapp.com",
  projectId: "quickdb08",
  storageBucket: "quickdb08.appspot.com",
  messagingSenderId: "419153161539",
  appId: "1:419153161539:web:c3abfb2b9574b06b9353f6",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Referencia explícita a la propiedad auth

// Configurar proveedores de autenticación
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();

export const firebaseConfigExp = {
  app,
  googleProvider,
  facebookProvider,
  githubProvider
};

