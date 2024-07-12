<script setup>
import { ref } from "vue";
import SocialMedia from './SocialMedia.vue'

const name = ref("Luis Javier");
const description = ref(`Soy Luis, soy programador`);
</script>
<template>
    <div class="profile-presentation">
        <div class="profile-pic rounded">
            <img src="../../assets/profile.jpg" alt="" />
        </div>
        <h1 class="profile-name no-margin">{{ name }}</h1>
        <h2>Frontend Developer</h2>
        <SocialMedia/>
        <!-- <p class="description text-center size-regular">
            {{ description }}
        </p> -->
    </div>
</template>
<style>
@import url('./Profile.scss');
</style>
