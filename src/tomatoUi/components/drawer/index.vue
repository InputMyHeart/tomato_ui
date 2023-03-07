<template>
    <transition
        enter-active-class="animate__animated animate__faster animate__fadeIn "
        leave-active-class="animate__animated animate__faster animate__fadeOut"
    >
        <div v-show="visible" :style="{ zIndex }" class="tm-drawer-background" @click="closeOverlay">
            <transition
                :enter-active-class="contentAnimationClassNames.enter"
                :leave-active-class="contentAnimationClassNames.leave"
            >
                <div @click.stop class="tm-drawer-content" :style="contentStyles" v-show="visible">
                    <div v-if="title" class="tm-drawer-title flex-flex-center">{{ title }}</div>
                    <i v-if="showClose" @click="closeOverlay" class="tm-drawer-close iconfont icon-close"></i>
                    <slot></slot>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script setup>
import 'animate.css'
import { computed, toRef, ref, onMounted, onUnmounted, watch } from 'vue'
const STYLE_MAPS = {
    true: 'height:100vh;overflow:hidden;',
    false: '',
}
const emits = defineEmits(['update:visible'])
const props = defineProps({
    zIndex: {
        type: Number,
        default: 100,
    },
    visible: {
        type: Boolean,
        required: true,
    },

    width: {
        type: String,
        default: '50%',
    },

    right: {
        type: Boolean,
        default: false,
    },
    title: {
        type: String,
        default: '',
    },

    showClose: {
        type: Boolean,
        default: true,
    },
})
const visible = toRef(props, 'visible')
const title = toRef(props, 'title')
const contentStyles = computed(() => {
    const styles = { width: props.width }
    if (props.right) {
        Reflect.set(styles, 'right', '0')
    }
    return styles
})

const contentAnimationClassNames = computed(() => {
    const STATIC_CLASSNAMES_MAPS = {
        left: {
            enter: ['animate__animated', 'animate__faster', 'animate__fadeInLeft'].join(' '),
            leave: ['animate__animated', 'animate__faster', 'animate__fadeOutLeft'].join(' '),
        },
        right: {
            enter: ['animate__animated', 'animate__faster', 'animate__fadeInRight'].join(' '),
            leave: ['animate__animated', 'animate__faster', 'animate__fadeOutRight'].join(' '),
        },
    }

    return props.right ? STATIC_CLASSNAMES_MAPS.right : STATIC_CLASSNAMES_MAPS.left
})

onMounted(() => {})

watch(() => {
    setRootElementStyles()
})

function closeOverlay() {
    emits('update:visible', false)
}

/**@description 阻止弹出之后，背景跟随滚动的问题*/
function setRootElementStyles() {
    const root = document.querySelector('#app')
    if (root) {
        root.setAttribute('style', STYLE_MAPS[visible.value])
    }
}

onUnmounted(() => {
    const root = document.querySelector('#app')
    root.setAttribute('style', STYLE_MAPS[false])
})
</script>
<script>
export default {
    name: 'tm-drawer'
}
</script>
<style lang="scss" scoped>
    .tm-drawer {
        &-background {
            height: 100vh;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            overflow-y: scroll;
            background-color: rgba($color: #000000, $alpha: 0.6);
        }
        &-title {
            color: #72767b;
            min-height: 50px;
            box-sizing: border-box;
            padding: 10px 0;
            font-size: $text-font-16;
            width: 80%;
        }
        &-close {
            position: absolute;
            top: 15px;
            right: 10px;
            color: #72767b;
        }

        &-content {
            min-height: 100vh;
            background-color: white;
            position: absolute;
            top: 0;
            box-sizing: border-box;
            padding: 0 10px;
            font-size: $text-font-14;
        }
    }
</style>
