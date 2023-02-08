import { defineComponent, reactive } from 'vue';
import { Button } from '../../components/button/Button';
import { EmojiSelect } from '../../components/emoji/EmojiSelect';
import { Icon } from '../../components/icon/Icon';
import { MainLayout } from '../../layouts/MainLayout';
import s from './TagCreate.module.scss';
export const TagCreate = defineComponent({
    setup(props, context) {
        const formData = reactive({
            name: '',
            sign: ''
        })
        return () => (
            <MainLayout>
                {{
                    text: () => '新建标签',
                    icon: () => <Icon name="left" width="50" height="37.5" fill="#fff" />,
                    default: () => {
                        return <form class={s.form}>
                            <div class={s.formRow}>
                                <label class={s.formLabel}>
                                    <span class={s.formItem_name}>标签名</span>
                                    <div class={s.formItem_value}>
                                        <input v-model={formData.name} class={[s.formItem, s.input, s.error]}></input>
                                    </div>
                                    <div class={s.formItem_errorHint}>
                                        <span>必填</span>
                                    </div>
                                </label>
                            </div>
                            <div class={s.formRow}>
                                <label class={s.formLabel}>
                                    <span class={s.formItem_name}>符号: {formData.sign}</span>
                                    <div class={s.formItem_value}>
                                        <EmojiSelect class={[s.formItem, s.emojiList, s.error]} v-model={formData.sign} />
                                    </div>
                                    <div class={s.formItem_errorHint}>
                                        <span>必填</span>
                                    </div>
                                </label>
                            </div>
                            <p class={s.tips}>记账时长按标签即可进行编辑</p>
                            <div class={s.formRow}>
                                <div class={s.formItem_value}>
                                    <Button class={[s.formItem, s.btn]}>确定</Button>
                                </div>
                            </div>
                        </form>
                    }
                }}
            </MainLayout>
        )
    }
})