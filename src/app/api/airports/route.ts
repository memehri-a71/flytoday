import jsonData from '../../../utile/data/flight-data.json'

export async function GET() {
    const allItems = jsonData
    const airporsList = allItems?.additionalData?.airports

    return new Response(JSON.stringify(airporsList), {
        headers: { 'Content-Type': 'application/json' },
    });
}