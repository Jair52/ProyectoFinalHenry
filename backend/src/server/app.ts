import { Request, Response } from "express";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "../routes/index";

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use((req: Request, res: Response, next) => {
  const { method, originalUrl } = req; // Desestructura solo las propiedades que necesitas
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  console.log(`${method} ${originalUrl}`); // Usa las propiedades desestructuradas

  next();
});

server.use(router);

export default server;
