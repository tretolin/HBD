<script setup>
import "../../directives/lazy-load-background.js";
import { defineProps } from "vue";

const defaultImage = "https://media.istockphoto.com/id/1222357475/vector/image-preview-icon-picture-placeholder-for-website-or-ui-ux-design-vector-illustration.jpg?s=612x612&w=0&k=20&c=KuCo-dRBYV7nz2gbk4J9w1WtTAgpTdznHu55W9FjimE=";
const props = defineProps({
    image: {
        type: Object,
        required: false,
        default: { url:defaultImage }
    }
});

// const image = ref(urls[0].url).value;

</script>

<template>
    <div class="image-container lazy-background"
        :style="{ backgroundImage: 'url(' + image.url + ')' }">
    </div>
</template>

<style>
@import url('./ProjectItem.scss')
</style>