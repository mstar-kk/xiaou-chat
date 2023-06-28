import { Context } from "koa";
import { OpenaiService } from "../service/openai.service";
import { resOk } from "../utils/response";

export class OpenaiController {
  private openaiService: OpenaiService;
  constructor(openaiService: OpenaiService) {
    this.openaiService = openaiService;
  }
  async getModelList(ctx: Context) {
    const result = await this.openaiService.listModels();
    ctx.body = resOk(result);
    return;
  }
  async chat(ctx: Context) {
    try {
      const reqBody = ctx.request.body;
      const result = await this.openaiService.chat({
        model: reqBody.model,
        prompt: reqBody.prompt,
      });
      ctx.body = resOk(result);
      return;
    } catch (err) {
      ctx.status = 503;
      ctx.body = err.message;
    }
  }
}
