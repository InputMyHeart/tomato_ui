<template>
    <teleport to="body" v-if="modelValue && type === 'default'">
        <div class="tm-loading-default flex-center-center">
            <p class="tm-loading-content">{{ content }}</p>
        </div>
    </teleport>
    <teleport to="body" v-if="modelValue && type === 'progress'">
        <div class="tm-loading-progress" :style="style"></div>
    </teleport>
</template>
<script>
import { reactive, toRefs } from 'vue'
export default {
    name: 'tm-loading',
    props: {
        modelValue: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'default'
        },
        content: {
            type: String,
            default: '加载中...'
        }
    },
    setup(props) {
        const state = reactive({
            style: ''
        })

        if (!props.modelValue) {
            setTimeout(() => {
                state.style = 'animation: progress-end 0.5s ease-out forwards;'
            }, 500)
        }

        return {
            ...toRefs(state)
        }
    }
}
</script>
<style lang="scss" scoped>
    .tm-loading-default {
        width: 100%;
        height: 100vh;
        background-color: rgba($color: #000000, $alpha: 0.5);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 2021;
        &-content {
            color: $color-white;
        }
    }
    .tm-loading-progress {
        width: 0;
        height: 5px;
        position: fixed;
        top: 0;
        background-color: greenyellow;
        animation: progress-move 0.5s ease forwards;
    }
    @keyframes progress-move {
        from {
            width: 0;
        }
        to {
            width: 80%;
        }
    }
    @keyframes progress-end {
        from {
            width: 80%;
        }
        to {
            width: 100%;
        }
    }
</style>
