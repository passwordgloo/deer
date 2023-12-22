import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import { recoTheme } from 'vuepress-theme-reco'
import { themeConfig } from './config/switch';

export default defineUserConfig({
  title: "小鹿乐园",
  description: "本地文档",
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
        lang: 'zh-CN',
        title: '小鹿乐园',
        description: '风起云涌',
    },
},
theme: recoTheme(themeConfig),
  // debug: true,
});
