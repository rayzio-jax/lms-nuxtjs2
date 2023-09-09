<!-- eslint-disable no-console -->
<template>
  <section
    class="h-[100vh] flex flex-col justify-center items-center px-12 text-2xl md:text-3xl lg:text-4xl"
  >
    <div class="words-wrapper flex flex-col md:flex-row">
      <p>I'm a</p>
      <div class="words">
        <span>Front End Dev</span>
        <span>Junior Designer</span>
        <span>Junior Developer</span>
        <span>LoFi Listener</span>
        <span>Front End Dev</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutPage',
  head: {
    title: 'About',
  },
  mounted() {},
}
</script>

<style lang="scss" src="~/assets/style/about.scss" scoped></style>