import { defineComponent } from 'vue';
import { Icon } from '../../components/icon/Icon';
import { MainLayout } from '../../layouts/MainLayout';
import { TagForm } from './TagForm';

export const TagCreate = defineComponent({
    setup(props, context) {

        return () => (
            <MainLayout>
                {{
                    text: () => '新建标签',
                    icon: () => <Icon name="left" width="50" height="37.5" fill="#fff" />,
                    default: () => {
                        return <TagForm />
                    }
                }}
            </MainLayout>
        )
    }
})