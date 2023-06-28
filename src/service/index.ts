import { OpenaiService } from "./openai.service";
import { VoiceService } from "./voice.service";

const voiceService: VoiceService = new VoiceService();
const openaiService: OpenaiService = new OpenaiService();
export { voiceService, openaiService };
