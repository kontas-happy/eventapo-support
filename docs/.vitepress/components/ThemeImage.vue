<template>
  <img :src="imageSrc.light" :alt="alt" class="theme-image light" />
  <img :src="imageSrc.dark" :alt="alt" class="theme-image dark" />
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";

interface Src {
    light: string;
    dark: string;
}

const props = defineProps({
    "src": {
        "type": Object as () => Src,
        "required": true
    },
    "alt": {
        "type": String,
        "required": true
    }
});

const imageSrc = computed(() => {
    return {
        "light": props.src.light,
        "dark": props.src.dark
    };
});
</script>

<style scoped>
.theme-image {
    display: none;
}

.theme-image.light {
    display: block;
}

.theme-image.dark {
    display: none;
}

:root.dark .theme-image.light {
    display: none;
}

:root.dark .theme-image.dark {
    display: block;
}
</style>
