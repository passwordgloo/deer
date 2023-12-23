export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/hello.gif\",\"heroText\":\"小鹿资料库\",\"tagline\":\"繁星似海 熠熠生辉\",\"actions\":[{\"text\":\"博客\",\"link\":\"https://iglooblog.top\",\"type\":\"primary\"},{\"text\":\"关于\",\"link\":\"about.md\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"笔记\",\"details\":\"Markdown语言，简洁高效记录每一刻\"},{\"title\":\"博客\",\"details\":\"干净整洁的博客，易于存档文件\"},{\"title\":\"文档\",\"details\":\"在线个人文档，创作中意的文档\"}],\"footer\":\"MIT Licensed | Copyright © 2020-present Passwordgloo\"},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
