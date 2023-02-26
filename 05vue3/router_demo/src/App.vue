<template>
  <div>
    <h2>app</h2>
    <div class="nav">
      <router-link to="/home">首页</router-link>
      <!-- to属性也可以传一个对象 -->
      <!-- <router-link :to="{ path: 'home' }">首页</router-link> -->
      <br />
      <router-link to="/about">关于</router-link>
      <br />
      <router-link to="/user/123">用户</router-link>
      <br />
      <router-link to="/order">订单</router-link>
      <br />

      <!-- 其他元素跳转 -->
      <span @click="homeSpanClick">首页span</span>
      <br />
      <button @click="aboutClick">关于</button>
    </div>
    <br />
    <router-view></router-view>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const homeSpanClick = () => {
  // 跳转到首页
  console.log('homeSpanClick')
  // router.push('/home')
  router.push({ path: '/home' })
}
const aboutClick = () => {
  // 跳转到about
  console.log('aboutClick')
  router.push({
    path: '/about',
    query: {
      name: 'abc',
      age: 18,
    },
  })
}
</script>

<style>
.router-link-active {
  color: red;
}
</style>
