<script>
import { h } from 'vue'
export default {
  data() {
    return {
      counter: 0,
    }
  },
  render() {
    return h('div', { className: 'app' }, [
      h('h2', null, `当前计数：${this.counter}`),
      h('button', { onClick: this.increment }, '+1'),
      h('button', { onClick: this.decrement }, '-1'),
    ])
  },
  methods: {
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    },
  },
}
</script>

<style lang="less" scoped></style>
