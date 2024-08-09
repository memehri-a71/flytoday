import { CounterButton } from '@/components/elements/button/counterButton'
import { useState } from 'react'

export const CounterBoxView = ({ passengersInfo, xHandler }) => {
    const [quantity, setQuantity] = useState({
        id: passengersInfo.id,
        max: 100,
        min: 0,
        current: 0,
    })
    return (

        <div className=' flex justify-between p-2'>
            <div className='flex flex-col gap-1'>
                <p>{passengersInfo.type}</p>
                <p className='text-xs'>{passengersInfo.description}</p>
            </div>
            <CounterButton quantity={quantity} setQuantity={setQuantity} onChangeHandler={xHandler} />
        </div>

    )
}
