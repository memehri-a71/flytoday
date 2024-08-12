import React from 'react'

interface Props{
    AirportName :string
    airportCode :string
}
export const AirportNameAndCode = ({ AirportName, airportCode }:Props) => {
    return (
        <div className='flex sm:gap-1 text-sm overflow-hidden'>
            <p>{AirportName}</p>
            <p className='text-gray-primary'>({airportCode})</p>
        </div>
    )
}
