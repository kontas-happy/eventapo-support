<template>
    <div>
        <h2>FAQ</h2>
        <div class="search">
            <span aria-hidden="true" class="vpi-search search-icon local-search-icon" />
            <input type="text" v-model="searchQuery" placeholder="検索" />
        </div>
        <VPFeatures class="full-width" :features="filteredItems" />
    </div>
</template>

<script setup>

import { VPFeatures } from "vitepress/theme";
import { ref, computed } from "vue";

const items = [
    {
        "title": "招待のみのイベントを作成できますか？",
        "details": "招待機能・参加制限機能はまだ実装されていませんが、\n今後のアップデートで実装予定です。"
    },
    {
        "title": "チケットをキャンセルできますか？",
        "details": "キャンセル機能は実装中です。今しばらくお待ちください。\n参加取り消し・返金については、イベント主催者にお問い合わせください。"
    },
    {
        "title": "返金するときの操作を教えてください。",
        "details": "返金は、Stripeのダッシュボードから行えます。\n詳細は、Stripeの公式サポートページをご覧ください。",
        "link": "https://support.stripe.com/questions/how-to-refund-a-customer",
        "linkText": "購入者への返金方法 : Stripe: ヘルプ & サポート"
    },
    {
        "title": "現金での支払いはできますか？",
        "details": "現金での支払いはできません。\nStripeで利用可能な決済方法をご利用ください。"
    }
].sort((a, b) => a.title.localeCompare(b.title));

const searchQuery = ref("");

const filteredItems = computed(() => {
    if (!searchQuery.value) return items;
    const query = searchQuery.value.toLowerCase();
    const result = items.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.details.toLowerCase().includes(query)
    );
    if (result.length === 0) {
        return [{ 
            "title": "該当する項目が見つかりませんでした",
            "details": "お困りの際は、いつでもお気軽にお問い合わせください。担当スタッフが丁寧に対応させていただきます。",
            "link": "https://eventapo.com/contact",
            "linkText": "お問い合わせ",
            "icon": "?"
        }];
    }
    return result;
});
</script>

<style scoped>
.search {
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: var(--vp-c-bg-alt);
    border-radius: 8px;
    padding: 0 10px 0 12px;
    margin-bottom: 16px;
    width: 100%;
    height: 40px;
}

.search input {
    width: 100%;
    border: none;
    font-size: 1em;
}
</style>