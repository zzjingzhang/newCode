<template>
  <div class="app">
    appcontent
    <nav-bar>
      <!-- v-slot:  语法糖# -->
      <!-- <template  v-slot:left><button>left</button></template> -->
      <template #left><button>left</button></template>
      <template #center><span>center</span></template>
      <template #right><a href="#">right</a></template>
    </nav-bar>

    <!-- nav-bar 只给一个插槽传入数据 -->
    <!-- 动态插槽名 -->
    <nav-bar>
      <template v-slot:[position]>
        <button>{{ position }}</button>
      </template>
    </nav-bar>
    <button @click="btnClick('left')">左边</button>
    <button @click="btnClick('center')">中间</button>
    <button @click="btnClick('right')">右边</button>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      position: '',
    }
  },
  methods: {
    btnClick(position) {
      console.log(position, 'position')
      this.position = position
    },
  },

  setup() {
    return {}
  },
}
</script>

<style scoped></style>
