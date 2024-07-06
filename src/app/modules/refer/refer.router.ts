import express from "express";
import { ReferController } from "./refer.controller";
import { validateRequest } from "../../../utils/validation";
import { ReferValidation } from "./refer.validation";

const router = express.Router();

router.post(
  "/",
  validateRequest(ReferValidation.createRefer),
  ReferController.createRefer
);

router.get("/", ReferController.getRefers);

router.get("/:id", ReferController.getRefer);

export const ReferRouters = router;
