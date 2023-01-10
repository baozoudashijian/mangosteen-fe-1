import { defineComponent } from 'vue';
import s from './First.module.scss'
import { RouterLink } from 'vue-router';

export const WelcomeLayout = defineComponent({
    setup(props, ctx) {
        const { slots } = ctx
        return () => (
            <div class={s.wrapper}>
                <div class={s.card}>
                    {slots.icon?.()}
                    
                    {slots.title?.()}
                </div>
                <div class={s.actions}>
                    {slots.actions?.()}
                </div>
            </div>
        )
    }
})