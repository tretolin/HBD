<script setup>
import { ref } from "vue";

window.addEventListener("scroll", () => {
    let topMenu = document.querySelector(".top-menu");
    topMenu.classList.toggle("sticky", window.scrollY > 0);
});

const menuOptions = ref([
    { title: "Portfolio", path: "" },
    { title: "Contact", path: "" },
    { title: "About", path: "" },
]);
</script>
<template>
    <div class="top-menu">
        <div class="brand-logo">Brandingname</div>
        <div class="menu-options">
            <a
                v-for="(link, index) in menuOptions"
                class="navigation-link"
                :key="index"
                href="link.path"
                >{{ link.title }}</a
            >
        </div>
        <div class="menu-toggle">
            <img class="svg" src="../../assets/menu-dots.svg" />
        </div>
    </div>
</template>
<style>
@import url("./topMenu.scss");
</style>
