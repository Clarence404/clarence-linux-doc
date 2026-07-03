# clarence-linux-doc 知识库总览

> Java 后端 → 嵌入式软件 → 嵌入式硬件，循序渐进的全链路学习文档站，基于 VuePress 构建。
> 定位：Java 能力向下延伸而非换赛道——先做「懂硬件的软件工程师」（主线），再到「能做简单硬件」（延伸），
> 终点是覆盖 PCB → 驱动 → 网关 → 云平台完整链路的工程师。姊妹项目为 clarence-java-doc（Java 后端知识体系）。

---

## 项目结构

```
docs/
├── interview/        开发总结：Linux / C / 嵌入式高频问题汇总
├── basics/           Linux 基础：概述 / 文件系统 / 常用命令 / 文本三剑客
├── shell/            Shell：基础语法 / 脚本编程
├── system/           系统管理：用户权限 / 进程服务 systemd / 包管理日志
├── c-lang/           C 语言（Java 开发者视角）：指针内存 / 结构体 / gcc & make & cmake
├── sys-programming/  Linux 系统编程：文件 IO / 进程 / 线程 / IPC / 信号
├── network/          网络编程：Socket / IO 多路复用 epoll
├── embedded/         嵌入式 Linux：交叉编译 / U-Boot / 内核 rootfs / Buildroot & Yocto / 设备树
├── peripherals/      硬件外设：硬件基础 / GPIO / UART 串口 / I2C & SPI
├── drivers/          驱动开发：字符设备 / platform 驱动 / 中断
├── kernel/           内核机制：启动流程 / 内存管理 / 进程调度
├── protocols/        工业协议：Modbus / CAN / MQTT
├── gateway/          IoT 网关：网关架构 / 边缘计算 / 与 Java 后端集成 / 边缘 AI
├── hardware/         嵌入式硬件：电路基础 / 模电数电 / 原理图 / 仪器 / PCB / 电源信号 / 传感器采集
├── projects/         实战项目：MQTT 模拟器 / Modbus 网关 / IoT 平台 / AI 边缘网关 / PCB 到云端闭环
└── debugging/        调试工具：gdb / strace & perf / 交叉调试
```

---

## 学习路线（目录即路线）

```
大阶段一 · Java 后端（已有，沉淀在 clarence-java-doc）
    衔接资产：网络编程 / 并发 / 协议 / MQTT / IoT 平台

大阶段二 · 嵌入式软件（主线，本站核心）
    地基：  basics → shell → system
    核心：  c-lang → sys-programming → network
    嵌入式：embedded → peripherals
    进阶：  drivers → kernel
    整合：  protocols → gateway · debugging 贯穿全程

大阶段三 · 嵌入式硬件（延伸，从「懂」到「能做」）
    hardware：电路基础 → 模电数电 → 原理图 → 仪器 → PCB → 电源信号 → 传感器采集

项目驱动：projects 五个项目贯穿三大阶段，项目五（PCB 到云端闭环）为终极整合
```

---

## 文档约定

- 每个目录下文件以数字前缀排序：`0_xxx.md`、`1_xxx.md`，侧边栏按前缀数字自动排序。
- 侧边栏标题取自每篇文档的第一个 `# 一级标题`（见 `docs/.vuepress/config.js` 的 `getSidebarFromDir`）。
- 新增目录时需要同步修改 `config.js` 中的 `navbar`（flat + dropdown 两份）和 `sidebar`。
- 图片资源放 `docs/assets/<模块名>/` 下。
- 导航栏风格由 `.env` 的 `NAVBAR_STYLE` 控制（flat / dropdown）。

## 常用命令

```bash
npm run docs:dev        # 本地开发（端口 1001）
npm run docs:build      # 构建静态站点
npm run docs:clean-dev  # 清缓存后开发
```
