import { defineComponent } from 'vue';
import { Button } from '../components/button/Button';
import { FloatButton } from '../components/float_button/FloatButton';
import { Icon } from '../components/icon/Icon';
import s from './Start.module.scss'

export const Start = defineComponent({
    setup() {
        const onclick = () => {
            console.log(123)
        }
        return () => (
            <div class={s.button_wrapper}>
                <Button class={s.button} onClick={onclick}>按钮</Button>
                <FloatButton onClick={onclick} />
            </div>
        )
    }
})