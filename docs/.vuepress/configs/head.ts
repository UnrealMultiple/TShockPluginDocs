import type { HeadConfig } from 'vuepress/core'

// eslint-disable-next-line @typescript-eslint/naming-convention
export const head: HeadConfig[] = [
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '128x128',
      href: `favicon.ico`,
    },
  ],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '128x128',
      href: `favicon.ico`,
    },
  ],
  ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
  ['meta', { name: 'application-name', content: 'VuePress' }],
  ['meta', { name: 'apple-mobile-web-app-title', content: 'VuePress' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  [
    'link',
    { rel: 'apple-touch-icon', href: `favicon.ico` },
  ],
  [
    'link',
    {
      rel: 'mask-icon',
      href: 'favicon.ico',
      color: '#3eaf7c',
    },
  ],
  ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
  ['meta', { name: 'theme-color', content: '#3eaf7c' }],
]
