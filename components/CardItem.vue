<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div
    id="list-movies"
    class="'relative min-w-[250px] max-w-full flex items-center p-4 text-xl md:text-2xl',"
  >
    <input
      v-model="movie.isDone"
      type="checkbox"
      name="status"
      :checked="movie.isDone"
      :class="[
        'mx-3 h-[.85em] w-[.85em]',
        isMultiGrid ? 'md:h-4 md:w-4' : 'md:h-5 md:w-5',
      ]"
    />
    <div class="flex flex-col">
      <h2 id="title" :class="[movie.isDone ? 'line-through' : '']" class="mb-1">
        {{ movie.title }}
      </h2>
      <p v-if="!movie.isDone" id="description" class="text-base">
        {{ movie.desc }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    movie: {
      type: Object,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: 'Untitled',
    },
    isMultiGrid: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
}
</script>

<style></style>
