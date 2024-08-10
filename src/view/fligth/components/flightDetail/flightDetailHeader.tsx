import React from 'react'

export const FlightDetailHeader = ({origin,destination}) => {
  return (
    <div className='font-bold text-lg'>پرواز رفت {origin}-{destination}</div>
  )
}
