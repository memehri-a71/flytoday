import React, { useState } from 'react'
import { FlightTimeBox } from './flightTimeBox'
import { CustomButton } from '@/components/elements/button/customButton'
import { FlightFeatureBox } from './flightFeatureBox'
import { FlightDetailTab } from '../flightDetail'
import { useNumberFormat } from '@/hooks/useNumberFormat'

export const SearchResultItem = ({ flightTime, flightFeature, totalPrice, airlineName }) => {
    const [showMoreDetail, setShowMoreDetail] = useState(false)
    return (
        <div>
            <div className='pt-4 px-4 bg-white'>
                <div className='grid grid-cols-5'>
                    <FlightTimeBox flightTime={flightTime} airlineName={airlineName} />
                    <div className='max-sm:hidden flex flex-col items-center border-r border-gray-300 gap-2 col-span-1 py-4 pr-4' >
                        <div className='flex flex-col items-center gap-2'>
                            <p className='max-sm:text-xs text-gray-primary'>یک نفر</p>
                            <div className='flex gap-1'>
                                <span className='text-xl text-blue-primary font-bold'>{useNumberFormat(totalPrice)} </span>
                                <span>ریال </span>
                            </div>
                        </div>
                        <CustomButton type='button' variant='contained' isFullWidth >انتخاب بلیط</CustomButton>
                    </div>
                </div>
                <div className='grid grid-cols-5 sm:border-t sm:border-gray-300 pt-2'>
                    <div className='sm:col-span-4 col-span-5'>
                        <FlightFeatureBox flightFeature={flightFeature} />
                    </div>
                    <div className='col-span-1 cursor-pointer max-sm:hidden py-3' onClick={() => setShowMoreDetail(!showMoreDetail)}>
                        <p className='text-center text-orange-primary'>جزییات بیشتر</p>
                    </div>
                </div>
                <div className='sm:hidden flex justify-between pt-4' >
                    <div>
                        <p className='max-sm:text-xs text-gray-primary'>یک نفر</p>
                        <span className='text-xl text-blue-primary font-bold'>{useNumberFormat(totalPrice)} </span>
                        <span>ریال </span>
                    </div>
                    <CustomButton type='button' variant='contained' >جزئیات و انتخاب</CustomButton>
                </div>
            </div>
            <div
                className={`overflow-hidden transition-all duration-1000 w-full ${showMoreDetail
                    ? "opacity-100 translate-y-2 h-fit"
                    : "opacity-0 h-1"
                    }`}
            >
                <FlightDetailTab flightFeature={flightFeature} flightTime={flightTime} airlineName={airlineName} />
            </div>
        </div>
    )
}
