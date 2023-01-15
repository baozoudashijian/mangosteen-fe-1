import s from './Welcome.module.scss'
import { Icon } from '../icon/Icon'

export const First = () => (
    <div class={s.wrapper}>
        <div class={s.card}>
            <Icon name="pig" width="130px" />
            <h2>会挣钱<br />还要会省钱</h2>
        </div>
    </div>
)
First.displayName = "First"