<template>
    <div class="writing-page">
        <p class="code">
            Writing
        </p>
        <h1 class="title">
            作成中
        </h1>
        <div class="divider" />
        <p class="content">
            書物の新しいページを1ページ、1ページ読むごとに、私はより豊かに、より強く、より高くなっていく。
            <br>
            — アントン・チェーホフ
        </p>
    </div>
</template>

<style>
.writing-page {
    padding: 64px 24px 96px;
    text-align: center;
}

@media (min-width: 768px) {
    .writing-page {
        padding: 96px 32px 168px;
    }
}

.writing-page .code {
    line-height: 64px;
    font-size: 64px;
    font-weight: 600;
}

.writing-page .title {
    padding-top: 12px;
    letter-spacing: 2px;
    line-height: 20px;
    font-size: 20px;
    font-weight: 700;
}

.writing-page .divider {
    margin: 24px auto 18px;
    width: 64px;
    height: 1px;
    background-color: var(--vp-c-divider);
}

.writing-page .content {
    margin: 0 auto;
    max-width: 256px;
    font-size: 14px;
    font-weight: 500;
    color: var(--vp-c-text-2);
}
</style>