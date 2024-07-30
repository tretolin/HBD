<script setup>
import { ref } from "vue";
import { projects } from "../../data/projects.js";
import ProjectItem from '../ProjectItem/ProjectItem.vue'
const projectsList = ref(projects);

</script>
<template>
    
<div id="gallery">
    <div class="gallery-container">
    
        <div class="gallery-item" v-for="(project, index) in projectsList" :key="index">
            <ProjectItem :project="project"/>
        </div>
    
    </div>
</div>

</template>
<style>
@import url("./gallery.scss");
</style>
