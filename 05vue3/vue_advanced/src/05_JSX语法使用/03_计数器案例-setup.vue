<script lang="jsx">
import { ref } from 'vue'
import About from './About.vue'
export default {
  setup() {
    const counter = ref(0)
    const increment = () => {
      counter.value++
    }
    const decrement = () => {
      counter.value--
    }
    return () => (
      <div class="app">
        <h2>当前计数：{counter.value}</h2>
        <button onClick={increment}>+1999</button>
        <button onClick={decrement}>-1</button>
        <About></About>
      </div>
    )
  },
}
</script>

<style lang="less" scoped></style>
