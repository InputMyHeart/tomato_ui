<template>
  <tm-tab-bar :options="state.tabBarOptions">
    <tm-tab-bar-item activePath="/">
      <template #icon>
        <i class="iconfont icon-home"></i>
      </template>
      <template #title>
        <div class="tm-tabBar_item_title">首页</div>
      </template>
    </tm-tab-bar-item>
    <tm-tab-bar-item activePath="/component">
      <template #icon>
        <i class="iconfont icon-appstore"></i>
      </template>
      <template #title>
        <div class="tm-tabBar_item_title">组件</div>
      </template>
    </tm-tab-bar-item>
    <tm-tab-bar-item activePath="/template">
      <template #icon>
        <i class="iconfont icon-user"></i>
      </template>
      <template #title>
        <div class="tm-tabBar_item_title">模板</div>
      </template>
    </tm-tab-bar-item>
    <tm-tab-bar-item activePath="/about">
      <template #icon>
        <i class="iconfont icon-user"></i>
      </template>
      <template #title>
        <div class="tm-tabBar_item_title">关于</div>
      </template>
    </tm-tab-bar-item>
  </tm-tab-bar>
  <tm-back-top :bottom="100" :zIndex="100" activeValue="100" />
  <RouterView />
</template>
<script setup>
import { provide, reactive } from 'vue'
import { RouterView } from 'vue-router'
import TmTabBar from '@tomatoUi/components/tab-bar/index.vue'
import TmTabBarItem from '@tomatoUi/components/tab-bar/item.vue'
import TmBackTop from '@tomatoUi/components/back-top/index.vue'

const state = reactive({
  tabBarOptions: {
    textColor: '#A3A4A5',
    activeTextColor: '#00A19D'
  }
})

provide('tabBarOptions', state.tabBarOptions)
</script>