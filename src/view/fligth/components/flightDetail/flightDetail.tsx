import React from 'react'
import { FlightDetailHeader } from './flightDetailHeader'
import { FlightTime } from './flightTime';
import { FlightDetailFeature } from './flightDetailFeature';

export const FlightDetail = ({ flightFeature, flightTime }) => {
    console.log(flightTime);

    return (
        <div className='h-72 p-9'>
            <FlightDetailHeader
                origin={flightTime?.arrivalAirportLocationCode}
                destination={flightTime?.departureAirportLocationCode}
            />
            <div className='flex gap-4'>
                <div className='flex items-center justify-center pl-8'>ماهان</div>
                <div className='flex flex-col gap-4 border-r-[3px] border-dotted border-gray-300'>
                    <FlightTime
                        city={flightTime?.departureAirportLocationCode}
                        time={flightTime?.departureDateTime}
                    />
                    <FlightDetailFeature flightFeature={flightFeature} flightTime={flightTime} />
                    <FlightTime
                        city={flightTime?.arrivalAirportLocationCode}
                        time={flightTime?.arrivalDateTime}
                    />
                </div>
            </div>
        </div>
    )
}
