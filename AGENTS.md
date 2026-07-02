# clarence-linux-doc 知识库总览

> Java 后端转嵌入式 Linux / 硬件方向的学习文档站，基于 VuePress 构建。
> 定位：学习路线 + 实践笔记 + 开发总结，姊妹项目为 clarence-java-doc（Java 后端知识体系）。

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
├── gateway/          IoT 网关：网关架构 / 边缘计算 / 与 Java 后端集成
└── debugging/        调试工具：gdb / strace & perf / 交叉调试
```

---

## 学习路线（目录即路线）

```
第一阶段（地基）：  basics → shell → system
第二阶段（核心）：  c-lang → sys-programming → network
第三阶段（嵌入式）：embedded → peripherals
第四阶段（进阶）：  drivers → kernel
第五阶段（整合）：  protocols → gateway · debugging 贯穿全程
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
