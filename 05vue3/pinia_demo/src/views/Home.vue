<template>
  <div class="home">
    <!-- <h2>doubleCount:{{ doubleCount }}</h2>

    <h2>doubleCountAddone:{{ doubleCountAddone }}</h2>
    <h2>friendId-1:{{ getFriendById(1) }}</h2>
    <h2>showMessage:{{ showMessage }}</h2> -->
    <h2>count:{{ count }}</h2>
    <button @click="changeCount">count:+1</button>
    <button @click="countAddNum">count:+10</button>

    <!-- 展示数据 -->
    <h2>轮播数据</h2>
    <ul>
      <template v-for="item in homeStore.banners"
        ><li>{{ item.title }}</li></template
      >
    </ul>
  </div>
</template>

<script setup>
import { toRefs } from 'vue'
import useCounter from '@/stores/counter'
import useHome from '@/stores/home.js'

const counterStore = useCounter()
const { count } = toRefs(counterStore)

const changeCount = () => {
  counterStore.increment()
}
const countAddNum = () => {
  counterStore.incrementNum(10)
}

const homeStore = useHome()
homeStore.fetchHomeMultidata()
</script>

<style lang="scss" scoped></style>
