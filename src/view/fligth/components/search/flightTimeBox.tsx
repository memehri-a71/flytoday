
import React from 'react'

export const FlightTimeBox = ({ flightTime }) => {
  const { departureDateTime,
    departureAirportLocationCode,
    journeyDurationPerMinute,
    arrivalDateTime,
    arrivalAirportLocationCode } = flightTime

    
  return (
    <div className='grid grid-cols-4 col-span-4'>
      <div className='flex justify-center items-center col-span-1'>
        <p>ماهان</p>
      </div>
      <div className='flex justify-between items-center col-span-3 px-20'>
        <div>
          <p>{departureDateTime}</p>
          <p> ({departureAirportLocationCode})</p>
        </div>
        <div>

          <p className='border-b border-gray-300 px-4 py-1'>{journeyDurationPerMinute}</p>
        </div>
        <div>
          <p>{arrivalDateTime}</p>
          <p> ({arrivalAirportLocationCode})</p>
        </div>
      </div>
    </div>
  )
}
