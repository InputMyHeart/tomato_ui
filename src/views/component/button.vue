<template>
  <div class="row">
    <tm-button>默认按钮</tm-button>
    <tm-button type="primary">默认按钮</tm-button>
    <tm-button type="danger">危险按钮</tm-button>
    <tm-button type="warning">成功按钮</tm-button>
    <tm-button type="success">成功按钮</tm-button>
    <tm-button type="info">成功按钮</tm-button>
  </div>
  <div class="row">
    <tm-button radius>默认按钮</tm-button>
    <tm-button type="primary" radius>默认按钮</tm-button>
    <tm-button type="danger" radius>危险按钮</tm-button>
    <tm-button type="warning" radius>成功按钮</tm-button>
    <tm-button type="success" radius>成功按钮</tm-button>
    <tm-button type="info" radius>成功按钮</tm-button>
  </div>
  <div class="row">
    <tm-button size="normal">默认按钮</tm-button>
    <tm-button size="small">默认按钮</tm-button>
    <tm-button size="default">默认按钮</tm-button>
  </div>
</template>

<script setup>
import TmButton from '@tomatoUi/components/button/index.vue'
</script>

<style lang="scss" scoped>
.row {
  padding: 12px;
}
</style>