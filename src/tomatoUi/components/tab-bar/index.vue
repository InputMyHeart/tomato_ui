<template>
  <div class="tm-tabBar flex-between-center" :style="state.style">
    <slot></slot>
  </div>
</template>

<script setup>
import { reactive, inject } from 'vue'

const tabBarOptions = inject('tabBarOptions')
const state = reactive({
  style: ''
})

if (tabBarOptions.border) {
  state.style = `borderTop: 1px solid ${tabBarOptions.borderColor}`
}
</script>

<style lang="scss" scoped>
  .tm-tabBar {
    width: 100%;
    height: 50px;
    background-color: $color-white;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 99;
    box-shadow: 0 0 5px #c7c7c7;
  }
</style>