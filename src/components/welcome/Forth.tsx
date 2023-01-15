import { defineComponent } from 'vue';
import s from './Welcome.module.scss'
import { Icon } from '../icon/Icon';

export const Forth = () => (
    <div class={s.wrapper}>
        <div class={s.card}>
            <Icon name="cloud" width="130px" />
            <h2>云备份<br />再也不怕数据丢失</h2>
        </div>
    </div>
)
Forth.displayName = "Forth"