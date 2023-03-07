<template>
    <div :class="['tm-tab-panel', actived == name && 'tm-tab-panel-actived']">{{ name }}</div>
</template>

<script>
import { inject, toRef, watch } from 'vue'
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const name = toRef(props, 'name')
        const actived = inject('actived')

        return {
            name,
            actived,
        }
    },
}
</script>

<style scoped lang="scss">
.tm-tab-panel {
    padding: 0 20px;
    height: 40px;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    font-size: 12px;
    cursor: pointer;

    &-actived {
        color: #06f;
        background-color: rgba(0, 102, 255, 0.1);
        border-bottom: 1px solid rgba(0, 102, 255, 0.5);
        box-sizing: border-box;
        position: relative;
        top: -1px;
    }
}
</style>
