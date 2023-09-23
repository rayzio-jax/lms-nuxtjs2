<template>
  <article class="flex-grow text-4xl py-3">
    <nuxt-link :to="`/articles/detail/${item.id}`">
      <img
        class="h-[300px] w-[400px] object-fill"
        :src="item.img"
        :alt="`article ${item.id} image`"
      />
      <h2 class="pt-4">{{ item.title }}</h2>
    </nuxt-link>
  </article>
</template> 

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          title: 'Title',
          desc: 'Sinopsis',
          isDone: false,
        }
      },
    },
  },
}
</script>

<style>
</style>