import { defineComponent, PropType, Ref } from 'vue';
import { Icon } from '../icon/Icon';
import { Layer } from '../layer/Layer';
import s from './OverLay.module.scss';

export interface OverLayItem {
    icon: string;
    text: string;
}
export type OverLayList = Array<OverLayItem>
export const OverLay = defineComponent({
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        onClose: {
            type: Function as PropType<() => void>
        },
        list: {
            type: Array as PropType<OverLayList>,
            default: []
        }
    },
    setup(props, context) {
        const { list } = props
        const closeLayer = () => {
            props.onClose?.()
        }
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
                            list.map((item: OverLayItem) => {
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