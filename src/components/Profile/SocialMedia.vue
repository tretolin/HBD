<script setup>
import { ref } from "vue";
import { asset } from "../../utils/utils";
import { social } from '@/data/contact'

let socialNetworks = ref([
    {
        name: "Facebook",
        src: "facebook.svg",
        url: "",
        active: false,
    },
    {
        name: "Twitter",
        src: "twitterx.svg",
        url: "",
        active: false,
    },
    {
        name: "Instagram",
        src: "instagram.svg",
        url: "",
        active: false,
    },
    {
        name: "Whatsapp",
        src: "whatsapp.svg",
        url: "",
        active: false,
    },
    {
        name: "Linkedin",
        src: "linkedin.svg",
        url: "",
        active: false,
    },
]);

const hasSocialMedia = (network) => {
    let name =  network.name;
    let hasSocial = social.filter( (s) => name == s.name && s.account);
    let url = hasSocial.length ? hasSocial[0].account : ''; 
    console.log(url)
    return url;
} 

const filteredSocialMedia = () => {
    let filteredMedia = [];
    socialNetworks.value.map( (network) => {
        let url = hasSocialMedia(network)
        if(url) {
            network.actve = true;
            network.url = url;
            filteredMedia.push(network)
        }
    })
    socialNetworks = filteredMedia;
}

filteredSocialMedia();
console.log()

</script>
<template>
    <div class="social-media-container">
        <div v-for="(network, index) in socialNetworks" class="network">
            <a
                :href="network.url"
                :area-label="network.name"
                :key="index"
                draggable="false"
                target="_blank"
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
