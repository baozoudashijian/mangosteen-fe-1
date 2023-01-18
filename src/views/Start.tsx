import { defineComponent, ref } from 'vue';
import { Button } from '../components/button/Button';
import { Center } from '../components/center/Center';
import { FloatButton } from '../components/float_button/FloatButton';
import { Icon } from '../components/icon/Icon';
import { NavBar } from '../components/navbar/NavBar';
import { OverLay } from '../components/overlay/OverLay';
import { OverLayList } from '../components/overlay/OverLay'
import s from './Start.module.scss'


export const Start = defineComponent({
    setup() {
        const visible = ref(false)
        const overLayData = ref<OverLayList>([
            {icon: 'charts', text: '统计图表'},
            {icon: 'export', text: '导出数据'},
            {icon: 'notify', text: '记账提醒'},
        ])
        const onclick = () => {
            console.log(123)
        }
        const displayOverlay = () => {
            visible.value = true
        }
        const closeOverlay = () => {
            visible.value = false
        }
        return () => (
            <>
                <NavBar>
                    {{
                        default: () => '山竹记账',
                        icon: () => <Icon name="menu" width="50" height="37.5" onClick={displayOverlay} />
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
                <OverLay visible={visible.value} onClose={closeOverlay} list={overLayData.value}/>
            </>
            
        )
    }
})