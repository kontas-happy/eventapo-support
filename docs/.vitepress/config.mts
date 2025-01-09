import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    "title": "Eventapo サポートセンター",
    "description": "Eventapoに関するサポート情報を提供します。",
    "themeConfig": {
    // https://vitepress.dev/reference/default-theme-config
        "siteTitle": "Eventapo サポートセンター",
        "nav": [
            { "text": "サービスページ", "link": "https://eventapo.com/" },
            { "text": "ホーム", "link": "/" }
        ],

        "sidebar": [
            {
                "text": "機能について",
                "items": [
                    { "text": "イベント作成", "link": "/features/create-event" },
                    { "text": "イベント管理", "link": "/features/manage-event" },
                    { "text": "チケット管理", "link": "/features/manage-ticket" },
                    { "text": "参加者管理", "link": "/features/manage-participant" },
                    { "text": "その他", "link": "/features/other" }
                ]
            }
        ],
    }
});
