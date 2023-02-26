<template>
  <div>
    <h2>name:{{ info.name }}</h2>
    <h2>age:{{ info.age }}</h2>
    <h2>height:{{ info.height }}</h2>
    <button @click="info.age++">修改age</button>

    <hr />
    <h2>age:{{ age }}</h2>
    <h2>height:{{ height }}</h2>
    <button @click="age++">修改age</button>
  </div>
</template>

<script setup>
import { reactive, toRefs, toRef } from 'vue'

const info = reactive({
  name: 'abc',
  age: 18,
  height: 1.88,
})
// reactive被解构之后会变成普通的值，失去响应式
// const { age, name } = info

// toRefs 函数可以将reactive返回的对象中的属性都转成ref
// 那么解构出来的age 和height本身都是react
const { age, height } = toRefs(info)

// 如果只想解构其中一个
const name = toRef(info, 'name')
</script>

<style lang="scss" scoped></style>
