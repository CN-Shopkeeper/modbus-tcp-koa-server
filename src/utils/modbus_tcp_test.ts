import modbus from "modbus-serial";
import {
  IReadResultStatus,
  IWriteResultStatus,
} from "../utils/types";

// 创建Modbus TCP客户端
const client = new modbus();

const modbusConnect = async (clientId = 1) => {
  // 连接到Modbus TCP从机
  try {
    await client.connectTCP("127.0.0.1", { port: 502 });
  } catch (error: any) {
    if (error) {
      console.error("Modbus TCP连接失败:", error, error.message);
    } else {
      console.log("Modbus TCP连接成功");
    }
  }
  client.setID(clientId);
  client.setTimeout(2000);
};

const doRead = async (dataAddress: number, length: number, type: string) => {
  console.log(type);
  switch (type) {
    // 输出线圈
    case "CoilStatus": {
      return (await client.readCoils(dataAddress, length)).data;
    }
    // 输入线圈
    case "InputStatus": {
      return (await client.readDiscreteInputs(dataAddress, length)).data;
    }
    // 输出寄存器
    case "HoldingRegisters": {
      return (await client.readHoldingRegisters(dataAddress, length)).data;
    }
    // 输入寄存器
    case "InputRegisters": {
      return (await client.readInputRegisters(dataAddress, length)).data;
    }
    default: {
      throw new Error("请求读取的存储区类型错误");
    }
  }
};

const readClient = async (
  clientId: number,
  readInfo: { dataAddress: number; length: number; type: string }[]
) => {
  // todo 根据id获取client实例
  client.setID(clientId);
  const results = await Promise.all(
    readInfo.map(async (readInfoItem) => {
      const { dataAddress, length, type } = readInfoItem;
      let resultStatus: IReadResultStatus;
      try {
        // 读取成功
        const value = await doRead(dataAddress, length, type);
        resultStatus = { status: true, value };
      } catch (error: any) {
        // 读取失败
        if (error.message === "Port Not Open") {
          // 端口未开放，尝试重连
          try {
            await modbusConnect(clientId);
            const value = await doRead(dataAddress, length, type);
            resultStatus = { status: true, value };
          } catch (error: any) {
            resultStatus = { status: false, msg: error.message };
          }
        } else {
          resultStatus = { status: false, msg: error.message };
        }
      }
      return resultStatus;
    })
  );

  console.log(`required id: ${clientId}, actual id: ${client.getID()}`);
  return { clientId, results };
};

function isNumberArray(arr: any): arr is number[] {
  return arr instanceof Array && arr.every((item) => typeof item === "number");
}

const doWrite = async (
  dataAddress: number,
  value: number[] | boolean[],
  type: string
) => {
  switch (type) {
    case "Register": {
      if (isNumberArray(value)) {
        await client.writeRegisters(dataAddress, value);
      } else {
        throw new Error("请求写入的数据类型错误");
      }
      break;
    }
    case "Coil": {
      if (!isNumberArray(value)) {
        await client.writeCoils(dataAddress, value);
      } else {
        throw new Error("请求写入的数据类型错误");
      }
      break;
    }
    default: {
      throw new Error("请求写入的存储区类型错误");
    }
  }
};

const writeClient = async (
  clientId: number,
  writeInfo: {
    dataAddress: number;
    value: number[] | boolean[];
    type: string;
  }[]
) => {
  // todo 根据id获取client实例
  client.setID(clientId);
  const results = await Promise.all(
    writeInfo.map(async (writeInfoItem) => {
      const { dataAddress, value, type } = writeInfoItem;
      let resultStatus: IWriteResultStatus;
      try {
        // 写入成功
        await doWrite(dataAddress, value, type);
        resultStatus = { status: true };
      } catch (error: any) {
        // 写入失败
        if (error.message === "Port Not Open") {
          // 端口未开放，尝试重连
          try {
            await modbusConnect(clientId);
            await doWrite(dataAddress, value, type);
            resultStatus = { status: true };
          } catch (error: any) {
            resultStatus = { status: false, msg: error.message };
          }
        } else {
          resultStatus = { status: false, msg: error.message };
        }
      }
      return resultStatus;
    })
  );
  console.log(`required id: ${clientId}, actual id: ${client.getID()}`);
  return { clientId, results };
};

export { client, modbusConnect, doRead, doWrite, readClient, writeClient };
