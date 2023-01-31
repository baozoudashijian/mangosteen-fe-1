import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import s from './Items.module.scss';

export const Items = defineComponent({
    setup(props, context) {
        return () => (
            <div>
                <RouterView />
            </div>
        )
    }
})