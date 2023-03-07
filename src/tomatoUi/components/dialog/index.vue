<template>
    <transition
        enter-active-class="animate__animated animate__faster animate__fadeIn "
        leave-active-class="animate__animated animate__faster animate__fadeOut"
    >
        <div v-if="visible" :style="{ zIndex }" class="tm-dialog-background" @click="closeDialog">
            <div @click.stop class="tm-dialog-content">
                <div class="tm-dialog-title">{{ title }}</div>
                <div class="tm-dialog-main">
                    <div style="width: 100%;">
                        <slot></slot>
                    </div>
                </div>
                <div class="tm-dialog-footer">
                    <div
                        class="tm-dialog-button tm-dialog-button-cancel"
                        @click="closeDialog"
                    >{{ cancelText }}</div>
                    <div
                        class="tm-dialog-button tm-dialog-button-confirm"
                        @click="closeDialog"
                    >{{ confirmText }}</div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    import 'animate.css'
    export default {
        name: 'tm-dialog',
        props: {
            zIndex: {
                type: Number,
                default: 10,
            },
            visible: {
                type: Boolean,
                required: true,
            },
            showTitle: {
                type: Boolean,
                default: true
            },
            title: {
                type: String,
                default: '标题'
            },
            confirmText: {
                type: String,
                default: '确认'
            },
            cancelText: {
                type: String,
                default: '取消'
            }
        },
        setup(props, { emit }) {
            const closeDialog = () => {
                emit('update:visible', false)
            }

            return {
                closeDialog
            }
        }
    }
</script>
<style lang="scss" scoped>
    .tm-dialog {
        &-background {
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-color: rgba($color: #000000, $alpha: 0.6);
        }
        &-content {
            width: 300px;
            position: absolute;
            background-color: #ffffff;
            min-height: 100px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border-radius: 20px;
            padding: 20px 0;
        }

        &-title {
            height: 30px;
            line-height: 30px;
            text-align: center;
            color: $color-main;
        }

        &-main {
            min-height: 60px;
            display: flex;
            align-items: center;
            font-size: 14px;
            justify-content: center;
            color: #292929;
            width: 100%;
            padding: 10px 20px;
            box-sizing: border-box;
        }

        &-footer {
            display: flex;
            justify-content: space-evenly;
            padding-top: 10px;
        }

        &-button {
            display: inline-block;
            padding: 6px 24px;
            font-size: 14px;
            border-radius: 24px;

            &-cancel {
                color: $color-main;
                border: 1px solid currentColor;
            }
            &-confirm {
                color: #fff;
                background-color: $color-main;
            }
        }
    }
</style>