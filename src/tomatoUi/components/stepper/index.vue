<template>
    <div class="tm-stepper flex">
        <input class="tm-stepper-input" v-model="stepperValue" @blur="checkValue" />
        <div class="tm-stepper-handle flex-column">
            <span class="handle flex-center-center" @click="handle('plus')">
                <i class="iconfont icon-plus"></i>
            </span>
            <span class="handle flex-center-center" @click="handle('minus')">
                <i class="iconfont icon-minus"></i>
            </span>
        </div>
    </div>
</template>
<script>
    import { reactive, toRefs } from 'vue'
    export default {
        name: 'tm-stepper',
        props: {
            min: {
                type: Number,
                default: 1
            },
            max: {
                type: Number,
                default: 10
            },
            rule: {
                type: Number,
                default: 1
            }
        },
        setup(props) {
            const state = reactive({
                stepperValue: 1
            })

            const handle = (type) => {
                if(type === 'minus') {
                    if(state.stepperValue - props.rule < props.min) {
                        console.log('===已经最小了，不能再减了===')
                        return
                    }
                    state.stepperValue -= props.rule
                }else {
                    if(state.stepperValue + props.rule > props.max) {
                        console.log('===已经最大了，不能再加了===')
                        return
                    }
                    state.stepperValue += props.rule
                }
            }

            const checkValue = () => {
                if(state.stepValue < props.min) {
                    state.stepValue = props.min
                }
                if(state.stepValue > props.max) {
                    state.stepValue = props.max
                }
            }

            return {
                ...toRefs(state),
                handle,
                checkValue
            }
        }
    }
</script>
<style lang="scss" scoped>
    .tm-stepper {
        width: 100px;
        height: 40px;
        border: 1px solid #999999;
        &-input {
            width: 0;
            height: 100%;
            padding: 0 5px;
            flex: 1 0 auto;
            border: none;
            outline: none;
            font-size: $text-font-12;
            color: #191919;
            text-align: center;
        }
        &-handle {
            width: 40px;
            height: 100%;
            flex: 0 0 auto;
            border-left: 1px solid #999999;
            .handle {
                flex: 1;
                .iconfont {
                    font-size: 12px;
                    color: #999999;
                }
            }
            .handle:last-child {
                border-top: 1px solid #999999;
            }
        }
    }
</style>