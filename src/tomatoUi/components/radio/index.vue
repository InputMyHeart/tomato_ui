<template>
    <label class="tm-radio flex-flex-center" @click.stop="changeValue">
        <div class="tm-radio-type">
            <div class="tm-radio-check" v-show="modelValue"></div>
        </div>
        <div class="tm-radio-text">{{ label }}</div>
    </label>
</template>
<script>
import { reactive, toRefs } from 'vue'

export default {
    name: 'tm-radio',
    props: {
        modelValue: {
            type: Boolean,
            default: false,
        },
        label: {
            type: String,
            default: '',
        },
    },
    setup(props, { emit }) {
        const state = reactive({})

        const changeValue = () => {
            emit('update:modelValue', !props.modelValue)
        }

        return {
            ...toRefs(state),
            changeValue,
        }
    },
}
</script>
<style lang="scss" scoped>
.tm-radio {
    display: inline-flex;
    margin-left: 10px;
    &-type {
        width: 15px;
        height: 15px;
        margin-right: 2px;
        border: 1px solid #000;
        border-radius: 3px;
        position: relative;
    }
    &-check {
        width: 10px;
        height: 10px;
        background-color: #000;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
    }
}
</style>
