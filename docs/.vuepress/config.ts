import { defaultTheme } from 'vuepress'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { themeConfig } from './config/switch';

export default {
    //favicon
    plugins: [
        mdEnhancePlugin({
            tabs: true,
            hint: true,
            alert: true,
            footnote:true,
        }),
        docsearchPlugin({
            appId: "CI6QLU7S6T",
            apiKey: "1d17b3b0e90f6e1a784b63707e6f8545",
            indexName: "deer",
            locales: {
                "/": {
                    placeholder: "搜索文档",
                    translations: {
                        button: {
                            buttonText: "搜索文档",
                            buttonAriaLabel: "搜索文档",
                        },
                        modal: {
                            searchBox: {
                                resetButtonTitle: "清除查询条件",
                                resetButtonAriaLabel: "清除查询条件",
                                cancelButtonText: "取消",
                                cancelButtonAriaLabel: "取消",
                            },
                            startScreen: {
                                recentSearchesTitle: "搜索历史",
                                noRecentSearchesText: "没有搜索历史",
                                saveRecentSearchButtonTitle: "保存至搜索历史",
                                removeRecentSearchButtonTitle: "从搜索历史中移除",
                                favoriteSearchesTitle: "收藏",
                                removeFavoriteSearchButtonTitle: "从收藏中移除",
                            },
                            errorScreen: {
                                titleText: "无法获取结果",
                                helpText: "你可能需要检查你的网络连接",
                            },
                            footer: {
                                selectText: "选择",
                                navigateText: "切换",
                                closeText: "关闭",
                                searchByText: "搜索提供者",
                            },
                            noResultsScreen: {
                                noResultsText: "无法找到相关结果",
                                suggestedQueryText: "你可以尝试查询",
                                reportMissingResultsText: "你认为该查询应该有结果？",
                                reportMissingResultsLinkText: "点击反馈",
                            },
                        },
                    },
                },
                // "/en/": {
                //   placeholder: "Search Documentation",
                //   translations: {
                //     button: {
                //       buttonText: "Search Documentation",
                //     },
                //   },
                // },
            },

        }),
    ],
    locales: {

        '/': {
            selectLanguageName: '简体中文',
            title: '小鹿乐园',
            description: '繁星似海 熠熠生辉',
            lang: "zh-CN",
        },
        // '/en/': {
        //     selectLanguageName: 'English',
        //     title: 'deer library',
        //     description: 'Oh my deer',
        // },
    },

    theme: defaultTheme(themeConfig)
}