<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>

    <div class="other">
      <!-- 一个不带name的slot，会带有隐含的名字 default -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  },
}
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
}
.left {
  width: 80px;
  background-color: coral;
}
.center {
  flex: 1;
  background-color: blueviolet;
}
.right {
  width: 80px;
  background-color: lightcoral;
}
</style>
