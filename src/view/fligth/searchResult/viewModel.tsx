
import SearchResult from '../../../utile/data/flight-data.json'
import { useTime } from '@/hooks/useTime'
import { useConvertTimeToPersion } from '@/hooks/useConvertTimeToPersion'
import { useFindAirline } from '@/hooks/useFindAirline'

export const SearchResultViewModel = () => {
    const data = SearchResult
    const flightInfo = data?.pricedItineraries?.map(item => {
        return {
            originDestinationOptions: item.originDestinationOptions[0]?.flightSegments[0], //[]
            airItineraryPricingInfo: item?.airItineraryPricingInfo?.itinTotalFare, //{}
            airlineCode: item?.validatingAirlineCode,
            isSystem: item?.isSystem
        }
    })

    const dataFlight = flightInfo?.map(({ originDestinationOptions, airItineraryPricingInfo, airlineCode, isSystem }) => {
        const feature = {
            isCharter: originDestinationOptions?.isCharter,
            isSystem: isSystem,
            cabinClassNameFa: originDestinationOptions?.cabinClassNameFa,
            seatsRemaining: originDestinationOptions?.seatsRemaining,
            flightNumber: originDestinationOptions?.operatingAirline?.flightNumber,
            baggageFa: originDestinationOptions?.baggage,
            planeType: originDestinationOptions?.operatingAirline?.equipmentName || originDestinationOptions?.operatingAirline?.equipment,
            cabinClassCode: originDestinationOptions?.cabinClassCode,
            isReturn: originDestinationOptions?.isReturn,
        }
        const timeInfo = {
            arrivalAirportLocationCode: originDestinationOptions?.arrivalAirportLocationCode,
            departureAirportLocationCode: originDestinationOptions?.departureAirportLocationCode,
            journeyDurationPerMinute: useConvertTimeToPersion(originDestinationOptions?.journeyDurationPerMinute),
            arrivalDateTime: originDestinationOptions?.arrivalDateTime,
            departureDateTime: originDestinationOptions?.departureDateTime,
        }
        const airlineInfo = useFindAirline(airlineCode)
        const price = airItineraryPricingInfo?.totalFare

        return { feature, timeInfo, price, airlineInfo }
    })

    console.log(dataFlight);


    return {
        data: dataFlight
    }
}
