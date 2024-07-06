<script>
import TopMenu from "./TopMenu/TopMenu.vue";
import Profile from "./Profile/Profile.vue";
import Gallery from "./Gallery/Gallery.vue";
import MenuMobile from "./Navigation/MenuMobile.vue";
export default {
    components: { TopMenu, Profile, Gallery, MenuMobile },
};
</script>

<template>
    <MenuMobile/>
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
