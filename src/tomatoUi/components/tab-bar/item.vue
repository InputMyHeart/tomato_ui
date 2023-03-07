<template>
  <div class="tm-tabBar-item flex-column flex-center-center" @click="changeTabBar" :style="style">
    <slot name="icon"></slot>
    <slot name="title"></slot>
  </div>
</template>

<script setup>
import { defineProps, inject, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const props = defineProps({
  activePath: {
    type: String,
    default: ''
  }
})
const router = useRouter()
const route = useRoute()
const tabBarOptions = inject("tabBarOptions")
const style = computed(() => {
  return props.activePath === route.path ? `color: ${tabBarOptions.activeTextColor}` : `color: ${tabBarOptions.textColor}`
})

const changeTabBar = () => {
  router.push(props.activePath)
}
</script>

<style lang="scss" scoped>
  .tm-tabBar-item{
    width: 20%;
    height: 100%;
    font-size: $text-font-14;
    .iconfont {
      font-size: 22px;
    }
  }
</style>
