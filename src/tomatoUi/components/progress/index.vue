<template>
  <div class="tm-progress">
    <label class="tm-progress-item" v-for="(item, index) in progress" :key="index">
      <i class="tm-progress-item-line"></i>
      <span class="tm-progress-item-text">{{ item.title }}</span>
    </label>
  </div>
</template>

<script setup>
const props = defineProps({
  progress: {
    type: Array,
    default: () => [],
    required: true
  }
})
</script>

<style lang="scss" scoped>
.tm-progress {
  white-space: nowrap;
  overflow-x: scroll;
  display: flex;
  align-items: center;
  &-item {
    i {
      width: 60px;
    }
  }
  &-item:first-child {
    padding-left: 24px;
  }
  &-item:last-child {
    padding-right: 24px;
  }
}
</style>