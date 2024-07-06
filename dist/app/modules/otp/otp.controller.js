"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtpController = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const catchAsync_1 = __importDefault(require("../../../utils/catchAsync"));
const s_response_1 = __importDefault(require("../../../utils/s.response"));
const http_status_1 = __importDefault(require("http-status"));
const verifyEmail = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const otp = Math.floor(Math.random() * 90000) + 10000;
    try {
        const transporter = nodemailer_1.default.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });
        let mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: "Verify Email Address",
            html: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                font-family: Arial, sans-serif;
                border: 1px solid #ddd;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                background-color: #f9f9f9;
              }
              .header {
                text-align: center;
                padding: 10px 0;
                border-bottom: 1px solid #ddd;
              }
              .header h1 {
                font-size: 24px;
                margin: 0;
                color: #333;
              }
              .content {
                padding: 20px;
                text-align: center;
              }
              .content p {
                font-size: 18px;
                color: #555;
              }
              .otp {
                font-size: 24px;
                font-weight: bold;
                color: #333;
                margin: 20px 0;
                background-color: #e0e0e0;
                display: inline-block;
                padding: 10px 20px;
                border-radius: 5px;
              }
              .footer {
                text-align: center;
                padding: 10px 0;
                border-top: 1px solid #ddd;
                font-size: 14px;
                color: #aaa;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Email Verification</h1>
              </div>
              <div class="content">
                <p>Please use the following OTP to verify your email address:</p>
                <div class="otp">${otp}</div>
                <p>If you did not request this email, please ignore it.</p>
              </div>
              <div class="footer">
                <p>&copy; ${new Date().getFullYear()} Accredian. All rights reserved.</p>
              </div>
            </div>
          </body>
          </html>
        `,
        };
        transporter.sendMail(mailOptions, (err, info) => {
            if (info) {
                (0, s_response_1.default)(res, {
                    statusCode: http_status_1.default.OK,
                    message: "OTP!",
                    success: true,
                    data: otp,
                });
            }
        });
    }
    catch (error) {
        (0, s_response_1.default)(res, {
            statusCode: http_status_1.default.BAD_REQUEST,
            message: "OTP Error!",
            success: false,
            data: error,
        });
    }
}));
exports.OtpController = {
    verifyEmail,
};
