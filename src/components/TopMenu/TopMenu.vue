<script setup>
import { ref } from "vue";
import Navigation from "../Navigation/Navigation.vue";
import Pallete from "../Pallete/Pallete.vue";
import { useRouter } from "vue-router"; 

window.addEventListener("scroll", () => {
    let topMenu = document.querySelector(".top-menu");
    topMenu.classList.toggle("sticky", window.scrollY > 0);
});

const router = useRouter();
const goHome = () => { router.push({ name: 'home'}) };

</script>
<template>
    <div class="top-menu">
        <div class="brand">
            <!-- <div class="brand-logo"><Pallete/></div> -->
            <div @click="goHome" class="brand-name pointer">LT</div>
        </div>
        <Navigation />
    </div>
</template>
<style>
@import url("./topMenu.scss");
</style>
