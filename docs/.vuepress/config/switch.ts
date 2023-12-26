import * as zhConfig from './zh'

export const themeConfig = {
    locales: {
        '/': {
            selectLanguageName: '简体中文',
            selectLanguageText: '选择语言',
            editLinkText:'在 Gitee 上编辑此页',
            lastUpdatedText: '最后更新时间',
            contributorsText:'贡献者',
            navbar: zhConfig.navbar,
            sidebar: zhConfig.sidebar,
        },
    },
    logo: '/logo.svg',
    repo: 'passwordgloo/deer',
}