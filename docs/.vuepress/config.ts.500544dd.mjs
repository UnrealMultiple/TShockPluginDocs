// docs/.vuepress/config.ts
import { createRequire as createRequire2 } from "node:module";
import process from "node:process";
import { viteBundler } from "@vuepress/bundler-vite";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import "@vuepress/plugin-google-analytics";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { shikiPlugin } from "@vuepress/plugin-shiki";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { getDirname, path as path5 } from "vuepress/utils";
import { markdownExtPlugin } from "@vuepress/plugin-markdown-ext";

// docs/.vuepress/configs/head.ts
var head = [
  [
    "link",
    {
      rel: "icon",
      type: "image/png",
      sizes: "128x128",
      href: `favicon.ico`
    }
  ],
  [
    "link",
    {
      rel: "icon",
      type: "image/png",
      sizes: "128x128",
      href: `favicon.ico`
    }
  ],
  ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
  ["meta", { name: "application-name", content: "VuePress" }],
  ["meta", { name: "apple-mobile-web-app-title", content: "VuePress" }],
  ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
  [
    "link",
    { rel: "apple-touch-icon", href: `favicon.ico` }
  ],
  [
    "link",
    {
      rel: "mask-icon",
      href: "favicon.ico",
      color: "#3eaf7c"
    }
  ],
  ["meta", { name: "msapplication-TileColor", content: "#3eaf7c" }],
  ["meta", { name: "theme-color", content: "#3eaf7c" }]
];

// docs/.vuepress/configs/meta.ts
import { createRequire } from "node:module";
import { fs } from "vuepress/utils";
var __vite_injected_original_import_meta_url = "file:///C:/Users/13110/Desktop/TShockPluginDocs-master/docs/.vuepress/configs/meta.ts";
var require2 = createRequire(__vite_injected_original_import_meta_url);
var VERSION = fs.readJsonSync(require2.resolve("vuepress/package.json")).version;

// docs/.vuepress/configs/navbar/en.ts
import fs2 from "fs";
import path from "path";
var __vite_injected_original_dirname = "C:/Users/13110/Desktop/TShockPluginDocs-master/docs/.vuepress/configs/navbar";
var guideDirectory = path.join(__vite_injected_original_dirname, "..", "..", "..", "en", "guide");
var navbarEn = [
  {
    text: "Guide",
    children: fs2.readdirSync(guideDirectory).filter((file) => file.endsWith(".md")).map((file) => `/en/guide/${file}`)
    // Adjust the map function to create the correct relative paths
  }
];

// docs/.vuepress/configs/navbar/zh.ts
import fs3 from "fs";
import path2 from "path";
var __vite_injected_original_dirname2 = "C:/Users/13110/Desktop/TShockPluginDocs-master/docs/.vuepress/configs/navbar";
var guideDirectory2 = path2.join(__vite_injected_original_dirname2, "..", "..", "..", "zh", "guide");
var plugindevDirectory = path2.join(__vite_injected_original_dirname2, "..", "..", "..", "zh", "plugin-dev");
var navbarZh = [
  {
    text: "\u63D2\u4EF6\u4F7F\u7528\u6307\u5357",
    children: fs3.readdirSync(guideDirectory2).filter((file) => file.endsWith(".md")).map((file) => `/zh/guide/${file}`)
  },
  {
    text: "\u63D2\u4EF6\u5F00\u53D1\u6307\u5357",
    children: fs3.readdirSync(plugindevDirectory).filter((file) => file.endsWith(".md")).map((file) => `/zh/plugin-dev/${file}`)
  }
];

// docs/.vuepress/configs/sidebar/en.ts
import fs4 from "fs";
import path3 from "path";
var __vite_injected_original_dirname3 = "C:/Users/13110/Desktop/TShockPluginDocs-master/docs/.vuepress/configs/sidebar";
var guideDirectory3 = path3.join(__vite_injected_original_dirname3, "..", "..", "..", "en", "guide");
var sidebarEn = [
  {
    text: "Guide",
    children: fs4.readdirSync(guideDirectory3).filter((file) => file.endsWith(".md")).map((file) => `/en/guide/${file}`)
    // Adjust the map function to create the correct relative paths
  }
];

// docs/.vuepress/configs/sidebar/zh.ts
import fs5 from "fs";
import path4 from "path";
var __vite_injected_original_dirname4 = "C:/Users/13110/Desktop/TShockPluginDocs-master/docs/.vuepress/configs/sidebar";
var guideDirectory4 = path4.join(__vite_injected_original_dirname4, "..", "..", "..", "zh", "guide");
var plugindevDirectory2 = path4.join(__vite_injected_original_dirname4, "..", "..", "..", "zh", "plugin-dev");
var sidebarZh = [
  {
    text: "\u63D2\u4EF6\u4F7F\u7528\u6307\u5357",
    children: fs5.readdirSync(guideDirectory4).filter((file) => file.endsWith(".md")).map((file) => `/zh/guide/${file}`)
    // Adjust the map function to create the correct relative paths
  },
  {
    text: "\u63D2\u4EF6\u5F00\u53D1\u6307\u5357",
    children: fs5.readdirSync(plugindevDirectory2).filter((file) => file.endsWith(".md")).map((file) => `/zh/plugin-dev/${file}`)
    // Adjust the map function to create the correct relative paths
  }
];

