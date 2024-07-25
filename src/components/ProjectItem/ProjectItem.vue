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
const showProject = (project) => {
    console.log("%cProject: " + project.url, "color:lime");
};

let imageStyles = {
    backgroundImage: "url(" + props.image.url + ")",
};

onMounted(() => {
    setTimeout(() => {
        show.value = true;
    }, 300);
    showImage();
});
</script>

<template>
    <div
        @click="showProject(image)"
        class="image-container shaddow"
        :class="['lazy-background', show ? 'visible' : '']"
        :style="imageStyles"
    ></div>
</template>

<style>
@import url("./ProjectItem.scss");
</style>
