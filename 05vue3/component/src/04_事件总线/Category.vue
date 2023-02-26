<template>
  <div>
    <h2>Category</h2>
  </div>
</template>

<script>
import mitter from './utils/mitter'

export default {
  methods: {
    eventHandler(payload) {
      console.log(payload, 'payload')
      console.log('Event在category中监听')
    },
  },
  created() {
    mitter.on('event', this.eventHandler)
  },
  unmounted() {
    // 事件取消
    console.log('category unmounted')
    mitter.off('Event', this.eventHandler)
  },
}
</script>

<style scoped></style>
