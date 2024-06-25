<script setup>
import { ref } from "vue";

const name = ref("Luis Javier");
const description = ref(`Some things about me and some things
that never happened but I say
that I did. Filling with random phrases like los pollos locos`);
</script>
<template>
    <div class="profile-presentation">
        <div class="profile-pic rounded">
            <img src="../../assets/profile.jpg" alt="" />
        </div>
        <h1 class="profile-name no-margin">{{ name }}</h1>
        <p class="description text-center size-regular">
            {{ description }}
        </p>
    </div>
</template>
<style>
@import url('./Profile.scss');
</style>
