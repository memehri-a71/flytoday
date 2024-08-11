import React from 'react'

export const FlightDetailHeader = ({origin,destination}) => {
  return (
    <div className='font-bold text-lg pb-6'>پرواز رفت {destination} - {origin}</div>
  )
}
