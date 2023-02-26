<template>
  <div class="home">
    home
    <div class="home-nav">
      <router-link to="/home/recommend">推荐</router-link>
      <br />
      <router-link to="/home/rank">排行</router-link>
      <br />
      <button @click="logoutClick">退出登录</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
const logoutClick = () => {
  localStorage.removeItem('token')
}
</script>

<style scoped>
.router-link-exact-active {
  color: green;
}
</style>
