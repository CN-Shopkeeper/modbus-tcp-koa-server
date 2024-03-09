from pymodbus.client.tcp import ModbusTcpClient
import winsound
import threading
import time

# 初始化Modbus TCP客户端
client = ModbusTcpClient('127.0.0.1', port=502)

# 连接到Modbus从机
client.connect()

# 定义简谱音符与频率的映射关系
# 这里使用了C调的简谱，数字表示音符相对于C的偏移量
# 例如，1表示C，2表示D，3表示E，依此类推
note_map = {
    1: 261.63,  # C4
    2: 293.66,  # D4
    3: 329.63,  # E4
    4: 349.23,  # F4
    5: 392.00,  # G4
    6: 440.00,  # A4
    7: 493.88   # B4
}

# 定义一个播放声音的函数


def play_sound(index, freq, dura):
    print(index, freq, dura)
    winsound.Beep(freq, dura)


try:
    pre_index = -1
    while True:
        # 读取0地址的数据
        result = client.read_holding_registers(address=0, count=3, slave=1)

        # 如果读取成功，则播放对应的音乐
        if result:
            [index, note, duration] = result.registers[0:3]
            if index != pre_index:
                pre_index = index
                # 获取整除结果，表示高低音
                quotient = note // 10
                # 获取余数
                remainder = note % 10

                if remainder in note_map:
                    frequency = note_map[remainder]
                    if quotient == 0:
                        frequency /= 2
                    if quotient == 2:
                        frequency *= 2

                    # 播放音符
                        # 创建一个新线程并启动
                    sound_thread = threading.Thread(
                        target=play_sound(index, int(frequency), duration))
                    sound_thread.start()
                    # winsound.Beep(int(frequency), duration)


except KeyboardInterrupt:
    # 当接收到 KeyboardInterrupt 信号时，停止循环并关闭 Modbus TCP 连接
    print("KeyboardInterrupt: Stopping the program.")
    client.close()
