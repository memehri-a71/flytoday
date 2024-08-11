
import { FlightDetailHeader } from './flightDetailHeader'
import { FlightTime } from './flightTime';
import { FlightDetailFeature } from './flightDetailFeature';
import { useFindAirport } from '@/hooks/useFindAirport';

export const FlightDetailTab = ({ flightFeature, flightTime,airlineName }) => {
 
    return (
        <div className='h-72 py-5 px-9 text-xs'>
            <FlightDetailHeader
                origin={useFindAirport(flightTime?.arrivalAirportLocationCode)?.countryFa}
                destination={useFindAirport(flightTime?.departureAirportLocationCode)?.countryFa}
            />
            <div className='flex gap-4'>
                <div className='flex items-center justify-center pl-8'>{airlineName}</div>
                <div className='flex flex-col gap-6 border-r-[3px] border-dotted border-gray-300'>
                    <FlightTime
                        airport={flightTime?.departureAirportLocationCode}
                        time={flightTime?.departureDateTime}
                    />
                    <FlightDetailFeature flightFeature={flightFeature} flightTime={flightTime} />
                    <FlightTime
                        airport={flightTime?.arrivalAirportLocationCode}
                        time={flightTime?.arrivalDateTime}
                    />
                </div>
            </div>
        </div>
    )
}
