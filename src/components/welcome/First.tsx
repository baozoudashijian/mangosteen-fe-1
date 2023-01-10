import s from './Welcome.module.scss'
import icon from '../../assets/icons/pig.svg'

export const First = () => (
    <div class={s.wrapper}>
        <div class={s.card}>
            <img src={icon} alt="" />
            <h2>会挣钱<br />还要会省钱</h2>
        </div>
    </div>
)
First.displayName = "First"