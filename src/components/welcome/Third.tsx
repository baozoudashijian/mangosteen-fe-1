import s from './Welcome.module.scss'
import icon from '../../assets/icons/chart.svg'

export const Third = () => (
    <div class={s.wrapper}>
        <div class={s.card}>
            <img src={icon} alt="" />
            <h2>数据可视化<br />收支一目了然</h2>
        </div>
    </div>
)
Third.displayName = "Third"