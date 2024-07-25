<script setup>
import { ref } from "vue";
import { defineProps, onMounted } from "vue";

let show = ref(false);

const defaultImage =
    "https://media.istockphoto.com/id/1222357475/vector/image-preview-icon-picture-placeholder-for-website-or-ui-ux-design-vector-illustration.jpg?s=612x612&w=0&k=20&c=KuCo-dRBYV7nz2gbk4J9w1WtTAgpTdznHu55W9FjimE=";
const props = defineProps({
    image: {
        type: Object,
        required: false,
        default: { url: defaultImage },
    },
});

const showImage = () => (show.value = false);

onMounted(() => {
    setTimeout(() => {
        show.value = true;
    }, 300);

    showImage();
});
</script>

<template>
    <div
        class="image-container"
        :class="['lazy-background', show ? 'visible' : '']"
        :style="{ backgroundImage: 'url(' + image.url + ')' }"
    ></div>
</template>

<style>
@import url("./ProjectItem.scss");
</style>
