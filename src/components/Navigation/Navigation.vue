<script setup>
import { ref } from "vue";
import ToggleMenu from "./ToggleMenu.vue";
import OptionLink from "./OptionLink.vue";

const menuOptions = ref([
    { title: "Portfolio", href: "/", arialLabel: "Portfolio" },
    { title: "Contact", href: "/contact" },
    { title: "About", href: "/about" },
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
