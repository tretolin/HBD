<script setup>

import { ref, defineComponent } from "vue";
import ToggleMenu from "./ToggleMenu.vue";

const menuOptions = ref([
    { title: "Portfolio", path: "" },
    { title: "Contact", path: "" },
    { title: "About", path: "" },
]);

</script>

<template>
    <div class="menu-options">
    <a href=""></a>
        <a
            v-for="(link, index) in menuOptions"
            class="navigation-link"
            :key="index"
            href="link.path"
            >{{ link.title }}</a
        >
    </div>
    <ToggleMenu/>
</template>
