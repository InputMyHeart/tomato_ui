<template>
  <tm-button @click="openActionSheet">打开操作栏</tm-button>

  <tm-action-sheet :visible="state.show" @choose="onActionHandle" @cancel="onCancel" :items="state.items" />
  <p>操作栏</p>
</template>

<script setup>
import TmActionSheet from '@tomatoUi/components/action-sheet/index.vue'
import TmButton from '@tomatoUi/components/button/index.vue'
import { reactive } from 'vue'

const state = reactive({
  show: false,
  items: [
    { name: '选项一', value: 0 },
    { name: '选项二', value: ['2-0', '2-1'] },
    { name: '选项三', value: 2 }
  ]
})

const openActionSheet = () => {
  state.show = true
}
const onActionHandle = values => {
  console.log('选中的值', values)
}
const onCancel = () => {
  console.log('取消了选择ActionSheet')
  state.show = false
}
</script>

<style scoped>

</style>