// docs/.vuepress/config.ts
var __vite_injected_original_import_meta_url2 = "file:///C:/Users/13110/Desktop/TShockPluginDocs-master/docs/.vuepress/config.ts";
var __dirname2 = getDirname(__vite_injected_original_import_meta_url2);
var require3 = createRequire2(__vite_injected_original_import_meta_url2);
var isProd = process.env.NODE_ENV === "production";
var config_default = defineUserConfig({
  // set site base to default value
  base: "/",
  // extra tags in `<head>`
  head,
  // site-level locales config
  locales: {
    "/zh/": {
      lang: "zh-CN",
      title: "TShock\u4E2D\u6587\u63D2\u4EF6\u5E93",
      description: "TShock\u4E2D\u6587\u63D2\u4EF6\u5E93,"
    },
    "/en/": {
      lang: "en-US",
      title: "TShock Chinese Plugin Repo",
      description: "TShock Chinese Plugin Repo"
    }
  },
  // specify bundler via environment variable
  bundler: process.env.DOCS_BUNDLER === "webpack" ? webpackBundler() : viteBundler(),
  // configure default theme
  theme: defaultTheme({
    hostname: "http://docs.terraria.ink",
    logo: "/images/hero.png",
    repo: "UnrealMultiple/TShockPlugin",
    docsRepo: "UnrealMultiple/TShockPluginDocs",
    docsDir: "docs",
    // theme-level locales config
    locales: {
      /**
       * English locale config
       *
       * As the default locale of @vuepress/theme-default is English,
       * we don't need to set all of the locale fields
       */
      "/en/": {
        // navbar
        navbar: navbarEn,
        // sidebar
        sidebar: sidebarEn
        // page meta
        //editLinkText: 'Edit this page on GitHub',
      },
      /**
       * Chinese locale config
       */
      "/zh/": {
        // navbar
        navbar: navbarZh,
        selectLanguageName: "\u7B80\u4F53\u4E2D\u6587",
        selectLanguageText: "\u9009\u62E9\u8BED\u8A00",
        selectLanguageAriaLabel: "\u9009\u62E9\u8BED\u8A00",
        // sidebar
        sidebar: sidebarZh,
        // page meta
        //editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: "\u4E0A\u6B21\u66F4\u65B0",
        contributorsText: "\u8D21\u732E\u8005",
        // custom containers
        tip: "\u63D0\u793A",
        warning: "\u6CE8\u610F",
        danger: "\u8B66\u544A",
        // 404 page
        notFound: [
          "\u8FD9\u91CC\u4EC0\u4E48\u90FD\u6CA1\u6709",
          "\u6211\u4EEC\u600E\u4E48\u5230\u8FD9\u6765\u4E86\uFF1F",
          "\u8FD9\u662F\u4E00\u4E2A 404 \u9875\u9762",
          "\u770B\u8D77\u6765\u6211\u4EEC\u8FDB\u5165\u4E86\u9519\u8BEF\u7684\u94FE\u63A5"
        ],
        backToHome: "\u8FD4\u56DE\u9996\u9875",
        // a11y
        openInNewWindow: "\u5728\u65B0\u7A97\u53E3\u6253\u5F00",
        toggleColorMode: "\u5207\u6362\u989C\u8272\u6A21\u5F0F",
        toggleSidebar: "\u5207\u6362\u4FA7\u8FB9\u680F"
      }
    },
    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      // use shiki plugin in production mode instead
      prismjs: !isProd
    }
  }),
  // configure markdown
  markdown: {
    importCode: {
      handleImportPath: (importPath) => {
        if (importPath.startsWith("@vuepress/")) {
          const packageName = importPath.match(/^(@vuepress\/[^/]*)/)[1];
          return importPath.replace(
            packageName,
            path5.dirname(require3.resolve(`${packageName}/package.json`))
          ).replace("/src/", "/lib/").replace(/hotKey\.ts$/, "hotKey.d.ts");
        }
        return importPath;
      }
    }
  },
  // use plugins
  plugins: [
    require3("./plugins/download-remote-images"),
    markdownHintPlugin({
      // 启用提示容器，默认启用
      hint: true,
      // 启用 GFM 警告
      alert: true
    }),
    markdownExtPlugin({
      gfm: true
    }),
    docsearchPlugin({
      appId: "IBFDY2JQY1",
      apiKey: "3ee9aacebba5392911e4f4a333f291c4",
      indexName: "terraria",
      searchParameters: {
        facetFilters: ["zh-CN"]
      },
      locales: {
        "/zh/": {
          placeholder: "\u641C\u7D22\u6587\u6863",
          translations: {
            button: {
              buttonText: "\u641C\u7D22\u6587\u6863",
              buttonAriaLabel: "\u641C\u7D22\u6587\u6863"
            },
            modal: {
              searchBox: {
                resetButtonTitle: "\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6",
                resetButtonAriaLabel: "\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6",
                cancelButtonText: "\u53D6\u6D88",
                cancelButtonAriaLabel: "\u53D6\u6D88"
              },
              startScreen: {
                recentSearchesTitle: "\u641C\u7D22\u5386\u53F2",
                noRecentSearchesText: "\u6CA1\u6709\u641C\u7D22\u5386\u53F2",
                saveRecentSearchButtonTitle: "\u4FDD\u5B58\u81F3\u641C\u7D22\u5386\u53F2",
                removeRecentSearchButtonTitle: "\u4ECE\u641C\u7D22\u5386\u53F2\u4E2D\u79FB\u9664",
                favoriteSearchesTitle: "\u6536\u85CF",
                removeFavoriteSearchButtonTitle: "\u4ECE\u6536\u85CF\u4E2D\u79FB\u9664"
              },
              errorScreen: {
                titleText: "\u65E0\u6CD5\u83B7\u53D6\u7ED3\u679C",
                helpText: "\u4F60\u53EF\u80FD\u9700\u8981\u68C0\u67E5\u4F60\u7684\u7F51\u7EDC\u8FDE\u63A5"
              },
              footer: {
                selectText: "\u9009\u62E9",
                navigateText: "\u5207\u6362",
                closeText: "\u5173\u95ED",
                searchByText: "\u641C\u7D22\u63D0\u4F9B\u8005"
              },
              noResultsScreen: {
                noResultsText: "\u65E0\u6CD5\u627E\u5230\u76F8\u5173\u7ED3\u679C",
                suggestedQueryText: "\u4F60\u53EF\u4EE5\u5C1D\u8BD5\u67E5\u8BE2",
                reportMissingResultsText: "\u4F60\u8BA4\u4E3A\u8BE5\u67E5\u8BE2\u5E94\u8BE5\u6709\u7ED3\u679C\uFF1F",
                reportMissingResultsLinkText: "\u70B9\u51FB\u53CD\u9988"
              }
            }
          }
        }
      }
    }),
    registerComponentsPlugin({
      componentsDir: path5.resolve(__dirname2, "./components")
    }),
    // only enable shiki plugin in production mode
    isProd ? shikiPlugin({
      langs: ["bash", "diff", "json", "md", "ts", "vue", "json5", "csharp", "yaml"],
      theme: "github-light"
    }) : []
  ]
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIiwgImRvY3MvLnZ1ZXByZXNzL2NvbmZpZ3MvaGVhZC50cyIsICJkb2NzLy52dWVwcmVzcy9jb25maWdzL21ldGEudHMiLCAiZG9jcy8udnVlcHJlc3MvY29uZmlncy9uYXZiYXIvZW4udHMiLCAiZG9jcy8udnVlcHJlc3MvY29uZmlncy9uYXZiYXIvemgudHMiLCAiZG9jcy8udnVlcHJlc3MvY29uZmlncy9zaWRlYmFyL2VuLnRzIiwgImRvY3MvLnZ1ZXByZXNzL2NvbmZpZ3Mvc2lkZWJhci96aC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6L1VzZXJzLzEzMTEwL0Rlc2t0b3AvVFNob2NrUGx1Z2luRG9jcy1tYXN0ZXIvZG9jcy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXDEzMTEwXFxcXERlc2t0b3BcXFxcVFNob2NrUGx1Z2luRG9jcy1tYXN0ZXJcXFxcZG9jc1xcXFwudnVlcHJlc3NcXFxcY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy8xMzExMC9EZXNrdG9wL1RTaG9ja1BsdWdpbkRvY3MtbWFzdGVyL2RvY3MvLnZ1ZXByZXNzL2NvbmZpZy50c1wiO2ltcG9ydCB7IGNyZWF0ZVJlcXVpcmUgfSBmcm9tICdub2RlOm1vZHVsZSdcbmltcG9ydCBwcm9jZXNzIGZyb20gJ25vZGU6cHJvY2VzcydcbmltcG9ydCB7IHZpdGVCdW5kbGVyIH0gZnJvbSAnQHZ1ZXByZXNzL2J1bmRsZXItdml0ZSdcbmltcG9ydCB7IHdlYnBhY2tCdW5kbGVyIH0gZnJvbSAnQHZ1ZXByZXNzL2J1bmRsZXItd2VicGFjaydcbmltcG9ydCB7IGRvY3NlYXJjaFBsdWdpbiB9IGZyb20gJ0B2dWVwcmVzcy9wbHVnaW4tZG9jc2VhcmNoJ1xuaW1wb3J0IHsgZ29vZ2xlQW5hbHl0aWNzUGx1Z2luIH0gZnJvbSAnQHZ1ZXByZXNzL3BsdWdpbi1nb29nbGUtYW5hbHl0aWNzJ1xuaW1wb3J0IHsgcmVnaXN0ZXJDb21wb25lbnRzUGx1Z2luIH0gZnJvbSAnQHZ1ZXByZXNzL3BsdWdpbi1yZWdpc3Rlci1jb21wb25lbnRzJ1xuaW1wb3J0IHsgc2hpa2lQbHVnaW4gfSBmcm9tICdAdnVlcHJlc3MvcGx1Z2luLXNoaWtpJ1xuaW1wb3J0IHsgZGVmYXVsdFRoZW1lIH0gZnJvbSAnQHZ1ZXByZXNzL3RoZW1lLWRlZmF1bHQnXG5pbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSAndnVlcHJlc3MnXG5pbXBvcnQgeyBnZXREaXJuYW1lLCBwYXRoIH0gZnJvbSAndnVlcHJlc3MvdXRpbHMnXG5pbXBvcnQgeyBtYXJrZG93bkV4dFBsdWdpbiB9IGZyb20gJ0B2dWVwcmVzcy9wbHVnaW4tbWFya2Rvd24tZXh0J1xuXG5pbXBvcnQge1xuICBoZWFkLFxuICBuYXZiYXJFbixcbiAgbmF2YmFyWmgsXG4gIHNpZGViYXJFbixcbiAgc2lkZWJhclpoLFxufSBmcm9tICcuL2NvbmZpZ3MvaW5kZXguanMnXG5cbmNvbnN0IF9fZGlybmFtZSA9IGdldERpcm5hbWUoaW1wb3J0Lm1ldGEudXJsKVxuY29uc3QgcmVxdWlyZSA9IGNyZWF0ZVJlcXVpcmUoaW1wb3J0Lm1ldGEudXJsKVxuY29uc3QgaXNQcm9kID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcbiAgLy8gc2V0IHNpdGUgYmFzZSB0byBkZWZhdWx0IHZhbHVlXG4gIGJhc2U6ICcvJyxcblxuICAvLyBleHRyYSB0YWdzIGluIGA8aGVhZD5gXG4gIGhlYWQsXG5cbiAgLy8gc2l0ZS1sZXZlbCBsb2NhbGVzIGNvbmZpZ1xuICBsb2NhbGVzOiB7XG5cbiAgICAnL3poLyc6IHtcbiAgICAgIGxhbmc6ICd6aC1DTicsXG4gICAgICB0aXRsZTogJ1RTaG9ja1x1NEUyRFx1NjU4N1x1NjNEMlx1NEVGNlx1NUU5MycsXG4gICAgICBkZXNjcmlwdGlvbjogJ1RTaG9ja1x1NEUyRFx1NjU4N1x1NjNEMlx1NEVGNlx1NUU5MywnLFxuICAgIH0sXG4gICAgJy9lbi8nOiB7XG4gICAgICBsYW5nOiAnZW4tVVMnLFxuICAgICAgdGl0bGU6ICdUU2hvY2sgQ2hpbmVzZSBQbHVnaW4gUmVwbycsXG4gICAgICBkZXNjcmlwdGlvbjogJ1RTaG9jayBDaGluZXNlIFBsdWdpbiBSZXBvJyxcbiAgICB9LFxuICB9LFxuXG4gIC8vIHNwZWNpZnkgYnVuZGxlciB2aWEgZW52aXJvbm1lbnQgdmFyaWFibGVcbiAgYnVuZGxlcjpcbiAgICBwcm9jZXNzLmVudi5ET0NTX0JVTkRMRVIgPT09ICd3ZWJwYWNrJyA/IHdlYnBhY2tCdW5kbGVyKCkgOiB2aXRlQnVuZGxlcigpLFxuXG4gIC8vIGNvbmZpZ3VyZSBkZWZhdWx0IHRoZW1lXG4gIHRoZW1lOiBkZWZhdWx0VGhlbWUoe1xuICAgIGhvc3RuYW1lOiAnaHR0cDovL2RvY3MudGVycmFyaWEuaW5rJyxcbiAgICBsb2dvOiAnL2ltYWdlcy9oZXJvLnBuZycsXG4gICAgcmVwbzogJ1VucmVhbE11bHRpcGxlL1RTaG9ja1BsdWdpbicsXG4gICAgZG9jc1JlcG86ICdVbnJlYWxNdWx0aXBsZS9UU2hvY2tQbHVnaW5Eb2NzJyxcbiAgICBkb2NzRGlyOiAnZG9jcycsXG5cbiAgICAvLyB0aGVtZS1sZXZlbCBsb2NhbGVzIGNvbmZpZ1xuICAgIGxvY2FsZXM6IHtcbiAgICAgIC8qKlxuICAgICAgICogRW5nbGlzaCBsb2NhbGUgY29uZmlnXG4gICAgICAgKlxuICAgICAgICogQXMgdGhlIGRlZmF1bHQgbG9jYWxlIG9mIEB2dWVwcmVzcy90aGVtZS1kZWZhdWx0IGlzIEVuZ2xpc2gsXG4gICAgICAgKiB3ZSBkb24ndCBuZWVkIHRvIHNldCBhbGwgb2YgdGhlIGxvY2FsZSBmaWVsZHNcbiAgICAgICAqL1xuICAgICAgJy9lbi8nOiB7XG4gICAgICAgIC8vIG5hdmJhclxuICAgICAgICBuYXZiYXI6IG5hdmJhckVuLFxuICAgICAgICAvLyBzaWRlYmFyXG4gICAgICAgIHNpZGViYXI6IHNpZGViYXJFbixcbiAgICAgICAgLy8gcGFnZSBtZXRhXG4gICAgICAgIC8vZWRpdExpbmtUZXh0OiAnRWRpdCB0aGlzIHBhZ2Ugb24gR2l0SHViJyxcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQ2hpbmVzZSBsb2NhbGUgY29uZmlnXG4gICAgICAgKi9cbiAgICAgICcvemgvJzoge1xuICAgICAgICAvLyBuYXZiYXJcbiAgICAgICAgbmF2YmFyOiBuYXZiYXJaaCxcbiAgICAgICAgc2VsZWN0TGFuZ3VhZ2VOYW1lOiAnXHU3QjgwXHU0RjUzXHU0RTJEXHU2NTg3JyxcbiAgICAgICAgc2VsZWN0TGFuZ3VhZ2VUZXh0OiAnXHU5MDA5XHU2MkU5XHU4QkVEXHU4QTAwJyxcbiAgICAgICAgc2VsZWN0TGFuZ3VhZ2VBcmlhTGFiZWw6ICdcdTkwMDlcdTYyRTlcdThCRURcdThBMDAnLFxuICAgICAgICAvLyBzaWRlYmFyXG4gICAgICAgIHNpZGViYXI6IHNpZGViYXJaaCxcbiAgICAgICAgLy8gcGFnZSBtZXRhXG4gICAgICAgIC8vZWRpdExpbmtUZXh0OiAnXHU1NzI4IEdpdEh1YiBcdTRFMEFcdTdGMTZcdThGOTFcdTZCNjRcdTk4NzUnLFxuICAgICAgICBsYXN0VXBkYXRlZFRleHQ6ICdcdTRFMEFcdTZCMjFcdTY2RjRcdTY1QjAnLFxuICAgICAgICBjb250cmlidXRvcnNUZXh0OiAnXHU4RDIxXHU3MzJFXHU4MDA1JyxcbiAgICAgICAgLy8gY3VzdG9tIGNvbnRhaW5lcnNcbiAgICAgICAgdGlwOiAnXHU2M0QwXHU3OTNBJyxcbiAgICAgICAgd2FybmluZzogJ1x1NkNFOFx1NjEwRicsXG4gICAgICAgIGRhbmdlcjogJ1x1OEI2Nlx1NTQ0QScsXG4gICAgICAgIC8vIDQwNCBwYWdlXG4gICAgICAgIG5vdEZvdW5kOiBbXG4gICAgICAgICAgJ1x1OEZEOVx1OTFDQ1x1NEVDMFx1NEU0OFx1OTBGRFx1NkNBMVx1NjcwOScsXG4gICAgICAgICAgJ1x1NjIxMVx1NEVFQ1x1NjAwRVx1NEU0OFx1NTIzMFx1OEZEOVx1Njc2NVx1NEU4Nlx1RkYxRicsXG4gICAgICAgICAgJ1x1OEZEOVx1NjYyRlx1NEUwMFx1NEUyQSA0MDQgXHU5ODc1XHU5NzYyJyxcbiAgICAgICAgICAnXHU3NzBCXHU4RDc3XHU2NzY1XHU2MjExXHU0RUVDXHU4RkRCXHU1MTY1XHU0RTg2XHU5NTE5XHU4QkVGXHU3Njg0XHU5NEZFXHU2M0E1JyxcbiAgICAgICAgXSxcbiAgICAgICAgYmFja1RvSG9tZTogJ1x1OEZENFx1NTZERVx1OTk5Nlx1OTg3NScsXG4gICAgICAgIC8vIGExMXlcbiAgICAgICAgb3BlbkluTmV3V2luZG93OiAnXHU1NzI4XHU2NUIwXHU3QTk3XHU1M0UzXHU2MjUzXHU1RjAwJyxcbiAgICAgICAgdG9nZ2xlQ29sb3JNb2RlOiAnXHU1MjA3XHU2MzYyXHU5ODlDXHU4MjcyXHU2QTIxXHU1RjBGJyxcbiAgICAgICAgdG9nZ2xlU2lkZWJhcjogJ1x1NTIwN1x1NjM2Mlx1NEZBN1x1OEZCOVx1NjgwRicsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICB0aGVtZVBsdWdpbnM6IHtcbiAgICAgIC8vIG9ubHkgZW5hYmxlIGdpdCBwbHVnaW4gaW4gcHJvZHVjdGlvbiBtb2RlXG4gICAgICBnaXQ6IGlzUHJvZCxcbiAgICAgIC8vIHVzZSBzaGlraSBwbHVnaW4gaW4gcHJvZHVjdGlvbiBtb2RlIGluc3RlYWRcbiAgICAgIHByaXNtanM6ICFpc1Byb2QsXG4gICAgfSxcbiAgfSksXG5cbiAgLy8gY29uZmlndXJlIG1hcmtkb3duXG4gIG1hcmtkb3duOiB7XG4gICAgaW1wb3J0Q29kZToge1xuICAgICAgaGFuZGxlSW1wb3J0UGF0aDogKGltcG9ydFBhdGgpID0+IHtcbiAgICAgICAgLy8gaGFuZGxlIEB2dWVwcmVzcyBwYWNrYWdlcyBpbXBvcnQgcGF0aFxuICAgICAgICBpZiAoaW1wb3J0UGF0aC5zdGFydHNXaXRoKCdAdnVlcHJlc3MvJykpIHtcbiAgICAgICAgICBjb25zdCBwYWNrYWdlTmFtZSA9IGltcG9ydFBhdGgubWF0Y2goL14oQHZ1ZXByZXNzXFwvW14vXSopLykhWzFdXG4gICAgICAgICAgcmV0dXJuIGltcG9ydFBhdGhcbiAgICAgICAgICAgIC5yZXBsYWNlKFxuICAgICAgICAgICAgICBwYWNrYWdlTmFtZSxcbiAgICAgICAgICAgICAgcGF0aC5kaXJuYW1lKHJlcXVpcmUucmVzb2x2ZShgJHtwYWNrYWdlTmFtZX0vcGFja2FnZS5qc29uYCkpLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnJlcGxhY2UoJy9zcmMvJywgJy9saWIvJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9ob3RLZXlcXC50cyQvLCAnaG90S2V5LmQudHMnKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbXBvcnRQYXRoXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5cbiAgLy8gdXNlIHBsdWdpbnNcbiAgcGx1Z2luczogW1xuICAgIHJlcXVpcmUoJy4vcGx1Z2lucy9kb3dubG9hZC1yZW1vdGUtaW1hZ2VzJyksXG4gICAgbWFya2Rvd25IaW50UGx1Z2luKHtcbiAgICAgIC8vIFx1NTQyRlx1NzUyOFx1NjNEMFx1NzkzQVx1NUJCOVx1NTY2OFx1RkYwQ1x1OUVEOFx1OEJBNFx1NTQyRlx1NzUyOFxuICAgICAgaGludDogdHJ1ZSxcbiAgICAgIC8vIFx1NTQyRlx1NzUyOCBHRk0gXHU4QjY2XHU1NDRBXG4gICAgICBhbGVydDogdHJ1ZSxcbiAgICB9KSxcbiAgICBtYXJrZG93bkV4dFBsdWdpbih7XG4gICAgICBnZm06IHRydWVcbiAgICB9KSxcbiAgICBkb2NzZWFyY2hQbHVnaW4oe1xuICAgICAgYXBwSWQ6ICdJQkZEWTJKUVkxJyxcbiAgICAgIGFwaUtleTogJzNlZTlhYWNlYmJhNTM5MjkxMWU0ZjRhMzMzZjI5MWM0JyxcbiAgICAgIGluZGV4TmFtZTogJ3RlcnJhcmlhJyxcbiAgICAgIHNlYXJjaFBhcmFtZXRlcnM6IHtcbiAgICAgICAgZmFjZXRGaWx0ZXJzOiBbJ3poLUNOJ10sXG4gICAgICB9LFxuICAgICAgbG9jYWxlczoge1xuICAgICAgICAnL3poLyc6IHtcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ1x1NjQxQ1x1N0QyMlx1NjU4N1x1Njg2MycsXG4gICAgICAgICAgdHJhbnNsYXRpb25zOiB7XG4gICAgICAgICAgICBidXR0b246IHtcbiAgICAgICAgICAgICAgYnV0dG9uVGV4dDogJ1x1NjQxQ1x1N0QyMlx1NjU4N1x1Njg2MycsXG4gICAgICAgICAgICAgIGJ1dHRvbkFyaWFMYWJlbDogJ1x1NjQxQ1x1N0QyMlx1NjU4N1x1Njg2MycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kYWw6IHtcbiAgICAgICAgICAgICAgc2VhcmNoQm94OiB7XG4gICAgICAgICAgICAgICAgcmVzZXRCdXR0b25UaXRsZTogJ1x1NkUwNVx1OTY2NFx1NjdFNVx1OEJFMlx1Njc2MVx1NEVGNicsXG4gICAgICAgICAgICAgICAgcmVzZXRCdXR0b25BcmlhTGFiZWw6ICdcdTZFMDVcdTk2NjRcdTY3RTVcdThCRTJcdTY3NjFcdTRFRjYnLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdcdTUzRDZcdTZEODgnLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkFyaWFMYWJlbDogJ1x1NTNENlx1NkQ4OCcsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHN0YXJ0U2NyZWVuOiB7XG4gICAgICAgICAgICAgICAgcmVjZW50U2VhcmNoZXNUaXRsZTogJ1x1NjQxQ1x1N0QyMlx1NTM4Nlx1NTNGMicsXG4gICAgICAgICAgICAgICAgbm9SZWNlbnRTZWFyY2hlc1RleHQ6ICdcdTZDQTFcdTY3MDlcdTY0MUNcdTdEMjJcdTUzODZcdTUzRjInLFxuICAgICAgICAgICAgICAgIHNhdmVSZWNlbnRTZWFyY2hCdXR0b25UaXRsZTogJ1x1NEZERFx1NUI1OFx1ODFGM1x1NjQxQ1x1N0QyMlx1NTM4Nlx1NTNGMicsXG4gICAgICAgICAgICAgICAgcmVtb3ZlUmVjZW50U2VhcmNoQnV0dG9uVGl0bGU6ICdcdTRFQ0VcdTY0MUNcdTdEMjJcdTUzODZcdTUzRjJcdTRFMkRcdTc5RkJcdTk2NjQnLFxuICAgICAgICAgICAgICAgIGZhdm9yaXRlU2VhcmNoZXNUaXRsZTogJ1x1NjUzNlx1ODVDRicsXG4gICAgICAgICAgICAgICAgcmVtb3ZlRmF2b3JpdGVTZWFyY2hCdXR0b25UaXRsZTogJ1x1NEVDRVx1NjUzNlx1ODVDRlx1NEUyRFx1NzlGQlx1OTY2NCcsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGVycm9yU2NyZWVuOiB7XG4gICAgICAgICAgICAgICAgdGl0bGVUZXh0OiAnXHU2NUUwXHU2Q0Q1XHU4M0I3XHU1M0Q2XHU3RUQzXHU2NzlDJyxcbiAgICAgICAgICAgICAgICBoZWxwVGV4dDogJ1x1NEY2MFx1NTNFRlx1ODBGRFx1OTcwMFx1ODk4MVx1NjhDMFx1NjdFNVx1NEY2MFx1NzY4NFx1N0Y1MVx1N0VEQ1x1OEZERVx1NjNBNScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGZvb3Rlcjoge1xuICAgICAgICAgICAgICAgIHNlbGVjdFRleHQ6ICdcdTkwMDlcdTYyRTknLFxuICAgICAgICAgICAgICAgIG5hdmlnYXRlVGV4dDogJ1x1NTIwN1x1NjM2MicsXG4gICAgICAgICAgICAgICAgY2xvc2VUZXh0OiAnXHU1MTczXHU5NUVEJyxcbiAgICAgICAgICAgICAgICBzZWFyY2hCeVRleHQ6ICdcdTY0MUNcdTdEMjJcdTYzRDBcdTRGOUJcdTgwMDUnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBub1Jlc3VsdHNTY3JlZW46IHtcbiAgICAgICAgICAgICAgICBub1Jlc3VsdHNUZXh0OiAnXHU2NUUwXHU2Q0Q1XHU2MjdFXHU1MjMwXHU3NkY4XHU1MTczXHU3RUQzXHU2NzlDJyxcbiAgICAgICAgICAgICAgICBzdWdnZXN0ZWRRdWVyeVRleHQ6ICdcdTRGNjBcdTUzRUZcdTRFRTVcdTVDMURcdThCRDVcdTY3RTVcdThCRTInLFxuICAgICAgICAgICAgICAgIHJlcG9ydE1pc3NpbmdSZXN1bHRzVGV4dDogJ1x1NEY2MFx1OEJBNFx1NEUzQVx1OEJFNVx1NjdFNVx1OEJFMlx1NUU5NFx1OEJFNVx1NjcwOVx1N0VEM1x1Njc5Q1x1RkYxRicsXG4gICAgICAgICAgICAgICAgcmVwb3J0TWlzc2luZ1Jlc3VsdHNMaW5rVGV4dDogJ1x1NzBCOVx1NTFGQlx1NTNDRFx1OTk4OCcsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIHJlZ2lzdGVyQ29tcG9uZW50c1BsdWdpbih7XG4gICAgICBjb21wb25lbnRzRGlyOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9jb21wb25lbnRzJyksXG4gICAgfSksXG4gICAgLy8gb25seSBlbmFibGUgc2hpa2kgcGx1Z2luIGluIHByb2R1Y3Rpb24gbW9kZVxuICAgIGlzUHJvZFxuICAgICAgPyBzaGlraVBsdWdpbih7XG4gICAgICAgICAgbGFuZ3M6IFsnYmFzaCcsICdkaWZmJywgJ2pzb24nLCAnbWQnLCAndHMnLCAndnVlJywnanNvbjUnLCdjc2hhcnAnLCd5YW1sJ10sXG4gICAgICAgICAgdGhlbWU6ICdnaXRodWItbGlnaHQnLFxuICAgICAgICB9KVxuICAgICAgOiBbXSxcbiAgXSxcbn0pXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6L1VzZXJzLzEzMTEwL0Rlc2t0b3AvVFNob2NrUGx1Z2luRG9jcy1tYXN0ZXIvZG9jcy8udnVlcHJlc3MvY29uZmlnc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcMTMxMTBcXFxcRGVza3RvcFxcXFxUU2hvY2tQbHVnaW5Eb2NzLW1hc3RlclxcXFxkb2NzXFxcXC52dWVwcmVzc1xcXFxjb25maWdzXFxcXGhlYWQudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzLzEzMTEwL0Rlc2t0b3AvVFNob2NrUGx1Z2luRG9jcy1tYXN0ZXIvZG9jcy8udnVlcHJlc3MvY29uZmlncy9oZWFkLnRzXCI7aW1wb3J0IHR5cGUgeyBIZWFkQ29uZmlnIH0gZnJvbSAndnVlcHJlc3MvY29yZSdcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxuZXhwb3J0IGNvbnN0IGhlYWQ6IEhlYWRDb25maWdbXSA9IFtcbiAgW1xuICAgICdsaW5rJyxcbiAgICB7XG4gICAgICByZWw6ICdpY29uJyxcbiAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgc2l6ZXM6ICcxMjh4MTI4JyxcbiAgICAgIGhyZWY6IGBmYXZpY29uLmljb2AsXG4gICAgfSxcbiAgXSxcbiAgW1xuICAgICdsaW5rJyxcbiAgICB7XG4gICAgICByZWw6ICdpY29uJyxcbiAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgc2l6ZXM6ICcxMjh4MTI4JyxcbiAgICAgIGhyZWY6IGBmYXZpY29uLmljb2AsXG4gICAgfSxcbiAgXSxcbiAgWydsaW5rJywgeyByZWw6ICdtYW5pZmVzdCcsIGhyZWY6ICcvbWFuaWZlc3Qud2VibWFuaWZlc3QnIH1dLFxuICBbJ21ldGEnLCB7IG5hbWU6ICdhcHBsaWNhdGlvbi1uYW1lJywgY29udGVudDogJ1Z1ZVByZXNzJyB9XSxcbiAgWydtZXRhJywgeyBuYW1lOiAnYXBwbGUtbW9iaWxlLXdlYi1hcHAtdGl0bGUnLCBjb250ZW50OiAnVnVlUHJlc3MnIH1dLFxuICBbJ21ldGEnLCB7IG5hbWU6ICdhcHBsZS1tb2JpbGUtd2ViLWFwcC1zdGF0dXMtYmFyLXN0eWxlJywgY29udGVudDogJ2JsYWNrJyB9XSxcbiAgW1xuICAgICdsaW5rJyxcbiAgICB7IHJlbDogJ2FwcGxlLXRvdWNoLWljb24nLCBocmVmOiBgZmF2aWNvbi5pY29gIH0sXG4gIF0sXG4gIFtcbiAgICAnbGluaycsXG4gICAge1xuICAgICAgcmVsOiAnbWFzay1pY29uJyxcbiAgICAgIGhyZWY6ICdmYXZpY29uLmljbycsXG4gICAgICBjb2xvcjogJyMzZWFmN2MnLFxuICAgIH0sXG4gIF0sXG4gIFsnbWV0YScsIHsgbmFtZTogJ21zYXBwbGljYXRpb24tVGlsZUNvbG9yJywgY29udGVudDogJyMzZWFmN2MnIH1dLFxuICBbJ21ldGEnLCB7IG5hbWU6ICd0aGVtZS1jb2xvcicsIGNvbnRlbnQ6ICcjM2VhZjdjJyB9XSxcbl1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzovVXNlcnMvMTMxMTAvRGVza3RvcC9UU2hvY2tQbHVnaW5Eb2NzLW1hc3Rlci9kb2NzLy52dWVwcmVzcy9jb25maWdzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFwxMzExMFxcXFxEZXNrdG9wXFxcXFRTaG9ja1BsdWdpbkRvY3MtbWFzdGVyXFxcXGRvY3NcXFxcLnZ1ZXByZXNzXFxcXGNvbmZpZ3NcXFxcbWV0YS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvMTMxMTAvRGVza3RvcC9UU2hvY2tQbHVnaW5Eb2NzLW1hc3Rlci9kb2NzLy52dWVwcmVzcy9jb25maWdzL21ldGEudHNcIjtpbXBvcnQgeyBjcmVhdGVSZXF1aXJlIH0gZnJvbSAnbm9kZTptb2R1bGUnXG5pbXBvcnQgeyBmcyB9IGZyb20gJ3Z1ZXByZXNzL3V0aWxzJ1xuXG5jb25zdCByZXF1aXJlID0gY3JlYXRlUmVxdWlyZShpbXBvcnQubWV0YS51cmwpXG5cbmV4cG9ydCBjb25zdCBWRVJTSU9OID0gKFxuICBmcy5yZWFkSnNvblN5bmMocmVxdWlyZS5yZXNvbHZlKCd2dWVwcmVzcy9wYWNrYWdlLmpzb24nKSkgYXMge1xuICAgIHZlcnNpb246IHN0cmluZ1xuICB9XG4pLnZlcnNpb25cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzovVXNlcnMvMTMxMTAvRGVza3RvcC9UU2hvY2tQbHVnaW5Eb2NzLW1hc3Rlci9kb2NzLy52dWVwcmVzcy9jb25maWdzL25hdmJhclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcMTMxMTBcXFxcRGVza3RvcFxcXFxUU2hvY2tQbHVnaW5Eb2NzLW1hc3RlclxcXFxkb2NzXFxcXC52dWVwcmVzc1xcXFxjb25maWdzXFxcXG5hdmJhclxcXFxlbi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvMTMxMTAvRGVza3RvcC9UU2hvY2tQbHVnaW5Eb2NzLW1hc3Rlci9kb2NzLy52dWVwcmVzcy9jb25maWdzL25hdmJhci9lbi50c1wiO2ltcG9ydCB0eXBlIHsgTmF2YmFyT3B0aW9ucyB9IGZyb20gJ0B2dWVwcmVzcy90aGVtZS1kZWZhdWx0J1xuaW1wb3J0IHsgVkVSU0lPTiB9IGZyb20gJy4uL21ldGEuanMnXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5jb25zdCBndWlkZURpcmVjdG9yeSA9IHBhdGguam9pbihfX2Rpcm5hbWUsICcuLicsICcuLicsICcuLicsJ2VuJywgJ2d1aWRlJyk7XG5cblxuZXhwb3J0IGNvbnN0IG5hdmJhckVuOiBOYXZiYXJPcHRpb25zID0gW1xuICB7XG4gICAgdGV4dDogJ0d1aWRlJyxcbiAgICBjaGlsZHJlbjogZnMucmVhZGRpclN5bmMoZ3VpZGVEaXJlY3RvcnkpXG4gICAgICAuZmlsdGVyKGZpbGUgPT4gZmlsZS5lbmRzV2l0aCgnLm1kJykpXG4gICAgICAubWFwKGZpbGUgPT4gYC9lbi9ndWlkZS8ke2ZpbGV9YCksICAvLyBBZGp1c3QgdGhlIG1hcCBmdW5jdGlvbiB0byBjcmVhdGUgdGhlIGNvcnJlY3QgcmVsYXRpdmUgcGF0aHNcbiAgfVxuXTsiLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6L1VzZXJzLzEzMTEwL0Rlc2t0b3AvVFNob2NrUGx1Z2luRG9jcy1tYXN0ZXIvZG9jcy8udnVlcHJlc3MvY29uZmlncy9uYXZiYXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXDEzMTEwXFxcXERlc2t0b3BcXFxcVFNob2NrUGx1Z2luRG9jcy1tYXN0ZXJcXFxcZG9jc1xcXFwudnVlcHJlc3NcXFxcY29uZmlnc1xcXFxuYXZiYXJcXFxcemgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzLzEzMTEwL0Rlc2t0b3AvVFNob2NrUGx1Z2luRG9jcy1tYXN0ZXIvZG9jcy8udnVlcHJlc3MvY29uZmlncy9uYXZiYXIvemgudHNcIjtpbXBvcnQgdHlwZSB7IE5hdmJhck9wdGlvbnMgfSBmcm9tICdAdnVlcHJlc3MvdGhlbWUtZGVmYXVsdCdcbmltcG9ydCB7IFZFUlNJT04gfSBmcm9tICcuLi9tZXRhLmpzJ1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuY29uc3QgZ3VpZGVEaXJlY3RvcnkgPSBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4nLCAnLi4nLCAnLi4nLCd6aCcsICdndWlkZScpO1xuY29uc3QgcGx1Z2luZGV2RGlyZWN0b3J5ID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJy4uJywgJy4uJywgJy4uJywnemgnLCAncGx1Z2luLWRldicpO1xuXG5cbmV4cG9ydCBjb25zdCBuYXZiYXJaaDogTmF2YmFyT3B0aW9ucyA9IFtcbiAge1xuICAgIHRleHQ6ICdcdTYzRDJcdTRFRjZcdTRGN0ZcdTc1MjhcdTYzMDdcdTUzNTcnLFxuICAgIGNoaWxkcmVuOiBmcy5yZWFkZGlyU3luYyhndWlkZURpcmVjdG9yeSlcbiAgICAgIC5maWx0ZXIoZmlsZSA9PiBmaWxlLmVuZHNXaXRoKCcubWQnKSlcbiAgICAgIC5tYXAoZmlsZSA9PiBgL3poL2d1aWRlLyR7ZmlsZX1gKSxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdcdTYzRDJcdTRFRjZcdTVGMDBcdTUzRDFcdTYzMDdcdTUzNTcnLFxuICAgIGNoaWxkcmVuOiBmcy5yZWFkZGlyU3luYyhwbHVnaW5kZXZEaXJlY3RvcnkpXG4gICAgICAuZmlsdGVyKGZpbGUgPT4gZmlsZS5lbmRzV2l0aCgnLm1kJykpXG4gICAgICAubWFwKGZpbGUgPT4gYC96aC9wbHVnaW4tZGV2LyR7ZmlsZX1gKSxcbiAgfSxcbl07XG5cblxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOi9Vc2Vycy8xMzExMC9EZXNrdG9wL1RTaG9ja1BsdWdpbkRvY3MtbWFzdGVyL2RvY3MvLnZ1ZXByZXNzL2NvbmZpZ3Mvc2lkZWJhclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcMTMxMTBcXFxcRGVza3RvcFxcXFxUU2hvY2tQbHVnaW5Eb2NzLW1hc3RlclxcXFxkb2NzXFxcXC52dWVwcmVzc1xcXFxjb25maWdzXFxcXHNpZGViYXJcXFxcZW4udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzLzEzMTEwL0Rlc2t0b3AvVFNob2NrUGx1Z2luRG9jcy1tYXN0ZXIvZG9jcy8udnVlcHJlc3MvY29uZmlncy9zaWRlYmFyL2VuLnRzXCI7aW1wb3J0IHR5cGUgeyBTaWRlYmFyT3B0aW9ucyB9IGZyb20gJ0B2dWVwcmVzcy90aGVtZS1kZWZhdWx0J1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5jb25zdCBndWlkZURpcmVjdG9yeSA9IHBhdGguam9pbihfX2Rpcm5hbWUsICcuLicsICcuLicsICcuLicsJ2VuJywgJ2d1aWRlJyk7XG5cblxuZXhwb3J0IGNvbnN0IHNpZGViYXJFbjogU2lkZWJhck9wdGlvbnMgPSBbXG4gIHtcbiAgICB0ZXh0OiAnR3VpZGUnLFxuICAgIGNoaWxkcmVuOiBmcy5yZWFkZGlyU3luYyhndWlkZURpcmVjdG9yeSlcbiAgICAgIC5maWx0ZXIoZmlsZSA9PiBmaWxlLmVuZHNXaXRoKCcubWQnKSlcbiAgICAgIC5tYXAoZmlsZSA9PiBgL2VuL2d1aWRlLyR7ZmlsZX1gKSwgIC8vIEFkanVzdCB0aGUgbWFwIGZ1bmN0aW9uIHRvIGNyZWF0ZSB0aGUgY29ycmVjdCByZWxhdGl2ZSBwYXRoc1xuICB9XG5dO1xuXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6L1VzZXJzLzEzMTEwL0Rlc2t0b3AvVFNob2NrUGx1Z2luRG9jcy1tYXN0ZXIvZG9jcy8udnVlcHJlc3MvY29uZmlncy9zaWRlYmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFwxMzExMFxcXFxEZXNrdG9wXFxcXFRTaG9ja1BsdWdpbkRvY3MtbWFzdGVyXFxcXGRvY3NcXFxcLnZ1ZXByZXNzXFxcXGNvbmZpZ3NcXFxcc2lkZWJhclxcXFx6aC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvMTMxMTAvRGVza3RvcC9UU2hvY2tQbHVnaW5Eb2NzLW1hc3Rlci9kb2NzLy52dWVwcmVzcy9jb25maWdzL3NpZGViYXIvemgudHNcIjtpbXBvcnQgdHlwZSB7IFNpZGViYXJPcHRpb25zIH0gZnJvbSAnQHZ1ZXByZXNzL3RoZW1lLWRlZmF1bHQnXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmNvbnN0IGd1aWRlRGlyZWN0b3J5ID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJy4uJywgJy4uJywgJy4uJywnemgnLCAnZ3VpZGUnKTtcbmNvbnN0IHBsdWdpbmRldkRpcmVjdG9yeSA9IHBhdGguam9pbihfX2Rpcm5hbWUsICcuLicsICcuLicsICcuLicsJ3poJywgJ3BsdWdpbi1kZXYnKTtcblxuXG5leHBvcnQgY29uc3Qgc2lkZWJhclpoOiBTaWRlYmFyT3B0aW9ucyA9IFtcbiAge1xuICAgIHRleHQ6ICdcdTYzRDJcdTRFRjZcdTRGN0ZcdTc1MjhcdTYzMDdcdTUzNTcnLFxuICAgIGNoaWxkcmVuOiBmcy5yZWFkZGlyU3luYyhndWlkZURpcmVjdG9yeSlcbiAgICAgIC5maWx0ZXIoZmlsZSA9PiBmaWxlLmVuZHNXaXRoKCcubWQnKSlcbiAgICAgIC5tYXAoZmlsZSA9PiBgL3poL2d1aWRlLyR7ZmlsZX1gKSwgIC8vIEFkanVzdCB0aGUgbWFwIGZ1bmN0aW9uIHRvIGNyZWF0ZSB0aGUgY29ycmVjdCByZWxhdGl2ZSBwYXRoc1xuICB9LFxuICB7XG4gICAgdGV4dDogJ1x1NjNEMlx1NEVGNlx1NUYwMFx1NTNEMVx1NjMwN1x1NTM1NycsXG4gICAgY2hpbGRyZW46IGZzLnJlYWRkaXJTeW5jKHBsdWdpbmRldkRpcmVjdG9yeSlcbiAgICAgIC5maWx0ZXIoZmlsZSA9PiBmaWxlLmVuZHNXaXRoKCcubWQnKSlcbiAgICAgIC5tYXAoZmlsZSA9PiBgL3poL3BsdWdpbi1kZXYvJHtmaWxlfWApLCAgLy8gQWRqdXN0IHRoZSBtYXAgZnVuY3Rpb24gdG8gY3JlYXRlIHRoZSBjb3JyZWN0IHJlbGF0aXZlIHBhdGhzXG4gIH0sXG5dO1xuXG4iXSwKICAibWFwcGlu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QUEsZ0JBQ2xCLHVCQUF1QjtBQUFBLGNBQ3pCO0FBQUEsY0FDQSxhQUFhO0FBQUEsZ0JBQ1gscUJBQXFCO0FBQUEsZ0JBQ3JCLHNCQUFzQjtBQUFBLGdCQUN0Qiw2QkFBNkI7QUFBQSxnQkFDN0IsK0JBQStCO0FBQUEsZ0JBQy9CLHVCQUF1QjtBQUFBLGdCQUN2QixpQ0FBaUM7QUFBQSxjQUNuQztBQUFBLGNBQ0EsYUFBYTtBQUFBLGdCQUNYLFdBQVc7QUFBQSxnQkFDWCxVQUFVO0FBQUEsY0FDWjtBQUFBLGNBQ0EsUUFBUTtBQUFBLGdCQUNOLFlBQVk7QUFBQSxnQkFDWixjQUFjO0FBQUEsZ0JBQ2QsV0FBVztBQUFBLGdCQUNYLGNBQWM7QUFBQSxjQUNoQjtBQUFBLGNBQ0EsaUJBQWlCO0FBQUEsZ0JBQ2YsZUFBZTtBQUFBLGdCQUNmLG9CQUFvQjtBQUFBLGdCQUNwQiwwQkFBMEI7QUFBQSxnQkFDMUIsOEJBQThCO0FBQUEsY0FDaEM7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCx5QkFBeUI7QUFBQSxNQUN2QixlQUFlRSxNQUFLLFFBQVFILFlBQVcsY0FBYztBQUFBLElBQ3ZELENBQUM7QUFBQTtBQUFBLElBRUQsU0FDSSxZQUFZO0FBQUEsTUFDVixPQUFPLENBQUMsUUFBUSxRQUFRLFFBQVEsTUFBTSxNQUFNLE9BQU0sU0FBUSxVQUFTLE1BQU07QUFBQSxNQUN6RSxPQUFPO0FBQUEsSUFDVCxDQUFDLElBQ0QsQ0FBQztBQUFBLEVBQ1A7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJjcmVhdGVSZXF1aXJlIiwgInBhdGgiLCAicmVxdWlyZSIsICJmcyIsICJmcyIsICJmcyIsICJwYXRoIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lIiwgImd1aWRlRGlyZWN0b3J5IiwgInBhdGgiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUiLCAiZnMiLCAiZnMiLCAicGF0aCIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSIsICJndWlkZURpcmVjdG9yeSIsICJwYXRoIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lIiwgImZzIiwgImZzIiwgInBhdGgiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUiLCAiZ3VpZGVEaXJlY3RvcnkiLCAicGF0aCIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSIsICJwbHVnaW5kZXZEaXJlY3RvcnkiLCAiZnMiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCIsICJfX2Rpcm5hbWUiLCAicmVxdWlyZSIsICJjcmVhdGVSZXF1aXJlIiwgInBhdGgiXQp9Cg==
