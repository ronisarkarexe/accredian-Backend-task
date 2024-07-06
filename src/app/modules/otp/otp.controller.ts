import nodemailer from "nodemailer";
import catchAsync from "../../../utils/catchAsync";
import { Request, Response } from "express";
import sendResponse from "../../../utils/s.response";
import httpStatus from "http-status";

const verifyEmail = catchAsync(async (req: Request, res: Response) => {
  const { email } = req.body;
  const otp = Math.floor(Math.random() * 90000) + 10000;
  try {
    const transporter = nodemailer.createTransport({
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
        sendResponse(res, {
          statusCode: httpStatus.OK,
          message: "OTP!",
          success: true,
          data: otp,
        });
      }
    });
  } catch (error) {
    sendResponse(res, {
      statusCode: httpStatus.BAD_REQUEST,
      message: "OTP Error!",
      success: false,
      data: error,
    });
  }
});

export const OtpController = {
  verifyEmail,
};
