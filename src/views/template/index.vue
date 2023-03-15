<template>
  <p>template</p>
  <tm-progress :progress="state.data"></tm-progress>
</template>

<script setup>
import TmProgress from '@tomatoUi/components/progress/index.vue'
import { reactive } from 'vue'

const state = reactive({
  data: [
    {
      title: '步骤一',
      isActive: true
    },
    {
      title: '步骤二',
      isActive: true
    },
    {
      title: '步骤三',
      isActive: false
    },
    {
      title: '步骤一',
      isActive: true
    },
    {
      title: '步骤二',
      isActive: true
    },
    {
      title: '步骤三',
      isActive: false
    },
    {
      title: '步骤一',
      isActive: true
    },
    {
      title: '步骤二',
      isActive: true
    },
    {
      title: '步骤三',
      isActive: false
    }
  ]
})
</script>

<style scoped>

</style>