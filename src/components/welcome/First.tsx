import { defineComponent } from 'vue';
import s from './Welcome.module.scss'
import icon from '../../assets/icons/pig.svg'
import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout'

export const First = () => (
    <WelcomeLayout v-slots={{
        icon: () => <img src={icon} alt="" />,
        title: () => <h2>会挣钱<br />还要会省钱</h2>,
        actions: () => <>
            <RouterLink class={s.fake} to={'/start'}>跳过</RouterLink>
            <RouterLink to={'/welcome/2'}>下一页</RouterLink>
            <RouterLink to={'/start'}>跳过</RouterLink>
        </>
    }}></WelcomeLayout>
)