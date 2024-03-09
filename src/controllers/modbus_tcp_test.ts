import Koa from "koa";

import {
  IReadResultItem,
  IWriteResultItem,
} from "../utils/types";

import {
  writeClient,
  readClient,
} from "../utils/modbus_tcp_test";
class Controller {

  async Read(ctx: Koa.Context) {
    // 请求参数验证
    ctx.verifyParams({
      data: {
        type: "array",
        itemType: "object",
        required: true,
        rule: {
          clientId: "number",
          readInfo: {
            type: "array",
            itemType: "object",
            required: true,
            rule: {
              dataAddress: "number",
              length: "number",
              type: "string",
            },
          },
        },
      },
    });

    const { data } = ctx.request.body;

    // const readResults: IReadResultItem[] = await Promise.all(
    //   (data as any[]).map((item) => {
    //     return readClient(item.clientId, item.readInfo);
    //   })
    // );

    // 结果数组
    const readResults: IReadResultItem[] = [];
    for (const item of data) {
      // 遍历每一个读取请求并处理
      readResults.push(await readClient(item.clientId, item.readInfo));
    }

    ctx.body = readResults;
  }

  async Write(ctx: Koa.Context) {
    // 请求参数验证
    ctx.verifyParams({
      data: {
        type: "array",
        itemType: "object",
        required: true,
        rule: {
          clientId: "number",
          writeInfo: {
            type: "array",
            itemType: "object",
            required: true,
            rule: {
              dataAddress: "number",
              type: "string",
              value: { type: "array", required: true },
            },
          },
        },
      },
    });

    const { data } = ctx.request.body;

    // const writeResults = await Promise.all(
    //   (data as any[]).map((item) => {
    //     return writeClient(item.clientId, item.writeInfo);
    //   })
    // );

    // 结果数组
    const writeResults: IWriteResultItem[] = [];
    for (const item of data) {
      // 遍历每一个读取请求并处理
      writeResults.push(await writeClient(item.clientId, item.writeInfo));
    }

    ctx.body = writeResults;
  }
}

export default new Controller();
