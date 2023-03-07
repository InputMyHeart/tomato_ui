<template>
    <div :class="rootClassNames" @click="toggle">
        <div :class="classNames" :style="{ color: currentColor }">
            <div :class="handleClassNames">
                <div class="tm-switch-handle-circle-content"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref, toRef, getCurrentInstance } from 'vue'
export default {
    name: 'tm-switch',
    props: {
        activedColor: {
            type: String,
            default: '#096dd9',
        },
        size: {
            type: String,
            default: 'large',
        },
        modelValue: {
            type: Boolean,
            required: true,
        },
    },
    setup(props) {
        const UN_ACTIVED_COLOR = 'lightgray'
        const { emit } = getCurrentInstance()

        const actived = toRef(props, 'modelValue')

        function toggle() {
            // actived.value = !actived.value
            emit('update:modelValue', !actived.value)
        }

        const currentColor = computed(() => {
            return actived.value ? props.activedColor : UN_ACTIVED_COLOR
        })

        const classNames = computed(() => {
            return [`tm-switch-handle`, `tm-switch-handle-${props.size}`, actived.value && `tm-switch-handle-active`]
        })

        const rootClassNames = computed(() => {
            return ['tm-switch', `tm-switch-${props.size}`]
        })

        const handleClassNames = computed(() => {
            return [`tm-switch-handle-circle-${props.size}`]
        })

        return {
            handleClassNames,
            rootClassNames,
            classNames,
            currentColor,
            toggle,
            actived,
        }
    },
}
</script>

<style lang="scss" scoped>
    .tm-switch {
        display: inline-block;
        overflow: hidden;
        background-color: lightgrey;
        position: relative;

        $tm-switch-large-width: 52px;
        $tm-switch-large-height: 26px;
        $tm-switch-large-radius: 52px;

        $tm-switch-normal-width: 48px;
        $tm-switch-normal-height: 24px;
        $tm-switch-normal-radius: 48px;

        $tm-switch-small-width: 40px;
        $tm-switch-small-height: 20px;
        $tm-switch-small-radius: 40px;

        &-large {
            width: $tm-switch-large-width;
            height: $tm-switch-large-height;
            border-radius: $tm-switch-large-radius;
            font-size: $text-font-18;
        }
        &-normal {
            width: $tm-switch-normal-width;
            height: $tm-switch-normal-height;
            border-radius: $tm-switch-normal-radius;
            font-size: $text-font-14;
        }
        &-small {
            width: $tm-switch-small-width;
            height: $tm-switch-small-height;
            border-radius: $tm-switch-small-radius;
            font-size: $text-font-12;
        }

        &-handle {
            position: absolute;
        }

        &-handle-large {
            width: $tm-switch-large-width;
            height: $tm-switch-large-height;
            background-color: currentColor;
            border-radius: 0 $tm-switch-large-radius $tm-switch-large-radius 0;
            overflow: hidden;
            transition: left 0.2s ease-out;
        }

        &-handle-large {
            left: calc(-100% + 26px);
        }

        &-handle-normal {
            width: $tm-switch-normal-width;
            height: $tm-switch-normal-height;
            background-color: currentColor;
            left: calc(-100% + 24px);
            border-radius: 0 $tm-switch-normal-radius $tm-switch-normal-radius 0;
            overflow: hidden;
            transition: left 0.2s ease-out;
        }

        &-handle-small {
            width: $tm-switch-small-width;
            height: $tm-switch-small-height;
            background-color: currentColor;
            left: calc(-100% + 20px);
            border-radius: 0 $tm-switch-small-radius $tm-switch-small-radius 0;
            overflow: hidden;
            transition: left 0.2s ease-out;
        }

        &-handle-active {
            left: 0;
        }
        &-handle-circle-large {
            right: 0;
            position: absolute;
            width: $tm-switch-large-height;
            height: $tm-switch-large-height;
            box-sizing: border-box;
            border: 4px solid currentColor;
            background-color: currentColor;
            transition: all 0.4s ease-out;
            border-radius: 50%;
        }

        &-handle-circle-normal {
            right: 0;
            position: absolute;
            width: $tm-switch-normal-height;
            height: $tm-switch-normal-height;
            box-sizing: border-box;
            border: 3px solid currentColor;
            background-color: currentColor;
            transition: all 0.4s ease-out;
            border-radius: 50%;
        }
        &-handle-circle-small {
            right: 0;
            position: absolute;
            width: $tm-switch-small-height;
            height: $tm-switch-small-height;
            box-sizing: border-box;
            border: 2px solid currentColor;
            background-color: currentColor;
            transition: all 0.4s ease-out;
            border-radius: 50%;
        }

        &-handle-circle-content {
            background-color: #fff;
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }
</style>
