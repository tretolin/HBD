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
            :src="asset('/icons/arrow.svg')"
            alt="arrow navigation"
            draggable="false"
        />
    </div>
</template>
<style scoped>
img {
    transition: opacity .3s ease-in-out;
    opacity: .15;
    &:hover {
        opacity: 1;
    }
    &.reverse {
        transform: rotate(180deg);
    }
}
</style>
