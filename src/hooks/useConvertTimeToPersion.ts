import moment from 'jalali-moment'

export const useConvertTimeToPersion = (timePerMin: number) => {
    const minutes = moment.duration(timePerMin, 'minutes')
    const hour = minutes.hours()
    const minute = minutes.minutes()

    return `${hour}ساعت و ${minute} دقیقه`
}
