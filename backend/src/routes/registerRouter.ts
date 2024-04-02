import express from "express";
<<<<<<< HEAD
import { signUpNewUser } from "../handlers/signUpNewUser";
=======
import { signUpNewUser } from "../handlers/register/signUpNewUser";
import { newUser } from "../controllers/newUserDb";
>>>>>>> 6d0d62304953cbc0dd54954e1f83348b97f4ca88

const router = express.Router();

router.post("/signup", signUpNewUser);
<<<<<<< HEAD

export default router;
=======
router.post("/signupDb", newUser)
export default router;
>>>>>>> 6d0d62304953cbc0dd54954e1f83348b97f4ca88
