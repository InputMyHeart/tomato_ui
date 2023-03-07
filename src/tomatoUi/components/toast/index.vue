<template>
    <i class="iconfont tm-toast-icon" :class="className" v-if="defaultParam.type !== 'default'"></i>
    <div class="tm-toast-content">{{ defaultParam.content }}</div>
</template>
<script>
import { computed } from 'vue'
export default {
    name: 'tm-toast',
    props: {
        defaultParam: {
            type: Object,
            default: {}
        }
    },
    setup(props) {
        console.log(props.defaultParam)
        const className = computed(() => {
            let className = ''
            switch (props.defaultParam.type) {
                case 'null':
                    
                    break;
            
                default:
                    break;
            }
        })

        return {
            className
        }
    }
}
</script>
<style lang="scss" scoped>
    .tm-toast {
        padding: 5px 12px;
        background-color: rgba($color: #000000, $alpha: 0.5);
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2022;
        &-icon {
            margin-bottom: 20px;
            color: #ffffff;
        }
        &-content {
            color: #ffffff;
        }
    }
</style>
