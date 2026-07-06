---
home: true
title: 首页

heroImage: /images/logo.png
heroText: Embedded Doc
tagline: Java 后端 → 嵌入式软件 → 嵌入式硬件 · 循序渐进的全链路转型路线
heroFullScreen: true

actions:
  - text: 体系总览
    link: /overview/0_layered_arch
    type: primary
  - text: 开发总结
    link: /interview/0_linux
    type: default
  - text: 开始阅读
    link: /basics/0_linux_intro
    type: default

highlights:
  - header: 第一阶段 · 地基
    description: Linux 用得熟，是一切嵌入式开发的前提
    features:
      - title: Linux 基础
        icon: linux
        details: 发行版选择 / 文件系统层级 / 常用命令 / 文本处理三剑客
        link: /basics/0_linux_intro
      - title: Shell 脚本
        icon: terminal
        details: Bash 语法 / 变量与流程控制 / 管道重定向 / 实用脚本编写
        link: /shell/0_shell_intro
      - title: 系统管理
        icon: gears
        details: 用户权限 / 进程与服务 systemd / 包管理 / 日志与定时任务
        link: /system/0_user_permission

  - header: 第二阶段 · 编程核心
    description: 从 JVM 世界下沉到系统调用层，C 语言是通行证
    bgImageStyle:
      background-color: rgba(236, 244, 255, 0.6)
    features:
      - title: C 语言
        icon: code
        details: Java 开发者视角学 C：指针与内存 / 结构体 / gcc / make / cmake
        link: /c-lang/0_c_intro
      - title: Linux 系统编程
        icon: file-code
        details: 文件 IO / 进程与线程 / 进程间通信 IPC / 信号机制
        link: /sys-programming/0_file_io
      - title: 网络编程
        icon: network-wired
        details: Socket 编程 / IO 多路复用 epoll，对照 Java NIO 与 Netty 理解
        link: /network/0_socket

  - header: 第三阶段 · 嵌入式与硬件
    description: 从 x86 服务器走向 ARM 开发板，真正开始"摸硬件"
    features:
      - title: 嵌入式 Linux
        icon: microchip
        details: 交叉编译工具链 / U-Boot / 内核与根文件系统 / Buildroot & Yocto / 设备树
        link: /embedded/0_embedded_intro
      - title: 硬件外设
        icon: plug
        details: 硬件基础知识 / GPIO / UART 串口 / I2C / SPI 外设操作
        link: /peripherals/0_hardware_base
      - title: 驱动开发
        icon: screwdriver-wrench
        details: 字符设备驱动 / platform 驱动模型 / 中断处理
        link: /drivers/0_driver_intro
      - title: 内核机制
        icon: sitemap
        details: 内核启动流程 / 内存管理 / 进程调度
        link: /kernel/0_kernel_boot

  - header: 第四阶段 · 物联网整合
    description: 打通设备端到云端，发挥 Java 后端的差异化优势
    bgImageStyle:
      background-color: rgba(236, 244, 255, 0.6)
    features:
      - title: 工业协议
        icon: tower-broadcast
        details: Modbus RTU/TCP / CAN 总线 / MQTT 上云
        link: /protocols/0_modbus
      - title: IoT 网关
        icon: server
        details: 边缘网关架构 / 边缘计算 / 与 Java 后端服务集成
        link: /gateway/0_gateway_arch
      - title: 调试工具
        icon: bug
        details: gdb 调试 / strace & perf / 交叉调试与远程调试
        link: /debugging/0_gdb

  - header: 延伸阶段 · 嵌入式硬件
    description: 从「懂硬件」到「能做简单硬件」，带着软件阶段的问题来学
    features:
      - title: 电路与模数电
        icon: bolt
        details: 电路基础 / 三极管与运放 / 逻辑门，只学够用的
        link: /hardware/0_circuit_base
      - title: 原理图与仪器
        icon: compass-drafting
        details: 读懂开发板原理图 / 万用表 / 示波器 / 逻辑分析仪实战
        link: /hardware/2_schematic
      - title: PCB 设计入门
        icon: microchip
        details: 立创 EDA 画板 / 嘉立创打样，做一块自己的传感器采集板
        link: /hardware/4_pcb_design
      - title: 传感器与采集
        icon: gauge
        details: ADC / 运放调理 / 电能计量采样原理，从物理量到数字量
        link: /hardware/6_sensor_adc

  - header: 参考视角 · MCU
    description: 南向联调对象，懂即可不深耕——网关对面坐着的就是 MCU 组
    bgImageStyle:
      background-color: rgba(236, 244, 255, 0.6)
    features:
      - title: MCU 概述
        icon: microchip
        details: STM32 / ESP32 / 计量 SoC 家族，MCU 与嵌入式 Linux 的选型边界
        link: /mcu/0_mcu_intro
      - title: 裸机与 RTOS
        icon: list-check
        details: 寄存器编程思维 / FreeRTOS 任务调度，对照 Linux 驱动与 pthread 理解
        link: /mcu/1_bare_metal
      - title: 与 Linux 网关协作
        icon: handshake
        details: 串口协议设计 / 固件 OTA / 联调定位问题 / 跨团队工程约定
        link: /mcu/3_mcu_linux_link

  - header: 项目驱动 · 实战清单
    description: 每个阶段配一个可写进简历的项目，学完即产出
    features:
      - title: 项目一 · MQTT 设备模拟器
        icon: satellite-dish
        details: 模拟设备 → EMQX → Spring Boot 接收平台，跑通设备到平台的第一条链路
        link: /projects/0_mqtt_simulator
      - title: 项目二 · Modbus 采集网关
        icon: diagram-project
        details: Modbus 设备 → RS485 → Linux 网关 → MQTT 上报，关键的嵌入式网关项目
        link: /projects/1_modbus_gateway
      - title: 项目三 · IoT 平台
        icon: cloud
        details: 类 ThingsBoard 简化版：设备管理 / 时序存储 / 告警规则 / Grafana 看板
        link: /projects/2_iot_platform
      - title: 项目四 · AI 边缘分析网关
        icon: robot
        details: 边缘数据过滤 / 断网缓存 / ONNX 异常检测 / 云端同步
        link: /projects/3_edge_ai_gateway
      - title: 项目五 · PCB 到云端全链路闭环
        icon: infinity
        details: 自制采集板 + 自写驱动 + 自建网关 + Java 平台，终极闭环项目
        link: /projects/4_full_chain
---
