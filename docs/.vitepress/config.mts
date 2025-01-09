import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    "title": "Eventapo サポートセンター",
    "description": "Eventapoに関するサポート情報を提供します。",
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
                    { "text": "(準備中)", "link": "/" }
                ]
            },
            {
                "text": "よくある質問",
                "base": "/faq",
                "items": [
                    { "text": "(準備中)", "link": "/" }
                ]
            },
            {
                "text": "導入事例",
                "base": "/case-studies",
                "items": [
                    { "text": "(準備中)", "link": "/" }
                ]
            }
        ]
    },
    "head": [
        ["link", { "rel": "icon", "href": "/favicon.ico" }],
        ["meta", { "property": "og:title", "content": "Eventapo サポートセンター" }],
        ["meta", { "property": "og:description", "content": "Eventapoに関するサポート情報を提供します。" }],
        ["meta", { "property": "og:image", "content": "https://support.eventapo.com/images/eventapo-support.jpg" }],
        ["meta", { "property": "og:site_name", "content": "Eventapo サポートセンター" }],
        ["meta", { "name": "twitter:card", "content": "summary_large_image" }],
        ["meta", { "name": "twitter:image", "content": "https://support.eventapo.com/images/eventapo-support.jpg" }]
    ]
});
