<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div
    class="'relative min-w-[250px] max-w-full flex items-center p-4 text-xl md:text-2xl',"
  >
    <input
      v-model="item.isDone"
      type="checkbox"
      name="status"
      :checked="item.isDone"
      :class="[
        'mx-3 h-[.85em] w-[.85em]',
        isMultiGrid ? 'md:h-4 md:w-4' : 'md:h-5 md:w-5',
      ]"
    />
    <div class="flex flex-col">
      <h2 id="title" :class="[item.isDone ? 'line-through' : '']" class="mb-1">
        {{ item.title }}
      </h2>
      <p v-if="!item.isDone" id="description" class="text-base">
        {{ item.desc }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardItem',
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
    isMultiGrid: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style></style>
