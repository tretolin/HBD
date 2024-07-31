<script setup>
import { ref } from "vue";
import Navigation from "../Navigation/Navigation.vue";
import Pallete from "../Pallete/Pallete.vue";

window.addEventListener("scroll", () => {
    let topMenu = document.querySelector(".top-menu");
    topMenu.classList.toggle("sticky", window.scrollY > 0);
});

</script>
<template>
    <div class="top-menu">
        <div class="brand">
            <!-- <div class="brand-logo"><Pallete/></div> -->
            <div class="brand-name">Luis Treto</div>
        </div>
        <Navigation />
    </div>
</template>
<style>
@import url("./topMenu.scss");
</style>
