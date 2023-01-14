import { defineComponent, h, ref, Transition, VNode } from 'vue';
import { RouteLocationNormalizedLoaded, RouterView, useRoute, useRouter } from 'vue-router';
import s from './Welcome.module.scss'
import logo from '../assets/icons/logo.svg'
import { useSwipe } from '../hooks/useSwipe';
import { throttle } from '../shared/throttle';
import { useRouteDirection } from '../hooks/useRouteDirection';
const pushMapNext: Record<string, string> = {
    welcome1: 'welcome2',
    welcome2: 'welcome3',
    welcome3: 'welcome4',
    welcome4: 'start',
}
const pushMapPrev: Record<string, string> = {
    welcome1: 'welcome1',
    welcome2: 'welcome1',
    welcome3: 'welcome2',
    welcome4: 'welcome3',
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
        
        const push = throttle((...args: any[]) => {
            const name = (route.name || 'welcome1').toString()
            if(args[0] === 'prev') {
                router.push({ name: pushMapPrev[name] })
            } else {
                router.push({ name: pushMapNext[name] })
            }
        }, 500)
        const beforeEndPush = () => {
            const distanceX = Math.abs(distance.value?.x || 0)
            if(distanceX > 100) {
                direction.value === 'left' ? push('prev') : push('next')
            }
        }
        const { routeDirection } = useRouteDirection()
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
                                enterFromClass={routeDirection.value === 'next' ? s.slide_fade_enter_from_next : s.slide_fade_enter_from_prev}
                                enterActiveClass={s.slide_fade_enter_active}
                                leaveToClass={routeDirection.value === 'next' ? s.slide_fade_leave_to_next : s.slide_fade_leave_to_prev}
                                leaveActiveClass={s.slide_fade_leave_active}
                            >
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