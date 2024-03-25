import { auth } from "../../auth/firebaseAdmin";

export const registerNewUser = async (email: string, password: string) => {
  try {
    const userRecord = await auth.createUser({
      email,
      password,
    });
    return userRecord;
  } catch (error) {
    throw new Error("Error registering user with email and password");
  }
};
