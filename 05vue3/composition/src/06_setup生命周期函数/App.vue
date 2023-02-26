<template>
  <div></div>
</template>

<script>
import { onMounted } from 'vue'
export default {
  setup() {
    // 在执行setup函数的过程中，注册别的生命周期函数
    onMounted(() => {
      console.log('onmounted')
    })
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
