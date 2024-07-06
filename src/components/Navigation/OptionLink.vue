<script setup>
const props = defineProps(["data"]);
</script>
<template>
    <a class="navigation-link pointer"
    :arial-label="props.data.arialLabel"
    :href="props.data.href">
        {{ props.data.title }}</a
    >
</template>
<style>
@import url('./OptionLink.scss');
</style>