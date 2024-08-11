import React from 'react'

export const SearchResultFeatureBox = ({ flightFeature }) => {
    const { isCharter, cabinClassNameFa, seatsRemaining, flightNumber, isSystem } = flightFeature
    return (
        <div className='flex items-center sm:gap-5 gap-2 max-sm:text-xs max-sm:border-y max-sm:border-gray-200 py-3 w-full'>
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
