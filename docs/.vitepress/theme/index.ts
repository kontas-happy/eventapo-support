import "./eventapo.css";

import DefaultTheme from "vitepress/theme";

import WritingPage from "../components/WritingPage.vue";

export default {
    ...DefaultTheme,

    "enhanceApp"({ app }) {
        app.component("WritingPage", WritingPage);
    }
};