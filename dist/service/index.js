"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openaiService = exports.voiceService = void 0;
const openai_service_1 = require("./openai.service");
const voice_service_1 = require("./voice.service");
const voiceService = new voice_service_1.VoiceService();
exports.voiceService = voiceService;
const openaiService = new openai_service_1.OpenaiService();
exports.openaiService = openaiService;
