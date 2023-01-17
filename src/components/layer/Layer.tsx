import { defineComponent, PropType } from 'vue';
import s from './Layer.module.scss';

export const Layer = defineComponent({
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        onClick: {
            type: Function as PropType<() => void>
        }
    },
    setup(props, context) {
        const { slots } = context
        return () => (
            <div  class={[s.layer_wrapper, !props.visible ? s.layer_wrapper_hide : '' ]} onClick={props.onClick}></div>
        )
    }
})