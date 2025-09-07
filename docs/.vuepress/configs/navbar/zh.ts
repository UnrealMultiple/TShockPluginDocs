import type { NavbarOptions } from '@vuepress/theme-default'
import { VERSION } from '../meta.js'
import fs from 'fs';
import path from 'path';
const guideDirectory = path.join(__dirname, '..', '..', '..','zh', 'guide');
const plugindevDirectory = path.join(__dirname, '..', '..', '..','zh', 'plugin-dev');
const tshockDirectory = path.join(__dirname, '..', '..', '..', 'zh', 'tshock');

export const navbarZh: NavbarOptions = [
  {
    text: '插件文档',
    link: '/zh/guide/get-start.html'
  },
  {
    text: 'TShock教程',
    link: '/zh/tshock/get-start.html'
  },
  {
    text: '插件开发',
    link: '/zh/plugin-dev/get-start.html'
  },
  {
    text: 'TShock Wiki 镜像',
    link: '/zh/tshock-wiki/get-start.html'
  },
  {
    text: '其他文档',
    link: '/zh/other/get-start.html'
  },
];


