"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const createRefer = joi_1.default.object({
    name: joi_1.default.string().required().messages({
        "any.required": "Name is required.",
    }),
    message: joi_1.default.string().options({}),
    email: joi_1.default.string().email().required().messages({
        "any.required": "Email is required.",
    }),
}).unknown(true);
exports.ReferValidation = {
    createRefer,
};
