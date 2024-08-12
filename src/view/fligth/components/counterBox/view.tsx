import { CounterButton } from '@/components/elements/button/counterButton'
import { CounterButtonView } from '@/components/elements/button/counterButton/view'
import { useState } from 'react'

export const CounterBoxView = (props) => {
    const {
        passengersInfo,
        value,
        incrementHandler,
        decrementHandler } = props

    return (

        <div className=' flex justify-between p-2'>
            <div className='flex flex-col gap-1'>
                <p>{passengersInfo.type}</p>
                <p className='text-xs'>{passengersInfo.description}</p>
            </div>
            <CounterButtonView
                value={value}
                incrementHandler={incrementHandler}
                decrementHandler={decrementHandler}
            />
        </div>

    )
}
