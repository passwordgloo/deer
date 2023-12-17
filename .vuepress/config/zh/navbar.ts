export const navbar = [
    {
        text: "首页",
        link: "/",
        icon: "Home"
    },
    {
        text: "政治",
        icon: "Star",
        children: [
            {
                text: "马克思主义基本原理",
                link: "/docs/politics/principle/",
                icon: "SendToBack"
            },
            {
                text: "中国近代史纲要",
                link: "/docs/politics/history/",
                icon: "SendToBack"
            },
            {
                text: "毛泽东思想和中特",
                link: "/docs/politics/mzdzt/",
                icon: "SendToBack"
            },
            {
                text: "法律基础和道德修养",
                link: "/docs/politics/law/",
                icon:"SendToBack"
        }
        ]
    },
    {
        text: "教育学",
        icon: "Education",
        children: [
            {
                text: "教育学原理",
                link: "/docs/education/principle/1.md",
                icon: "Group"
            },
            {
                text: "中国教育史",
                link: "/docs/education/china/1.md",
                icon: "Group"
            },
            {
                text: "外国教育史",
                link: "/docs/education/foreign/1.md",
                icon: "Group"
            }
        ]
    },
    {
        text: "社会工作者",
        icon: "BookmarkFilled",
        children: [
            {
                text: "初级社工证",
                link: "/docs/social/junior/",
                icon: "Bookmark"
            },
            {
                text: "中级社工证",
                link: "/docs/social/senior/",
                icon: "Bookmark"
            }
        ]
    }
]