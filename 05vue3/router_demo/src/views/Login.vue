<template>
  <div>
    login
    <button @click="loginBtn">登录</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const loginBtn = () => {
  // 向服务器发送请求。服务器会返回token
  localStorage.setItem('token', 'abc')
  //   登录成功，跳转到order页面
  router.push({
    path: '/order',
  })
}
</script>

<style scoped></style>
