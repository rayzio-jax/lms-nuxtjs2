<template>
  <nav
    id="navbar"
    :class="{ 'navbar-hidden': !navbarVisible }"
    class="bg-[#A8EE1E] z-10 rubik-font w-full fixed p-4 flex text-xl gap-x-8 justify-center text-[#227029] md:text-2xl lg:text-3xl dark:bg-[#789146] dark:text-white"
  >
    <div class="flex-grow flex justify-around">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
      <NuxtLink to="/playground">Playground</NuxtLink>
    </div>
    <div class="relative flex-grow flex items-center justify-end">
      <ion-icon name="sunny"></ion-icon>
      <input
        id="theme-toggle"
        data-toggle-theme="night,winter"
        type="checkbox"
        class="@toggle bg-green-600 mx-2"
        @click="changeMyTheme()"
      />
      <ion-icon name="moon" class="text-black"></ion-icon>
    </div>
  </nav>
</template>
<script>
import { themeChange } from 'theme-change'
export default {
  name: 'NavBar',
  data() {
    return {
      navbarVisible: true,
      prevScrollPos: 0,
      darkTheme: null,
      rootPage: null,
    }
  },
  mounted() {
    // hide navbar on scroll
    this.prevScrollPos = window.scrollY
    window.onscroll = () => this.navbarHide(this.prevScrollPos)

    // theme changer
    themeChange(false)
    const themeCheck = localStorage.getItem('theme')
    const toggleBtn = document.querySelector('input#theme-toggle')
    this.rootPage = document.querySelector('html')
    if (themeCheck === 'night') {
      this.darkTheme = true
      toggleBtn.checked = true
    } else {
      this.darkTheme = false
      toggleBtn.checked = false
    }
  },
  beforeDestroy() {
    window.onscroll = () => this.navbarHide(this.prevScrollPos)
  },
  methods: {
    changeMyTheme() {
      this.darkTheme = !this.darkTheme
      if (this.darkTheme) {
        localStorage.setItem('theme', 'night')
      } else {
        localStorage.setItem('theme', 'winter')
      }
    },
    navbarHide() {
      const currentScroll =
        window.scrollY || document.querySelector('nav').scrollTop
      if (currentScroll < 0) {
        return
      }
      if (Math.abs(currentScroll - this.prevScrollPos) < 60) {
        return
      }
      this.navbarVisible = currentScroll < this.prevScrollPos
      this.prevScrollPos = currentScroll
    },
  },
}
</script>
<style lang="scss" src="~/assets/style/navbar.scss" scoped></style>
