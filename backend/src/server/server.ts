import { Request, Response } from "express";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "../routes";

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use((req: Request, res: Response, next) => {
  const { method, originalUrl } = req;
  res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // Permitir acceso desde http://localhost:5173
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Permitir los métodos HTTP especificados
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Permitir los encabezados especificados
  console.log(`${method} ${originalUrl}`);
  next();
});

app.use("/api", router);

export default app;
