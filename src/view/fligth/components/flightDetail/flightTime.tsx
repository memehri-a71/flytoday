import { CircleIcon } from '@/utile/icons/icon'
import React from 'react'

export const FlightTime = ({ city, time }) => {
    return (
        <div className='flex relative'>
            <CircleIcon className='absolute -right-3'/>
            <div className='flex gap-5 px-5'>
                <p>{time}</p>
                <p>{city}</p>
            </div>
        </div>
    )
}
