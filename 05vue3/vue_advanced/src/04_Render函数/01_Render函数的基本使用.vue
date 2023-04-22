<!-- <template>
  <div class="app">04_Render函数</div>
</template> -->

<script>
import { h } from 'vue'
export default {
  render() {
    return h('div', { className: 'app' }, [
      h('h2', { className: 'title' }, '我是标题'),
      h('p', { className: 'content' }, '我是content'),
    ])
  },
}
</script>

<style lang="less" scoped></style>
