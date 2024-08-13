import { FilterSidebar, SearchResults } from "../imports"
import { AirportsInfoType, FeatureType } from '@/types/common'


interface Prop{
feature:FeatureType
airportsInfo:AirportsInfoType
airlineInfo:string
price:number
time:string
}

export const SearchView = ({ searchResultList }:any) => {
    return (
            <div className='sm:grid sm:grid-cols-12 gap-x-6 py-5'>
                <div className='lg:col-span-3 max-lg:hidden'>
                    <FilterSidebar />
                </div>
                <div className='flex flex-col lg:col-span-9 col-span-12 gap-3'>
                    <SearchResults data={searchResultList} />
                </div>
            </div>
    )
}
