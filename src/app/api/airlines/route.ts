import jsonData from '../../../utile/data/flight-data.json'

export async function GET() {
    const airlines = jsonData?.additionalData?.airlines

    return new Response(JSON.stringify(airlines), {
        headers: { 'Content-Type': 'application/json' },
    });
}