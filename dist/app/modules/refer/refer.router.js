"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferRouters = void 0;
const express_1 = __importDefault(require("express"));
const refer_controller_1 = require("./refer.controller");
const validation_1 = require("../../../utils/validation");
const refer_validation_1 = require("./refer.validation");
const router = express_1.default.Router();
router.post("/", (0, validation_1.validateRequest)(refer_validation_1.ReferValidation.createRefer), refer_controller_1.ReferController.createRefer);
router.get("/", refer_controller_1.ReferController.getRefers);
router.get("/:id", refer_controller_1.ReferController.getRefer);
exports.ReferRouters = router;
