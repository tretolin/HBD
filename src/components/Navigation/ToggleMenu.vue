<script setup>
import { ref } from "vue";
import OptionLink from "./OptionLink.vue";

const props = defineProps(["options"]);
function toggleMenu() {
    isOpen.value = !isOpen.value;
}

const isOpen = ref(false);
const menuOptions = ref(props.options);
</script>
<template>
    <div class="menu-toggle">
        <div class="toggle-button">
            <img
                class="pointer"
                :onClick="toggleMenu"
                src="../../assets/menu-dots.svg"
                draggable="false"
            />
            <transition name="fade">
                <div v-if="isOpen" class="float-menu">
                    <div class="close-menu pointer" :onClick="toggleMenu">
                        X
                    </div>
                    <nav class="float-navigation">
                        <OptionLink
                            v-for="(link, index) in menuOptions"
                            :data="link"
                            :onClick="toggleMenu"
                        />
                    </nav>
                </div>
            </transition>
        </div>
    </div>
</template>
<style>
@import "./Navigation.scss";

.fade-enter-active,
.fade-leave-active {
    transition: all 0.2s ease-in-out;
    opacity: 1;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    top: 0;
}
</style>
