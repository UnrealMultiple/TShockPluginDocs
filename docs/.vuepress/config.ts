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
import { markdownHintPlugin } from '@vuepress/plugin-markdown-hint'
import { redirectPlugin } from '@vuepress/plugin-redirect'
import { iconPlugin } from '@vuepress/plugin-icon'
import type { DefaultThemePageData } from '@vuepress/theme-default/lib/shared/page.js'
import type { Page } from 'vuepress'

import {
  head,
  navbarEn,
  navbarZh,
  sidebarEn,
  sidebarZh
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
      description: '插件&工具&BOT',
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
    home: '/zh/',


    contributors: false,
    editLink: false,
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
        editLinkText: '在GitHub上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',
        prev: '上一篇',
        next: '下一篇',
        // 404 page
        notFound: [
          '404',
          '没有找到你要的网页捏...',
          '但是掉了591 铂金 60 金 15 银 3 铜',
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
      git: true,
      // use shiki plugin in production mode instead
      prismjs: true,
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
    iconPlugin({
      prefix: 'lucide:',
    }),
    markdownHintPlugin({
      hint: true,

      alert: true,
    }),
    markdownExtPlugin({
      gfm: true
    }),
    redirectPlugin({
      config: {
        '/zh/caibot/CaiBotLite.html': '/zh/other/CaiBotLite.html',
        '/' : `/zh/`,
        '/zh/EconomicsAPI/': '/zh/guide/EconomicsAPI.html#进度限制'
      },
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
          langs: ['bash', 'diff', 'json', 'md','json5','csharp','yaml','shell'],
          themes: {light: 'github-light', dark: 'github-dark'},
        })
      : [],
  ],
  alias: {
    '@theme/VPAutoLink.vue': path.resolve(
      __dirname,
      './components/VPAutoLink.vue',
    ),
    '@theme/useNavbarRepo': path.resolve(
      __dirname,
      './composables/useNavbarRepo.ts',
    ),
    '@theme/useNavbarSelectLanguage': path.resolve(
      __dirname,
      './composables/useNavbarSelectLanguage.ts',
    ),
    '@theme/resolveAutoLink': path.resolve(
      __dirname,
      './utils/resolveAutoLink.ts',
    ),
  },
  extendsPage: (page: Page<Partial<DefaultThemePageData>>) => {
    const { icon } = page.frontmatter

    // save icon into route meta
    if (icon) {
      page.routeMeta.icon = icon
    }
  },

})

