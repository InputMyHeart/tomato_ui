<script>
import { useSlots, provide, defineComponent, h, computed } from 'vue'

export default defineComponent({
    props: {
        modelValue: {
            type: String,
            required: true,
        },
    },

    setup(props, { emit }) {
        const slots = useSlots()
        const panels = slots.default()

        const canIShow = index => props.modelValue === panels[index].props.name
        const onPanelClick = localProps => {
            emit('update:modelValue', localProps.name)
            emit('change', localProps.name)
        }

        provide(
            'actived',
            computed(() => props.modelValue)
        )
        return {
            panels,
            canIShow,
            onPanelClick,
        }
    },
    render() {
        return h(
            'div',
            {
                class: 'tm-tabs',
            },
            [
                h(
                    'div',
                    { class: 'tm-tabs-box' },
                    this.panels.map(p =>
                        h(
                            'div',
                            {
                                style: 'display:inline-block;',
                                onClick: this.onPanelClick.bind(this, p.props),
                            },
                            p
                        )
                    )
                ),
                h(
                    'div',
                    { class: 'tm-tabs-content' },
                    this.panels.map((item, index) =>
                        h(
                            'div',
                            {
                                style: {
                                    display: this.canIShow(index) ? 'block' : 'none',
                                },
                            },
                            item.children.default()
                        )
                    )
                ),
            ]
        )
    },
})
</script>

<style scoped lang="scss">
.tm-tabs {
    &-box {
        height: 40px;
        border-bottom: 1px solid #e9e9e9;
        box-sizing: border-box;
    }
    &-content {
        padding-top: 10px;
    }
}
</style>
