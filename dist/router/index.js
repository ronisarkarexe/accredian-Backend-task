"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const refer_router_1 = require("../app/modules/refer/refer.router");
const otp_router_1 = require("../app/modules/otp/otp.router");
const router = express_1.default.Router();
const routers = [
    {
        path: "/refer",
        route: refer_router_1.ReferRouters,
    },
    {
        path: "/otp",
        route: otp_router_1.OtpRouters,
    },
];
routers.forEach((route) => router.use(route.path, route.route));
exports.default = router;
