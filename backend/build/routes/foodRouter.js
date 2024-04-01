"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getFood_1 = require("../controllers/getFood");
const getFoodFiltro_1 = require("../controllers/getFoodFiltro");
const router = express_1.default.Router();
router.get("/", getFood_1.getFood);
router.get("/filtro", getFoodFiltro_1.getFoodFiltro);
exports.default = router;
