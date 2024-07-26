<script setup>
import { ref, onMounted } from "vue";
import { urls } from "../../data/projects.js";
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
