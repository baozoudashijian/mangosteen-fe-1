import { defineComponent, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

export const App = defineComponent({
    setup() {
        const count = ref(0)
        const onClick = () => {
            count.value += 1
        }
        return () => (
            <>
                <header>导航</header>
                <div>
                    <ul>
                        <li>
                            <RouterLink to={'/foo'}>foo</RouterLink>
                        </li>
                        <li>
                            <RouterLink to={'/about'} >bar</RouterLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <RouterView />
                </div>
            </>

        )
    }
})