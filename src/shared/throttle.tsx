
export const throttle = (fn: Function, time: number) => {
    let timer: null | number
    return (...args: any[]) => {
        if(timer) {
            return
        } else {
            fn(...args)
            timer = setTimeout(() => {
                timer = null
            }, time);
        }
    }
}