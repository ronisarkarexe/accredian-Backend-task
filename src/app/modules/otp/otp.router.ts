import express from "express";
import { OtpController } from "./otp.controller";

const router = express.Router();

router.post("/", OtpController.verifyEmail);

export const OtpRouters = router;
