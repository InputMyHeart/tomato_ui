<template>
  <div v-if="state.isActive" class="tm-back-top flex-center-center" :style="style" @click.stop="backToTop">
    <i class="iconfont icon-up"></i>
  </div>
</template>

<script setup>
import { reactive, defineProps, computed, onMounted } from 'vue'

const props = defineProps({
  zIndex: {
    type: Number,
    default: 2019
  },
  bottom: {
    type: Number,
    default: 60
  },
  activeValue: {
    type: String,
    default: '80'
  }
})
const state = reactive({
  isActive: false
})
const style = computed(() => {
  return `bottom: ${props.bottom}px; z-index: ${props.zIndex};`
})

const backToTop = () => {
  let top = document.documentElement.scrollTop || document.body.scrollTop
  const scroll = setInterval(() => {
    document.body.scrollTop = document.documentElement.scrollTop = top -= 50
    if(top <= 0) {
      clearInterval(scroll)
    }
  }, 10)
}
onMounted(() => {
  window.onscroll = () => {
    state.isActive = document.documentElement.scrollTop > props.activeValue
  }
})
</script>

<style lang="scss" scoped>
  .tm-back-top {
    width: 40px;
    height: 40px;
    background-color: skyblue;
    box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.3);
    border-radius: 50%;
    color: #ffffff;
    position: fixed;
    right: 10px;
  }
</style>