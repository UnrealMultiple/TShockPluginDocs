import type { SidebarOptions } from '@vuepress/theme-default'
import fs from 'fs';
import path from 'path';

const guideDirectory = path.join(__dirname, '..', '..', '..','zh', 'guide');
const plugindevDirectory = path.join(__dirname, '..', '..', '..','zh', 'plugin-dev');
const otherDirectory = path.join(__dirname, '..', '..', '..','zh', 'other');

export const sidebarZh: SidebarOptions = {
  "/zh/guide/":fs.readdirSync(guideDirectory).filter(file => file.endsWith('.md')).map(file => `/zh/guide/${file}`),
  "/zh/plugin-dev/":fs.readdirSync(plugindevDirectory).filter(file => file.endsWith('.md')).map(file => `/zh/plugin-dev/${file}`),
  "/zh/other/":fs.readdirSync(otherDirectory).filter(file => file.endsWith('.md')).map(file => `/zh/other/${file}`)
};