import { ComputedRef } from "vue"
import { useRoute, useRouter } from "vue-router"
import { throttle } from "../shared/throttle"

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

type Distance = ComputedRef<{
    x: number;
    y: number;
} | undefined>
type Direction = ComputedRef<"left" | "" | "right" | "down" | "up">

export const useRoutePush = (distance: Distance, direction: Direction) => {
    const router = useRouter()
    const route = useRoute()
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
    return { beforeEndPush }
}