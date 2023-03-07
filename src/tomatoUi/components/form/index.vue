<template>
  <div class="tm-form">
    <slot></slot>
  </div>
</template>
<script>
  import { reactive, provide } from 'vue'
  import TmButton from '@tomatoUi/components/button/index.vue'
  export default {
      name: 'tm-form',
      components: {
        TmButton
      },
      props: {
        align: {
          type: String,
          default: 'left'
        }
      },
      setup(props) {
        const state = reactive({
          formOptions: {
            align: props.align
          }
        })
        provide('formOptions', state.formOptions)
      }
  }
</script>
<style lang="scss" scoped>
    .tm-form {
        padding: 12px 12px 0;
        background-color: $color-white;
        display: block;
        overflow: hidden;
    }
</style>
  