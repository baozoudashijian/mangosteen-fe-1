import { defineComponent } from 'vue';
import { Center } from '../center/Center';
import { Icon } from '../icon/Icon';
import s from './FloatButton.module.scss';

interface Props {
    onClick: (e: MouseEvent) => void
}
export const FloatButton = defineComponent<Props>({
    setup(props, context) {
        return () => (
            <Center class={s.floatButton}>
                <Icon name="plus" width="50%" height="50%" />
            </Center>
        )
    }
})