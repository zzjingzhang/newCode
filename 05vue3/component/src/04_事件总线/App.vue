<template>
  <div class="app">
    <h2>App Message: {{ message }}</h2>
    <home></home>
    <category></category>
  </div>
</template>

<script>
import Home from './Home.vue'
import Category from './Category.vue'

export default {
  components: {
    Home,
    Category,
  },
  data() {
    return {
      message: 'Hello App',
      isShowCategory: true,
    }
  },
  created() {},
}
</script>

<style scoped></style>
