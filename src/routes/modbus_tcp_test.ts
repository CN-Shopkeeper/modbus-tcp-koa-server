import Router from "koa-router";
import controller from "../controllers/modbus_tcp_test";

import { prefix } from "../config";
const router = new Router({ prefix: `${prefix}/modbus_tcp_test` });

const { Read, Write } = controller;

router.post("/read", Read);
router.post("/write", Write);
export default router;
