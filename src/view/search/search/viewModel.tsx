import { useConvertTimeToPersion } from '@/hooks/useConvertTimeToPersion';
import { useFindAirline } from '@/hooks/useFindAirline';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export const useSearchViewModel = () => {
    const searchParams = useSearchParams();
    const category = searchParams.get('type');
    const [items, setItems] = useState([]);

    const fetchItems = async (category) => {
        const response = await fetch(`/api/search?type=${category}`);
        const data = await response.json();
        return data;
    };

    useEffect(() => {
        const getItems = async () => {
            const data = await fetchItems(category);
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
            setItems(dataFlight);
        };
        getItems();
    }, [category]);

    return { items }
}
