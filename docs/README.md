---
home: true
title: 首页

heroImage: /images/logo.png
heroText: Clarence Linux Doc
tagline: Java 后端 → 嵌入式 Linux / 硬件方向 · 学习路线与实践笔记
heroFullScreen: true

actions:
  - text: 开发总结
    link: /interview/0_linux
    type: primary
  - text: 开始阅读
    link: /basics/0_linux_intro
    type: default
  - text: 嵌入式 Linux
    link: /embedded/0_embedded_intro
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
---
