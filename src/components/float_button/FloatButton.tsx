import { defineComponent } from 'vue';
import { Icon } from '../icon/Icon';
import s from './FloatButton.module.scss';

interface Props {
    onClick: (e: MouseEvent) => void
}
export const FloatButton = defineComponent<Props>({
    setup(props, context) {
        return () => (
            <div class={s.floatButton}>
                <Icon name="plus" width="50%" height="50%" />
            </div>
        )
    }
})