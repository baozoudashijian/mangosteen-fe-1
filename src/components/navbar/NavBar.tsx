import { defineComponent } from 'vue';
import s from './NavBar.module.scss';

export const NavBar = defineComponent({
    setup(props, context) {
        const {slots} = context
        return () => (
            <div class={s.navbar}>
                <span class={s.navbar_icon}>
                    {slots.icon?.()}
                </span>
                <span class={s.navbar_text}>
                    {slots.default?.()}
                </span>
            </div>
        )
    }
})