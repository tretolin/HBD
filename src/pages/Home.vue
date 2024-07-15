<script setup>
import Profile from "../components/Profile/Profile.vue"
import Gallery from "../components/Gallery/Gallery.vue";
</script>
<template>
    <Profile />
    <v-slot>
        <Gallery/>
    </v-slot>

</template>
