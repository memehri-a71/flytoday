import moment from 'jalali-moment'


export const useTime = ( date:string ) => {
    const time = moment(date).format("HH:mm")
    return time 
}
