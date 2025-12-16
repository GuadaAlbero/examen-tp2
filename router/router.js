import { Router } from "express";
import controller from "../container/container.js";

import validateId from "../middlewares/validateId.js";
import validateTipo from "../middlewares/validateTipo.js";
import validateNumbers from "../middlewares/validateNumbers.js";
import validateTimestamp from "../middlewares/validateTimestamp.js";

const router = Router();

router.get("/sensores", controller.getAll);

router.post(
  "/lecturas",
  validateId,
  validateTipo,
  validateNumbers(["valor"]),
  validateTimestamp,
  controller.createOrUpdate
);

export default router;

