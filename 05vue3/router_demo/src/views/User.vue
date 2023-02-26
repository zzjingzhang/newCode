<template>
  <div class="user">
    <!-- 在模板中获取到id -->
    <h2>user：{{ $route.params.id }}</h2>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
// 获取route跳转id
const route = useRoute()
console.log(route.params.id)
</script>

<style lang="less" scoped></style>
