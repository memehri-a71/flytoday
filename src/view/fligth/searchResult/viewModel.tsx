
import SearchResult from '../../../utile/data/searchResultData.json'
import { useTime } from '@/hooks/useTime'
import { useConvertTimeToPersion } from '@/hooks/useConvertTimeToPersion'

export const SearchResultViewModel = () => {
    const data = SearchResult
    const flightInfo = data?.pricedItineraries?.map(item => {
        return {
            originDestinationOptions: item.originDestinationOptions[0]?.flightSegments[0], //[]
            airItineraryPricingInfo: item?.airItineraryPricingInfo?.itinTotalFare, //{}
        }
    })

    const dataFlight = flightInfo?.map(({ originDestinationOptions, airItineraryPricingInfo }) => {
        const feature = {
            isCharter: originDestinationOptions?.isCharter,
            cabinClassNameFa: originDestinationOptions?.cabinClassNameFa,
            seatsRemaining: originDestinationOptions?.seatsRemaining,
            flightNumber: originDestinationOptions?.operatingAirline?.flightNumber,
            baggageFa: originDestinationOptions?.baggageFa,
            planeType: originDestinationOptions?.operatingAirline?.equipmentName,
            cabinClassCode: originDestinationOptions?.cabinClassCode,
            isReturn: originDestinationOptions?.isReturn
        }
        const timeInfo = {
            arrivalAirportLocationCode: originDestinationOptions?.arrivalAirportLocationCode,
            departureAirportLocationCode: originDestinationOptions?.departureAirportLocationCode,
            journeyDurationPerMinute: useConvertTimeToPersion(originDestinationOptions?.journeyDurationPerMinute),
            arrivalDateTime: useTime(originDestinationOptions?.arrivalDateTime),
            departureDateTime: useTime(originDestinationOptions?.departureDateTime),
        }
        const price = airItineraryPricingInfo?.totalFare

        return { feature, timeInfo, price }
    })



    return {
        data: dataFlight
    }
}
