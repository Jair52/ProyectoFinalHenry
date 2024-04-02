"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
<<<<<<< HEAD
const signUpNewUser_1 = require("../handlers/signUpNewUser");
=======
const signUpNewUser_1 = require("../handlers/register/signUpNewUser");
const newUserDb_1 = require("../controllers/newUserDb");
>>>>>>> 6d0d62304953cbc0dd54954e1f83348b97f4ca88
const router = express_1.default.Router();
router.post("/signup", signUpNewUser_1.signUpNewUser);
router.post("/signupDb", newUserDb_1.newUser);
exports.default = router;
