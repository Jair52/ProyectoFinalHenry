import axios from "axios";
import {
  GET_FOOD,
  GET_PAIS,
  SIGNIN_USER_EMAIL,
  REGISTER_USER_THIRD_PARTY_ACCOUNT,
  SIGNUP_USER_EMAIL,
} from "../actions/ActionsTypes";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import {
  auth,
  googleProvider,
  githubProvider,
  facebookProvider,
} from "../../Auth/firebaseConfig";

const URL: string = "http://localhost:3000/api";

export const getFood = (comida: any) => ({
  type: GET_FOOD,
  payload: comida,
});

export const getPais = (event: any) => ({
  type: GET_PAIS,
  payload: event,
});

export const signUpNewUser = (email: string, password: string) => async (dispatch: any) => {
  try {  

    await axios.post("http://127.0.0.1:3000/api/register/signup", { email, password });

    return dispatch({
      type: SIGNUP_USER_EMAIL,
    });

  } catch (error: any) {
    console.error("Error al registrar nuevo usuario:", error);
    window.alert("¡Error al registrar nuevo usuario!");
    throw new Error(error);
  }
};

// export const signInUser =
//   (email: string, password: string) => async (dispatch: any) => {
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       window.alert("Inicio de sesión exitoso");

//       // Registro en el backend
//       const endpoint = `${URL}/register/signin`;
//       const { data } = await axios.post(endpoint, { email });
//       console.log(
//         "Inicio de sesión exitoso con email y contraseña en el backend"
//       );
//       // Dispatch alguna acción de éxito si es necesario
//       return dispatch({
//         type: SIGNIN_USER_EMAIL,
//         payload: data,
//       });
//     } catch (error: any) {
//       console.error("Error al iniciar sesión:", error);
//       window.alert("¡Error al iniciar sesion!");
//       throw new Error(error);
//     }
//   };

// export const registerThirdPartyAccount = () => async (dispatch: any) => {
//   try {
//     // Autenticación con el proveedor
//     const google = await signInWithPopup(auth, googleProvider);
//     const github = await signInWithPopup(auth, githubProvider);
//     const facebook = await signInWithPopup(auth, facebookProvider);

//     const googleUSer = google.user;
//     const githubUser = github.user;
//     const facebookUSer = facebook.user;

//     if (googleUSer) window.alert("Inicio de sesión exitoso con Google");
//     if (githubUser) window.alert("Inicio de sesión exitoso con GitHub");
//     if (facebookUSer) window.alert("Inicio de sesión exitoso con Facebook");

//     // Aquí podrías realizar cualquier operación adicional en tu backend si es necesario
//     const endpoint = `${URL}//signin/thirdparties`;
//     const { data } = await axios.post(endpoint, {
//       googleUSer,
//       githubUser,
//       facebookUSer,
//     });
//     console.log("Registro exitoso con proveedores de terceros en el backend");

//     return dispatch({
//       type: REGISTER_USER_THIRD_PARTY_ACCOUNT,
//       payload: data,
//     });
//   } catch (error: any) {
//     console.error("Error al iniciar sesión:", error);
//     window.alert("¡Error al iniciar sesion!");
//     throw new Error(error);
//   }
// };
