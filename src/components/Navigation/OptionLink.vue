<script setup>
const props = defineProps(["data"]);
</script>
<template>
    <router-link
        class="navigation-link pointer"
        :arial-label="props.data.label"
        :to="props.data.href"
    >
        {{ props.data.title }}</router-link
    >
</template>
<style>
@import url("./OptionLink.scss");
</style>
