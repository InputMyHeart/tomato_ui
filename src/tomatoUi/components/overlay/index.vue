<template>
    <transition
        enter-active-class="animate__animated animate__faster animate__fadeIn "
        leave-active-class="animate__animated animate__faster animate__fadeOut"
    >
        <div v-if="visible" :style="{ zIndex }" class="tm-overlay-background" @click="closeOverlay">
            <slot></slot>
        </div>
    </transition>
</template>
<script>
    import 'animate.css'
    export default {
        name: 'tm-overlay',
        props: {
            zIndex: {
                type: Number,
                default: 10,
            },
            visible: {
                type: Boolean,
                required: true,
            },
        },
        setup(props, { emit }) {
            const closeOverlay = () => {
                emit('update:visible', false)
            }

            return {
                closeOverlay
            }
        },
    }
</script>
<style lang="scss" scoped>
    .tm-overlay {
        &-background {
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-color: rgba($color: #000000, $alpha: 0.6);
        }
    }
</style>