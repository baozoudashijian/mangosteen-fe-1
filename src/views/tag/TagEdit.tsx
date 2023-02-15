import { defineComponent } from 'vue';
import { Button } from '../../components/button/Button';
import { Icon } from '../../components/icon/Icon';
import { MainLayout } from '../../layouts/MainLayout';
import { TagForm } from './TagForm';
import s from './TagForm.module.scss';

export const TagEdit = defineComponent({
    setup(props, context) {

        return () => (
            <MainLayout>
                {{
                    text: () => '标签详情',
                    icon: () => <Icon name="left" width="50" height="37.5" fill="#fff" />,
                    default: () => {
                        return <>
                            <TagForm />
                            <div class={s.actions}>
                                <Button level='error' onClick={() => {}}>删除标签</Button>
                            </div>
                        </>

                    }
                }}
            </MainLayout>
        )
    }
})