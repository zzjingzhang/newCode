<template>
  <div class="show-info">infoContent</div>
</template>

<script>
export default {
  methods: {
    // showInfoFoo() {
    //   console.log('showinfo')
    // },
  },
  setup() {
    const showInfoFoo = () => {
      console.log('showinfo foo function')
    }
    return {
      showInfoFoo,
    }
  },
}
</script>

<style lang="scss" scoped></style>
