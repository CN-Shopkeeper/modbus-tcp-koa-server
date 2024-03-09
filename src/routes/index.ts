import Koa from "koa";
import Router from "koa-router";
import { prefix } from "../config";

import modbusTcpTestRouter from "./modbus_tcp_test";

const router = new Router({ prefix });
router.get("/", async (ctx) => {
  ctx.body = "Hello, World!";
});

export default (app: Koa) => {
  app.use(router.routes()).use(router.allowedMethods());
  app.use(modbusTcpTestRouter.routes()).use(router.allowedMethods());
};
