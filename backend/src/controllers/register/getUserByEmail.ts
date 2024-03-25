import { auth } from "../../auth/firebaseAdmin";

export const getUserByEmail = async (email: string) => {
  try {
    const userRecord = await auth.getUserByEmail(email);
    console.log(userRecord);
    return userRecord;
  } catch (error) {
    throw new Error("User not found");
  }
};
