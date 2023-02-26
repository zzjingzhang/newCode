<template>
  <div>
    <!-- 1.获取元素 -->
    <h2 ref="titleRef">标题</h2>
    <button ref="btn">按钮</button>
    <button @click="getElement">获取元素</button>

    <!-- 2.获取组件实例 -->
    <show-info ref="showInfoRef"></show-info>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import ShowInfo from './ShowInfo.vue'
export default {
  components: {
    ShowInfo,
  },
  setup() {
    const titleRef = ref(null)
    const showInfoRef = ref(null)

    // mounted的生命周期函数
    onMounted(() => {
      console.log(titleRef.value)
      console.log(showInfoRef.value)
      showInfoRef.value.showInfoFoo()
    })
    const getElement = () => {
      console.log(titleRef.value)
    }
    return {
      titleRef,
      showInfoRef,
      getElement,
    }
  },
}
</script>

<style lang="scss" scoped></style>
