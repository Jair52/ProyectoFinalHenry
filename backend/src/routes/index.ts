import { Router } from "express";

import foodRouter from "./foodRouter";
import registerRouter from "./registerRouter";

const router = Router();

router.use("/api/food", foodRouter);
router.use("/api/register", registerRouter);

export default router;
