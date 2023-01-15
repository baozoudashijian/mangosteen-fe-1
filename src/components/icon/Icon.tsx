import { defineComponent } from 'vue';
export const Icon = defineComponent({
    props: ['name', 'width', 'height'],
    setup(props, context) {
        return () => (
            <svg style={{width: props.width, height: props.height}}>
                <use xlinkHref={`#${props.name}`}></use>
            </svg>
        )
    }
})