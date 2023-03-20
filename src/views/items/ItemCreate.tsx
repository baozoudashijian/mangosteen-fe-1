import { defineComponent, ref } from 'vue';
import { Icon } from '../../components/icon/Icon';
import { Tab } from '../../components/Tabs/Tab';
import { Tabs } from '../../components/Tabs/Tabs';
import { MainLayout } from '../../layouts/MainLayout';
import s from './ItemCreate.module.scss';
import { ItemSummary } from './ItemSummary';

export const ItemCreate = defineComponent({
    setup(props, context) {
        const selected = ref('expend')
        const onUpdateSelected = (name: string) => {
            selected.value = name
        }
        return () => (
            <MainLayout>
                {{
                    title: () => '山竹记账',
                    icon: () => <Icon name="menu" width="50" height="37.5" />,
                    default: () => {
                        return <Tabs selected={selected.value} onUpdateSelected={onUpdateSelected}>
                            <Tab label="本月" name="month">
                                <ItemSummary />
                            </Tab>
                            <Tab label="上月" name="lastmonth">
                                <ItemSummary />
                            </Tab>
                            <Tab label="今年" name="year">
                                <ItemSummary />
                            </Tab>
                            <Tab label="自定义时间" name="diytime">
                                <ItemSummary />
                            </Tab>
                        </Tabs>

                    }
                }}
            </MainLayout>
        )
    }
})