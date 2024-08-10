import React from 'react'

export const FlightFeatureBox = ({ flightFeature }) => {
    const { isCharter, cabinClassNameFa, seatsRemaining, flightNumber, isSystem } = flightFeature
    return (
        <div className='flex items-center gap-5'>
            {isCharter
                ? <p className='bg-gray-200 rounded-md px-2 py-1'>چارتر</p>
                : isSystem
                    ? <p className='bg-gray-200 rounded-md px-2 py-1'>سیستمی</p>
                    : null}
            <p>{cabinClassNameFa}</p>
            {seatsRemaining > 0 ? <p> {seatsRemaining} صندلی خالی </p> : <p> ظرفیت تکمیل</p>}
            <p>شماره پرواز: {flightNumber}</p>
            <p></p>
        </div>
    )
}
