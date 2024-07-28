<template>
    <div class="project-detail">
        <section>
            <div class="project-content-page">
                <div class="project-header">
                    <ArrowNav class="arrow" reverse="true" />
                    <h2>{{ project.title }}</h2>
                    <ArrowNav class="arrow" />
                </div>

                <p class="description">
                    {{ project.description ? project.description : "" }}
                </p>

                <div class="project-content">
                    <img
                        class="lazy-load"
                        :src="project.url"
                        :alt="project.name"
                    />
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { projects } from "@/data/projects.js";
import ArrowNav from "../components/Navigation/ArrowNav.vue";

const route = useRoute();
const projectId = ref(route.params.id);
let project = projects.filter(
    (project) => parseInt(projectId.value) == project.id
)[0];
</script>
<style>
.project-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .arrow {
        width: 6vw;
        height: 0;
        padding: 2vw;
    }
    h2 {
        font-size: 8vw;
    }
}
.project-detail {
    display: flex;
    justify-content: center;
    .project-content-page {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: auto 2vw;
        max-width: 900px;

        h2 {
            padding-bottom: 0;
            margin-bottom: 0;
        }
        img {
            width: 100%;
        }
    }
}
</style>
