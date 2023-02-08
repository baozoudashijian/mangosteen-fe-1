import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import s from './Tag.module.scss';

export const Tag = defineComponent({
    setup(props, context) {
        return () => (
            <div>
                <RouterView />
            </div>
        )
    }
})