import { Refer } from "@prisma/client";
import prisma from "../../../utils/prisma";

const createRefer = async (payload: Refer): Promise<Refer> => {
  const result = await prisma.refer.create({ data: payload });
  return result;
};

const getRefers = async (): Promise<Refer[]> => {
  const result = await prisma.refer.findMany({});
  return result;
};

const getRefer = async (id: string): Promise<Refer | null> => {
  const result = await prisma.refer.findUnique({ where: { id } });
  return result;
};

export const ReferServer = {
  createRefer,
  getRefers,
  getRefer,
};
