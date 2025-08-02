import type { SidebarOptions } from '@vuepress/theme-default'
import fs from 'fs';
import path from 'path';

const guideDirectory = path.join(__dirname, '..', '..', '..','zh', 'guide');
const plugindevDirectory = path.join(__dirname, '..', '..', '..','zh', 'plugin-dev');
const tshockDirectory = path.join(__dirname, '..', '..', '..', 'zh', 'tshock');
const otherDirectory = path.join(__dirname, '..', '..', '..','zh', 'other');

const getOrderedFiles = (dir: string, basePath: string) => {
  const files = fs.readdirSync(dir)
    .filter(file => file.endsWith('.md'))
    .map(file => `${basePath}/${file}`);

  // Find get-start.md and move it to the beginning if it exists
  const getStartIndex = files.findIndex(file => file.endsWith('/get-start.md'));
  if (getStartIndex > -1) {
    const getStartFile = files.splice(getStartIndex, 1)[0];
    files.unshift(getStartFile);
  }

  return files;
};

export const sidebarZh: SidebarOptions = {
  "/zh/guide/": getOrderedFiles(guideDirectory, "/zh/guide"),
  "/zh/plugin-dev/": getOrderedFiles(plugindevDirectory, "/zh/plugin-dev"),
  "/zh/tshock/": getOrderedFiles(tshockDirectory, "/zh/tshock"),
  "/zh/other/": getOrderedFiles(otherDirectory, "/zh/other")
};
