"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoiceController = void 0;
const response_1 = require("../utils/response");
class VoiceController {
    constructor(voiceService) {
        this.voiceService = voiceService;
    }
    async getEndpoint(ctx) {
        ctx.body = (0, response_1.resOk)(await this.voiceService.getWebSocketUrl());
        return;
    }
}
exports.VoiceController = VoiceController;
