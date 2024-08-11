
import { FlightDetails } from '../flightDetails'
import { SearchResultHeader } from './searchResultHeader'
import { SearchResultItem } from './searchResultItem'
import { useState } from 'react'

export const SearchResults = ({ data }) => {
    const [showMoreDetail, setShowMoreDetail] = useState({})

    return (
        <div className='flex flex-col gap-5'>
            <SearchResultHeader />
            {data?.map((item, index) =>
                <>
                    <SearchResultItem
                        key={index}
                        id={index}
                        flightTime={item?.timeInfo}
                        flightFeature={item?.feature}
                        totalPrice={item?.price}
                        airlineName={item?.airlineInfo?.nameFa}
                        setShowMoreDetail={setShowMoreDetail}
                        showMoreDetail={showMoreDetail}
                    />
                    <div
                        className={`overflow-hidden transition-all duration-1000 w-full ${showMoreDetail[index]
                            ? "opacity-100 translate-y-2 h-fit"
                            : "opacity-0 h-1"
                            }`}
                    >
                        <FlightDetails
                            flightFeature={item?.feature}
                            flightTime={item?.timeInfo}
                            airlineName={item?.airlineInfo?.nameFa}
                        />
                    </div>
                </>
            )}
        </div>
    )
}
