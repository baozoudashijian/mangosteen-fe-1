import s from './Welcome.module.scss'
import icon from '../../assets/icons/clock.svg'

export const Second = () => (
    <div class={s.wrapper}>
        <div class={s.card}>
            <img src={icon} alt="" />
            <h2>每日提醒<br />不会遗漏每一笔账单</h2>
        </div>
    </div>
)
Second.displayName = "Second"