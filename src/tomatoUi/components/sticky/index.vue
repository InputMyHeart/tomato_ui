<template>
  <div class="tm-sticky" :style="style">
    <slot></slot>
  </div>
</template>
<script>
  import { computed } from 'vue'
  export default {
    name: 'tm-sticky',
    props: {
      top: {
        type: Number,
        default: 0
      },
      zIndex: {
        type: Number,
        default: 99
      }
    },
    setup(props) {
      const style = computed(() => {
        return `top: ${props.top}px; z-index: ${props.zIndex};`
      })

      return {
        style
      }
    }
  }
</script>
<style lang="scss" scoped>
    .tm-sticky {
        position: sticky;
    }
</style>