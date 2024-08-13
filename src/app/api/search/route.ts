import moment from 'jalali-moment';
import jsonData from '../../../utile/data/flight-data.json'
import { NextRequest } from 'next/server';

export async function GET(request: Request | NextRequest) {
    const url = new URL(request.url);
    const allItems = jsonData.pricedItineraries

    const departure = url.searchParams.get('departure');
    const arrival = url.searchParams.get('arrival');
    const departureDate = url.searchParams.get('departureDate');
    const flightType = url.searchParams.get('flightType');
    const fligthClass = url.searchParams.get('fligthClass');
    const airlines = url.searchParams.get('airlines');
    const adult = url.searchParams.get('adult');
    const child = url.searchParams.get('child');
    const baby = url.searchParams.get('baby');

    const passengerNumber = [child, adult, baby]?.reduce((acc, cur) => {
        return acc + Number(cur)
    }, 0)


    let filteredItems = allItems;

    if (departure) {
        filteredItems = filteredItems.filter(item =>
            moment(item?.originDestinationOptions[0]?.flightSegments[0]?.departureDateTime).format('YYYY-MM-DD') == departureDate &&
            item?.originDestinationOptions[0]?.flightSegments[0]?.arrivalAirportLocationCode === arrival &&
            item?.originDestinationOptions[0]?.flightSegments[0]?.departureAirportLocationCode === departure
        );
    }

    if (flightType) {
        filteredItems = filteredItems.filter(item => {
            if (flightType == 'system') {
                return item?.isSystem == true
            }
            if (flightType == 'charter') {
                return item?.isCharter == true
            }
            return item
        })
    }

    if (fligthClass) {
        filteredItems = filteredItems.filter(item => {
            return item?.originDestinationOptions[0]?.flightSegments[0]?.resBookDesigCode == fligthClass
        })
    }

    if (airlines) {
        filteredItems = filteredItems.filter(item =>
            item?.validatingAirlineCode === airlines
        )
    }

    if (adult) {
        filteredItems = filteredItems.filter(item => {
            if (item?.originDestinationOptions[0]?.flightSegments[0]?.seatsRemaining) {
               return item?.originDestinationOptions[0]?.flightSegments[0]?.seatsRemaining >= passengerNumber
            }
        }
        )
    }

    return new Response(JSON.stringify(filteredItems), {
        headers: { 'Content-Type': 'application/json' },
    });
}