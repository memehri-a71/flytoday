
import jsonData from '../utile/data/flight-data.json'

export const useFindAirline = (name: string) => {
    const airlines = jsonData?.additionalData?.airlines
    const airlinesInfo = airlines?.filter(item => item?.iata == name)

    return airlinesInfo[0]
}
