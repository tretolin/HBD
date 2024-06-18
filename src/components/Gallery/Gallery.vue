<script setup>
import { ref } from "vue";
import { urls } from "./images.js";

const imagesList = ref(urls);
</script>
<template>
    <!-- <h2 class="text-center">Gallery</h2> -->
    <div id="gallery">
        <div
            v-for="(image, index) in imagesList"
            :key="index"
            class="gallery-item"
            :style="{ backgroundImage: 'url(' + image.url + ')' }"
        ></div>
    </div>
</template>
<style>
#gallery {
    padding: 5vw;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(6, 25vw);

    .gallery-item {
        /* border: 1px solid black; */
        /* border:4px solid green; */
        background-color: cornsilk;
        background-size: cover;
    }

    /* XSmall */
    @media (max-width: 500px) {
        & {
            /* background-color: cyan;
            border: 4px solid cyan; */
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: repeat(6, 90vw);
            gap: 5px;
            padding: 1vh;
        }
    }

    /* Small */
    @media (min-width: 500px) and (max-width: 1200px) {
        & {
            /* background-color: #7a9740;
            border: 4px solid #7a9740; */
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(6, 30vw);
        }
    }

    /* Medium */
    @media (min-width: 1200px) and (max-width: 1400px) {
        & {
            /* background-color: purple;
            border: 4px solid purple; */
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(6, 20vw);
        }
    }

    /* Large */
    /* @media (min-width:1400px) {
        & {
            background-color: skyblue;
            border: 4px solid skyblue;
        }
    } */
}
</style>
