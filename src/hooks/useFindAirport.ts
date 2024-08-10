
import jsonData from '../utile/data/flight-data.json'

export const useFindAirport = (name: string) => {
    const airports = jsonData?.additionalData?.airports
    const airportInfo = airports?.filter(item => item?.iata == name)

    return airportInfo[0]
}
