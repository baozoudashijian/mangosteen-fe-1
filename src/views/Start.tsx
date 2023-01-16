import { defineComponent } from 'vue';
import { Button } from '../components/button/Button';
import { Center } from '../components/center/Center';
import { FloatButton } from '../components/float_button/FloatButton';
import { Icon } from '../components/icon/Icon';
import { NavBar } from '../components/navbar/NavBar';
import s from './Start.module.scss'

export const Start = defineComponent({
    setup() {
        const onclick = () => {
            console.log(123)
        }
        return () => (
            <>
                <NavBar>
                    {{
                        default: '山竹记账',
                        icon: () => <Icon name="menu" width="50" height="37.5" />
                    }}
                </NavBar>
                <main class={s.main}>
                    <Center direction="column">
                        <Icon name="pig" />
                    </Center>
                </main>
                <div class={s.button_wrapper}>
                    <Button class={s.button} onClick={onclick}>按钮</Button>
                </div>
                <FloatButton onClick={onclick} />
            </>
            
        )
    }
})