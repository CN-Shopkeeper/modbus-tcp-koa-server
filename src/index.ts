import Koa from "koa";
import koaBody from "koa-body";
import koaJsonError from "koa-json-error";
import cors from "@koa/cors";
import routing from "./routes";

import { port } from "./config";
const koaParameter = require("koa-parameter");

import { modbusConnect } from "./utils/modbus_tcp_test";

const app = new Koa();

app.use(cors());
app.use(
  koaJsonError({
    postFormat: (error, { stack, ...rest }) => {
      return process.env.NODE_ENV === "production" ? rest : { stack, ...rest };
    },
  })
);

app.use(koaBody());

// 注册路由
routing(app);
app.use(koaParameter(app));

app.listen(port, () => {
  console.log("程序启动在", port, "端口, 环境是:", process.env.NODE_ENV);
});
modbusConnect();

export default app;
