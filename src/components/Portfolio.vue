<script setup>
import TopMenu from "./TopMenu/TopMenu.vue";
</script>

<template>
    <TopMenu />
    <transition name="slide-fade" mode="out-in">
        <router-view v-slot="{ Component }">
                <component :is="Component" />
        </router-view>
    </transition>
</template>
<style>
@import url("../styles/pages-transition.scss");

body {
    color: rgb(55, 55, 55);
    margin: 0;
}
</style>
