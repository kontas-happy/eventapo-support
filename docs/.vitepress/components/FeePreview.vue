<template>
    <div class="fee-preview">
        <div class="price-input">
            <button @click="price -= 100" class="button">-</button>
            <div class="input">
                <label for="price">チケット価格</label>
                <input id="price" type="number" v-model="price" min="0" step="1" />
            </div>
            <button @click="price += 100" class="button">+</button>
        </div>
        <FeeExample :price="price" />
    </div>
</template>

<script setup lang="ts">
import FeeExample from "./FeeExample.vue";
import { ref, watch } from "vue";

const price = ref(1000);

watch(price, (newValue) => {
    // 0未満にならないようにする
    if (newValue < 0) price.value = 0;
    // 少数を切り捨てる
    price.value = Math.floor(price.value);
});
</script>

<style scoped>
.fee-preview {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.fee-preview .price-input {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: var(--vp-c-bg-alt);
}

.fee-preview .price-input .button {
    width: 3rem;
    height: 3rem;
    border-radius: 0.5rem;
    background-color: var(--vp-c-bg-elv);
    font-size: 1.5em;
}

.fee-preview .price-input .input {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
}

.fee-preview .price-input input {
    padding: 0.5rem;
    border-radius: 0.5rem;
    width: 100%;
    background-color: var(--vp-c-bg-elv);
    font-size: 1.5em;
    text-align: center;
}
</style>