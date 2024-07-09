<script setup>
import { ref } from "vue";

const socialNetworks = ref([
    {
        name: "Facebook",
        src: "facebook.svg",
        url: "www.facebook.com",
        active: true,
    },
    {
        name: "Twitter",
        src: "twitterx.svg",
        url: "www.facebook.com",
        active: true,
    },
    {
        name: "Instagram",
        src: "instagram.svg",
        url: "www.facebook.com",
        active: true,
    },
    {
        name: "Whatsapp",
        src: "whatsapp.svg",
        url: "www.facebook.com",
        active: true,
    },
    {
        name: "Linkedin",
        src: "linkedin.svg",
        url: "www.facebook.com",
        active: true,
    },
]);

function asset(file) {
    console.log("/src/assets/icons/" + file);
    return "/src/assets/icons/" + file;
}
</script>
<template>
    <div class="social-media-container">
        <div v-for="(network, index) in socialNetworks" class="network focused">
            <a :href="network.url" :area-label="network.name" :key="index">
                <img :src="asset(network.src)" :alt="network.name"/>
            </a>
        </div>
    </div>
</template>
<style>
.social-media-container {
    display: flex;
    gap:10px;
    .network {
        width: 6vw;
    }
}
</style>
