import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    "title": "Eventapo サポートセンター",
    "description": "Eventapoに関するサポート情報を提供します。",
    "themeConfig": {
    // https://vitepress.dev/reference/default-theme-config
        "siteTitle": "Eventapo サポートセンター",
        "nav": [
            { "text": "Home", "link": "/" },
            { "text": "Examples", "link": "/markdown-examples" }
        ],

        "sidebar": [
            {
                "text": "Examples",
                "items": [
                    { "text": "Markdown Examples", "link": "/markdown-examples" },
                    { "text": "Runtime API Examples", "link": "/api-examples" }
                ]
            }
        ],

        "socialLinks": [
            { "icon": "github", "link": "https://github.com/vuejs/vitepress" }
        ]
    }
});
