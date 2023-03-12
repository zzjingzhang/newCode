<template>
  <div class="home">
    <h2>home中的计数：{{ $store.state.counter }}</h2>
    <h2>setup中的计数器：{{ counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script setup>
import { toRefs } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const { counter } = toRefs(store.state)
const increment = () => {
  console.log(store.state)
  store.commit('increment')
}
</script>

<style lang="scss" scoped></style>
