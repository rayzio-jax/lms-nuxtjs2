<template>
  <div>
    <button @click="printItem()">Log Something</button>
  </div>
</template>

<script>
export default {
  name: 'TestItem',
  methods: {
    printItem(item) {
      this.$emit('printItem', item)
    },
  },
}
</script>

<style>
</style>