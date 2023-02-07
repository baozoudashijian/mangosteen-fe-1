import { defineComponent, ref } from 'vue';
import { time } from '../../shared/time';
import { Icon } from '../icon/Icon';
import { DatePicker } from 'vant'
import { Popup } from 'vant';
import s from './InputPad.module.scss';

export const InputPad = defineComponent({
    setup(props, context) {
        const currentDate = ref(['2021', '01', '01'])
        const popupVisible = ref(false)
        const buttonMap = [
            { text: '1', onClick: () => { } },
            { text: '2', onClick: () => { } },
            { text: '3', onClick: () => { } },
            { text: '清空', onClick: () => { } },
            { text: '4', onClick: () => { } },
            { text: '5', onClick: () => { } },
            { text: '6', onClick: () => { } },
            { text: '+', onClick: () => { } },
            { text: '7', onClick: () => { } },
            { text: '8', onClick: () => { } },
            { text: '9', onClick: () => { } },
            { text: '-', onClick: () => { } },
            { text: '.', onClick: () => { } },
            { text: '0', onClick: () => { } },
            { text: '删除', onClick: () => { } },
            { text: '提交', onClick: () => { } },
        ]
        const selectTime = (selectedValues : string[]) => {
            popupVisible.value = false
            currentDate.value = selectedValues
        }
        return () => (
            <>
                <div class={s.dateAndAmount}>
                    <span class={s.date} onClick={() => popupVisible.value = true}>
                        <Icon name="notes" width="24" height="24" />
                        <span>{time(new Date(currentDate.value.join('-'))).format('YYYY-MM-DD')}</span>
                    </span>
                    <span class={s.amount}>100</span>
                </div>
                <div class={s.buttons}>
                    {buttonMap.map(button => {
                        return <button onClick={button.onClick}>{button.text}</button>
                    })}
                </div>
                <div>
                    <Popup
                        v-model:show={popupVisible.value}
                        position="bottom"
                    >
                        <DatePicker
                            modelValue={currentDate.value}
                            title="选择日期"
                            onConfirm={({selectedValues}) => selectTime(selectedValues)}
                            onCancel={() => popupVisible.value = false}
                        />
                    </Popup>
                </div>
            </>

        )
    }
})