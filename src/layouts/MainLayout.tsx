import { defineComponent } from 'vue';
import { NavBar } from '../components/navbar/NavBar';
import s from './MainLayout.module.scss';

export const MainLayout = defineComponent({
    setup(props, context) {
        const { slots } = context
        return () => (
            <div class={s.wrapper}>
                <NavBar>
                    {{
                        default: () => slots.text?.(),
                        icon: () => slots.icon?.()
                    }}
                </NavBar>
                {slots.default?.()}
            </div>
        )
    }
})