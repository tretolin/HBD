<template>
    <div class="project-detail">
        <section>
            <div class="project-content-page">
                <div class="project-header">
                    <!-- <ArrowNav
                        class="arrow"
                        reverse="true"
                        @click="goToProject(prev)"
                    /> -->
                    <ArrowNav
                        class="arrow"
                        reverse="true"
                        @click="goHome"
                    /> 
                    <h2>{{ project.title }}</h2>
                    <!-- <ArrowNav class="arrow" @click="goToProject(next)" /> -->
                </div>

                <p class="description">
                    {{ project.description ? project.description : "" }}
                    <div>
                        <a
                            class="theme-link"
                            draggable="false"
                            v-if="project.link"
                            :href="project.link"
                            target="_blank"
                            alt="website link"
                            >Ir a sitio</a
                        >
                    </div>
                </p>

                <div class="project-content">
                    <div v-for="(image, index) in project.urls" :key="index">
                        <img :data-src="image" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { onMounted, ref, watch } from "vue";
import { projects } from "@/data/projects.js";
import ArrowNav from "@/components/Navigation/ArrowNav.vue";

const router = useRouter();
const route = useRoute();
const goHome = () => { router.push({ name: 'home'}) };
const projectId = ref(route.params.id);
let currentIndex = ref(0);
let prev = ref();
let next = ref();
let project = null;

projects.map((pr, index) => {
    if (parseInt(projectId.value) == pr.id) {
        currentIndex = index;
        project = pr;
    }
});

const goToProject = (project) => {
    router.push({ name: "project", params: { id: project.id } });
};

const prevNext = () => {
    prev = projects[currentIndex == 0 ? projects.length - 1 : currentIndex - 1];
    next = projects[currentIndex == projects.length - 1 ? 0 : currentIndex + 1];
};

prevNext();

onMounted(() => {
    window.lazyLoadImages ? window.lazyLoadImages() : false;
});

watch(
    () => route.params.id,
    (newId) => {
        projectId.value = newId;
        window.location.reload();
    }
);
</script>

<style>
@import url("./ProjectDetail.scss");
</style>
