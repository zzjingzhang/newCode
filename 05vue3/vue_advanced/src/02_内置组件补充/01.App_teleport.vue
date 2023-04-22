<template>
  <div class="app">
    <div class="hello">
      <p class="content">
        <teleport to="body">
          <HelloWorld />
        </teleport>
        <teleport to="#abc">
          <HelloWorld />
        </teleport>
      </p>
    </div>
  </div>
</template>

<script setup>
import HelloWorld from './HelloWorld.vue'
</script>

<style lang="less" scoped></style>
