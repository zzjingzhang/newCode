<template>
  <div class="home">
    <h2>home view</h2>
    <h2>name:{{ name }}</h2>
    <h2>age:{{ age }}</h2>
    <h2>height:{{ height }}</h2>
    <button @click="changeState">修改state</button>
    <button @click="resetState">重置state</button>
  </div>
</template>

<script setup>
import useUser from '@/stores/user'
import { storeToRefs } from 'pinia'
const userStore = useUser()
// console.log(userStore.name)
const { name, age, height } = storeToRefs(userStore)
const changeState = () => {
  // 1.一个个修改状态
  // name.value = 'cba'
  // age.value = 20
  // height.value = 1.89

  // userStore.name = 'cba'
  // userStore.age = 19
  // userStore.height = 1.9

  // 2.一次性修改多个状态
  // userStore.$patch({
  //   name: 'nbm',
  //   age: 100,
  // })

  // 3.替换state为新的对象
  userStore.$state = {
    name: 'kkkk',
    age: '000',
  }
}

const resetState = () => {
  // 重置状态
  userStore.$reset()
}
</script>

<style lang="scss" scoped></style>
