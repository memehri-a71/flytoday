import { AirportNameAndCode, moment, useFindAirport, usePersionDate, useTime } from "../../imports"

export const FlightTime = ({ airport, time }) => {
    const datafa = usePersionDate(time)
    const dateEn = moment(time).format('DD MMM')

    return (
        <div className='flex relative'>
            <div className='flex max-sm:flex-col gap-2 sm:gap-5 text-sm px-5'>
                <div className='flex gap-5'>
                    <p className='font-bold'>{useTime(time)}</p>
                    <AirportNameAndCode AirportName={useFindAirport(airport)?.countryFa} airportCode={airport} />
                </div>
                <p>{datafa} ({dateEn})</p>
                <p className='text-gray-primary'>{useFindAirport(airport)?.name}</p>
            </div>
        </div>
    )
}
