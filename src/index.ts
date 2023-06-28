import * as Koa from "koa";
import { bodyparser } from "./middleware/body-parser";
import { router } from "./routes";
import * as WebSocket from "ws";

function main() {
  const app = new Koa();
  app.use(bodyparser);
  app.use(router.routes());
  app.listen(3000, function () {
    console.log("listening 3000");
  });
  // const wsServer = new WebSocket.Server({ port: 8080 });
  // wsServer.on("connection", (ws) => {
  //   console.log("new websocket connection");
  //   ws.send("welcome, you are connected");
  //   ws.on("message", (data) => {
  //     console.log("data received", data);
  //   });
  //   ws.on("close", () => {
  //     console.log("the client has disconnected");
  //   });
  // });
}
main();
