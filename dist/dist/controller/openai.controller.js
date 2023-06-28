"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenaiController = void 0;
const response_1 = require("../utils/response");
class OpenaiController {
    constructor(openaiService) {
        this.openaiService = openaiService;
    }
    async getModelList(ctx) {
        ctx.body = (0, response_1.resOk)(await this.openaiService.listModels());
        return;
    }
}
exports.OpenaiController = OpenaiController;
