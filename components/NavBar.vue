<template>
    <div class="bg-[#238492] p-4 flex text-3xl rubik">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
    </div>
</template>
<script>
    export default {
        name: "NavBar"
    }
</script>
<style lang="scss" scoped>
.rubik {
  font-family: 'Rubik', sans-serif;
  font-weight: 700;
}
</style>