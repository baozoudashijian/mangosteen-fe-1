import { defineComponent } from 'vue';
import { time } from '../../shared/time';
import { Icon } from '../icon/Icon';
import s from './InputPad.module.scss';

export const InputPad = defineComponent({
    setup(props, context) {
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
        return () => (
            <>
                <div class={s.dateAndAmount}>
                    <span class={s.date}>
                        <Icon name="notes" width="24" height="24" />
                        <span>{time().format('YYYY-MM-DD')}</span>
                    </span>
                    <span class={s.amount}>100</span>
                </div>
                <div class={s.buttons}>
                    {buttonMap.map(button => {
                        return <button onClick={button.onClick}>{button.text}</button>
                    })}
                </div>
            </>

        )
    }
})