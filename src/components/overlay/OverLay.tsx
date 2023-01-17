import { defineComponent, PropType, Ref } from 'vue';
import { Center } from '../center/Center';
import { Icon } from '../icon/Icon';
import { Layer } from '../layer/Layer';
import s from './OverLay.module.scss';

export const OverLay = defineComponent({
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        onClose: {
            type: Function as PropType<() => void>
        },
        data: {
            type: Array
        }
    },
    setup(props, context) {
        const { data } = props
        const closeLayer = () => {
            props.onClose?.()
        }
        console.log(data, 'data')
        return () => (
            <>
                <Layer visible={props.visible} onClick={closeLayer} />
                <div class={[s.overlay_wrapper, !props.visible ? s.overlay_wrapper_hide : '' ]}>
                    <div class={s.overlay_wrapper_head}>
                        <span class={s.overlay_wrapper_text1}>未登录用户</span>
                        <span class={s.overlay_wrapper_text2}>点击这里登录</span>
                    </div>
                    <main class={s.overlay_wrapper_main}>
                        {
                            data.value.map((item) => {
                                return (
                                    <div class={s.overlay_wrapper_main_item}>
                                        <Icon name={item.icon} width="32" height="32" />
                                        <span class={s.overlay_wrapper_main_item_text}>{item.text}</span>
                                    </div>
                                )
                            })
                        }
                    </main>
                </div>
            </>
        )
    }
})