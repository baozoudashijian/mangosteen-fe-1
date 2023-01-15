import { defineComponent } from 'vue';
import s from './FloatButton.module.scss';

export const FloatButton = defineComponent({
    setup(props, context) {
        return () => (
            <div>
                {context.slots.default?.()}
            </div>
        )
    }
})