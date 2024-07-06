import { Request, Response } from "express";
import catchAsync from "../../../utils/catchAsync";
import { ReferServer } from "./refer.service";
import sendResponse from "../../../utils/s.response";
import { Refer } from "@prisma/client";
import httpStatus from "http-status";

const createRefer = catchAsync(async (req: Request, res: Response) => {
  const body = req.body;
  const result = await ReferServer.createRefer(body);
  sendResponse<Refer>(res, {
    statusCode: httpStatus.OK,
    message: "Referred successfully!",
    success: true,
    data: result,
  });
});

const getRefers = catchAsync(async (req: Request, res: Response) => {
  const result = await ReferServer.getRefers();
  sendResponse<Refer[]>(res, {
    statusCode: httpStatus.OK,
    message: "Ok!",
    success: true,
    data: result,
  });
});

const getRefer = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await ReferServer.getRefer(id);
  sendResponse<Refer | null>(res, {
    statusCode: httpStatus.OK,
    message: "Ok!",
    success: true,
    data: result,
  });
});

export const ReferController = {
  createRefer,
  getRefers,
  getRefer,
};
