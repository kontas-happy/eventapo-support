<template>
    <div class="fee-example">
        <div class="card ticket-price">
            <label class="label">チケット価格</label>
            <span class="price">¥{{ Number(price).toLocaleString("ja-JP") }}</span>
        </div>
        <span class="math">-</span>
        <div class="card fee">
            <label class="label">手数料</label>
            <span class="price">¥{{ fee.toLocaleString("ja-JP") }}</span>
        </div>
        <span class="math">=</span>
        <div class="card total">
            <label class="label">受取金額</label>
            <span class="price">¥{{ total.toLocaleString("ja-JP") }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";

const props = defineProps({
    "price": {
        "type": Number,
        "required": true
    }

});

const fee = computed(() => {
    if (props.price === 0) {
        return 0;
    }
    return Math.ceil(props.price * 0.1) < 100 ? 100 : Math.ceil(props.price * 0.1);
});
const total = computed(() => {
    const total = props.price - fee.value;
    if (total < 0) {
        return 0;
    }
    return total;
});
</script>


<style scoped>
.fee-example {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    border-radius: 0.5rem;
}

.card {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: var(--vp-c-bg-alt);
}

.card .price,
.math {
    font-size: 2em;
}

@media screen and (max-width: 40rem) {
    .fee-example {
        flex-direction: column;
    }

    .math {
        /* 90°文字を回転 */
        transform: rotate(90deg);
    }
}
</style>