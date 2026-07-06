# Embedded Doc

Java 后端 → 嵌入式软件 → 嵌入式硬件，循序渐进的全链路学习知识库，基于 [VuePress](https://v2.vuepress.vuejs.org/zh/) + [vuepress-theme-hope](https://theme-hope.vuejs.press/zh/) 构建。

相关 Java 项目：[java-doc](https://github.com/Clarence404/java-doc)（Java 后端知识体系）。

## 快速开始

```bash
npm install
npm run docs:dev     # 本地预览 http://localhost:1001/embedded-doc/
npm run docs:build   # 构建产物在 docs/.vuepress/dist
```

## 学习路线

> 建议先读 [体系总览](docs/overview/0_layered_arch.md)，理解云·Linux·MCU·硬件四层如何对接、各模块处在哪一层。

```
大阶段一 · Java 后端（已有，见 clarence-java-doc）
    衔接资产：网络编程 / 并发 / 协议 / MQTT / IoT 平台

大阶段二 · 嵌入式软件（主线）
    地基：  Linux 基础 → Shell → 系统管理
    核心：  C 语言 → 系统编程 → 网络编程
    嵌入式：嵌入式 Linux → 硬件外设
    进阶：  驱动开发 → 内核机制
    整合：  工业协议 → IoT 网关 · 调试工具贯穿全程

大阶段三 · 嵌入式硬件（延伸，从「懂」到「能做」）
    电路基础 → 模电数电 → 原理图 → 仪器实战 → PCB 设计 → 电源信号 → 传感器采集

参考线 · MCU（懂即可，服务于南向联调）
    MCU 概述 → 裸机 → RTOS → 与 Linux 网关协作

项目驱动：五个实战项目贯穿三大阶段，终极项目为「PCB 到云端全链路闭环」
```

目录结构与文档约定见 [CLAUDE.md](./CLAUDE.md)。
