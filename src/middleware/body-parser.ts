import * as BodyParser from "body-parser";
import { IncomingMessage } from "http";
import { Context, Next } from "koa";

const jsonParser = BodyParser.json();
// const urlencodedParser = BodyParser.urlencoded();
// const textParser = BodyParser.text();
// const rawParser = BodyParser.raw();
declare module "koa" {
  interface Request {
    body?: any;
  }
}
const bodyparser = async (ctx: Context, next: Next) => {
  jsonParser(ctx.req, ctx.res, async () => {
    ctx.request.body = (ctx.req as any).body;
    return await next();
  });
};
export { bodyparser };
