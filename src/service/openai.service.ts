import { Configuration, CreateCompletionRequest, OpenAIApi } from "openai";
const configuration = new Configuration({
  organization: "org-8pjkhC66eNBQqClO4e4dWXEX",
  apiKey:
    process.env.OPENAI_API_KEY ||
    "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",
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

export class OpenaiService {
  async listModels() {
    const response = await openai.listModels();
    return response.data;
  }
  async chat(opts: CreateCompletionRequest) {
    const response = await openai.createCompletion(opts);
    return response.data;
  }
}
