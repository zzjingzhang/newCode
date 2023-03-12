<template>
  <div class="home">
    <h2>doubleCounter:{{ $store.getters.doubleCounter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script setup>
import { computed, toRefs } from 'vue'
import { useStore, mapState } from 'vuex'
// 2.使用useStore
const store = useStore()

// 3.直接对store.state进行解构
const { level: flevel } = toRefs(store.state)

const increment = () => {
  store.commit('increment')
}
</script>

<style lang="scss" scoped></style>
