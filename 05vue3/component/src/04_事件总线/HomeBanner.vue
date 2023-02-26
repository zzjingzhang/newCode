<template>
  <div class="banner">
    <button @click="bannerBtnClick">banner按钮</button>
  </div>
</template>

<script>
import mitter from './utils/mitter'

export default {
  methods: {
    bannerBtnClick() {
      console.log('bannerBtnClick')
      mitter.emit('event', { name: 'abc', age: 18, height: 1.88 })
    },
  },
}
</script>

<style scoped></style>
