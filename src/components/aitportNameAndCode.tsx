import React from 'react'

export const AirportNameAndCode = ({ AirportName, airportCode }) => {
    return (
        <div className='flex sm:gap-1 text-sm overflow-hidden'>
            <p>{AirportName}</p>
            <p className='text-gray-primary'>({airportCode})</p>
        </div>
    )
}
