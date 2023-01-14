import { ref } from 'vue'
import { useRouter } from 'vue-router'

export const useRouteDirection = () => {
    const routeDirection = ref('next')
    useRouter().afterEach((to, from) => {
        const toPath = to.path.split('/')
        const fromPath = from.path.split('/')
        const toPathIndex = toPath[toPath.length - 1]
        const fromPathIndex = fromPath[fromPath.length - 1]
        // console.log(toPathIndex, fromPathIndex, '123')
        routeDirection.value = fromPathIndex < toPathIndex ? 'next' : 'prev'
        console.log(routeDirection.value, '12121')
      })
      return { routeDirection }
}