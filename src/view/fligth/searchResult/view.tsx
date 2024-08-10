

import { SearchResultHeader } from '../components/search/searchResultHeader'
import { SearchResultItem } from '../components/search/searchResultItem'

export const SearchResultView = ({ data }) => {

    return (
        <div className='flex flex-col gap-5'>
            <SearchResultHeader />
            {data?.map((item, index) =>
                <SearchResultItem
                    key={index}
                    flightTime={item?.timeInfo}
                    flightFeature={item?.feature}
                    totalPrice={item?.price}
                    airlineName={item?.airlineInfo?.nameFa}
                />
            )}

        </div>
    )
}
