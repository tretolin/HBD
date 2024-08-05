<script setup>
import TopMenu from "./TopMenu/TopMenu.vue";
import Footer from "./Footer/Footer.vue"
</script>

<template>
    <TopMenu />
    <router-view v-slot="{ Component }">
        <transition name="slide-fade">
            <component :is="Component" />
        </transition>
    </router-view>
    <Footer/>
</template>
<style>
@import url("../styles/pages-transition.scss");
</style>
