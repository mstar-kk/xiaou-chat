"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodyparser = void 0;
const BodyParser = require("body-parser");
const jsonParser = BodyParser.json();
const bodyparser = (ctx, next) => {
    return jsonParser(ctx.req, ctx.res, next);
};
exports.bodyparser = bodyparser;
