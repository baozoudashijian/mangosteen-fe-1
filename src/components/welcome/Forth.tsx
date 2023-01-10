import { defineComponent } from 'vue';
import s from './Welcome.module.scss'
import icon from '../../assets/icons/cloud.svg'

export const Forth = () => (
    <div class={s.wrapper}>
        <div class={s.card}>
            <img src={icon} alt="" />
            <h2>云备份<br />再也不怕数据丢失</h2>
        </div>
    </div>
)
Forth.displayName = "Forth"