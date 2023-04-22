<template>
  <div class="app">
    <!-- 1.参数-修饰符-值 -->
    <!-- <h2 v-abc:cba.nba="msg">hhh</h2> -->

    <!-- 2.价格拼接单位 -->
    <h2 v-unit="'¥'">9999</h2>
  </div>
</template>

<script setup>
const msg = '6666'
// 自定义指令参数和修饰符
const vAbc = {
  mounted(el, bindings) {
    console.log(bindings)
    console.log('mounted')
    // console.log(el.textContent)
    el.textContent = bindings.value
  },
}
</script>

<style scoped></style>
