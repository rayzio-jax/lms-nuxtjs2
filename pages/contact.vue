<template>
  <section
    class="h-[100vh] flex flex-col justify-center items-center text-2xl md:text-3xl lg:text-4xl"
  >
    <h1>Here I'm dropping my social if you want to reach me:</h1>
    <ul class="flex gap-x-5">
      <li
        class="text-yellow-500 transition-colors duration-300 hover:text-yellow-800"
      >
        <a href="https://github.com/rayzio-jax">Github</a>
      </li>
      <li
        class="text-yellow-500 transition-colors duration-300 hover:text-yellow-800"
      >
        <a href="https://www.linkedin.com/in/rayhanantha-akbar/">LinkedIn</a>
      </li>
      <li
        class="text-yellow-500 transition-colors duration-300 hover:text-yellow-800"
      >
        <a href="https://www.instagram.com/rayziojax">Instagram</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'ContactPage',
  head: {
    title: 'Contact',
  },
}
</script>