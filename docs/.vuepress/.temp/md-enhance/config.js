import { defineClientConfig } from "@vuepress/client";
import { useHint } from "D:/deer/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.5_markdown-it@13.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/composables/hint.js";
import "D:/deer/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.5_markdown-it@13.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import Tabs from "D:/deer/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.5_markdown-it@13.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHint();
  }
});
