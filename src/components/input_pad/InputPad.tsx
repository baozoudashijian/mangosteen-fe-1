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
        const amount = ref('0')
        const appendText = (n: string) => {
            const dotIndex = amount.value.indexOf('.')
            // 保留小数点后两位
            if(dotIndex >=0 && amount.value.length - dotIndex > 2) {
                return
            }
            if(n === '0') {
                if(amount.value === '0') {
                    amount.value = n
                    return
                }
            } else if(n === '.') { // 点后面不允许输入点
                if(dotIndex >= 0) {
                    return
                }
            } else if(amount.value.length > 16) {
                return
            } else {
                if(amount.value === '0') {
                    amount.value = ''
                }
            }
            amount.value += n
        }
        const buttonMap = [
            { text: '1', onClick: () => { appendText('1') } },
            { text: '2', onClick: () => { appendText('2') } },
            { text: '3', onClick: () => { appendText('3') } },
            { text: '4', onClick: () => { appendText('4') } },
            { text: '5', onClick: () => { appendText('5') } },
            { text: '6', onClick: () => { appendText('6') } },
            { text: '7', onClick: () => { appendText('7') } },
            { text: '8', onClick: () => { appendText('8') } },
            { text: '9', onClick: () => { appendText('9') } },
            { text: '.', onClick: () => { appendText('.') } },
            { text: '0', onClick: () => { appendText('0') } },
            { text: '清空', onClick: () => { amount.value = '0' } },
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
                    <span class={s.amount}>{amount.value}</span>
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