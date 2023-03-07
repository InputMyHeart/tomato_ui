<template>
    <transition enter-active-class="animate__animated animate__faster animate__fadeIn" leave-active-class="animate__animated animate__faster animate__fadeOut">
        <div class="tm-mask flex-center-center" v-if="modelValue" @click="cancel">
            <div class="tm-modal flex-column" @click.stop>
                <div class="tm-modal-content flex-center-center">
                    {{ content }}
                </div>
                <div class="tm-modal-handle flex-flex-center">
                    <button class="tm-modal-handle_btn tm-modal-handle_cancel" @click.stop="cancel">取消</button>
                    <button class="tm-modal-handle_btn tm-modal-handle_confirm" @click.stop="confirm">确认</button>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    import { reactive, toRefs } from 'vue'
    import 'animate.css'
    export default {
        name: 'tm-modal',
        props: {
            modelValue: {
                type: Boolean,
                default: false
            },
            content: {
                type: String,
                default: '您确定要执行吗？'
            }
        },        
        setup(props, { emit }) {
            const cancel = () => {
                emit('update:modelValue', false)
                emit('cancel', false)
                console.log('用户点击了取消')
            }

            const confirm = () => {
                emit('update:modelValue', false)
                emit('confirm', true)
                console.log('用户点击了确定')
            }

            return {
                cancel,
                confirm,
            }
        },
    }
</script>
<style lang="scss" scoped>
    .tm-mask {
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 2020;
        overflow: auto;
    }
    .tm-modal {
        width: 70%;
        background-color: #fff;
        &-content {
            min-height: 70px;
            padding: 12px;
            flex: 1;
        }
        &-handle {
            height: 40px;
            border-top: 1px solid #666666;
            flex: 0 0 auto;
            &_btn {
                flex: 1;
                height: 100%;
                border: none;
                outline: none;
            }
            &::before {
                content: '';
                width: 1px;
                height: 100%;
                background-color: $color-black;
                position: relative;
                left: 50%;
            }
        }
    }
</style>