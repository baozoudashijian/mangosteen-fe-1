import { defineComponent } from 'vue';
import s from './Tabs.module.scss';

export const Tabs = defineComponent({
    props: {
        selected: {
            type: String,
            required: true
        },
        sticky: {
            type: Boolean,
            default: false
        },
        onUpdateSelected: {
            type: Function,
            required: true
        }
    },
    setup(props, context) {
        return () => {
            const { slots } = context
            const array = slots.default?.()
            if (!array) return () => null
            return <>
                <div class={[s.tabsWrap, props.sticky ? s.sticky : '']}>
                    {array.map(item => {
                        return <div class={[s.tabsWrapItem, item.props?.name === props.selected ? s.tabsWrapItemActive : '']} onClick={() => props.onUpdateSelected(item.props?.name)}>
                            {item.props?.label}
                        </div>
                    })}
                </div>
                <div>
                    {array.find(item => item.props?.name === props.selected)}
                </div>
            </>
        }
    }
})

