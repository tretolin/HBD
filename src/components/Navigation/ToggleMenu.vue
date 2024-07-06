<script setup>
import { ref } from "vue";

function toggleMenu() {
    console.log("toggle", isOpen.value);
    isOpen.value = !isOpen.value;
}

const isOpen = ref(false);
const menuOptions = ref([
    { title: "Portfolio", path: "" },
    { title: "Contact", path: "" },
    { title: "About", path: "" },
]);
</script>
<template>
    <div class="menu-toggle">
        <div class="toggle-button">
            <img class="pointer" :onClick="toggleMenu" src="../../assets/menu-dots.svg" />
            <div v-if="isOpen" class="float-menu">
                <div class="close-menu pointer" :onClick="toggleMenu">X</div>
                <nav class="float-navigation">
                    <a>Info of</a>
                    <a>Profile of</a>
                    <a>About</a>
                </nav>
            </div>
        </div>
    </div>
</template>
<style>
@import "./Navigation.scss";
</style>
