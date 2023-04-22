<template>
  <div class="app">
    <h2 v-if="showTitle" class="title" v-abc>当前计数：{{ counter }}</h2>
    <button @click="addOne">+1</button>
    <button @click="showTitle = false">隐藏title</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const counter = ref(0)
const showTitle = ref(true)

const addOne = () => {
  counter.value++
}
// 自定义指令生命周期
const vAbc = {
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log('unmounted')
  },
}
</script>

<style scoped></style>
