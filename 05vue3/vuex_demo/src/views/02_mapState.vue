<template>
  <div class="home">
    <!-- 1.模板中直接使用多个状态 -->
    <h2>name:{{ $store.state.name }}</h2>

    <!-- 2.计算属性（映射状态：数组语法） -->
    <!-- <h2>level:{{ level }}</h2> -->
    <!-- 3.计算属性（映射状态：对象语法） -->
    <h2>level:{{ sLevel }}</h2>
    <br />
    <!-- setup中 -->
    <!-- <h2>clevel{{ cLevel }}</h2> -->

    <h2>clevel:{{ flevel }}</h2>

    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['level']),
    ...mapState({
      sLevel: (state) => state.level + 1,
    }),
  },
}
</script>

<script setup>
import { computed, toRefs } from 'vue'
import { useStore, mapState } from 'vuex'
// 2.使用useStore
const store = useStore()
// const { level } = mapState(['name', 'level'])
// const cLevel = computed(level.bind({ $store: store }))

// 3.直接对store.state进行解构
const { level: flevel } = toRefs(store.state)

const increment = () => {
  console.log(flevel)
  flevel.value++
}
</script>

<style lang="scss" scoped></style>
