<script>
import TopMenu from "./TopMenu/TopMenu.vue";
import Profile from "./Profile/Profile.vue";
import Gallery from "./Gallery/Gallery.vue";
export default {
    components: { TopMenu, Profile, Gallery },
};
</script>

<template>
    <TopMenu />
    <Profile />
    <Gallery />
</template>
<style>
body {
    color: rgb(55, 55, 55);
    margin: 0;
}
</style>
