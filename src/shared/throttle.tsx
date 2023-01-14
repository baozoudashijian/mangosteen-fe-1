
export const throttle = (fn: Function, time: number) => {
    let timer: null | number
    return () => {
        if(timer) {
            return
        } else {
            fn()
            timer = setTimeout(() => {
                timer = null
            }, time);
        }
    }
}