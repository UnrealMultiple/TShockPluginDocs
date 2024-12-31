import type { SidebarOptions } from '@vuepress/theme-default'
import fs from 'fs';
import path from 'path';

const guideDirectory = path.join(__dirname, '..', '..', '..','zh', 'guide');

export const sidebarZh: SidebarOptions = [
  {
    text: '指南',
    children: fs.readdirSync(guideDirectory)
      .filter(file => file.endsWith('.md'))
      .map(file => `/zh/guide/${file}`),  // Adjust the map function to create the correct relative paths
  },
];

