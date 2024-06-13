<script>
import TopMenu from "./TopMenu/TopMenu.vue";
import Profile from "./Profile/Profile.vue";
export default {
    components: { TopMenu, Profile },
};
</script>

<template>
    <TopMenu />
    <Profile/>
</template>
<style>
body {
    color: rgb(55, 55, 55);
    margin: 0;
}
</style>
