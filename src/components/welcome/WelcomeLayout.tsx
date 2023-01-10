import { defineComponent, FunctionalComponent } from 'vue';
import s from './Welcome.module.scss'
import { RouterLink } from 'vue-router';

export const WelcomeLayout: FunctionalComponent = (props, ctx) => {
    const { slots: {icon, title, actions} } = ctx
    return (
        <div class={s.wrapper}>
            <div class={s.card}>
                {icon?.()}
                {title?.()}
            </div>
            <div class={s.actions}>
                {actions?.()}
            </div>
        </div>
    )
}