"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenaiService = void 0;
const openai_1 = require("openai");
const configuration = new openai_1.Configuration({
    organization: "org-8pjkhC66eNBQqClO4e4dWXEX",
    apiKey: process.env.OPENAI_API_KEY ||
        "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",
});
const openai = new openai_1.OpenAIApi(configuration);
class OpenaiService {
    async listModels() {
        const response = await openai.listModels();
        return response.data;
    }
    async chat(opts) {
        const response = await openai.createCompletion(opts);
        return response.data;
    }
}
exports.OpenaiService = OpenaiService;
