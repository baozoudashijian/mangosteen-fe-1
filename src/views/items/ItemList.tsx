import { computed, defineComponent, reactive, ref } from 'vue';
import { Icon } from '../../components/icon/Icon';
import { InputPad } from '../../components/input_pad/InputPad';
import { Tab } from '../../components/Tabs/Tab';
import { Tabs } from '../../components/Tabs/Tabs';
import { MainLayout } from '../../layouts/MainLayout';
import s from './ItemList.module.scss';
import { Tags } from './Tags';

export const ItemList = defineComponent({
    setup(props, context) {
        const selected = ref('expend')
        const tag = reactive({
            id: 0
        })

        const onUpdateSelected = (name: string) => {
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
                                    <Tab label='支出' name="expend" class={s.tags_wrapper}>
                                        <Tags selected={selected.value} v-model:tagId={tag.id} />
                                    </Tab>
                                    <Tab label='收入' name="income" class={s.tags_wrapper}>
                                        <Tags selected={selected.value} v-model:tagId={tag.id} />
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