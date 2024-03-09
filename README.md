# modbus-tcp-koa-server

项目分成三个部分：

1. 基于`koa2`的后端，作为`Modbus Tcp`的客户端与从机连接。接收`Http`请求并根据请求参数对从机进行读写。

2. 一个基于`python pymodbus`的客户端，用于循环读取从机信息并通过`winsound`播放对应的声音。

3. 一个简单的`html`页面，用于循环向`koa2`后端发送请求，请求内容是 ~~不知道为什么被演奏的~~ `《春日影》`的简谱的信息。

由于本项目为纯软件系统，没有任何硬件设备，需要大家自行使用 modbus slave 的模拟软件进行从机的模拟。

## koa2 后端程序

主要工作是设计了`读取`和`写入`两个接口，用于批量读取或写入任意数量的从机的任意数量的存储区。

### 读取

可以指定若干个从机，对其发起读写存储区请求。每一个请求需要指定读取的起始地址、长度和读取的存储区类型

| <!-- --> | <!-- -->                |
| -------- | ----------------------- |
| 方法     | POST                    |
| UEL      | `/modbus_tcp_test/read` |
| 请求参数 | body parameter          |

请求数据说明：

| 参数名      | 参数类型     | 参数说明               |
| ----------- | ------------ | ---------------------- |
| clientId    | number       | modbus slave 的 id     |
| readInfo    | array        | 对应从机的请求内容数组 |
| dataAddress | number       | 数据起始地址           |
| length      | number       | 请求数据长度           |
| type        | string(enum) | 请求读取的存储区类型   |

`type`的可取值为:

- HoldingRegisters 输出寄存器

- InputRegisters 输入寄存器

- CoilStatus 输出线圈

- InputStatus 输入线圈

请求参数示例：

```json
{
  "data": [
    {
      "clientId": 1,
      "readInfo": [
        {
          "dataAddress": 0,
          "length": 8,
          "type": "HoldingRegisters"
        }
      ]
    }
  ]
}
```

返回数据说明：

| 参数名   | 参数类型 | 参数说明             |
| -------- | -------- | -------------------- |
| clientId | number   | modbus slave 的 id   |
| results  | array    | 请求结果数组         |
| status   | boolean  | 该请求是否成功       |
| value    | array    | 请求结果             |
| msg      | string   | 当请求失败的错误信息 |

返回数据示例：

```json
[
  {
    "clientId": 1,
    "results": [
      {
        "status": true,
        "value": [0, 1, 2, 3, 4, 5, 6, 7]
      }
    ]
  },
  {
    "clientId": 2,
    "results": [
      {
        "status": false,
        "msg": "Timed out"
      }
    ]
  }
]
```

### 写入

可以指定若干个从机，对其发起读写存储区请求。每一个请求需要指定读取的起始地址、长度和读取的存储区类型

| <!-- --> | <!-- -->                 |
| -------- | ------------------------ |
| 方法     | POST                     |
| UEL      | `/modbus_tcp_test/write` |
| 请求参数 | body parameter           |

请求数据说明：

| 参数名      | 参数类型              | 参数说明               |
| ----------- | --------------------- | ---------------------- |
| clientId    | number                | modbus slave 的 id     |
| writeInfo   | array                 | 对应从机的请求内容数组 |
| dataAddress | number                | 数据起始地址           |
| value       | number[] or boolean[] | 请求写入的数据数组     |
| type        | string(enum)          | 请求读取的存储区类型   |

`type`的可取值为:

- Register 输出寄存器

- Coil 输出线圈

请求参数示例：

```json
{
  "data": [
    {
      "clientId": 1,
      "writeInfo": [
        {
          "dataAddress": 0,
          "type": "Register",
          "value": [1, 2, 3, 4]
        }
      ]
    },
    {
      "clientId": 2,
      "writeInfo": [
        {
          "dataAddress": 1,
          "type": "Coil",
          "value": [true, false, true, true, false]
        }
      ]
    }
  ]
}
```

返回数据说明：

| 参数名   | 参数类型 | 参数说明             |
| -------- | -------- | -------------------- |
| clientId | number   | modbus slave 的 id   |
| results  | array    | 请求结果数组         |
| status   | boolean  | 该请求是否成功       |
| msg      | string   | 当请求失败的错误信息 |

返回数据示例：

```json
[
  {
    "clientId": 1,
    "results": [
      {
        "status": true
      }
    ]
  },
  {
    "clientId": 2,
    "results": [
      {
        "status": false,
        "msg": "Timed out"
      }
    ]
  }
]
```

todo:

- 对不同从机使用单独的 client 连接

- 设计数据存储已经连接的从机

## 基于 python pymodbus 的客户端

用于模拟一个发声设备。

使用死循环不断读取 id 为 1 的从机 的前三个输出寄存器。

- 寄存器 0：表示当前音节的序号，只有当序号发生改变时才会更改输出的声音。

- 寄存器 1：表示音节标识，包含 1、2、3、4、5、6、7 及其高音和低音(乐理白痴的拙劣理解)，根据音节标识转为发声频率。

- 寄存器 2：表示发声的持续时间，主要是从简谱中提取的节拍信息(乐理白痴的拙劣处理)

由于`winsound.beep`会阻塞当前的线程，可能会造成错过音节或导致节奏错乱的情况。当满足更改输出的条件时，会创建一个新的线程让`winsound`按照指定的频率和持续时间`beep`。

## `html`页面

用户操作的页面，这里简化成一个按钮。

当用户按下按钮时，循环读取`《春日影》`的简谱信息，并根据节奏定时向服务器发送更改 id 为 1 的从机的寄存器的请求，以达到让发声设备演奏`《春日影》`的功能。

简谱信息存储在`public\haruhikage_notations.js`，是我用人工 3 小时手动敲出来的 1.3k 行的 json 对象。

简谱信息说明

| 参数名   | 参数类型 | 参数说明 |
| -------- | -------- | -------- |
| note     | number   | 音节     |
| duration | number   | 持续时间 |
