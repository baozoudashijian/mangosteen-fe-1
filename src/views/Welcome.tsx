import { defineComponent, h, Transition, VNode } from 'vue';
import { RouteLocationNormalizedLoaded, RouterView } from 'vue-router';
import s from './Welcome.module.scss'
import logo from '../assets/icons/logo.svg'

export const Welcome = defineComponent({
    setup() {
        return () => (
            <div class={s.welcome}>
                <header>
                    <img src={logo} alt="123" />
                    <h1>山竹记账</h1>
                </header>
                <main>
                    <RouterView name="main">
                        {({Component: X, route: R} : {Component: VNode, route: RouteLocationNormalizedLoaded}) => 
                            <Transition 
                                enterFromClass={s.slide_fade_enter_from}
                                enterActiveClass={s.slide_fade_enter_active}
                                leaveToClass={s.slide_fade_leave_to}
                                leaveActiveClass={s.slide_fade_leave_active}>
                                {X}
                            </Transition>
                        }    
                    </RouterView>
                </main>
                <div class={s.actions}><RouterView name="footer" /></div>
            </div>
        )
    }
})