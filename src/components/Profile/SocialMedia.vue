<script setup>
import { ref } from "vue";
import { asset } from "../../utils/utils";

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

</script>
<template>
    <div class="social-media-container">
        <div v-for="(network, index) in socialNetworks" class="network">
            <a
                :href="network.url"
                :area-label="network.name"
                :key="index"
                draggable="false"
            >
                <img
                    :src="asset('/icons/'+network.src)"
                    :alt="network.name"
                    draggable="false"
                />
            </a>
        </div>
    </div>
</template>
<style>
.social-media-container {
    display: flex;
    gap: 10px;
    .network {
        transition: scale 0.2s ease-in-out;
        width: 4vw;
        &:hover {
            scale: 1.2;
        }
        img {
            width: 100%;
        }
    }
}
</style>
