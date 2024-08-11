import { useConvertTimeToPersion } from '@/hooks/useConvertTimeToPersion';
import { useFindAirline } from '@/hooks/useFindAirline';
import { useSearchParams } from 'next/navigation';
import  { useEffect, useState } from 'react'

export const useSearchViewModel = () => {
    const [items, setItems] = useState([]);

    const searchParams = useSearchParams();
    const departure = searchParams.get('departure');
    const arrival = searchParams.get('arrival');
    const departureDate = searchParams.get('departureDate');

    const fetchItems = async (departure, arrival, departureDate) => {
        const response = await fetch(`/api/search?arrival=${arrival}&departure=${departure}&departureDate=${departureDate}`);
        const data = await response.json();
        return data;
    };

    useEffect(() => {
        const getItems = async () => {
            const data = await fetchItems(departure, arrival, departureDate);
            const flightInfo = data?.map(item => {
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
                    journeyDurationPerMinute: useConvertTimeToPersion(originDestinationOptions?.journeyDurationPerMinute),
                    arrivalDateTime: originDestinationOptions?.arrivalDateTime,
                    departureDateTime: originDestinationOptions?.departureDateTime,
                }
                const airportsInfo = {
                    arrivalAirportLocationCode: originDestinationOptions?.arrivalAirportLocationCode,
                    departureAirportLocationCode: originDestinationOptions?.departureAirportLocationCode,
                }
                const airlineInfo = useFindAirline(airlineCode)
                const price = airItineraryPricingInfo?.totalFare

                return { feature, timeInfo, price, airlineInfo ,airportsInfo}
            })
            setItems(dataFlight);
        };
        getItems();
    }, [departure, arrival, departureDate]);

    return { items }
}
