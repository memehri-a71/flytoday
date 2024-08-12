import { FlightDetailFeature, FlightDetailHeader, FlightTime, useFindAirport } from "../../imports"

export const FlightDetailTab = ({ flightFeature, flightTime, airlineName, airportsInfo }) => {

    return (
        <div className='h-fit py-5 sm:px-9 px-4 text-xs'>
            <FlightDetailHeader
                origin={useFindAirport(airportsInfo?.arrivalAirportLocationCode)?.countryFa}
                destination={useFindAirport(airportsInfo?.departureAirportLocationCode)?.countryFa}
            />
            <div className='flex sm:gap-4 gap-2'>
                <div className='flex items-center justify-center pl-2'>{airlineName}</div>
                <div className='flex flex-col sm:gap-6 gap-8 border-r-[3px] border-dotted border-gray-300'>
                    <FlightTime
                        airport={airportsInfo?.departureAirportLocationCode}
                        time={flightTime?.departureDateTime}
                    />
                    <FlightDetailFeature flightFeature={flightFeature} flightTime={flightTime} />
                    <FlightTime
                        airport={airportsInfo?.arrivalAirportLocationCode}
                        time={flightTime?.arrivalDateTime}
                    />
                </div>
            </div>
        </div>
    )
}
