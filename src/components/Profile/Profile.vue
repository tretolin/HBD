<script setup>
import { ref } from "vue";

const name = ref("Luis Treto");
const description = ref(`Some things about me and some things
that never happened but I say
that I did. Filling with random phrases like los pollos locos`);
</script>
<template>
    <div class="profile-presentation">
        <div class="profile-pic rounded">
            <img src="../../assets/profile.png" alt="" />
        </div>
        <h1 class="profile-name no-margin">{{ name }}</h1>
        <p class="text-center size-regular">
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
    div,
    h2 {
        border: 1px solid blaredck;
    }

    .profile-pic {
        display: flex;
        width: 25vh;
        height: 25vh;
    }

    @media(min-width:800px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;

        .profile-pic {
            width: 25vh;
            height: 25vh;
        }

        .profile-name { font-size: 10vw }
    }
}

</style>
