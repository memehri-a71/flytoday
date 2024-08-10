import React from 'react'

export const FlightFeatureBox = ({ flightFeature }) => {
    const { isCharter, cabinClassNameFa, seatsRemaining, flightNumber } = flightFeature
    return (
        <div className='flex items-center gap-5'>
            {isCharter && <p className='bg-gray-200 rounded-md px-2 py-1'>چارتر</p>}
            <p>{cabinClassNameFa}</p>
            <p> {seatsRemaining} صندلی خالی </p>
            <p>شماره پرواز: {flightNumber}</p>
            <p></p>
        </div>
    )
}
