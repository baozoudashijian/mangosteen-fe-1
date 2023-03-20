export class Time {
    date: Date;
    constructor(date = new Date()) {
        this.date = date
    }
    format(pattern = 'YYYY-MM-DD') {
        const year = this.date.getFullYear()
        const month = this.date.getMonth() + 1
        const day = this.date.getDate()
        const hour = this.date.getHours()
        const minute = this.date.getMinutes()
        const second = this.date.getSeconds()
        const msecond = this.date.getMilliseconds()
        return pattern.replace(/YYYY/g, year.toString())
            .replace(/MM/, month.toString().padStart(2, '0'))
            .replace(/DD/, day.toString().padStart(2, '0'))
            .replace(/HH/, hour.toString().padStart(2, '0'))
            .replace(/mm/, minute.toString().padStart(2, '0'))
            .replace(/ss/, second.toString().padStart(2, '0'))
            .replace(/SSS/, msecond.toString().padStart(2, '0'))
    }
}