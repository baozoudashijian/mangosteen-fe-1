import { defineComponent } from 'vue';
import s from './Button.module.scss'

// interface Props {
//     onClick?: (e: MouseEvent) => void;
//     level?: 'error' | 'normal'
// }
export const Button = defineComponent({
    props: {
        onClick: {
            type: Function
        },
        level: {
            type: String,
            default: 'normal'
        }
    },
    setup(props, context) {
        return () => (
            <button class={[s.button, props.level && s[props.level]]}>{context.slots.default?.()}</button>
        )
    }
})