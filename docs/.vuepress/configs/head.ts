import type { HeadConfig } from 'vuepress/core'

// eslint-disable-next-line @typescript-eslint/naming-convention
export const head: HeadConfig[] = [
  ['link', { 
    rel: 'icon',
    type: 'image/x-icon',
    href: '/favicon.ico' 
  }],

  // 现代浏览器 Favicon (PNG 格式，推荐 32x32)
  ['link', {
    rel: 'icon',
    type: 'image/png',
    sizes: '26x26',
    href: '/images/icons/boom.png'
  }],
  ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
  ['meta', { name: 'application-name', content: 'TShock中文插件库' }],
  ['meta', { name: 'apple-mobile-web-app-title', content: 'TShock中文插件库' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  [
    'link',
    { rel: 'apple-touch-icon', href: `/favicon.ico` },
  ],
  [
    'link',
    {
      rel: 'mask-icon',
      href: '/favicon.ico',
      color: '#3eaf7c',
    },
  ],
  ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
  ['meta', { name: 'theme-color', content: '#3eaf7c' }],
]