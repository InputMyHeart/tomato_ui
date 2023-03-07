<template>
    <div class="tm-form-item flex-flex-center">
        <div class="tm-form-item_title" :class="className" v-if="title">{{ title }}</div>
        <div class="tm-form-item_content flex-flex-center" v-if="title">
            <slot name="default"></slot>
            <slot name="footer"></slot>
        </div>
        <div class="tm-form-item_content flex-flex-center" v-else style="margin-left: 60px">
            <slot name="default"></slot>
            <slot name="footer"></slot>
        </div>
    </div>
</template>
<script>
import { inject, computed } from 'vue'
export default {
    name: 'tm-form-item',
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    setup() {
        const formOptions = inject('formOptions')

        const className = computed(() => {
            return formOptions.align === 'left'
                ? 'flex-flex-center'
                : formOptions.align === 'right'
                ? 'flex-end-center'
                : 'flex-center-center'
        })

        return {
            className
        }
    }
}
</script>
<style lang="scss" scoped>
    .tm-form-item {
        margin-bottom: 12px;
        &_title {
            width: 60px;
            padding-right: 5px;
            font-size: $text-font-12;
            color: #999999;
            text-align: right;
            flex: 0 0 auto;
        }
        &_content {
            width: 0;
            flex: 1 0 auto;
        }
        &_input {
            width: 0;
            height: 30px;
            padding: 0 6px;
            border: 1px solid #999999;
            border-radius: 4px;
            outline: none;
            font-size: $text-font-14;
            color: #000000;
            flex: 1 0 auto;
        }
    }
</style>
