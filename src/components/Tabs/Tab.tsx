// import { defineComponent } from 'vue';

// export const Tab = defineComponent({
//     props: {
//         name: {
//             type: String,
//             required: true
//         },
//         label: {
//             type: String,
//             required: true
//         }
//     },
//     setup(props, context) {
//         console.log(context, '123')
//         return () => (
//             <div>{context.slots.default?.()}</div>
//         )
//     }
// })
import { defineComponent } from 'vue';
import s from './Tabs.module.scss';
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