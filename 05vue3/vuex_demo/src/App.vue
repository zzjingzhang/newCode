<template>
  <div class="当前计数">
    <!-- store中的counter -->
    <h2>App当前计数：{{ $store.state.counter }}</h2>
    <Home></Home>
    <!-- <button @click="increment">+1</button>
    <button @click="decrement">-1</button> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Home from './views/Home.vue'
import { mapState } from 'vuex'
const counter = ref(0)
const increment = () => {
  counter.value++
}
const decrement = () => {
  counter.value--
}
</script>
