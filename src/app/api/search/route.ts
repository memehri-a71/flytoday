import jsonData from '../../../utile/data/flight-data.json'

export async function GET(request) {
    const url = new URL(request.url);
    const type = url.searchParams.get('type');
    const departure = url.searchParams.get('departure');
    const arrival = url.searchParams.get('arrival');
    const departureDate = url.searchParams.get('departureDate');

    const allItems = jsonData.pricedItineraries

    let filteredItems = allItems;

    if (departure && arrival && departureDate) {
        filteredItems = filteredItems.filter(item =>
            item?.originDestinationOptions[0]?.flightSegments[0]?.departureDateTime === departureDate &&
            item?.originDestinationOptions[0]?.flightSegments[0]?.arrivalAirportLocationCode === arrival &&
            item?.originDestinationOptions[0]?.flightSegments[0]?.departureAirportLocationCode === departure
        );
    }
    return new Response(JSON.stringify(filteredItems), {
        headers: { 'Content-Type': 'application/json' },
    });
}