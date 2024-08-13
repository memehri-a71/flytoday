
import {
    useState,
    useEffect,
    useSearchParams,
    useConvertTimeToPersion,
    useFindAirline
} from "../imports";


export const useSearchViewModel = () => {
    const [items, setItems] = useState<any[]>([]);
    const searchParams = useSearchParams();

    const departure = searchParams.get('departure');
    const arrival = searchParams.get('arrival');
    const departureDate = searchParams.get('departureDate');
    const sortField = searchParams.get('sortField')
    const sortOrder = searchParams.get('sortOrder')

    const fetchItems = async () => {
        const response = await fetch(`/api/search?${searchParams}`);
        const data = await response.json();
        return data;
    };

    const sortData = (data:any[], sortField:string, sortOrder = 'asc') => {
        const t = data.sort((a, b) => {
            if (a[sortField] < b[sortField]) return 1;
            if (a[sortField] > b[sortField]) return -1;
            return 0;
        });
        return sortOrder == 'asc' ? t.reverse() : t
    }

    useEffect(() => {
        const getItems = async () => {
            const data = await fetchItems();
            const flightInfo = data?.map((item:any) => {
                return {
                    originDestinationOptions: item.originDestinationOptions[0]?.flightSegments[0], //[]
                    airItineraryPricingInfo: item?.airItineraryPricingInfo?.itinTotalFare, //{}
                    airlineCode: item?.validatingAirlineCode,
                    isSystem: item?.isSystem
                }
            })
            const dataFlight = flightInfo?.map(({ originDestinationOptions, airItineraryPricingInfo, airlineCode, isSystem }:any) => {
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
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    journeyDurationPerMinute: useConvertTimeToPersion(originDestinationOptions?.journeyDurationPerMinute),
                    arrivalDateTime: originDestinationOptions?.arrivalDateTime,
                    departureDateTime: originDestinationOptions?.departureDateTime,
                }
                const airportsInfo = {
                    arrivalAirportLocationCode: originDestinationOptions?.arrivalAirportLocationCode,
                    departureAirportLocationCode: originDestinationOptions?.departureAirportLocationCode,
                }
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const airlineInfo = useFindAirline(airlineCode)
                const price = airItineraryPricingInfo?.totalFare
                const time = originDestinationOptions?.departureDateTime

                return { feature, timeInfo, price, airlineInfo, airportsInfo, time }
            })
            if (sortField && sortOrder) {
                const sortedData = sortData(dataFlight, sortField, sortOrder)
                setItems(sortedData);
            }
            setItems(dataFlight);
        };
        getItems();
    }, [arrival, departure, departureDate, searchParams, sortField, sortOrder]);

    return { items }
}
