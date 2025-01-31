import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { Plugin } from 'vuepress';

export default (options = {}, ctx): Plugin => {
  return {
    name: 'download-remote-images',
    async ready() {
      const files = await ctx.pages
        .filter(page => page._filePath.endsWith('.md'))
        .map(page => page._filePath);

      for (const file of files) {
        let content = fs.readFileSync(file, 'utf8');

        // 处理 Markdown 图片语法 ![alt](url)
        const markdownImageUrls = content.match(/!\[.*?\]\((http.*?)\)/g) || [];
        for (const urlMatch of markdownImageUrls) {
          const remoteUrl = urlMatch.match(/\((.*?)\)/)[1];
          const imageName = path.basename(remoteUrl);
          const savePath = path.join(ctx.sourceDir, 'public/assets', imageName);

          // 下载图片
          const response = await axios.get(remoteUrl, { responseType: 'arraybuffer' });
          fs.writeFileSync(savePath, response.data);

          // 替换链接
          content = content.replace(remoteUrl, `/assets/${imageName}`);
        }

        // 处理 HTML <img> 标签
        const htmlImageUrls = content.match(/<img[^>]+src="(http[^">]+)"/g) || [];
        for (const urlMatch of htmlImageUrls) {
          const remoteUrl = urlMatch.match(/src="(.*?)"/)[1];
          const imageName = path.basename(remoteUrl);
          const savePath = path.join(ctx.sourceDir, 'public/assets', imageName);

          // 下载图片
          const response = await axios.get(remoteUrl, { responseType: 'arraybuffer' });
          fs.writeFileSync(savePath, response.data);

          // 替换链接
          content = content.replace(remoteUrl, `/assets/${imageName}`);
        }

        // 保存修改后的内容
        fs.writeFileSync(file, content);
      }
    }
  };
};