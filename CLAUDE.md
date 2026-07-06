# embedded-doc 知识库总览

> Java 后端 → 嵌入式软件 → 嵌入式硬件，循序渐进的全链路学习文档站，基于 VuePress 构建。
> 定位：Java 能力向下延伸而非换赛道——先做「懂硬件的软件工程师」（主线），再到「能做简单硬件」（延伸），
> 终点是覆盖 PCB → 驱动 → 网关 → 云平台完整链路的工程师。姊妹项目为 clarence-java-doc（Java 后端知识体系）。

---

## 项目结构

```
docs/
├── overview/         体系总览（导读）：四层对接体系 / Linux 与 MCU 区别 / 行业分工地图
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
├── hardware/         嵌入式硬件（延伸）：电路基础 / 模电数电 / 原理图 / 仪器 / PCB / 电源信号 / 传感器采集
├── mcu/              MCU（参考，懂即可）：概述 / 裸机 / RTOS / 与 Linux 网关协作
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

参考线 · MCU（懂即可，服务于南向联调，不以转 MCU 开发为目标）
    mcu：概述 → 裸机 → RTOS → 与 Linux 网关协作

项目驱动：projects 五个项目贯穿三大阶段，项目五（PCB 到云端闭环）为终极整合
```

---

## 内容层级

- **导读**：overview，全站第一入口，讲清四层对接链与各模块的定位关系。
- **主线（做深做透）**：Linux 相关 13 个模块，目标是胜任嵌入式 Linux / IoT 网关岗位。
- **延伸（从懂到能做）**：hardware，目标是能设计简单采集板。
- **参考（懂即可）**：mcu，目标是能与 MCU 团队高效联调，不深耕。

---

## 文档约定

- 每个目录下文件以数字前缀排序：`0_xxx.md`、`1_xxx.md`，侧边栏按前缀数字自动排序。
- 侧边栏标题取自每篇文档的第一个 `# 一级标题`（见 `docs/.vuepress/config.js` 的 `getSidebarFromDir`）。
- 图片资源放 `docs/assets/<模块名>/` 下。
- 导航栏风格由 `.env` 的 `NAVBAR_STYLE` 控制（flat / dropdown）。

## 新增模块清单（漏一步侧边栏/导航就会缺）

在 `docs/` 下新建一个模块目录（如 `docs/foo/`）时，需同步改 `docs/.vuepress/config.js` 三处：

1. **`navbarFlat`**：加一条 `{text: '模块名', link: '/foo/0_xxx'}`。
2. **`navbarDropdown`**：加到对应分组的 `children` 里（或新建一个分组）。⚠️ flat 和 dropdown 是两份独立配置，必须都改。
3. **`sidebar`**：加一行 `'/foo/': getSidebarFromDir(path.resolve(__dirname, '../foo'))`，否则该模块无侧边栏。

补充：

- `link` 指向的是**不带 `.md` 后缀**的路径，且要对准该模块排序最靠前的那篇（通常是 `0_xxx`）。
- 新模块下**至少要有一篇带 `# 一级标题`的 `.md`**，否则 `getSidebarFromDir` 生成的标题会退化成文件名。
- 首页 `docs/README.md` 的 `highlights` 若要展示新模块，另需手动加卡片（非自动）。
- 改完务必跑一次 `npm run docs:build` 验证：新增模块的页面数应随之增加，构建无报错。

## 改名 / 迁移清单

若要改项目名或部署路径，需同步：`package.json`(name/description)、`package-lock.json`(name)、
`config.js`(`SITE_BASE` 决定 GitHub Pages URL、`title`)、`docs/README.md`(heroText)、根 `README.md`、
`CLAUDE.md` / `AGENTS.md` 标题行；以及仓库外的两步：本地文件夹重命名、GitHub 仓库改名（`base` 必须与仓库名一致，否则线上 404）。

## 常用命令

```bash
npm run docs:dev        # 本地开发（端口 1001）
npm run docs:build      # 构建静态站点
npm run docs:clean-dev  # 清缓存后开发
```
