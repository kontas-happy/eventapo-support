import "./eventapo.css";

import DefaultTheme, { VPFeatures } from "vitepress/theme";

import FAQ from "../components/FAQ.vue";
import FeeExample from "../components/FeeExample.vue";
import FeePreview from "../components/FeePreview.vue";
import WritingPage from "../components/WritingPage.vue";

export default {
    ...DefaultTheme,

    "enhanceApp"({ app }) {
        app.component("VPFeatures", VPFeatures);
        app.component("FAQ", FAQ);
        app.component("FeeExample", FeeExample);
        app.component("FeePreview", FeePreview);
        app.component("WritingPage", WritingPage);
    }
};