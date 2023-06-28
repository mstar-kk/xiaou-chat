import { VoiceController } from "./voice.controller";
import * as services from "../service";
import { OpenaiController } from "./openai.controller";

const voiceController = new VoiceController(services.voiceService);
const openaiController = new OpenaiController(services.openaiService);
export { voiceController, openaiController };
