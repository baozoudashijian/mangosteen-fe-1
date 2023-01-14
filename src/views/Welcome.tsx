import { defineComponent, h, ref, Transition, VNode, watchEffect } from 'vue';
import { RouteLocationNormalizedLoaded, RouterView, useRoute, useRouter } from 'vue-router';
import s from './Welcome.module.scss'
import logo from '../assets/icons/logo.svg'
import { useSwipe } from '../hooks/useSwipe';
import { throttle } from '../shared/throttle';
const pushMap: Record<string, string> = {
    welcome1: 'welcome2',
    welcome2: 'welcome3',
    welcome3: 'welcome4',
    welcome4: 'start',
}

export const Welcome = defineComponent({
    setup() {
        const main = ref<HTMLElement | null>(null)
        const router = useRouter()
        const route = useRoute()
        const { direction, distance } = useSwipe(main, {
            beforeStart: (e) => e.preventDefault(),
            beforeEnd: () => {
                beforeEndPush()
            }
        })
        
        const push = throttle(() => {
            const name = (route.name || 'welcome1').toString()
            router.push({ name: pushMap[name] })
        }, 500)
        const beforeEndPush = () => {
            const distanceX = distance.value?.x || 0
            if(direction.value === "right" && distanceX > 100) {
                push()
            }
        }
        // watchEffect(() => {
            
        // })
        return () => (
            <div class={s.welcome}>
                <header>
                    <img src={logo} alt="123" />
                    <h1>山竹记账</h1>
                </header>
                <main ref={main}>
                    <RouterView name="main">
                        {({Component: Content, route: R} : {Component: VNode, route: RouteLocationNormalizedLoaded}) => 
                            <Transition 
                                enterFromClass={s.slide_fade_enter_from}
                                enterActiveClass={s.slide_fade_enter_active}
                                leaveToClass={s.slide_fade_leave_to}
                                leaveActiveClass={s.slide_fade_leave_active}>
                                {Content}
                            </Transition>
                        }    
                    </RouterView>
                </main>
                <div class={s.actions}><RouterView name="footer" /></div>
            </div>
        )
    }
})