<template>
  <div class="room-area">
    <!-- 1.区域 header -->
    <area-header
      :title="areaData.title"
      :subtitle="areaData.subtitle"
    ></area-header>
    <!-- 房间列表 -->
    <div class="room-list">
      <template v-for="item in areaData.list" :key="item.id">
        <room-item :item-data="item"></room-item>
      </template>
    </div>
  </div>
</template>

<script setup>
import AreaHeader from './area-header.vue'
import RoomItem from './room-item.vue'
defineProps({
  areaData: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<style lang="less" scoped>
.room-list {
  display: flex;
  flex-wrap: wrap;
  margin: 20px -8px;
}
</style>
