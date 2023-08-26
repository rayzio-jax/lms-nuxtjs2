<template>
    <div
        class="bg-[#A8EE1E]/[0.5] rubik-font w-full absolute top-0 py-4 flex text-xl gap-x-8 justify-center text-[#227029] md:text-2xl lg:text-3xl dark:bg-[#789146]/[0.5] dark:text-white">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/playground">Playground</router-link>
    </div>
</template>
<script>
export default {
    name: "NavBar"
}
</script>
<style lang="scss" scoped>
.rubik-font {
    font-family: 'Rubik', sans-serif;
    font-weight: 700;
}
</style>