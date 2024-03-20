"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //ESModules
// const express = require('express') -> commonjs
const food_1 = __importDefault(require("./routes/food"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); //middleware que transforma la rq.body a un json
const PORT = 3000;
app.get("/ping", (_req, res) => {
  console.log("someone pinged here!!" + new Date().toLocaleDateString());
  res.send("pong");
});
app.use("/api/food", food_1.default);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
