import moment from 'jalali-moment'


export const usePersionDate = (date: string) => {
    const dateFa = moment(date).locale('fa').format('DD MMMMYYYY')
    return dateFa
}
