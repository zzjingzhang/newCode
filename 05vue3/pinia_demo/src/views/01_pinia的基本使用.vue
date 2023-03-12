<template>
  <div class="home">
    <h2>home view</h2>
    <h2>count:{{ counterStore.count }}</h2>
    <h2>counte:{{ count }}</h2>
    <button @click="increment">count+1</button>
  </div>
</template>

<script setup>
import { toRefs } from 'vue'
import { storeToRefs } from 'pinia'
import useCounter from '@/stores/counter'
const counterStore = useCounter()
// const { count } = counterStore  // 不是响应式的
// const { count } = toRefs(counterStore) // 是响应式的
const { count } = storeToRefs(counterStore) // 是响应式的
const increment = () => {
  counterStore.count++
}
</script>

<style lang="scss" scoped></style>
