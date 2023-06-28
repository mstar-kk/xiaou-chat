import { Context } from "koa";
import { VoiceService } from "../service/voice.service";
import { resOk } from "../utils/response";

export class VoiceController {
  private voiceService: VoiceService;
  constructor(voiceService: VoiceService) {
    this.voiceService = voiceService;
  }
  async getEndpoint(ctx: Context) {
    ctx.body = resOk(await this.voiceService.getWebSocketUrl());
    return;
  }
}
