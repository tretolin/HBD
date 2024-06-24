<script setup>
import { ref } from "vue";

const name = ref("Luis Javier");
const description = ref(`Some things about me and some things
that never happened but I say
that I did. Filling with random phrases like los pollos locos`);
</script>
<template>
    <div class="profile-presentation">
        <div class="profile-pic rounded">
            <img src="../../assets/profile.jpg" alt="" />
        </div>
        <h1 class="profile-name no-margin">{{ name }}</h1>
        <p class="description text-center size-regular">
            {{ description }}
        </p>
    </div>
</template>
<style>
.profile-presentation {
    margin: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 1px solid tomato; */
    div,
    h1 {
        border: 0px solid black;
    }

    .profile-pic {
        display: flex;
        width: 25vw;
        height: 25vw;
    }

    .description {
        font-size: 2vh;
    }

    @media (min-width: 800px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;

        .profile-pic {
            width: 140px;
            height: 140px;
        }

        .profile-name {
            padding-left: 1vw;
            font-size: 10vw;
        }
    }
}
</style>
