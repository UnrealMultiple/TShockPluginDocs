import type { NavbarOptions } from '@vuepress/theme-default'
import { VERSION } from '../meta.js'
import fs from 'fs';
import path from 'path';
const guideDirectory = path.join(__dirname, '..', '..', '..','en', 'guide');


export const navbarEn: NavbarOptions = [
  {
    text: 'Guide',
    children: fs.readdirSync(guideDirectory)
      .filter(file => file.endsWith('.md'))
      .map(file => `/en/guide/${file}`),  // Adjust the map function to create the correct relative paths
  }
];