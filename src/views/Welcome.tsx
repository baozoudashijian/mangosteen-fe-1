import { defineComponent, h, ref, Transition, VNode, watchEffect } from 'vue';
import { RouteLocationNormalizedLoaded, RouterView, useRoute, useRouter } from 'vue-router';
import s from './Welcome.module.scss'
import logo from '../assets/icons/logo.svg'
import { useSwipe } from '../hooks/useSwipe';
import { throttle } from '../shared/throttle';

export const Welcome = defineComponent({
    setup() {
        const main = ref<HTMLElement | null>(null)
        const router = useRouter()
        const route = useRoute()
        const { direction, swipping } = useSwipe(main, {
            beforeStart: (e) => e.preventDefault()
        })
        const pushMap: any = {
            welcome1: 'welcome2',
            welcome2: 'welcome3',
            welcome3: 'welcome4',
            welcome4: 'welcome1',
        }
        const push = throttle(() => {
            if(route.name === 'welcome1') {
                router.push('/welcome/2')
            } else if (route.name === 'welcome2') {
                router.push('/welcome/3')
            } else if (route.name === 'welcome3') {
                router.push('/welcome/4')
            }
        }, 500)
        watchEffect(() => {
            console.log(direction.value, 'direction')
            if(swipping.value && direction.value === "right") {
                push()
            }
        })
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