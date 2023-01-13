import { defineComponent, h, ref, Transition, VNode } from 'vue';
import { RouteLocationNormalizedLoaded, RouterView } from 'vue-router';
import s from './Welcome.module.scss'
import logo from '../assets/icons/logo.svg'
import { useSwipe } from '../hooks/useSwipe';

export const Welcome = defineComponent({
    setup() {
        const main = ref<HTMLElement | null>(null)
        useSwipe(main)
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