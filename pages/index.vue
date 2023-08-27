<template>
  <main>
    <NavBar />
    <section
      class="h-[100vh] flex flex-col justify-center items-center text-justify text-2xl md:text-3xl lg:text-4xl dark:text-white">
      <h1>Hi, welcome to my page, let's do a quick intro</h1><br>
      <div class="words-wrapper">
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
    <FooterBar />
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  head: {
    title: 'Home',
  },
}
</script>

<style lang="scss" scoped>
.words-wrapper {
  box-sizing: content-box;
  height: 70px;
  padding: 50px 30px;
  display: flex;

  p {
    padding: 10px 0;
  }

  .words {
    overflow: hidden;

    span {
      padding: 10px 0 10px 20px;
      display: block;
      height: 100%;
      color: #0e6ffc;
      animation: spin_words 6s infinite;
      font-family: "Poppins", sans-serif;
      font-size: 45px;
      font-weight: 500;
    }
  }
}

@keyframes spin_words {
  10% {
    transform: translateY(-112%);
  }

  25% {
    transform: translateY(-100%);
  }

  35% {
    transform: translateY(-212%);
  }

  50% {
    transform: translateY(-200%);
  }

  60% {
    transform: translateY(-312%);
  }

  75% {
    transform: translateY(-300%);
  }

  85% {
    transform: translateY(-412%);
  }

  100% {
    transform: translateY(-400%);
  }
}
</style>
