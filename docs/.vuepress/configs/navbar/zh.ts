import type { NavbarOptions } from '@vuepress/theme-default'
import { VERSION } from '../meta.js'
import fs from 'fs';
import path from 'path';
const guideDirectory = path.join(__dirname, '..', '..', '..','zh', 'guide');



export const navbarZh: NavbarOptions = [
  {
    text: '指南',
    children: fs.readdirSync(guideDirectory)
      .filter(file => file.endsWith('.md'))
      .map(file => `/zh/guide/${file}`),
  },
];


