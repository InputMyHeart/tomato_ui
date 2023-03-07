<template>
  <button :class="classNames" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
import { computed } from 'vue'
export default {
    name: 'tm-action-sheet-item',
    props: {
        borderAble: {
            type: Boolean,
            default: false,
        },
        innerCancel: {
            type: Boolean,
            default: false,
        },
        value: {
            type: [String, Number, Boolean, Array, Object, null],
            default: null,
        },
    },
    setup(props, { emit }) {
        const onClick = () => {
            emit('choose', props.value)
        }
        const classNames = computed(() => [
            'tm-action-sheet-item',
            'flex-center-center',
            props.borderAble && 'tm-action-sheet-item-border',
            props.innerCancel && 'tm-action-sheet-item-border-top',
        ])

        return {
            onClick,
            classNames,
        }
    },
}
</script>
<style lang="scss" scoped>
    .tm-action-sheet-item {
        font-size: $text-font-14;
        color: rgb(26, 26, 26);
        height: 44px;
        text-decoration: none;
        background-color: transparent;
        border: none;
        user-select: none;
        outline: none;
        width: 100%;

        &:active {
            background-color: rgba($color: #000000, $alpha: 0.05);
        }

        &-border {
            border-bottom: 1px solid #f1f2f3;
        }

        &-border-top {
            border-top: 1px solid #f1f2f3;
        }

        &-border:last-child {
            border-bottom: 0;
        }
    }
</style>