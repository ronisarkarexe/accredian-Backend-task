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
exports.ReferController = void 0;
const catchAsync_1 = __importDefault(require("../../../utils/catchAsync"));
const refer_service_1 = require("./refer.service");
const s_response_1 = __importDefault(require("../../../utils/s.response"));
const http_status_1 = __importDefault(require("http-status"));
const createRefer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const result = yield refer_service_1.ReferServer.createRefer(body);
    (0, s_response_1.default)(res, {
        statusCode: http_status_1.default.OK,
        message: "Referred successfully!",
        success: true,
        data: result,
    });
}));
const getRefers = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield refer_service_1.ReferServer.getRefers();
    (0, s_response_1.default)(res, {
        statusCode: http_status_1.default.OK,
        message: "Ok!",
        success: true,
        data: result,
    });
}));
const getRefer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield refer_service_1.ReferServer.getRefer(id);
    (0, s_response_1.default)(res, {
        statusCode: http_status_1.default.OK,
        message: "Ok!",
        success: true,
        data: result,
    });
}));
exports.ReferController = {
    createRefer,
    getRefers,
    getRefer,
};
