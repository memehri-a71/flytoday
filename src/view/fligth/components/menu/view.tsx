
import { CustomButton } from '@/components/elements/button/customButton'
import { CounterBoxView } from '../counterBox/view'
import { useState } from 'react'

export const CounterMenuView = ({ passengersInfo, handlePassengerNumber ,xHandler}) => {


    return (
        <div className='absolute top-10 text-black bg-white shadow-lg rounded-md p-4 w-72 z-50'>
            <div className='flex flex-col gap-4'>

                {passengersInfo?.map(item =>
                    <CounterBoxView
                        key={item.id}
                        passengersInfo={item}
                        xHandler={xHandler}
                    // quantity={quantity}
                    // setQuantity={setQuantity}
                    />
                )}
            </div>
            <CustomButton
                type='button'
                variant='contained'
                color='primary'
                onClick={handlePassengerNumber}
            >
                تایید
            </CustomButton>
        </div>
    )
}
