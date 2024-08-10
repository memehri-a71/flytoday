import React, { useState } from 'react'
import { FlightTimeBox } from './flightTimeBox'
import { CustomButton } from '@/components/elements/button/customButton'
import { FlightFeatureBox } from './flightFeatureBox'
import { FlightDetailTab } from '../flightDetail'
import { useNumberFormat } from '@/hooks/useNumberFormat'

export const SearchResultItem = ({ flightTime, flightFeature, totalPrice,airlineName }) => {
    const [showMoreDetail, setShowMoreDetail] = useState(false)
    return (
        <div>
            <div className='p-4 bg-white'>
                <div className='grid grid-cols-5'>
                    <FlightTimeBox flightTime={flightTime} airlineName={airlineName}/>
                    <div className='flex flex-col items-center border-r border-gray-300 gap-2 col-span-1 p-4'>
                        <p>یک نفر</p>
                        <p>{useNumberFormat(totalPrice)} ریال</p>
                        <CustomButton type='button' variant='contained' isFullWidth >انتخاب بلیط</CustomButton>
                        <div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-5 border-t border-gray-300 pt-2'>
                    <div className='col-span-4'>
                        <FlightFeatureBox flightFeature={flightFeature} />
                    </div>
                    <div className='col-span-1 cursor-pointer' onClick={() => setShowMoreDetail(!showMoreDetail)}>
                        <p className='text-center text-orange-primary'>جزییات بیشتر</p>
                    </div>
                </div>
            </div>
            <div
                className={`overflow-hidden transition-all duration-1000 w-full ${showMoreDetail
                    ? "opacity-100 translate-y-2 h-fit"
                    : "opacity-0 h-1"
                    }`}
            >
                <FlightDetailTab flightFeature={flightFeature} flightTime={flightTime} airlineName={airlineName}/>
            </div>
        </div>
    )
}
