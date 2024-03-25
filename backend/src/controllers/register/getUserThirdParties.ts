import { auth } from "../../auth/firebaseAdmin";

export const getUserThirdParties = async (token: string) => {
  try {
    // Verificar el token de autenticación de terceros
    const decodedToken = await auth.verifyIdToken(token);

    // Obtener el ID único del usuario del token decodificado
    const uid = decodedToken.uid;

    // Intentar obtener el registro del usuario a partir del ID único
    let userRecord = await auth.getUser(uid);

    // Si el usuario no existe, significa que es la primera vez que se registra con esta cuenta de terceros
    if (!userRecord) {
      // Realizar el registro del usuario utilizando el token de autenticación de terceros
      userRecord = await auth.createUser(decodedToken);
    }

    return userRecord;
  } catch (error) {
    throw new Error("Failed to authenticate with third party provider");
  }
};
