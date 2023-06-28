import * as Router from "koa-router";
import * as Controller from "./controller";

const router = new Router();
router.get(
  "/api/xf/wsurl",
  Controller.voiceController.getEndpoint.bind(Controller.voiceController)
);
router.get(
  "/api/openai/listModels",
  Controller.openaiController.getModelList.bind(Controller.openaiController)
);
router.post("/api/openai/chat", Controller.openaiController.chat.bind(Controller.openaiController));


export { router };
