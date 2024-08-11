import moment from 'jalali-moment';
import jsonData from '../../../utile/data/flight-data.json'

export async function GET(request) {
    const url = new URL(request.url);
    const allItems = jsonData.pricedItineraries

    const departure = url.searchParams.get('departure');
    const arrival = url.searchParams.get('arrival');
    const departureDate = url.searchParams.get('departureDate');

    console.log('departure', departure);

    let filteredItems = allItems;

    if (departure) {
        filteredItems = filteredItems.filter(item =>
            moment(item?.originDestinationOptions[0]?.flightSegments[0]?.departureDateTime).format('YYYY-MM-DD') == departureDate &&
            item?.originDestinationOptions[0]?.flightSegments[0]?.arrivalAirportLocationCode === arrival &&
            item?.originDestinationOptions[0]?.flightSegments[0]?.departureAirportLocationCode === departure
        );
    }

    return new Response(JSON.stringify(filteredItems), {
        headers: { 'Content-Type': 'application/json' },
    });
}