import s from './Welcome.module.scss'
import { Icon } from '../icon/Icon'

export const Third = () => (
    <div class={s.wrapper}>
        <div class={s.card}>
            <Icon name="chart" width="130px" />
            <h2>数据可视化<br />收支一目了然</h2>
        </div>
    </div>
)
Third.displayName = "Third"