import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    "title": "Eventapo サポートセンター",
    "description": "Eventapoへようこそ。\nこのサイトでは、Eventapoに関するサポート情報を提供します。",
    "lang": "ja",
    "sitemap": {
        "hostname": "https://support.eventapo.com"
    },
    "themeConfig": {
        // https://vitepress.dev/reference/default-theme-config
        "siteTitle": "Eventapo サポートセンター",
        "nav": [
            { "text": "ホーム", "link": "/" },
            { "text": "サービスページ", "link": "https://eventapo.com/" },
            { "text": "お問い合わせ", "link": "https://eventapo.com/contact" }
        ],
        "sidebar": [
            {
                "text": "ホーム",
                "link": "/"
            },
            {
                "text": "サービスページ",
                "link": "https://eventapo.com/"
            },
            {
                "text": "お問い合わせ",
                "link": "https://eventapo.com/contact"
            },
            {
                "text": "ユーザーガイド",
                "base": "/guide/user",
                "items": [
                    { "text": "Eventapoとは", "link": "/" },
                    { "text": "アカウント作成", "link": "/create-account" },
                    { "text": "イベントを探す", "link": "/view-event" },
                    { "text": "チケットを入手", "link": "/get-ticket" }
                ]
            },
            {
                "text": "導入ガイド",
                "base": "/guide",
                "items": [
                    { "text": "Eventapoとは", "link": "/" },
                    { "text": "アカウント作成", "link": "/create-account" },
                    { "text": "イベント作成と編集", "link": "/create-event" },
                    { "text": "チケット設定", "link": "/create-ticket" },
                    { "text": "Stripeとの連携", "link": "/connect-stripe" },
                    { "text": "イベント公開", "link": "/publish-event" }
                ]
            },
            {
                "text": "会場操作ガイド",
                "base": "/guide/venue",
                "items": [
                    { "text": "会場操作とは", "link": "/" },
                    { "text": "チケットのスキャンと入退場", "link": "/scan-ticket" },
                    { "text": "参加者の一覧", "link": "/attendees-list" }
                ]
            },
            {
                "text": "機能について",
                "base": "/features",
                "items": [
                    { "text": "(準備中)", "link": "/" }
                ]
            },
            {
                "text": "各種手数料",
                "base": "/fees",
                "items": [
                    { "text": "手数料について", "link": "/" }
                ]
            },
            {
                "text": "よくあるご質問",
                "base": "/faq",
                "items": [
                    { "text": "FAQトップ", "link": "/" }
                ]
            },
            {
                "text": "導入事例",
                "base": "/case-studies",
                "items": [
                    { "text": "(準備中)", "link": "/" }
                ]
            }
        ],
        "search": {
            "provider": "local",
            "options": {
                "translations": {
                    "button": {
                        "buttonAriaLabel": "検索ボックスを開く",
                        "buttonText": "検索"
                    },
                    "modal": {
                        "backButtonTitle": "閉じる",
                        "displayDetails": "詳細リストを表示",
                        "footer": {
                            "closeKeyAriaLabel": "エスケープキー",
                            "closeText": "閉じる",
                            "navigateDownKeyAriaLabel": "下矢印キー",
                            "navigateText": "選択",
                            "navigateUpKeyAriaLabel": "上矢印キー",
                            "selectKeyAriaLabel": "エンターキー",
                            "selectText": "決定"
                        },
                        "noResultsText": "検索結果がありません",
                        "resetButtonTitle": "検索をリセット"
                    }
                }
            }
        },
        "footer": {
            "copyright": `© ${new Date().getFullYear()} Kontas Inc.`
        },

        // locales
        "lastUpdated": {
            "text": "最終更新日"
        },
        "docFooter": {
            "next": "次のページ",
            "prev": "前のページ"
        },
        "langMenuLabel": "言語",
        "notFound": {
            "linkLabel": "ホームに戻る",
            "linkText": "ホームに戻る",
            "quote": "進む方向を変えなければ、目指す場所にたどり着くだろう — 老子",
            "title": "ページが見つかりません"
        },
        "outline": {
            "label": "目次",
            "level": "deep"
        },
        "darkModeSwitchLabel": "外観テーマ",
        "lightModeSwitchTitle": "ライトモード",
        "darkModeSwitchTitle": "ダークモード",
        "sidebarMenuLabel": "メニュー",
        "returnToTopLabel": "トップに戻る"
    },
    "transformHead": ({ pageData }) => {
        const title = pageData.title ? `${pageData.title} | Eventapo サポートセンター` : "Eventapo サポートセンター";
        const description = pageData.frontmatter.description || "Eventapoに関するサポート情報を提供します。";
        const gtag = process.env.NODE_ENV === "production" ? "G-ZS67DJT6KL" : "";
        return [
            ["meta", { "property": "og:title", "content": title }],
            ["meta", { "property": "og:description", "content": description }],
            [
                "script",
                { "async": "", "src": "https://www.googletagmanager.com/gtag/js?id=" + gtag }
            ],
            [
                "script",
                {},
                `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gtag}');`
            ]
        ];
    },
    "head": [
        ["link", { "rel": "icon", "href": "/favicon.ico" }],
        ["meta", { "property": "og:image", "content": "https://support.eventapo.com/images/eventapo-support.jpg" }],
        ["meta", { "property": "og:site_name", "content": "Eventapo サポートセンター" }],
        ["meta", { "name": "twitter:card", "content": "summary_large_image" }],
        ["meta", { "name": "twitter:image", "content": "https://support.eventapo.com/images/eventapo-support.jpg" }]
    ],
    "markdown": {
        "container": {
            "tipLabel": "ヒント",
            "warningLabel": "注意",
            "dangerLabel": "警告",
            "infoLabel": "情報",
            "detailsLabel": "詳細"
        }
    }
});
