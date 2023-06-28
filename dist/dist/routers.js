"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const Router = require("koa-router");
const Controller = require("./controller");
const router = new Router();
exports.router = router;
router.get("/api/xf/wsurl", Controller.voiceController.getEndpoint.bind(Controller.voiceController));
router.get("/api/openai/listModels", Controller.openaiController.getModelList.bind(Controller.openaiController));
