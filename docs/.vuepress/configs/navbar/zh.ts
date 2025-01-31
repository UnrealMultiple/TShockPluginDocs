import type { NavbarOptions } from '@vuepress/theme-default'
import { VERSION } from '../meta.js'
import fs from 'fs';
import path from 'path';
const guideDirectory = path.join(__dirname, '..', '..', '..','zh', 'guide');
const plugindevDirectory = path.join(__dirname, '..', '..', '..','zh', 'plugin-dev');


export const navbarZh: NavbarOptions = [
  {
    text: '插件使用指南',
    children: fs.readdirSync(guideDirectory)
      .filter(file => file.endsWith('.md'))
      .map(file => `/zh/guide/${file}`),
  },
  {
    text: '插件开发指南',
    children: fs.readdirSync(plugindevDirectory)
      .filter(file => file.endsWith('.md'))
      .map(file => `/zh/plugin-dev/${file}`),
  },
];


