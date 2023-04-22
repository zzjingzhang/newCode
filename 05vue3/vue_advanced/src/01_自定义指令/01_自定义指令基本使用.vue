<template>
  <div class="app">
    <input type="text" v-focus />
  </div>
</template>

<script>
// export default {
//   directives: {
//     focus: {
//       // 生命周期函数（自定义指令）
//       mounted(el) {
//         console.log('v-focus应用的元素被挂载了', el)
//         el?.focus()
//       },
//     },
//   },
// }
</script>
<script setup>
// 局部自定义指令
// const vFocus = {
//   mounted(el) {
//     console.log('v-focus应用的元素被挂载了setup', el)
//     el?.focus()
//   },
// }
</script>

<style scoped></style>
