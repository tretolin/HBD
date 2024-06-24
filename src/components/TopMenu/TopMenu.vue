<script>

window.addEventListener('scroll', ()=> {
    let topMenu = document.querySelector('.top-menu');
    topMenu.classList.toggle('sticky' , window.scrollY > 0)
})

</script>
<template>
    <div class="top-menu">
        <div class="brand-logo">Brandingname</div>
        <div class="menu-options">
            <div>Help</div>
            <div>Contact</div>
            <div>Portfolio</div>
        </div>
        <div class="menu-toggle">
            <img class="svg" src="../../assets/menu-dots.svg">
        </div>
    </div>
</template>
<style>
@import url('./topMenu.scss');
</style>