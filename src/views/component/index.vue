<template>
  <tm-cell-group class="cell-group">
    <tm-cell-item v-for="(item, index) in state.componentList" :key="index" :label="item" arrow @click="clickCell(item)"></tm-cell-item>
  </tm-cell-group>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import TmCellGroup from '@tomatoUi/components/cell/group.vue'
import TmCellItem from '@tomatoUi/components/cell/item.vue'

const router = useRouter()
const state = reactive({
  componentList: [
    {
      name: '操作栏',
      title: 'ActionSheet',
      icon: 'icon-error',
      path: '/comp/action-sheet'
    },
    {
      name: '按钮',
      title: 'Button',
      icon: '',
      path: '/comp/button'
    },
    {
      name: '单元栏',
      title: 'Cell',
      icon: '',
      path: '/comp/cell'
    },
    {
      name: '弹窗',
      title: 'Dialog',
      icon: ''
    },
    {
      name: '抽屉',
      title: 'Drawer',
      icon: ''
    },
    {
      name: '表单',
      title: 'Form',
      icon: ''
    },
    {
      name: '输入框',
      title: 'Input',
      icon: ''
    },
    {
      name: '等待中',
      title: 'Loading',
      icon: ''
    },
    {
      name: '模态框',
      title: 'Modal',
      icon: ''
    },
    {
      name: '通知',
      title: 'Notify',
      icon: ''
    },
    {
      name: 'Overlay',
      title: 'Overlay',
      icon: ''
    },
    {
      name: '搜索栏',
      title: 'SearchBar',
      icon: ''
    },
    {
      name: '步进器',
      title: 'Stepper',
      icon: ''
    },
    {
      name: '吸顶',
      title: 'Sticky',
      icon: ''
    },
    {
      name: '滑块',
      title: 'Switch',
      icon: ''
    },
    {
      name: '底部导航',
      title: 'TabBar',
      icon: ''
    },
    {
      name: '轻提示',
      title: 'Toast',
      icon: ''
    }
  ],
})

const clickCell = (item) => {
  router.push(item.path)
}
</script>