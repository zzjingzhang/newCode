<template>
  <div class="about">
    <h2>about:{{ route.query }}</h2>
    <button @click="backClick">返回</button>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
console.log(route.query)

const router = useRouter()
const backClick = () => {
  router.back()
  //   // router.forward()
  //   router.go(-1)
}
</script>

<style lang="less" scoped></style>
