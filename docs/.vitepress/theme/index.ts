import "./eventapo.css";

import DefaultTheme from "vitepress/theme";
import { VPFeatures } from "vitepress/theme";

import WritingPage from "../components/WritingPage.vue";
import FAQ from "../components/FAQ.vue";

export default {
    ...DefaultTheme,

    "enhanceApp"({ app }) {
        app.component("VPFeatures", VPFeatures);
        app.component("WritingPage", WritingPage);
        app.component("FAQ", FAQ);
    }
};