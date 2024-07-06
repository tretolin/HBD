<script setup>
import { ref } from "vue";

const props = defineProps(['options']);
console.log(props.options)
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
                    <a v-for="(option, index) in props.options"
                    href="{{ options.path }}">{{option.title}}</a>
                </nav>
            </div>
        </div>
    </div>
</template>
<style>
@import "./Navigation.scss";
</style>
