import { defineComponent } from 'vue';
import { Button } from '../../components/button/Button';
import { Icon } from '../../components/icon/Icon';
import { MainLayout } from '../../layouts/MainLayout';
import s from './TagCreate.module.scss';
export const TagCreate = defineComponent({
    setup(props, context) {
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
                                        <input class={[s.formItem, s.input, s.error]}></input>
                                    </div>
                                    <div class={s.formItem_errorHint}>
                                        <span>必填</span>
                                    </div>
                                </label>
                            </div>
                            <div class={s.formRow}>
                                <label class={s.formLabel}>
                                    <span class={s.formItem_name}>符号</span>
                                    <div class={s.formItem_value}>
                                        <div class={[s.formItem, s.emojiList, s.error]}>
                                            <nav>
                                                <span class={s.selected}>表情</span>
                                                <span>手势</span>
                                                <span>职业</span>
                                                <span>衣服</span>
                                                <span>动物</span>
                                                <span>自然</span>
                                                <span>食物</span>
                                                <span>运动</span>
                                                <span>表情</span>
                                                <span>手势</span>
                                                <span>职业</span>
                                                <span>衣服</span>
                                                <span>动物</span>
                                                <span>自然</span>
                                                <span>食物</span>
                                                <span>运动</span>
                                            </nav>
                                            <ol>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                                <li>😀</li>
                                            </ol>
                                        </div>
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