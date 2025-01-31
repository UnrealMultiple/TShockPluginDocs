import { createRequire } from 'node:module'
import process from 'node:process'
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { getDirname, path } from 'vuepress/utils'
import { markdownExtPlugin } from '@vuepress/plugin-markdown-ext'
import downloadRemoteImages from './plugins/download-remote-images';
import { markdownHintPlugin } from '@vuepress/plugin-markdown-hint'

import {
  head,
  navbarEn,
  navbarZh,
  sidebarEn,
  sidebarZh,
} from './configs/index.js'

const __dirname = getDirname(import.meta.url)
const require = createRequire(import.meta.url)
const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig({
  // set site base to default value
  base: '/',

  // extra tags in `<head>`
  head,

  // site-level locales config
  locales: {

    '/zh/': {
      lang: 'zh-CN',
      title: 'TShock中文插件库',
      description: 'TShock中文插件库,',
    },
    '/en/': {
      lang: 'en-US',
      title: 'TShock Chinese Plugin Repo',
      description: 'TShock Chinese Plugin Repo',
    },
  },

  // specify bundler via environment variable
  bundler:
    process.env.DOCS_BUNDLER === 'webpack' ? webpackBundler() : viteBundler(),

  // configure default theme
  theme: defaultTheme({
    hostname: 'http://docs.terraria.ink',
    logo: '/images/hero.png',
    repo: 'UnrealMultiple/TShockPlugin',
    docsRepo: 'UnrealMultiple/TShockPluginDocs',
    docsDir: 'docs',

    // theme-level locales config
    locales: {
      /**
       * English locale config
       *
       * As the default locale of @vuepress/theme-default is English,
       * we don't need to set all of the locale fields
       */
      '/en/': {
        // navbar
        navbar: navbarEn,
        // sidebar
        sidebar: sidebarEn,
        // page meta
        //editLinkText: 'Edit this page on GitHub',
      },

      /**
       * Chinese locale config
       */
      '/zh/': {
        // navbar
        navbar: navbarZh,
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
        // sidebar
        sidebar: sidebarZh,
        // page meta
        //editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',
        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',
        // a11y
        openInNewWindow: '在新窗口打开',
        toggleColorMode: '切换颜色模式',
        toggleSidebar: '切换侧边栏',
      },
    },

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      // use shiki plugin in production mode instead
      prismjs: !isProd,
    },
  }),

  // configure markdown
  markdown: {
    importCode: {
      handleImportPath: (importPath) => {
        // handle @vuepress packages import path
        if (importPath.startsWith('@vuepress/')) {
          const packageName = importPath.match(/^(@vuepress\/[^/]*)/)![1]
          return importPath
            .replace(
              packageName,
              path.dirname(require.resolve(`${packageName}/package.json`)),
            )
            .replace('/src/', '/lib/')
            .replace(/hotKey\.ts$/, 'hotKey.d.ts')
        }
        return importPath
      },
    },
  },

  // use plugins
  plugins: [
    downloadRemoteImages,
    markdownHintPlugin({
      // 启用提示容器，默认启用
      hint: true,
      // 启用 GFM 警告
      alert: true,
    }),
    markdownExtPlugin({
      gfm: true
    }),
    docsearchPlugin({
      appId: 'IBFDY2JQY1',
      apiKey: '3ee9aacebba5392911e4f4a333f291c4',
      indexName: 'terraria',
      searchParameters: {
        facetFilters: ['zh-CN'],
      },
      locales: {
        '/zh/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档',
            },
            modal: {
              searchBox: {
                resetButtonTitle: '清除查询条件',
                resetButtonAriaLabel: '清除查询条件',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消',
              },
              startScreen: {
                recentSearchesTitle: '搜索历史',
                noRecentSearchesText: '没有搜索历史',
                saveRecentSearchButtonTitle: '保存至搜索历史',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除',
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查你的网络连接',
              },
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
                searchByText: '搜索提供者',
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                suggestedQueryText: '你可以尝试查询',
                reportMissingResultsText: '你认为该查询应该有结果？',
                reportMissingResultsLinkText: '点击反馈',
              },
            },
          },
        },
      },
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    // only enable shiki plugin in production mode
    isProd
      ? shikiPlugin({
          langs: ['bash', 'diff', 'json', 'md', 'ts', 'vue','json5','csharp','yaml'],
          theme: 'github-light',
        })
      : [],
  ],
})
