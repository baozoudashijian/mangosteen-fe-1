import { defineComponent, reactive, toRaw } from 'vue';
import { Button } from '../../components/button/Button';
import { EmojiSelect } from '../../components/emoji/EmojiSelect';
import { Icon } from '../../components/icon/Icon';
import { MainLayout } from '../../layouts/MainLayout';
import { Rules, validate } from '../../shared/validate';
import s from './TagCreate.module.scss';
export const TagCreate = defineComponent({
    setup(props, context) {
        const formData = reactive({
            name: '',
            sign: ''
        })
        const errors = reactive<{[k in keyof typeof formData]?: string[]}>({})
        const onSubmit = () => {
            const rules: Rules<typeof formData> = [
                {key: 'name', type: 'required', message: '必填'},
                {key: 'name', type: 'pattern', regex: /^.{1,4}$/, message: '只能填 1 到 4 个字符'},
                {key: 'sign', type: 'required', message: '必填'}
            ]
            Object.assign(errors, {
                name: undefined,
                sign: undefined
            })
            Object.assign(errors, validate(formData, rules))
            console.log(validate(formData, rules), 'errors')
        }
        return () => (
            <MainLayout>
                {{
                    text: () => '新建标签',
                    icon: () => <Icon name="left" width="50" height="37.5" fill="#fff" />,
                    default: () => {
                        return <form class={s.form} onSubmit={onSubmit}>
                            <div class={s.formRow}>
                                <label class={s.formLabel}>
                                    <span class={s.formItem_name}>标签名</span>
                                    <div class={s.formItem_value}>
                                        <input v-model={formData.name} class={[s.formItem, s.input, errors['name'] ? s.error : '']}></input>
                                    </div>
                                    <div class={s.formItem_errorHint}>
                                        <span>{errors['name'] ? errors['name']?.[0] : '　'}</span>
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
                                        <span>{errors['sign'] ? errors['sign']?.[0] : '　'}</span>
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