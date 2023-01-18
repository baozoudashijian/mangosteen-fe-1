import { defineComponent, h, ref, Transition, VNode } from 'vue';
import { RouteLocationNormalizedLoaded, RouterView, useRoute, useRouter } from 'vue-router';
import s from './Welcome.module.scss'
import { useSwipe } from '../../hooks/useSwipe';
import { useRouteDirection } from '../../hooks/useRouteDirection';
import { useRoutePush } from '../../hooks/useRoutePush';
import { Icon } from '../../components/icon/Icon';

export const Welcome = defineComponent({
    setup() {
        const main = ref<HTMLElement | null>(null)
        
        const { direction, distance } = useSwipe(main, {
            beforeStart: (e) => e.preventDefault(),
            beforeEnd: () => {
                beforeEndPush()
            }
        })
        const { routeDirection } = useRouteDirection()
        const { beforeEndPush } = useRoutePush(distance, direction)
    
        return () => (  
            <div class={s.welcome}>
                <header>
                    <Icon name="logo" width="64px" height="68px" />
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