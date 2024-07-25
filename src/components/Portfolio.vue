<script setup>
import TopMenu from "./TopMenu/TopMenu.vue";
</script>

<template>
    <TopMenu />
    <router-view v-slot="{ Component }">
        <transition name="slide-fade">
            <component :is="Component" />
        </transition>
    </router-view>
</template>
<style>
@import url("../styles/pages-transition.scss");
</style>
