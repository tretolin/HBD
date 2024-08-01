<script setup>
import { ref, onMounted } from "vue";
import SocialMedia from './SocialMedia.vue'
import Pallete from "../Pallete/Pallete.vue";
let isHide = ref(true)

const name = ref("Luis Treto");
// const description = ref(`Soy Luis, soy programador`);
</script>
<template>
    <div class="profile-presentation">
        <div class="profile-pic rounded">
            <img loading="lazy" src="../../assets/profile.jpg" alt="profile-pic" />
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
