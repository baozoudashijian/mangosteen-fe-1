import { defineComponent, ref } from 'vue';
import { Icon } from '../../components/icon/Icon';
import { InputPad } from '../../components/input_pad/InputPad';
import { Tab } from '../../components/Tabs/Tab';
import { Tabs } from '../../components/Tabs/Tabs';
import { MainLayout } from '../../layouts/MainLayout';
import s from './ItemList.module.scss';

export const ItemList = defineComponent({
    setup(props, context) {
        const selected = ref('expend')

        const onUpdateSelected = (name: string) => {
            console.log(name, 'name')
            selected.value = name
        }
        return () => (
            <>
            <MainLayout>
                {{
                    icon: () => <Icon name="left" width="50" height="37.5" fill="#fff" />,
                    text: () => '记一笔',
                    default: () => {
                        return <>
                            <Tabs selected={selected.value} onUpdateSelected={onUpdateSelected}>
                                <Tab label='支出' name="expend">
                                    123
                                </Tab>
                                <Tab label='收入' name="income">
                                    456
                                </Tab>
                            </Tabs>
                            <div class={s.inputPad_wrapper}>
                                <InputPad />
                            </div>
                        </>
                    }
                }}
            </MainLayout>
            </>
        )
    }
})