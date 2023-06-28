"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const body_parser_1 = require("./middleware/body-parser");
const routers_1 = require("./routers");
const WebSocket = require("ws");
function main() {
    const app = new Koa();
    app.use(body_parser_1.bodyparser);
    app.use(routers_1.router.routes());
    app.listen(3000, function () {
        console.log("listening 3000");
    });
    const wsServer = new WebSocket.Server({ port: 8080 });
    wsServer.on("connection", (ws) => {
        console.log("new websocket connection");
        ws.send("welcome, you are connected");
        ws.on("message", (data) => {
            console.log("data received", data);
        });
        ws.on("close", () => {
            console.log("the client has disconnected");
        });
    });
}
main();
