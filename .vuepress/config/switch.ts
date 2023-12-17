import * as zhConfig from './zh'

export const themeConfig = {
    locales: {
        '/': {
            selectLanguageText: '选择语言',
            selectLanguageName: '简体中文',
            lastUpdatedText: '最后更新时间',
            navbar: zhConfig.navbar,
            series: zhConfig.series,
            // commentConfig: zhConfig.commentConfig,
            bulletin: zhConfig.bulletin,
        },
    },
    style:"@vuepress-reco/style-default",
    logo: '/logo.svg',
    author: 'passwordgloo',
    authorAvatar:"/avator.png",
    autoSetSeries:true,
    docsRepo: 'https://github.com/passwordgloo/deer',
    docsBranch: 'study',
    docsDir: '/docs',
    vuePreviewsDir: './docs/.vuepress/vue-previews',
}