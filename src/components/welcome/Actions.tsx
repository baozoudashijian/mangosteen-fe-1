import { RouterLink } from 'vue-router';
import s from './Welcome.module.scss'

export const FirstActions = () => {
    return (
        <>
            <RouterLink class={s.fake} to={'/start'}>跳过</RouterLink>
            <RouterLink to={'/welcome/2'}>下一页</RouterLink>
            <RouterLink to={'/start'}>跳过</RouterLink>
        </>
    )
}
FirstActions.displayName = "FirstActions"

export const SecondActions = () => {
    return (
        <>
            <RouterLink class={s.fake} to={'/start'}>跳过</RouterLink>
            <RouterLink to={'/welcome/3'}>下一页</RouterLink>
            <RouterLink to={'/start'}>跳过</RouterLink>
        </>
    )
}
SecondActions.displayName = "SecondActions"

export const ThirdActions = () => {
    return (
        <>
            <RouterLink class={s.fake} to={'/start'}>跳过</RouterLink>
            <RouterLink to={'/welcome/4'}>下一页</RouterLink>
            <RouterLink to={'/start'}>跳过</RouterLink>
        </>
    )
}
ThirdActions.displayName = "ThirdActions"

export const ForthActions = () => {
    return (
        <>
            <RouterLink class={s.fake} to={'/start'}>跳过</RouterLink>
            <RouterLink to={'/start'}>开启应用</RouterLink>
            <RouterLink class={s.fake} to={'/start'}>跳过</RouterLink>
        </>
    )
}
ForthActions.displayName = "ForthActions"