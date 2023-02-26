<template>
  <div class="show-message">
    <h2>{{ title }}</h2>
    <div class="content">
      <!-- 插槽可以有默认值 -->
      <!-- <slot>
        <div>插槽默认值，当没有传入任何东西的时候显示</div>
      </slot> -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'title默认值',
    },
  },
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
