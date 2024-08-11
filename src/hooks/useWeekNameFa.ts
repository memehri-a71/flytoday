import moment from 'jalali-moment'


export const useWeekNameFa = ( date:string ) => {
    const day = moment(date).locale('fa').format('dddd')
    return day 
}
