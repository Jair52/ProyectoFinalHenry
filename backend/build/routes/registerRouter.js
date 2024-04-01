"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signUpNewUser_1 = require("../handlers/signUpNewUser");
const router = express_1.default.Router();
router.post("/signup", signUpNewUser_1.signUpNewUser);
exports.default = router;
