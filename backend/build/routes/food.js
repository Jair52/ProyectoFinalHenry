"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getFood_1 = require("../controllers/getFood");
const getFoodId_1 = require("../controllers/getFoodId");
const postFood_1 = require("../controllers/postFood");
// import { putFood } from '../controllers/putFood';
// import { updateFood } from '../controllers/updateFood';
// import * as foodServices from '../services/foodServices';
const router = express_1.default.Router();
router.get('/', getFood_1.getFood);
router.get('/:id', getFoodId_1.getFoodId);
router.post('/', postFood_1.postFood);
// router.put('/:id', async (req, res) => { 
//     const foodActualizado = req.body;
//     const foodID = req.params.id;
//     const index = foodServices.findById(Number(foodID));
//     foodServices[index] = 
// });
exports.default = router;
