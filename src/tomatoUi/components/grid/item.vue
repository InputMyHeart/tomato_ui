<template>
    <div class="tm-grid-item flex-column flex-center-center">
        <slot></slot>
    </div>
    <!-- <tm-grid>
        <tm-grid-item>
            <i class="iconfont icon-trophy"></i>
            <p>排行榜</p>
        </tm-grid-item>
        <tm-grid-item>
            <i class="iconfont icon-video"></i>
            <p>视频</p>
        </tm-grid-item>
        <tm-grid-item>
            <i class="iconfont icon-trophy"></i>
            <p>排行榜</p>
        </tm-grid-item>
        <tm-grid-item>
            <i class="iconfont icon-video"></i>
            <p>视频</p>
        </tm-grid-item>
        <tm-grid-item>
            <i class="iconfont icon-trophy"></i>
            <p>排行榜</p>
        </tm-grid-item>
    </tm-grid> -->
</template>

<script>
export default {
    name: 'tm-grid-item',
}
</script>

<style lang="scss" scoped>
.tm-grid-item {
    height: 50px;
    flex: 0 0 33%;
    font-size: 12px;
    ::v-deep(.iconfont) {
        margin-bottom: 6px;
    }
}
</style>
