<script setup>
import { asset } from "@/utils/utils";
import { contactData } from "../data/contact";

const downloadFile = (pathFile) => {
    window.location = pathFile;
}

</script>
<template>
    <div class="page-content">
        <h1>Contact</h1>
        <div v-for="(item, index) in contactData" class="cards">
            <div class="contact-card">
                <div class="field">
                    <img :src="asset('/icons/' + (item.icon ? item.icon : 'default.svg'))"
                        draggable="false"
                        style="width: 40px"
                    />
                </div>
                <div class="info">
                    <div>{{ item.data }}</div>

                    <a v-if="!item.link" :href="item.file" target="_blank" download>
                        <button>{{ item.label}}</button>
                    </a>
                    <button v-else @click="copyValue(item.data)">Copy</button>
                    <a class="theme-link" v-else :href="item.link" target="_blank">{{
                        item.name
                    }}</a>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
@import url("./pages.scss");
.cards {
    max-width: 900px;
    width: 60vw;
    padding: 1vh;
    border-bottom: 2px dotted rgb(188, 188, 188);
}
.contact-card {
    display: flex;
    justify-content: space-between;
    & > div {
        display: flex;
        align-items: center;
        padding: 0 2vh;
    }
    .info {
        width: 100%;
        justify-content: space-between;
    }
}
</style>
