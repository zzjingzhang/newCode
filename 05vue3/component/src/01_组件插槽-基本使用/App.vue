<template>
  <div class="app">
    <!-- 内容是button -->
    <show-message title="title">
      <button>按钮</button>
    </show-message>
    <!-- 内容是超链接 -->
    <show-message>
      <a href="#">百度一下</a>
    </show-message>
  </div>
</template>

<script>
import ShowMessage from './ShowMessage.vue'
export default {
  components: {
    ShowMessage,
  },

  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
