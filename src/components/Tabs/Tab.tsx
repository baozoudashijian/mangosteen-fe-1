import { defineComponent } from 'vue';

export const Tab = defineComponent({
    props: {
        name: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        }
    },
    setup(props, context) {
        return () => (
            <div>{context.slots.default?.()}</div>
        )
    }
})