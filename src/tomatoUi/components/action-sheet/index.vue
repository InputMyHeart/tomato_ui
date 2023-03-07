<template>
    <transition
        enter-active-class="animate__animated animate__faster animate__fadeIn "
        leave-active-class="animate__animated  animate__fadeOut"
    >
        <div v-show="visible" class="tm-action-sheet" :style="{ zIndex }" @click="$emit('update:visible', false)">
            <transition
                enter-active-class="animate__animated animate__faster  animate__fadeInUp"
                leave-active-class="animate__animated animate__faster animate__fadeOutDown"
            >
                <div v-show="visible" class="tm-action-sheet-content" :style="contentStyles">
                    <!-- vue3 将 v-on="$listeners" 删除了,统一使用v-bind="$attrs" -->
                    <tm-item v-for="(item, index) in items" :value="item[back]" :key="index" v-bind="$attrs">
                        {{ item[front] }}
                    </tm-item>
                    <tm-item v-if="cancelable" :inner-cancel="true" @choose="onCancel"> 取消 </tm-item>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
import 'animate.css'
import TmItem from './item.vue'
import { computed, toRefs } from 'vue'
/**
 * @props
 * items  对应菜单项列表,
 * visible 控制显示隐藏
 * round 是否显示圆角
 * zIndex 遮罩层的层级
 * cancelable 是否显示“取消”项目
 * front 每一个 item 显示的值,默认为name
 * back 在选中时你想要带回的值
 */

/**
 * @emits
 * choose 选中的事件
 * cancel 取消的事件
 */
export default {
    name: 'tm-action-sheet',
    components: { TmItem },
    props: {
        items: {
            type: Array,
            default: () => [],
        },
        visible: {
            type: Boolean,
            required: true,
        },
        round: {
            type: Boolean,
            default: true,
        },
        zIndex: {
            type: Number,
            default: 100,
        },
        cancelable: {
            type: Boolean,
            default: true,
        },

        front: {
            type: String,
            default: 'name',
        },
        back: {
            type: String,
            default: 'value',
        },
    },
    setup(props, { emit }) {
        const { cancelable, front, back } = toRefs(props)

        const contentStyles = computed(() => {
            return {
                borderRadius: props.round ? '20px 20px 0 0' : '0',
            }
        })

        const onCancel = () => {
            emit('update:visible', false)
            emit('cancel')
        }

        return {
            cancelable,
            front,
            back,
            contentStyles,
            onCancel,
        }
    },
}
</script>
<style lang="scss" scoped>
    .tm-action-sheet {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba($color: #000000, $alpha: 0.6);

        &-content {
            width: 100%;
            padding-top: 6px;
            box-sizing: border-box;
            background-color: white;
            position: absolute;
            bottom: 0;
            overflow: hidden;
        }
    }
</style>