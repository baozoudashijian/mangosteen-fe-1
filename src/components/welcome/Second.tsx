import s from './Welcome.module.scss'
import { Icon } from '../icon/Icon'

export const Second = () => (
    <div class={s.wrapper}>
        <div class={s.card}>
            <Icon name="clock" width="130px" />
            <h2>每日提醒<br />不会遗漏每一笔账单</h2>
        </div>
    </div>
)
Second.displayName = "Second"