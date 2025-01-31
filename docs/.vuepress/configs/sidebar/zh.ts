import type { SidebarOptions } from '@vuepress/theme-default'
import fs from 'fs';
import path from 'path';

const guideDirectory = path.join(__dirname, '..', '..', '..','zh', 'guide');
const plugindevDirectory = path.join(__dirname, '..', '..', '..','zh', 'plugin-dev');


export const sidebarZh: SidebarOptions = [
  {
    text: '插件使用指南',
    children: fs.readdirSync(guideDirectory)
      .filter(file => file.endsWith('.md'))
      .map(file => `/zh/guide/${file}`),  // Adjust the map function to create the correct relative paths
  },
  {
    text: '插件开发指南',
    children: fs.readdirSync(plugindevDirectory)
      .filter(file => file.endsWith('.md'))
      .map(file => `/zh/plugin-dev/${file}`),  // Adjust the map function to create the correct relative paths
  },
];

