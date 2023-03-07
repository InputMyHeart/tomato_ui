<template>
    <div class="tm-input">
        <input class="tm-input-inner" v-model="inputValue" :placeholder="placeholder" />
        <div @click.stop="clearInputValue">
            <slot name="icon"></slot>
        </div>
    </div>
</template>
<script>
import { reactive, toRefs, computed, useSlots } from 'vue'
export default {
    name: 'tm-input',
    props: {
        modelValue: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: '请输入...'
        }
    },
    setup(props, { emit }) {
        const slotIcon = !!useSlots().icon
        console.log('icon插槽是否有内容===', slotIcon)

        const state = reactive({
            inputValue: ''
        })

        // let className = computed(() => {
        //     if (props.icon === '') {
        //     }
        // })

        const clearInputValue = () => {
            state.inputValue = ''
        }

        return {
            ...toRefs(state),
            // className,
            clearInputValue
        }
    }
}
</script>
<style lang="scss" scoped>
    .tm-input {
        width: 100%;
        font-size: 14px;
        color: #333333;
        line-height: 30px;
        position: relative;
        &-inner {
            width: 100%;
            height: 30px;
            padding: 0 6px;
            border-radius: 5px;
            border: 1px solid #e8e8e8;
            outline: none;
            &:focus {
                border-color: #409eff;
            }
        }
        .iconfont {
            width: 30px;
            height: 30px;
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
        }
    }
</style>
