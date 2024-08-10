import React from 'react'

export const AirportNameAndCode = ({ AirportName, airportCode }) => {
    return (
        <div className='flex gap-1'>
            <span>{AirportName}</span>
            <span className='text-gray-primary'>({airportCode})</span>
        </div>
    )
}
