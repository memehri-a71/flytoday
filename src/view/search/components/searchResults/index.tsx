
'use client'
import { FlightDetails, SearchResultHeader, SearchResultItem, useState } from "../../imports"

export const SearchResults = ({ data }: any) => {
    const [showMoreDetail, setShowMoreDetail] = useState<Record<string, boolean>>({})

    return (
        <div className='flex flex-col gap-5'>
            <SearchResultHeader
                airportsInfo={data[0]?.airportsInfo}
                timeInfo={data[0]?.timeInfo}
                NumberOfّlights={data?.length}
            />
            {data?.map((item: any, index: number) =>
                <>
                    <SearchResultItem
                        key={index}
                        id={index}
                        flightTime={item?.timeInfo}
                        flightFeature={item?.feature}
                        totalPrice={item?.price}
                        airlineName={item?.airlineInfo?.nameFa}
                        airportsInfo={item?.airportsInfo}
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
                            airportsInfo={item?.airportsInfo}
                            totalPrice={item?.price}
                        />
                    </div>
                </>
            )}
        </div>
    )
}
