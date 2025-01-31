import type { SidebarOptions } from '@vuepress/theme-default'
import fs from 'fs';
import path from 'path';

const guideDirectory = path.join(__dirname, '..', '..', '..','en', 'guide');


export const sidebarEn: SidebarOptions = [
  {
    text: 'Guide',
    children: fs.readdirSync(guideDirectory)
      .filter(file => file.endsWith('.md'))
      .map(file => `/en/guide/${file}`),  // Adjust the map function to create the correct relative paths
  }
];

