<template>
  <button :class="classNames">
    <slot></slot>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: 'normal'
  },
  type: {
    type: String,
    default: 'default'
  },
  radius: {
    type: Boolean,
    default: false
  }
})
const classNames = computed(() => [
  'tm-button',
  `tm-button-${props.size}`,
  `tm-button-${props.type}`,
  props.radius && `tm-button-${props.size}-radius`,
])

</script>

<style lang="scss" scoped>
  .tm-button {
    display: inline-block;
    border: none;
    text-align: center;
    box-sizing: border-box;
    transition: box-shadow 0.1s ease-out;
    & + .tm-button {
      margin-left: 12px;
    }

    &:active {
      filter: brightness(84%);
    }

    &-normal {
      min-width: 40px;
      padding: 8px 14px;
      font-size: $text-font-14;
    }

    &-small {
      min-width: 38px;
      padding: 6px 10px;
      font-size: $text-font-12;
    }

    &-normal-radius {
      border-radius: 5px;
    }
    &-small-radius {
      border-radius: 3px;
    }

    &-default {
      background-color: white;
      color: #191919;
      box-sizing: border-box;
      border: 1px solid rgba($color: #000000, $alpha: 0.19);
    }

    &-primary {
      color: white;
      background-color: #2376b7;
    }

    &-danger {
      color: white;
      background-color: #e22929;
    }

    &-warning {
      color: white;
      background-color: #e6a23c;
    }

    &-success {
      color: white;
      background-color: rgb(81, 205, 50);
    }
    
    &-info {
      color: gray;
      background-color: #f8f8f8;
    }
  }
</style>