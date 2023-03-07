<template>
  <div class="tm-search-bar flex-flex-center">
    <input class="tm-search-input" @input="$emit('update:modelValue', $event.target.value)" />
    <div class="tm-search-icon flex-center-center" @click="search">
      <i class="iconfont icon-search"></i>
    </div>
  </div>
</template>
<script>
  import { reactive, toRefs } from 'vue'
  export default {
    name: 'tm-search-bar',
    props: {
      modelValue: {
          type: String,
          default: ''
      }
    },
    setup(props, { emit }) {
      const search = () => {
        emit('update:modelValue', props.modelValue)
      }

      return {
        search
      }
    }
  }
</script>
<style lang="scss" scoped>
    .tm-search-bar {
        height: 44px;
        padding-left: 12px;
        background-color: $color-white;
        .tm-search-input {
            width: 0;
            height: 30px;
            padding: 0 12px;
            flex: 1 0 auto;
            border-radius: $border-radius-15;
            background-color: #d8d6d6;
            outline: none;
            border: none;
            font-size: 14px;
        }
        .tm-search-icon {
            width: 44px;
            height: 100%;
            .iconfont {
                font-size: 20px;
                color: #999999;
            }
        }
    }
</style>