import Joi from "joi";

const createRefer = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "Name is required.",
  }),
  message: Joi.string().options({}),
  email: Joi.string().email().required().messages({
    "any.required": "Email is required.",
  }),
}).unknown(true);

export const ReferValidation = {
  createRefer,
};
