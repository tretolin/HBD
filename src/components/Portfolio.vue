<script setup>
import TopMenu from "./TopMenu/TopMenu.vue";
</script>

<template>
    <TopMenu />
    <transition name="slide-fade" mode="out-in">
        <router-view v-slot="{ Component }">
            <custom-element>
                <component :is="Component" />
            </custom-element>
        </router-view>
    </transition>
</template>
<style>
@import url("@styles/pages-transition.scss");
</style>
