import { Overlay } from 'vant';
import { defineComponent, reactive, ref } from 'vue';
import { Icon } from '../../components/icon/Icon';
import { Tab } from '../../components/Tabs/Tab';
import { Tabs } from '../../components/Tabs/Tabs';
import { MainLayout } from '../../layouts/MainLayout';
import { Time } from '../../shared/time';
import s from './ItemCreate.module.scss';
import { ItemSummary } from './ItemSummary';

export const ItemCreate = defineComponent({
    setup(props, context) {
        const selected = ref('month')
        const overlayVisible = ref<boolean>(false)
        const onUpdateSelected = (name: string) => {
            selected.value = name
            if(name === 'diytime') {
                overlayVisible.value = true
            }
        }
        const customTime = reactive({
            start: new Time(), end: new Time()
        })
        const time = new Time()
        const timeList = [
            {
                start: time.firstDayOfMounth(),
                end: time.lastDayOfMounth()
            },
            {
                start: time.add(-1, 'month').firstDayOfMounth(),
                end: time.add(-1, 'month').lastDayOfMounth()
            },
            {
                start: time.firstDayOfYear(),
                end: time.lastDayOfYear()
            }
        ]
        return () => (
            <MainLayout>
                {{
                    text: () => '山竹记账',
                    icon: () => <Icon name="menu" width="50" height="37.5" />,
                    default: () => {
                        return <>
                            <Tabs selected={selected.value} onUpdateSelected={onUpdateSelected}>
                                <Tab label="本月" name="month">
                                    <ItemSummary startDate={timeList[0].start.format()} endDate={timeList[0].end.format()} />
                                </Tab>
                                <Tab label="上月" name="lastmonth">
                                    <ItemSummary startDate={timeList[1].start.format()} endDate={timeList[1].end.format()} />
                                </Tab>
                                <Tab label="今年" name="year">
                                    <ItemSummary startDate={timeList[2].start.format()} endDate={timeList[2].end.format()} />
                                </Tab>
                                <Tab label="自定义时间" name="diytime">
                                    <ItemSummary startDate={customTime.start.format()} endDate={customTime.start.format()} />
                                </Tab>
                            </Tabs>
                            <Overlay show={overlayVisible.value} class={s.overlay}>
                                <div class={s.overlay_inner}>
                                    <header>请选择时间</header>
                                </div>
                            </Overlay>
                        </>
                    }
                }}
            </MainLayout>
        )
    }
})