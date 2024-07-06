<script setup>
import { ref } from "vue";
import Navigation from "../Navigation/Navigation.vue";

window.addEventListener("scroll", () => {
    let topMenu = document.querySelector(".top-menu");
    topMenu.classList.toggle("sticky", window.scrollY > 0);
});

</script>
<template>
    <div class="top-menu">
        <div class="brand-logo">Brandingname</div>
        <Navigation />
    </div>
</template>
<style>
@import url("./topMenu.scss");
</style>
