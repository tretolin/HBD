<script setup>
import "../../directives/lazy-load-background.js";
import { ref } from "vue";
import { urls } from "../../data/images.js";
import ProjectItem from '../ProjectItem/ProjectItem.vue'
const imagesList = ref(urls);

</script>
<template>
    
<div id="gallery">
    <div class="gallery-container">
    
        <div class="gallery-item" v-for="(image, index) in imagesList" :key="index">
            <ProjectItem :image="image"/>
        </div>
    
    </div>
</div>

</template>
<style>
@import url("./gallery.scss");
</style>
