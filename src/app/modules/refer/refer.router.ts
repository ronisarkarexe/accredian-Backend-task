import express, { Request, Response } from "express";
import { ReferController } from "./refer.controller";

const router = express.Router();

router.post("/", ReferController.createRefer);

router.get("/", ReferController.getRefers);

router.get("/:id", ReferController.getRefer);

export const ReferRouters = router;
