<template>
  <div class="tm-cell-item flex-flex-center">
    <i class="iconfont tm-cell-item_icon" :class="label.icon" v-if="label.icon !== ''"></i>
    <div class="tm-cell-item_text ellipsis">{{ label.name }} {{ label.title }}</div>
    <i class="iconfont icon-right tm-cell-item_arrow" v-if="arrow"></i>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  label: {
    type: Object,
    default: () => {}
  },
  arrow: {
    type: Boolean,
    default: true
  }
})
</script>
<style lang="scss" scoped>
.tm-cell-item {
  padding: 12px;
  background-color: $color-white;
  border-bottom: 1px solid #eeeeee;
  &:last-child {
    border-bottom: none;
  }
  &_icon,
  &_arrow {
    flex: 0 0 auto;
  }
  &_text {
    width: 0;
    flex: 1 0 auto;
    font-size: $text-font-12;
  }
  &_icon {
    margin-right: 5px;
    font-size: $text-font-18;
  }
  &_arrow {
    margin-left: 12px;
    font-size: $text-font-14;
  }
}
</style>