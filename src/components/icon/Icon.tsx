import { defineComponent } from 'vue';

export const Icon = defineComponent({
    props: ['name', 'width', 'height', 'onClick', 'fill'],
    setup(props, context) {
        return () => (
            <svg style={{width: props.width, height: props.height, fill: props.fill}} onClick={props.onClick}>
                <use xlinkHref={`#${props.name}`}></use>
            </svg>
        )
    }
})