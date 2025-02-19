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

<script setup lang="ts">

import { DefaultTheme, VPFeatures } from "vitepress/theme";
import { ref, computed } from "vue";

interface Feature {
    icon?: DefaultTheme.FeatureIcon
    title: string
    details: string
    link?: string
    linkText?: string
    rel?: string
    target?: string
}

interface FeatureWithTags extends Feature {
    tags: string[]
}

const items: FeatureWithTags[] = [
    {
        "title": "招待のみのイベントを作成できますか？",
        "tags": ["招待", "参加制限", "プライベート", "非公開", "イベント設定", "アクセス制御", "セキュリティ", "参加者管理", "承認制", "招待制"],
        "details": "招待機能・参加制限機能はまだ実装されていませんが、\n今後のアップデートで実装予定です。",
        "icon": {
            "light": "/images/icons/redeem.svg",
            "dark": "/images/icons/dark/redeem.svg"
        }
    },
    {
        "title": "チケットをキャンセルできますか？",
        "tags": ["チケット", "キャンセル", "返金", "払い戻し", "参加取り消し", "取り消し", "変更", "退出", "参加者管理", "予約変更"],
        "details": "キャンセル機能は実装中です。今しばらくお待ちください。\n参加取り消し・返金については、イベント主催者にお問い合わせください。",
        "icon": {
            "light": "/images/icons/event_busy.svg",
            "dark": "/images/icons/dark/event_busy.svg"
        }
    },
    {
        "title": "返金するときの操作を教えてください。",
        "tags": ["返金", "払い戻し", "Stripe", "操作方法", "決済", "キャンセル", "支払い", "チケット", "主催者", "マニュアル"],
        "details": "返金は、Stripeのダッシュボードから行えます。\n詳細は、Stripeの公式サポートページをご覧ください。",
        "link": "https://support.stripe.com/questions/how-to-refund-a-customer",
        "linkText": "購入者への返金方法 : Stripe: ヘルプ & サポート",
        "icon": {
            "light": "/images/icons/paid.svg",
            "dark": "/images/icons/dark/paid.svg"
        }
    },
    {
        "title": "現金での支払いはできますか？",
        "tags": ["現金", "支払い", "決済方法", "オフライン", "Stripe", "クレジットカード", "銀行振込", "支払い方法", "料金", "オンライン決済"],
        "details": "現金での支払いはできません。\nStripeで利用可能な決済方法をご利用ください。",
        "icon": {
            "light": "/images/icons/payments.svg",
            "dark": "/images/icons/dark/payments.svg"
        }
    },
    {
        "title": "Stripeとはなんですか？",
        "tags": ["Stripe", "決済", "支払い", "オンライン決済", "クレジットカード", "金融", "サービス", "API", "セキュリティ", "決済システム"],
        "details": "Stripe, Inc.は、カリフォルニア州サンフランシスコとアイルランドのダブリンに本社を置く金融サービスおよびSaaS企業です。主にeコマースウェブサイトやモバイルアプリ向けに、決済処理ソフトウェアとAPIを提供しています。",
        "link": "https://stripe.com/jp",
        "linkText": "Stripe | インターネット向け金融インフラ",
        "icon": {
            "src":"/images/logos/stripe.svg"
        }
    },
    {
        "title": "チケットは抽選ですか？",
        "tags": ["チケット", "抽選", "先着順", "販売", "チケット販売", "販売方法", "チケット予約", "予約", "販売順", "販売方法"],
        "details": "チケットは抽選ではありません。\nチケットは、先着順での販売となります。",
        "icon": {
            "light": "/images/icons/book_online.svg",
            "dark": "/images/icons/dark/book_online.svg"
        }
    },
    {
        "title": "チケットは譲渡・転売できますか？",
        "tags": ["チケット", "譲渡", "転売", "転売禁止", "チケット販売", "チケット転売", "チケット譲渡", "チケット取引", "チケット管理", "チケット移譲"],
        "details": "チケットは譲渡・転売できません。\nチケットをキャンセルしたい場合は、イベント主催者にお問い合わせください。",
        "icon": {
            "light": "/images/icons/confirmation_number.svg",
            "dark": "/images/icons/dark/confirmation_number.svg"
        }
    },
    {
        "title": "Eventapoのサービスは無料ですか？",
        "tags": ["Eventapo", "サービス", "料金", "無料", "プラン", "有料", "料金体系", "利用料金", "料金プラン", "料金設定"],
        "details": "Eventapoは、基本的に無料でご利用いただけます。\n一部の機能は手数料が発生する場合があります。\n詳しくは、手数料についてのページをご覧ください。",
        "link": "/fees",
        "linkText": "手数料について",
        "icon": {
            "light": "/images/icons/savings.svg",
            "dark": "/images/icons/dark/savings.svg"
        }
    },
    {
        "title": "不具合が起こりました。どこに問い合わせたら良いですか？",
        "tags": ["不具合", "問い合わせ", "サポート", "お問い合わせ", "エラー", "トラブル", "バグ", "問題", "サポート窓口", "サポートセンター"],
        "details": "不具合が発生した場合は、いつでもお気軽にお問い合わせください。\n担当スタッフが丁寧に対応させていただきます。",
        "link": "https://eventapo.com/contact",
        "linkText": "お問い合わせ",
        "icon": {
            "light": "/images/icons/bug_report.svg",
            "dark": "/images/icons/dark/bug_report.svg"
        }
    },
    {
        "title": "イベントの公開範囲を変更できますか？",
        "tags": ["公開範囲", "非公開", "公開", "公開設定", "公開方法", "公開範囲設定", "公開設定方法", "公開範囲変更", "公開設定変更", "公開設定方法"],
        "details": "イベントの公開範囲は、「リンクを知っている人のみ」と「全体公開」の2種類から選択できます。\n公開範囲の変更は、イベント設定画面から行えます。",
        "icon": {
            "light": "/images/icons/public.svg",
            "dark": "/images/icons/dark/public.svg"
        }
    },
    {
        "title": "イベントの日時を変更できますか？",
        "tags": ["日時", "変更", "スケジュール", "日程", "時間", "イベント設定", "スケジュール変更", "日程変更", "時間変更", "イベント時間"],
        "details": "イベントの日時は、イベント設定画面から変更できます。",
        "icon": {
            "light": "/images/icons/calendar_month.svg",
            "dark": "/images/icons/dark/calendar_month.svg"
        }
    },
    {
        "title": "有料チケットを販売できますか？",
        "tags": ["チケット", "有料", "販売", "料金", "決済", "Stripe", "チケット販売", "料金設定", "支払い", "オンライン決済"],
        "details": "有料チケットの販売が可能です。\nStripeアカウントを連携することで、安全な決済処理を行えます。",
        "icon": {
            "light": "/images/icons/storefront.svg",
            "dark": "/images/icons/dark/storefront.svg"
        }
    },
    {
        "title": "複数のイベントを同時に運営できますか？",
        "tags": ["複数イベント", "運営", "主催", "同時開催", "イベント管理", "主催者", "運営管理", "イベント作成", "管理機能", "イベント運営"],
        "details": "はい、複数のイベントを同時に運営することができます。\nイベントごとに個別の管理画面があり、効率的な運営が可能です。",
        "icon": {
            "light": "/images/icons/note_stack.svg",
            "dark": "/images/icons/dark/note_stack.svg"
        }
    },
    {
        "title": "イベントの参加者数を制限できますか？",
        "tags": ["参加者数", "定員", "制限", "人数制限", "イベント設定", "キャパシティ", "参加制限", "定員設定", "管理", "チケット"],
        "details": "はい、イベント作成時に最大参加者数（定員）を設定できます。\n定員に達した場合、自動的にチケットの販売が停止されます。",
        "icon": {
            "light": "/images/icons/groups.svg",
            "dark": "/images/icons/dark/groups.svg"
        }
    },
    {
        "title": "スマートフォンでも利用できますか？",
        "tags": ["スマートフォン", "モバイル", "対応", "レスポンシブ", "アプリ", "スマホ", "タブレット", "デバイス", "互換性", "アクセス"],
        "details": "はい、スマートフォンやタブレットなど、様々なデバイスに対応しています。\nブラウザさえあれば、どのデバイスからでもご利用いただけます。",
        "icon": {
            "light": "/images/icons/smartphone.svg",
            "dark": "/images/icons/dark/smartphone.svg"
        }
    }
].sort((a, b) => a.title.localeCompare(b.title));


const searchQuery = ref("");

const filteredItems = computed(() => {
    if (!searchQuery.value) return items;
    const query = searchQuery.value.toLowerCase();
    const result = items.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.details.toLowerCase().includes(query) ||
        item.tags.some(tag => tag.toLowerCase().includes(query))
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