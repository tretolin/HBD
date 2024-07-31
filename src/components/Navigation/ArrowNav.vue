<script setup>
import { defineProps } from "vue";
import { asset } from "../../utils/utils.js";

defineProps(["reverse"]);
</script>
<template>
    <div>
        <img
            class="pointer"
            :class="[reverse ? 'reverse' : '']"
            :src="asset('/icons/chevron.svg')"
            alt="arrow navigation"
            draggable="false"
        />
    </div>
</template>
<style scoped>
img {
    transition: opacity .3s ease-in-out;
    opacity: .15 !important;
    &:hover {
        opacity: 1 !important;
    }
    &.reverse {
        transform: rotate(180deg);
    }
}
</style>
