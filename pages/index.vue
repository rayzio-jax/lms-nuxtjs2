<template>
  <section
    class="h-[100vh] flex flex-col justify-center items-center text-justify text-2xl md:text-3xl lg:text-4xl"
  >
    <h1>Hi, welcome to my page, let's do a quick intro</h1>
    <br />
  </section>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      msg: 'lorem20',
    }
  },

  head() {
    return {
      title: `Home | ${this.$config.appName}`,
    }
  },
  mounted() {},
}
</script>

<style lang="scss" scoped></style>
