export const navbar =                     [
    {
        text: "首页",
        link: "/",
    },
    {
        text: "政治",
        children: [
            {
                text: "马克思主义基本原理",
                link: "/politics/principle/",
            },
            {
                text: "中国近代史纲要",
                link: "/politics/history/1.md",
            },
            {
                text: "毛泽东思想和中特",
                link: "/politics/mzdzt/1.md",
            },
            {
                text: "法律基础和道德修养",
                link: "/politics/law/1.md",
            }
        ]
    },
    {
        text: "教育学",
        children: [
            {
                text: "教育学原理",
                link: "/education/principle/1.md",
            },
            {
                text: "中国教育史",
                link: "/education/china/1.md",
            },
            {
                text: "外国教育史",
                link: "/education/foreign/1.md",
            }
        ]
    },
    {
        text: "社会工作者",
        children: [
            {
                text: "初级社工证",
                link: "/social/junior/",
            },
            {
                text: "中级社工证",
                link: "/social/senior/",
            }
        ]
    }
]