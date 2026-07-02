import {defineUserConfig} from 'vuepress';
import {hopeTheme} from 'vuepress-theme-hope';
import {viteBundler} from '@vuepress/bundler-vite';
import fs from 'fs';
import path from 'path';
import 'dotenv/config';

// 导航栏风格：统一读 .env 里的 NAVBAR_STYLE
//   flat      → 所有模块平铺展开
//   dropdown  → 分组下拉菜单
// 本地：改 .env 文件即可；CI/CD：workflow env 里覆盖
const NAVBAR_STYLE = process.env.NAVBAR_STYLE ?? 'dropdown';
const SITE_BASE = '/clarence-linux-doc/';

const navbarFlat = [
    {text: '开发总结',   link: '/interview/0_linux'},
    {text: 'Linux 基础', link: '/basics/0_linux_intro'},
    {text: 'Shell',      link: '/shell/0_shell_intro'},
    {text: '系统管理',   link: '/system/0_user_permission'},
    {text: 'C 语言',     link: '/c-lang/0_c_intro'},
    {text: '系统编程',   link: '/sys-programming/0_file_io'},
    {text: '网络编程',   link: '/network/0_socket'},
    {text: '嵌入式 Linux', link: '/embedded/0_embedded_intro'},
    {text: '硬件外设',   link: '/peripherals/0_hardware_base'},
    {text: '驱动开发',   link: '/drivers/0_driver_intro'},
    {text: '内核机制',   link: '/kernel/0_kernel_boot'},
    {text: '工业协议',   link: '/protocols/0_modbus'},
    {text: 'IoT 网关',   link: '/gateway/0_gateway_arch'},
    {text: '调试工具',   link: '/debugging/0_gdb'},
];

const navbarDropdown = [
    {text: '开发总结', link: '/interview/0_linux'},
    {
        text: 'Linux 基础',
        children: [
            {text: 'Linux 基础', link: '/basics/0_linux_intro'},
            {text: 'Shell 脚本', link: '/shell/0_shell_intro'},
            {text: '系统管理',   link: '/system/0_user_permission'},
        ],
    },
    {
        text: '编程核心',
        children: [
            {text: 'C 语言',   link: '/c-lang/0_c_intro'},
            {text: '系统编程', link: '/sys-programming/0_file_io'},
            {text: '网络编程', link: '/network/0_socket'},
        ],
    },
    {
        text: '嵌入式',
        children: [
            {text: '嵌入式 Linux', link: '/embedded/0_embedded_intro'},
            {text: '硬件外设',     link: '/peripherals/0_hardware_base'},
        ],
    },
    {
        text: '内核驱动',
        children: [
            {text: '驱动开发', link: '/drivers/0_driver_intro'},
            {text: '内核机制', link: '/kernel/0_kernel_boot'},
        ],
    },
    {
        text: '物联网',
        children: [
            {text: '工业协议', link: '/protocols/0_modbus'},
            {text: 'IoT 网关', link: '/gateway/0_gateway_arch'},
        ],
    },
    {
        text: '工程调试',
        children: [
            {text: '调试工具', link: '/debugging/0_gdb'},
        ],
    },
];

function getSidebarFromDir(dirPath) {
    if (!fs.existsSync(dirPath)) {
        console.warn(`Warning: Directory ${dirPath} does not exist. Skipping sidebar generation.`);
        return [];
    }
    const files = fs.readdirSync(dirPath)
        .filter(file => file.endsWith('.md'))
        .sort((a, b) => {
            const na = parseInt(a.match(/^(\d+)/)?.[1] ?? '0');
            const nb = parseInt(b.match(/^(\d+)/)?.[1] ?? '0');
            return na - nb;
        });
    return files.map(file => {
        const filePath = path.join(dirPath, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const firstHeadingMatch = content.match(/^# (.+)/m);
        const firstHeading = firstHeadingMatch ? firstHeadingMatch[1] : file;
        const relativeLink = path.relative(path.resolve(__dirname, '../'), filePath)
            .replace(/\\/g, '/')
            .replace('.md', '');
        return {
            text: firstHeading,
            link: `/${relativeLink}`,
        };
    });
}

export default defineUserConfig({
    head: [
        ['link', {rel: 'icon', href: `${SITE_BASE}images/logo.png`}]
    ],
    base: SITE_BASE,
    lang: 'zh-CN',
    port: 1001,
    title: 'Clarence Linux Doc',
    description: 'Java 后端转嵌入式 Linux / 硬件方向的学习知识库',
    // 处理vite 打包警告
    bundler: viteBundler({
        viteOptions: {
            build: {
                rollupOptions: {
                    onwarn(warning, warn) {
                        if (warning.code === 'INVALID_ANNOTATION') return;
                        if (warning.code === 'PLUGIN_TIMINGS') return;
                        warn(warning);
                    },
                },
            },
        },
    }),
    theme: hopeTheme({
        logo: '/images/logo.png',
        navbar: NAVBAR_STYLE === 'dropdown' ? navbarDropdown : navbarFlat,
        sidebar: {
            '/interview/':       getSidebarFromDir(path.resolve(__dirname, '../interview')),
            '/basics/':          getSidebarFromDir(path.resolve(__dirname, '../basics')),
            '/shell/':           getSidebarFromDir(path.resolve(__dirname, '../shell')),
            '/system/':          getSidebarFromDir(path.resolve(__dirname, '../system')),
            '/c-lang/':          getSidebarFromDir(path.resolve(__dirname, '../c-lang')),
            '/sys-programming/': getSidebarFromDir(path.resolve(__dirname, '../sys-programming')),
            '/network/':         getSidebarFromDir(path.resolve(__dirname, '../network')),
            '/embedded/':        getSidebarFromDir(path.resolve(__dirname, '../embedded')),
            '/peripherals/':     getSidebarFromDir(path.resolve(__dirname, '../peripherals')),
            '/drivers/':         getSidebarFromDir(path.resolve(__dirname, '../drivers')),
            '/kernel/':          getSidebarFromDir(path.resolve(__dirname, '../kernel')),
            '/protocols/':       getSidebarFromDir(path.resolve(__dirname, '../protocols')),
            '/gateway/':         getSidebarFromDir(path.resolve(__dirname, '../gateway')),
            '/debugging/':       getSidebarFromDir(path.resolve(__dirname, '../debugging')),
        },
        markdown: {
            hint: true,
            alert: true,
        },
        plugins: {
            copyCode: {
                showInMobile: true,
            },
            slimsearch: {
                locales: {
                    '/': {placeholder: '搜索'},
                },
                isSearchable: (page) => page.path !== '/',
            },
        },
    }),
});
