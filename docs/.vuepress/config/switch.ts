import * as zhConfig from './zh'

export const themeConfig = {
    locales: {
        '/': {
            selectLanguageName: '简体中文',
            selectLanguageText: '选择语言',
            lastUpdatedText: '最后更新时间',
            navbar: zhConfig.navbar,
            sidebar: zhConfig.sidebar,
        },
    },
    logo: '/logo.svg',
    repo: 'passwordgloo/deer',
}