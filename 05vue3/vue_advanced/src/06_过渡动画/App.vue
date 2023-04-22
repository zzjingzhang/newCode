<template>
  <div class="app">
    <button @click="toggle">切换</button>
    <transition><h2 v-if="isShow">hhhh</h2></transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isShow = ref(true)
const toggle = () => {
  isShow.value = !isShow.value
}
</script>

<style scoped>
.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: scale(0.6);
}
.v-leave-from,
.v-enter-to {
  opacity: 1;
  transform: scale(1);
}

.v-enter-active,
.v-leave-active {
  transition: all 2s ease;
}
</style>
