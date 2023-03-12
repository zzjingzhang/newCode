<template>
  <div class="home">
    <h2>doubleCount:{{ doubleCount }}</h2>

    <h2>doubleCountAddone:{{ doubleCountAddone }}</h2>
    <h2>friendId-1:{{ getFriendById(1) }}</h2>
    <h2>showMessage:{{ showMessage }}</h2>
  </div>
</template>

<script setup>
import useCounter from '@/stores/counter'

const counterStore = useCounter()
const { doubleCount, doubleCountAddone, getFriendById, showMessage } =
  counterStore
</script>

<style lang="scss" scoped></style>
