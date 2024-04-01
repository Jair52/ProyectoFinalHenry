import express from "express";
import { signUpNewUser } from "../handlers/signUpNewUser";

const router = express.Router();

router.post("/signup", signUpNewUser);

export default router;
