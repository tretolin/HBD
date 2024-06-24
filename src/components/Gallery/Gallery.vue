<script setup>
import "../../directives/lazy-load-background.js";
import { ref } from "vue";
import { urls } from "./images.js";

const imagesList = ref(urls);

// const loadImages = () => {
//     imagesList.value = urls;
// }

</script>
<template>
    
<div id="gallery">
    <div class="gallery-container">
    
        <div class="gallery-item"
        v-for="(image, index) in imagesList"
        :key="index"
        >
            <div class="image-container lazy-background"
                :style="{ backgroundImage: 'url(' + image.url + ')' }"
            </div>
        </div>
    
    </div>
</div>

</template>
<style>
@import url("./gallery.scss");
</style>
