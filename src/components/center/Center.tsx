import { defineComponent, PropType } from 'vue';
import s from './Center.module.scss';

export const Center = defineComponent({
    props: {
        direction: {
            type: String as PropType<'row' | 'column'>,
            default: 'row'
        }
    },
    setup(props, context) {
        return () => (
            <div class={[s.centerWrapper, s[props.direction]]}>
                {context.slots.default?.()}
            </div>
        )
    }
})