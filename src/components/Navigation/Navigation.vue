<script setup>
import { ref } from "vue";
import ToggleMenu from "./ToggleMenu.vue";
import OptionLink from "./OptionLink.vue";

const menuOptions = ref([
    { title: "Portafolio", href: "/", arialLabel: "Portfolio" },
    { title: "Contacto", href: "/contact" },
    { title: "Sobre mi", href: "/about" },
]);
</script>

<template>
    <nav class="menu-options">
        <OptionLink
            v-for="(link, index) in menuOptions"
            :data="link"
            draggable="false"
        />
    </nav>
    <ToggleMenu :options="menuOptions" />
</template>
