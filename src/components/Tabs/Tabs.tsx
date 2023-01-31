import { defineComponent } from 'vue';
import s from './Tabs.module.scss';

export const Tabs = defineComponent({
    props: {
        selected: {
            type: String,
            required: true
        },
        onUpdateSelected: {
            type: Function,
            required: true
        }
    },
    setup(props, context) {
        const { slots } = context
        const array = slots.default?.()
        if(!array) return () => null
        console.log(props.selected, 'selected')
        return () => (
            <>
                <div class={s.tabsWrap}>
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

        )
    }
})

