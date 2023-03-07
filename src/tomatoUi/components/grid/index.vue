<template>
    <div class="tm-grid flex-wrap flex-between-center">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "tm-grid"
}
</script>

<style lang="scss" scoped>
    .tm-grid {
        background-color: $color-white;
        &::after {
            content: '';
            flex: 0 0 33%;
        }
    }
</style>